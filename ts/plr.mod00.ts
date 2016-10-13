import * as q from 'q'

import * as plrConfig from './plr.all.config'
import { plrOra } from './plr.all.log'

import * as plugins from './plr.mod00.plugins'
import * as plrCompile from './plr.mod00.compile'


export let run = (configArg: plrConfig.IPlrConfig): q.Promise<void> => {
    let done = q.defer<void>()
    plrOra.start()
    plrCompile.run(configArg)
        .then(() => {
            plrOra.endOk('Done!')
        }).catch(err => { console.log(err) })
    return done.promise
}
