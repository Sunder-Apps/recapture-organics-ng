#!/bin/bash
if [ "$1" = "--apps" ]; then
    ng build --prod --base-href=./
    cp ./docs/index.html ./docs/404.html
    rm -r ../recapture-organics-cv/www
    mkdir ../recapture-organics-cv/www
    cp ./docs/* ../recapture-organics-cv/www
    cd ../recapture-organics-cv
    cordova build --release ios
    cordova build --release android
    cd ../recapture-organics-ng
fi

ng build --prod --base-href=/
cp ./docs/index.html ./docs/404.html
mkdir ./docs/shop
cp ./docs/index.html ./docs/shop/index.html
cp ./docs/404.html ./docs/shop/404.html
mkdir ./docs/learn
cp ./docs/index.html ./docs/learn/index.html
cp ./docs/404.html ./docs/learn/404.html
mkdir ./docs/about
cp ./docs/index.html ./docs/about/index.html
cp ./docs/404.html ./docs/about/404.html
mkdir ./docs/contact
cp ./docs/index.html ./docs/contact/index.html
cp ./docs/404.html ./docs/contact/404.html
mkdir ./docs/privacy-policy
cp ./docs/index.html ./docs/privacy-policy/index.html
cp ./docs/404.html ./docs/privacy-policy/404.html
mkdir ./docs/terms-and-conditions
cp ./docs/index.html ./docs/terms-and-conditions/index.html
cp ./docs/404.html ./docs/terms-and-conditions/404.html

echo www.recaptureorganics.com > ./docs/CNAME