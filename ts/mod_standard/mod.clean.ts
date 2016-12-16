import * as q from 'q'

import * as paths from '../plr.paths'
import { IPlrConfig } from '../plr.config'

import * as plugins from './mod.plugins'

export let run = (configArg: IPlrConfig) => {
    let done = q.defer()
    plugins.smartfile.fs.removeSync(paths.distWebApp)
    done.resolve(configArg)
    return done.promise
}
