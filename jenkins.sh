#!/bin/bash

ls
ls test/e2e/*-spec.js
./node_modules/protractor/bin/webdriver-manager update --standalone
grunt pro --no-color
