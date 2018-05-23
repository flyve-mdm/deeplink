#!/bin/bash

if [[ $CIRCLE_BRANCH = "develop" ]]; then
    yarn deploy
fi