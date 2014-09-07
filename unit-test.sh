#!/bin/bash

if [ -f epel-release-7-1.noarch.rpm ]
then
    wget http://mirror.sfo12.us.leaseweb.net/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
fi
npm install --save-dev karma
npm install karma-ng-html2js-preprocessor --save-dev
