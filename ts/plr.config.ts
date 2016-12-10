import * as q from 'q'

import * as paths from './plr.paths'
import * as plugins from './plr.plugins'
import { plrOra } from './plr.log'

export interface IPlrConfig {
    ts: any,
    tsOptions: any,
    testTs: any
}

/**
 * evaluates the config for plr
 */
export let run = (argvArg): q.Promise<IPlrConfig> => {
    let done = q.defer<IPlrConfig>()
    plrOra.text('evaluating npmextra.json')

    let defaultSettings: IPlrConfig = {
        ts: {
            './angular/**/*.ts': './distweb/app'
        },
        tsOptions: {

        },
        testTs: {
        }
    }

    let plrNpmextra = new plugins.npmextra.Npmextra(paths.cwd)
    let finalConfig = plrNpmextra.dataFor<IPlrConfig>('plr', defaultSettings)
    done.resolve(finalConfig)
    return done.promise
}
