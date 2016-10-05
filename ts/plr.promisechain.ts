import * as plugins from './plr.plugins'

import * as plrCompile from './plr.compile'
import * as plrConfig from './plr.config'

import { Ora } from 'beautylog'

export let plrOra = new Ora('starting PLR...','blue',true)

export let run = (): plugins.q.Promise<void> => {
    let done = plugins.q.defer<void>()
    plrConfig.run()
        .then(plrCompile.run)
        .then(() => {
            plrOra.endOk('Done!')
        }).catch(err => { console.log(err) })
    return done.promise
}
