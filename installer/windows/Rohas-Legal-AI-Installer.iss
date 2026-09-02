#ifndef MyAppVersion
  #define MyAppVersion "1.0.0"
#endif

#define MyAppName "Rohas Legal AI"
#define MyAppPublisher "Rohas Nagpal"
#define MyAppURL "https://www.rohasnagpal.com/legal-ai-skills.php"
#define MarketplaceRoot AddBackslash(SourcePath) + "..\.."

[Setup]
AppId={{6D29BE8D-356B-45CF-8E85-61EC6CD61A24}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL=https://github.com/rohasnagpal/legal-ai-skills/issues
AppUpdatesURL=https://github.com/rohasnagpal/legal-ai-skills/releases/latest
DefaultDirName={localappdata}\Rohas Legal AI
DisableDirPage=yes
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
OutputDir={#MarketplaceRoot}\dist
OutputBaseFilename=Rohas-Legal-AI-Installer
Compression=lzma2/max
SolidCompression=yes
WizardStyle=modern
LicenseFile={#MarketplaceRoot}\LICENSE
UninstallDisplayName={#MyAppName}
VersionInfoVersion={#MyAppVersion}
VersionInfoCompany={#MyAppPublisher}
VersionInfoDescription=Installer for the Rohas Legal AI Codex plugin
VersionInfoProductName={#MyAppName}
VersionInfoProductVersion={#MyAppVersion}
CloseApplications=no

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[InstallDelete]
Type: filesandordirs; Name: "{app}\marketplace\plugins\rohas-legal-ai"

[Files]
Source: "{#SourcePath}\marketplace.json"; DestDir: "{app}\marketplace\.agents\plugins"; Flags: ignoreversion
Source: "{#MarketplaceRoot}\plugins\rohas-legal-ai\*"; DestDir: "{app}\marketplace\plugins\rohas-legal-ai"; Excludes: ".DS_Store"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#SourcePath}\install-plugin.ps1"; DestDir: "{app}"; Flags: ignoreversion

[UninstallRun]
Filename: "{sys}\WindowsPowerShell\v1.0\powershell.exe"; Parameters: "-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File ""{app}\install-plugin.ps1"" -Uninstall"; Flags: runhidden waituntilterminated skipifdoesntexist

[UninstallDelete]
Type: files; Name: "{app}\install.log"

[Code]
procedure CurStepChanged(CurStep: TSetupStep);
var
  ResultCode: Integer;
  PowerShellPath: String;
  ScriptPath: String;
begin
  if CurStep = ssPostInstall then
  begin
    WizardForm.StatusLabel.Caption := 'Registering the plugin with Codex...';
    PowerShellPath := ExpandConstant('{sys}\WindowsPowerShell\v1.0\powershell.exe');
    ScriptPath := ExpandConstant('{app}\install-plugin.ps1');

    if (not Exec(PowerShellPath,
      '-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "' + ScriptPath + '"',
      '', SW_HIDE, ewWaitUntilTerminated, ResultCode)) or (ResultCode <> 0) then
    begin
      MsgBox(
        'Rohas Legal AI could not be registered with Codex.' + #13#10 + #13#10 +
        'Make sure the current ChatGPT/Codex desktop app or Codex CLI is installed, then run setup again.' + #13#10 + #13#10 +
        'Diagnostic log: ' + ExpandConstant('{app}\install.log'),
        mbError, MB_OK);
      RaiseException('Codex plugin registration failed.');
    end;
  end;
end;
