import * as q from 'q'

import * as paths from '../plr.all.paths'
import { IPlrConfig } from '../plr.all.config'

import * as plugins from './plr.mod00.plugins'

export let run = (configArg: IPlrConfig) => {
    let done = q.defer()
    plugins.smartfile.fs.removeSync(paths.distWeb)
    done.resolve(configArg)
    return done.promise
}
