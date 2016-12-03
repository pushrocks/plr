import * as q from 'q'

import { IPlrConfig } from '../plr.config'
import { plrOra } from '../plr.log'

import * as plugins from './mod.plugins'
import * as plrCompile from './mod.compile'
import * as plrClean from './mod.clean'
import * as plrBrowser from './mod.browser'
import * as plrTest from './mod.test'


export let run = (configArg: IPlrConfig): q.Promise<void> => {
    let done = q.defer<void>()
    plrOra.text('now running standard module')
    plrClean.run(configArg)
        .then(plrCompile.run)
        .then(plrTest.run)
        .then(plrBrowser.run)
        .then(() => {
            plrOra.endOk('Done!')
        }).catch(err => { console.log(err) })
    return done.promise
}
