<#
.SYNOPSIS
    Build script for HA-BPMN-Manager assets.
.DESCRIPTION
    Compiles and minifies JavaScript and CSS assets for HA-BPMN-Manager.
    Detects local Node.js / npm, or falls back to Docker if Node is not installed.
#>

param(
    [switch]$Dev = $false
)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = Split-Path -Parent $ScriptDir
$AppDir = Join-Path $RootDir "app"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " HA-BPMN-Manager: Asset Build Tool" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check if npm is available locally
$hasNpm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $hasNpm -and (Test-Path "$env:LOCALAPPDATA\Programs\nodejs\npm.cmd")) {
    $env:Path = "$env:LOCALAPPDATA\Programs\nodejs;$env:Path"
    $hasNpm = Get-Command npm -ErrorAction SilentlyContinue
}

if ($hasNpm) {
    Write-Host "[INFO] Detected local npm: $($hasNpm.Source)" -ForegroundColor Green
    Set-Location $AppDir

    # Try standard build in app directory
    $needsTempBuild = $false
    try {
        if (-not (Test-Path "node_modules")) {
            Write-Host "[INFO] Installing dependencies (npm install)..." -ForegroundColor Yellow
            npm install
            if ($LASTEXITCODE -ne 0) {
                $needsTempBuild = $true
            }
        }
        if (-not $needsTempBuild) {
            if ($Dev) {
                Write-Host "[INFO] Starting development watch mode..." -ForegroundColor Yellow
                npm run dev
            } else {
                Write-Host "[INFO] Running production build..." -ForegroundColor Yellow
                npm run build
                if ($LASTEXITCODE -ne 0) {
                    $needsTempBuild = $true
                }
            }
        }
    } catch {
        $needsTempBuild = $true
    }

    # Cloud-drive fallback: if local drive locks files (e.g. Google Drive / OneDrive), build in TEMP
    if ($needsTempBuild) {
        Write-Host "[WARN] Build in project folder encountered drive locks (common on Google Drive / cloud drives)." -ForegroundColor Yellow
        Write-Host "[INFO] Running isolated build in local TEMP directory..." -ForegroundColor Yellow
        $tempBuildDir = Join-Path $env:TEMP "ha-bpmn-build"
        if (-not (Test-Path $tempBuildDir)) {
            New-Item -ItemType Directory -Path $tempBuildDir -Force | Out-Null
        }
        Copy-Item (Join-Path $AppDir "package.json") -Destination $tempBuildDir -Force
        Copy-Item (Join-Path $AppDir "webpack.config.js") -Destination $tempBuildDir -Force
        if (Test-Path (Join-Path $AppDir ".bpmnlintrc")) {
            Copy-Item (Join-Path $AppDir ".bpmnlintrc") -Destination $tempBuildDir -Force
        }
        Copy-Item (Join-Path $AppDir "src") -Destination $tempBuildDir -Recurse -Force

        Set-Location $tempBuildDir
        Write-Host "[INFO] Installing dependencies in temp directory..." -ForegroundColor Yellow
        npm install
        $outDir = Join-Path $tempBuildDir "dist"
        Write-Host "[INFO] Running Webpack in temp directory..." -ForegroundColor Yellow
        npx webpack --mode production --output-path $outDir

        # Copy build output back to plugin/assets
        $pluginAssets = Join-Path $RootDir "plugin\assets"
        Copy-Item (Join-Path $outDir "js\*") -Destination (Join-Path $pluginAssets "js") -Force
        Copy-Item (Join-Path $outDir "css\*") -Destination (Join-Path $pluginAssets "css") -Force
        if (Test-Path (Join-Path $outDir "fonts")) {
            Copy-Item (Join-Path $outDir "fonts\*") -Destination (Join-Path $pluginAssets "fonts") -Force
        }
    }
} else {
    # Check if Docker is available as fallback
    $hasDocker = Get-Command docker -ErrorAction SilentlyContinue

    if ($hasDocker) {
        Write-Host "[INFO] Local Node/npm not found. Using Docker fallback..." -ForegroundColor Yellow
        Set-Location $RootDir

        $mode = if ($Dev) { "npm run dev" } else { "npm run build" }
        docker run --rm -v "${PWD}:/workspace" -w /workspace/app node:20-alpine sh -c "npm install && $mode"
        if ($LASTEXITCODE -ne 0) {
            Write-Host "[ERROR] Docker build failed." -ForegroundColor Red
            exit $LASTEXITCODE
        }
    } else {
        Write-Host "[ERROR] Neither local Node.js/npm nor Docker is installed or available in PATH." -ForegroundColor Red
        Write-Host "Please install Node.js 18+ (https://nodejs.org) or Docker Desktop." -ForegroundColor Red
        exit 1
    }
}

Write-Host "[SUCCESS] Build completed. Output files generated in plugin/assets/" -ForegroundColor Green
Set-Location $RootDir
