#!/bin/bash

sudo yum install -y wget
if [ ! -f epel-release-7-1.noarch.rpm ]
then
    wget http://mirror.sfo12.us.leaseweb.net/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
fi
sudo yum install -y epel-release-7-1.noarch.rpm || true
sudo yum update -y
sudo yum -y install nodejs-grunt-cli npm xvfb
npm install
if [ ! -f google-chrome-stable_current_x86_64.rpm ]
then
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
fi
sudo yum install -y google-chrome-stable_current_x86_64.rpm
sudo yum install -y firefox
sudo yum install -y bzip2
npm install protractor-html-screenshot-reporter --save-dev
npm install phantomjs --save-dev
sudo yum install -y Xvfb
if [ ! -d /tmp/.X99-lock ]
then
    Xvfb :99 -ac -screen 0 1024x768x24 &
    export DISPLAY=:99
fi
./node_modules/protractor/bin/webdriver-manager update --standalone
grunt pro --no-color

