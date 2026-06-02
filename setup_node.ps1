# PowerShell script to download and configure a portable Node.js and NPM environment for building the website.

$ErrorActionPreference = "Stop"

# Paths
$workspaceDir = "F:\Coding\portfolio-main"
$nodeDistDir = Join-Path $workspaceDir ".node_dist"
$zipPath = Join-Path $workspaceDir "node.zip"

# Create dist folder if it doesn't exist
if (-not (Test-Path $nodeDistDir)) {
    New-Item -ItemType Directory -Path $nodeDistDir | Out-Null
}

$nodeFolder = Join-Path $nodeDistDir "node-v20.11.1-win-x64"
if (-not (Test-Path $nodeFolder)) {
    Write-Host "Node.js not found locally. Downloading portable Node.js..."
    $url = "https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip"
    
    # Download using WebClient for speed and progress visibility
    $webClient = New-Object System.Net.WebClient
    $webClient.DownloadFile($url, $zipPath)
    
    Write-Host "Download complete. Extracting archive..."
    Expand-Archive -Path $zipPath -DestinationPath $nodeDistDir
    
    Write-Host "Extraction complete. Cleaning up zip file..."
    Remove-Item -Path $zipPath -Force
} else {
    Write-Host "Node.js already exists locally."
}

# Define command wrapper contents
$nodeBinPath = Join-Path $nodeFolder "node.exe"
$npmCliPath = Join-Path $nodeFolder "node_modules\npm\bin\npm-cli.js"
$npxCliPath = Join-Path $nodeFolder "node_modules\npm\bin\npx-cli.js"

# Create run_node.bat
$nodeBatContent = @"
@echo off
setlocal
set PATH=$nodeFolder;%PATH%
"$nodeBinPath" %*
"@
$nodeBatContent | Out-File -FilePath (Join-Path $workspaceDir "run_node.bat") -Encoding ASCII -Force

# Create run_npm.bat
$npmBatContent = @"
@echo off
setlocal
set PATH=$nodeFolder;%PATH%
"$nodeBinPath" "$npmCliPath" %*
"@
$npmBatContent | Out-File -FilePath (Join-Path $workspaceDir "run_npm.bat") -Encoding ASCII -Force

# Create run_npx.bat
$npxBatContent = @"
@echo off
setlocal
set PATH=$nodeFolder;%PATH%
"$nodeBinPath" "$npxCliPath" %*
"@
$npxBatContent | Out-File -FilePath (Join-Path $workspaceDir "run_npx.bat") -Encoding ASCII -Force

Write-Host "--------------------------------------------------------"
Write-Host "Portable Node.js setup completed successfully!"
Write-Host "Wrapper scripts created at workspace root:"
Write-Host "  - run_node.bat  (invokes local node.exe)"
Write-Host "  - run_npm.bat   (invokes local npm)"
Write-Host "  - run_npx.bat   (invokes local npx)"
Write-Host "--------------------------------------------------------"
