#!/bin/bash

sudo yum install -y wget
if [ ! -f epel-release-7-1.noarch.rpm ]
then
    wget http://mirror.umd.edu/fedora/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
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
npm install phantomjs --save-dev
./node_modules/protractor/bin/webdriver-manager update --standalone
grunt pro --no-color
