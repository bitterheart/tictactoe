#!/bin/bash

yum provides *bin/chrome
if [ ! -f google-chrome-stable_current_x86_64.rpm ]
then
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
fi
sudo yum install -y google-chrome-stable_current_x86_64.rpm
sudo yum install -y firefox
./node_modules/protractor/bin/webdriver-manager update --standalone
grunt pro --no-color
