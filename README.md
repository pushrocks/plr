# plr
build tool for polymer and angular

> in Alpha, focusing on Angular 2 for the moment

plr is meant for automating steps by convention during angular/polymer module creation, testing and maintanance.

It allows you to
* use SASS
* use TypeScript
* have your Polymer Elements written in seperate files while exporting a single module file.
* simplyfies CI and CA testing

## Install
```shell
npm install plr --save-dev
```

## Usage
to use plr simply set the scripts test section in your pacakge.json to `(plr)`

You then configure plr by using a plr.json at the root of your project.