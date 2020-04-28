#!/bin/bash
ng build --prod --base-href ./
cp ./docs/index.html ./docs/404.html
echo www.recaptureorganics.com > ./docs/CNAME
rm -r ../recapture-organics-cv/www
mkdir ../recapture-organics-cv/www
cp ./docs/* ../recapture-organics-cv/www
cd ../recapture-organics-cv
cordova build --release ios
cordova build --release android