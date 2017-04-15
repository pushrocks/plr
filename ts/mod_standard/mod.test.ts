import * as q from 'q'

import { IPlrConfig } from '../plr.config'

import * as plugins from './mod.plugins'

export let run = (configArg: IPlrConfig) => {
    let done = q.defer<IPlrConfig>()
    plugins.beautylog.ora.text('now testing the module')
    plugins.beautylog.ora.stop()
    done.resolve(configArg)
    return done.promise
}
