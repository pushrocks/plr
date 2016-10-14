import * as q from 'q'

import { IPlrConfig } from '../plr.all.config'
import { plrOra } from '../plr.all.log'

import * as plugins from './plr.mod00.plugins'
import * as plrCompile from './plr.mod00.compile'
import * as plrClean from './plr.mod00.clean'
import * as plrBrowser from './plr.mod00.browser'
import * as plrTest from './plr.mod00.test'


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
