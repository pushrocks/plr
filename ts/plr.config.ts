import * as plugins from './plr.plugins'
import * as paths from './plr.paths'

import { plrOra } from './plr.promisechain'

export interface IPlrConfig {
    ts: any,
    tsOptions: any
}

/**
 * evaluates the config for plr
 */
export let run = (): plugins.q.Promise<IPlrConfig> => {
    let done = plugins.q.defer<IPlrConfig>()
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
