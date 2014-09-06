#!/bin/bash

yum provides *bin/chrome
yum search chrome
yum provides *bin/firefox
yum search firefox
which firefox
./node_modules/protractor/bin/webdriver-manager update --standalone
grunt pro --no-color
