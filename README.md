# plr
build tool angular frontend projects

> in Alpha, focusing on Angular 2 for the moment

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/plr)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/plr)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/plr)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/plr/)

## Status for master
[![build status](https://gitlab.com/pushrocks/plr/badges/master/build.svg)](https://gitlab.com/pushrocks/plr/commits/master)
[![coverage report](https://gitlab.com/pushrocks/plr/badges/master/coverage.svg)](https://gitlab.com/pushrocks/plr/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/plr.svg)](https://david-dm.org/pushrocks/plr)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/plr/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/plr/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/plr/badges/code.svg)](https://www.bithound.io/github/pushrocks/plr)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Purpose

plr is meant for automating steps by convention during angular module creation, testing and maintanance.

It allows you to

* use and build npm dependencies for bigger projects
* simplyfies CI and CA testing
* bundle all dependencies of production
* forget about the root html entirely (it is all JS for you)
* serve your project during production
* use npmts for any backend parts

## Install
```shell
npm install plr --save-dev
```

## Usage
to use plr simply set the scripts test section in your pacakge.json to `(plr)`
You then configure plr by using a npmextra.json at the root of your project.

If you do not cinfigure anything at all, plr will work in default mode (which is great)

## Getting started