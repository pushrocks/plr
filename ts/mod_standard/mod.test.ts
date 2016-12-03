import * as q from 'q'

import { IPlrConfig } from '../plr.config'
import { plrOra } from '../plr.log'

import * as plugins from './mod.plugins'

export let run = (configArg: IPlrConfig) => {
    let done = q.defer<IPlrConfig>()
    plrOra.text('now testing the module')
    plrOra.stop()
    done.resolve(configArg)
    return done.promise
}
