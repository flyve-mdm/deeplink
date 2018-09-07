#!/bin/bash

if [[ $CIRCLE_BRANCH = "develop" ]]; then
    defaultLocation="http:\/\/example.org\/"
    bugsnagApiKey=12345678
    deeplinkBase="yourApp:\/\/customRoute"
    androidDefaultLink="the route of your application in the marketplace"
    iosDefaultLink="the route of your application in the applestotre"

    mv ./site/config.example.js ./site/config.js 
    sed -i "s/$defaultLocation/$DEFAULT_LOCATION/g" ./site/config.js
    sed -i "s/$bugsnagApiKey/$BUGSNAG_API_KEY/g" ./site/config.js
    sed -i "s/$deeplinkBase/$DEEPLINK_BASE/g" ./site/config.js
    sed -i "s/$androidDefaultLink/$ANDROID_DEFAULT_LINK/g" ./site/config.js
    sed -i "s/$iosDefaultLink/$IOS_DEFAULT_LINK/g" ./site/config.js
    yarn deploy
fi