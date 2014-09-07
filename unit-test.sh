#!/bin/bash

sudo yum install -y wget
if [ ! -f epel-release-7-1.noarch.rpm ]
then
    wget http://mirror.sfo12.us.leaseweb.net/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
fi
sudo yum install -y epel-release-7-1.noarch.rpm || true
if [ ! -f google-chrome-stable_current_x86_64.rpm ]
then
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
fi
sudo yum install -y google-chrome-stable_current_x86_64.rpm
sudo yum -y install nodejs-grunt-cli npm xvfb
if [ ! -d /tmp/.X99-lock ]
then
    Xvfb :99 -ac -screen 0 1024x768x24 &
    export DISPLAY=:99
fi
npm install --save-dev karma
npm install grunt-karma --save-dev
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-html-reporter --save-dev
npm install
# npm install karma-ng-html2js-preprocessor --save-dev
grunt kar
