#!/bin/bash

echo "Build script"

# add the commands here
npm install
cd puhelinluettelo
npm install
cd ..
npm run build:ui