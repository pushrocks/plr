import * as q from 'q'

import paths = require('../plr.paths')
import { IPlrConfig } from '../plr.config'

import plugins = require('./mod.plugins')

export let run = function (configArg: IPlrConfig) {
    let done = q.defer()
    let config = configArg
    plugins.beautylog.ora.text(`now compiling TypeScript for Angular`)
    plugins.tsn.compileGlobStringObject(config.ts,config.tsOptions)
        .then(() => {
            plugins.beautylog.ok('compiled main TypeScript!')
            plugins.beautylog.log('now compiling tests!')
            return plugins.tsn.compileGlobStringObject(config.testTs,config.tsOptions)
        })
        .then(function () {
            plugins.beautylog.ok('compiled all TypeScript!')
            done.resolve(config)
        })
    return done.promise
}
