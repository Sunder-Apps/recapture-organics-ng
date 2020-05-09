#!/bin/bash
ng build --prod --base-href=./
cp ./docs/index.html ./docs/404.html
rm -r ../recaptureorganics-cv/www
mkdir ../recaptureorganics-cv/www
cp ./docs/* ../recaptureorganics-cv/www
cd ../recaptureorganics-cv
cordova build --release ios
cordova build --release android
cd ../recaptureorganics-ng
ng build --prod --base-href=/
cp ./docs/index.html ./docs/404.html
echo www.recaptureorganics.com > ./docs/CNAME