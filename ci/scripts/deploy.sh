#!/bin/bash

if [[ $CIRCLE_BRANCH = "develop" ]]; then
    git checkout gh-pages
fi