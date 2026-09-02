[CmdletBinding()]
param(
    [string]$MarketplaceRoot = (Join-Path $PSScriptRoot 'marketplace'),
    [switch]$Uninstall,
    [switch]$SelfTest
)

$ErrorActionPreference = 'Stop'
$PluginSelector = 'rohas-legal-ai@rohas-legal-windows'
$LegacyPluginSelector = 'rohas-legal-ai@rohas-legal'
$MarketplaceName = 'rohas-legal-windows'
$LogPath = Join-Path $PSScriptRoot 'install.log'

function Test-Payload {
    param([string]$Root)

    $marketplaceManifest = Join-Path $Root '.agents\plugins\marketplace.json'
    $pluginManifest = Join-Path $Root 'plugins\rohas-legal-ai\.codex-plugin\plugin.json'
    if (-not (Test-Path -LiteralPath $marketplaceManifest -PathType Leaf)) {
        throw "Marketplace manifest is missing: $marketplaceManifest"
    }
    if (-not (Test-Path -LiteralPath $pluginManifest -PathType Leaf)) {
        throw "Plugin manifest is missing: $pluginManifest"
    }

    $marketplace = Get-Content -LiteralPath $marketplaceManifest -Raw | ConvertFrom-Json
    $plugin = Get-Content -LiteralPath $pluginManifest -Raw | ConvertFrom-Json
    if ($marketplace.name -ne $MarketplaceName) {
        throw "Unexpected marketplace name '$($marketplace.name)'."
    }
    if ($plugin.name -ne 'rohas-legal-ai') {
        throw "Unexpected plugin name '$($plugin.name)'."
    }
}

function Find-CodexCommand {
    $candidates = [System.Collections.Generic.List[string]]::new()

    if ($env:ROHAS_CODEX_PATH) {
        $candidates.Add($env:ROHAS_CODEX_PATH)
    }

    foreach ($name in @('codex.exe', 'codex.cmd', 'codex')) {
        $command = Get-Command $name -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($command) {
            $candidates.Add($command.Source)
        }
    }

    foreach ($path in @(
        (Join-Path $env:LOCALAPPDATA 'Microsoft\WindowsApps\codex.exe'),
        (Join-Path $env:LOCALAPPDATA 'Microsoft\WindowsApps\codex.cmd'),
        (Join-Path $env:LOCALAPPDATA 'Programs\ChatGPT\resources\codex.exe'),
        (Join-Path $env:LOCALAPPDATA 'Programs\ChatGPT\Resources\codex.exe'),
        (Join-Path $env:LOCALAPPDATA 'Programs\Codex\resources\codex.exe'),
        (Join-Path $env:LOCALAPPDATA 'Programs\Codex\Resources\codex.exe')
    )) {
        $candidates.Add($path)
    }

    $appPackages = Get-AppxPackage -ErrorAction SilentlyContinue | Where-Object {
        $_.Name -match 'OpenAI|ChatGPT|Codex' -or $_.PackageFamilyName -match 'OpenAI|ChatGPT|Codex'
    }
    foreach ($package in $appPackages) {
        foreach ($relativePath in @(
            'codex.exe',
            'resources\codex.exe',
            'Resources\codex.exe',
            'app\resources\codex.exe',
            'app\Resources\codex.exe'
        )) {
            $candidates.Add((Join-Path $package.InstallLocation $relativePath))
        }
        Get-ChildItem -LiteralPath $package.InstallLocation -Filter 'codex.exe' -File -Recurse -ErrorAction SilentlyContinue |
            ForEach-Object { $candidates.Add($_.FullName) }
    }

    $extensionRoots = @(
        (Join-Path $env:USERPROFILE '.vscode\extensions'),
        (Join-Path $env:USERPROFILE '.vscode-insiders\extensions')
    )
    foreach ($extensionRoot in $extensionRoots) {
        if (Test-Path -LiteralPath $extensionRoot -PathType Container) {
            Get-ChildItem -LiteralPath $extensionRoot -Directory -Filter 'openai.chatgpt-*' -ErrorAction SilentlyContinue |
                Sort-Object Name -Descending |
                ForEach-Object {
                    $candidates.Add((Join-Path $_.FullName 'bin\windows-x86_64\codex.exe'))
                    $candidates.Add((Join-Path $_.FullName 'bin\windows-arm64\codex.exe'))
                }
        }
    }

    foreach ($candidate in $candidates) {
        if ($candidate -and (Test-Path -LiteralPath $candidate -PathType Leaf)) {
            return (Resolve-Path -LiteralPath $candidate).Path
        }
    }

    throw 'Codex was not found. Install or update the ChatGPT/Codex desktop app or the Codex CLI, then run this installer again.'
}

function Invoke-Codex {
    param(
        [string[]]$Arguments,
        [switch]$AllowFailure
    )

    Write-Host ("codex " + ($Arguments -join ' '))
    & $script:CodexCommand @Arguments
    $exitCode = $LASTEXITCODE
    if (($exitCode -ne 0) -and (-not $AllowFailure)) {
        throw "Codex exited with code $exitCode while running: codex $($Arguments -join ' ')"
    }
    return $exitCode
}

if ($SelfTest) {
    Test-Payload -Root $MarketplaceRoot
    Write-Host 'Installer payload is valid.'
    exit 0
}

try {
    Start-Transcript -LiteralPath $LogPath -Force | Out-Null
    $script:CodexCommand = Find-CodexCommand
    Write-Host "Using Codex command: $script:CodexCommand"
    & $script:CodexCommand --version
    if ($LASTEXITCODE -ne 0) {
        throw "The detected Codex command could not start: $script:CodexCommand"
    }

    if ($Uninstall) {
        Invoke-Codex -Arguments @('plugin', 'remove', $PluginSelector, '--json') -AllowFailure | Out-Null
        Invoke-Codex -Arguments @('plugin', 'marketplace', 'remove', $MarketplaceName, '--json') -AllowFailure | Out-Null
        Write-Host 'Rohas Legal AI was removed from Codex.'
        exit 0
    }

    Test-Payload -Root $MarketplaceRoot

    # Replace this installer registration, and migrate the same plugin if it was
    # previously installed from the Git marketplace. Keep that marketplace itself:
    # older releases may have installed other plugins from it.
    Invoke-Codex -Arguments @('plugin', 'remove', $PluginSelector, '--json') -AllowFailure | Out-Null
    Invoke-Codex -Arguments @('plugin', 'remove', $LegacyPluginSelector, '--json') -AllowFailure | Out-Null
    Invoke-Codex -Arguments @('plugin', 'marketplace', 'remove', $MarketplaceName, '--json') -AllowFailure | Out-Null
    Invoke-Codex -Arguments @('plugin', 'marketplace', 'add', $MarketplaceRoot, '--json') | Out-Null
    Invoke-Codex -Arguments @('plugin', 'add', $PluginSelector, '--json') | Out-Null

    Write-Host 'Installation complete. Restart ChatGPT/Codex to load Rohas Legal AI.'
    exit 0
}
catch {
    Write-Error $_
    exit 1
}
finally {
    try { Stop-Transcript | Out-Null } catch { }
}
