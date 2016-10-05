# plr
build tool angular frontend projects

> in Alpha, focusing on Angular 2 for the moment

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

# Getting started