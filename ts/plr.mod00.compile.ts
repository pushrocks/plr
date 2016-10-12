import * as q from 'q'

import paths = require('./plr.all.paths')
import { plrOra } from './plr.all.log'

import plugins = require('./plr.mod00.plugins')

export let run = function (configArg) {
    let done = q.defer()
    let config = configArg
    plrOra.text(`now compiling TypeScript for Angular`)
    plugins.tsn.compileGlobStringObject(config.ts,config.tsOptions)
        .then(() => {
            plugins.beautylog.ok('compiled main TypeScript!')
            plugins.beautylog.log('now compiling tests!')
            return plugins.tsn.compileGlobStringObject(config.testTs)
        })
        .then(function () {
            plugins.beautylog.ok('compiled all TypeScript!')
            done.resolve(config)
        })
    return done.promise
}
