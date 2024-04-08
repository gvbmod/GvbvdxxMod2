@echo off
title Doing upload and building tasks.
echo Uploading main source code.
start upload.sh
echo Building GUI and uploading page.
start scratch-gui/build-then-upload.sh
TIMEOUT /T 5 /nobreak
