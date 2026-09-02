# Windows installer

The Inno Setup project builds `Rohas-Legal-AI-Installer.exe`. The complete plugin is embedded in the installer, so the user's computer does not need Git and setup does not need to download the repository.

Setup installs a local marketplace named `rohas-legal-windows` under `%LOCALAPPDATA%\Rohas Legal AI` and uses Codex's own `plugin marketplace add` and `plugin add` commands to register it. It deliberately does not edit `%USERPROFILE%\.codex\config.toml` directly.

If the same plugin was previously installed from the Git marketplace, setup removes that plugin registration before installing the bundled copy. It leaves the Git marketplace itself intact because older versions may contain other plugins.

## Publishing a release

1. Update `version` in `plugins/rohas-legal-ai/.codex-plugin/plugin.json`.
2. Commit and push the change.
3. Create and push the matching tag, for example `v1.0.1`.
4. `.github/workflows/windows-installer-release.yml` builds the EXE on a Windows runner and attaches the EXE, per-skill ZIPs, and `SHA256SUMS.txt` to the GitHub release.

Every push to `main` also builds a downloadable workflow artifact, so installer compilation is continuously tested. Tagged builds are additionally published as GitHub releases. The workflow rejects a tag whose version does not match the plugin manifest.

## Code signing

Unsigned builds work, but Windows may display an **Unknown publisher** or SmartScreen warning. To sign release builds, add these GitHub Actions repository secrets:

- `WINDOWS_CODE_SIGNING_CERTIFICATE_BASE64`: the Base64-encoded PFX certificate
- `WINDOWS_CODE_SIGNING_CERTIFICATE_PASSWORD`: the PFX password

When both are configured, the release workflow signs and timestamps the EXE before calculating its checksum.

## Local build on Windows

Install Inno Setup 6, then run:

```powershell
ISCC.exe /DMyAppVersion=1.0.1 installer\windows\Rohas-Legal-AI-Installer.iss
```

The output is written to `dist\Rohas-Legal-AI-Installer.exe`.
