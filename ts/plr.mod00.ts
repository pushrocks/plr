import * as plrConfig from './plr.all.config'

import * as plugins from './plr.mod00.plugins'
import * as plrCompile from './plr.mod00.compile'

import { plrOra } from './plr.all.log'

export let run = (configArg: plrConfig.IPlrConfig): plugins.q.Promise<void> => {
    let done = plugins.q.defer<void>()
    plrOra.start()
    plrCompile.run(configArg)
        .then(() => {
            plrOra.endOk('Done!')
        }).catch(err => { console.log(err) })
    return done.promise
}
