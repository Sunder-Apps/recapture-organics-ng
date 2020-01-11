#!/bin/bash
ng build --prod
cp ./docs/index.html ./docs/404.html
echo recaptureorganics.com > ./docs/CNAME