import * as q from 'q'

import { IPlrConfig } from '../plr.all.config'
import { plrOra } from '../plr.all.log'

import * as plugins from './plr.mod00.plugins'

export let run = (configArg: IPlrConfig) => {
    let done = q.defer<IPlrConfig>()
    plrOra.text('now testing the module')
    plrOra.stop()
    done.resolve(configArg)
    return done.promise
}
