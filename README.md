# Deeplink

![Flyve MDM banner](https://user-images.githubusercontent.com/663460/26935464-54267e9c-4c6c-11e7-86df-8cfa6658133e.png)

[![License](https://img.shields.io/github/license/flyve-mdm/deeplink.svg?&label=License)](https://github.com/flyve-mdm/deeplink/blob/develop/LICENSE.md)
[![Follow twitter](https://img.shields.io/twitter/follow/FlyveMDM.svg?style=social&label=Twitter&style=flat-square)](https://twitter.com/FlyveMDM)
[![Project Status: Active](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![Telegram Group](https://img.shields.io/badge/Telegram-Group-blue.svg)](https://t.me/flyvemdm)
[![IRC Chat](https://img.shields.io/badge/IRC-%23flyvemdm-green.svg)](http://webchat.freenode.net/?channels=flyve-mdm)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Flyve MDM is a mobile device management software that enables you to secure and manage all the mobile devices of your business via a unique web-based console (MDM).

To get started, check out [Flyve MDM website](https://flyve-mdm.com/)!

## Table of Contents

* [Synopsis](#synopsis)
* [Installation](#installation)
* [Versioning](#versioning)
* [Contact](#contact)
* [Professional Services](#professional-services)
* [Contribute](#contribute)
* [Copying](#copying)

## Synopsis

Web site to resolve flyve:// deeplinks

The project consist in static html files to display the information for enrollment, the most important folder is site.

### Information display

The deeplink features three ways to display the information to execute the enrollment.

#### Email account

When the invitation is opened from the email account of the user, in the respective device to enroll, the email will display the deeplink with the information of the invitation encoded. Also the QR code image is attached.

After opening the link the MDM Agent will recognize it and start the enrollment.

#### QR code display

The deeplink can also be opened in a computer's browser, in this case the deeplink will decode part of the information and display the Helpdesk information and the QR code, so the user can scan it from the MDM Agent and make the enrollment.

#### Mobile device browser

In case the invitation is opened with the browser of the device, it will display a button that contains the deeplink so the MDM Agent can recognize it and start the enrollment.

### Redirect to the Play Store

If the App isn't installed, the deeplink will redirect to the Play Store to download the MDM Agent in order to proceed with the enrollment.

## Installation

To host your own instance of Flyve MDM Deeplink microservice, just follow these steps:

1. Clone the project in your server directory
2. Add your settings in the ```site/config.example.js file```, then rename it to ```site/config.js```
    * **defaultLocation**: the address to redirect in case there is no data to process by the deeplink
    * **bugsnagApiKey**: optional, the apikey to your bugsnag
    * **deeplinkBase**: the customroute for your app, for example: ```flyve://register```
    * **androidDefaultLink**: the route of your application in the market place
    * **iosDefaultLink**: the route of your application in the apple store
3. Add your deeplink route in Flyve MDM settings in GLPI
    * Go to Flyve MDM > General configuration > Invitation deeplink
    * Write ```http://my-site/deeplink/site/```

## Versioning

In order to provide transparency on our release cycle and to maintain backward compatibility, Flyve MDM is maintained under [the Semantic Versioning guidelines](http://semver.org/). We are committed to following and complying with the rules, the best we can.

Release announcement posts on [the official Teclib' blog](http://www.teclib-edition.com/en/communities/blog-posts/) contain summaries of the most noteworthy changes made in each release.

## Contact

For notices about major changes and general discussion of Flyve MDM development, subscribe to the [/r/FlyveMDM](http://www.reddit.com/r/FlyveMDM) subreddit.
You can also chat with us via IRC in [#flyve-mdm on freenode](http://webchat.freenode.net/?channels=flyve-mdm) or [@flyvemdm on Telegram](https://t.me/flyvemdm).

## Professional Services

The Flyve MDM and GLPI Network services are available through our [Partner's Network](http://www.teclib-edition.com/en/partners/). We provide special training, bug fixes with editor subscription, contributions for new features, and more.

Obtain a personalized service experience, associated with benefits and opportunities.

## Contribute

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our
guidelines for [contributing](./CONTRIBUTING.md) and then check out one of our issues in the [Issues Dashboard](https://github.com/flyve-mdm/deeplink/issues).

## Copying

* **Name**: [Flyve MDM](https://flyve-mdm.com/) is a registered trademark of [Teclib'](http://www.teclib-edition.com/en/).
* **Code**: you can redistribute it and/or modify
    it under the terms of the GNU General Public License ([GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)).
* **Documentation**: released under Attribution 4.0 International ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).
