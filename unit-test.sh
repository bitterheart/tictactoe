#!/bin/bash

if [ -f epel-release-7-1.noarch.rpm ]
then
    wget http://mirror.sfo12.us.leaseweb.net/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
fi
if [ ! -f google-chrome-stable_current_x86_64.rpm ]
then
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
fi
sudo yum install -y google-chrome-stable_current_x86_64.rpm
sudo yum install -y Xvfb
if [ ! -d /tmp/.X99-lock ]
then
    Xvfb :99 -ac -screen 0 1024x768x24 &
    export DISPLAY=:99
fi
npm install --save-dev karma
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev
npm install
# npm install karma-ng-html2js-preprocessor --save-dev
./node_modules/karma/bin/karma start karma.conf.js
