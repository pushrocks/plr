import * as paths from './plr.all.paths'
import * as plugins from './plr.all.plugins'
import { plrOra } from './plr.all.log'

import * as q from 'q'

export interface IPlrConfig {
    ts: any,
    tsOptions: any
}

/**
 * evaluates the config for plr
 */
export let run = (): q.Promise<IPlrConfig> => {
    let done = q.defer<IPlrConfig>()
    plrOra.text('evaluating npmextra.json')

    let defaultSettings: IPlrConfig = {
        ts: {
            './angular/**/*.ts': './distweb/app'
        },
        tsOptions: {

        }
    }

    let plrNpmextra = new plugins.npmextra.Npmextra(paths.cwd)
    let finalConfig = plrNpmextra.dataFor<IPlrConfig>('plr', defaultSettings)
    done.resolve(finalConfig)
    return done.promise
}
