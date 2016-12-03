import * as q from 'q'

import * as paths from '../plr.paths'
import { IPlrConfig } from '../plr.config'

import * as plugins from './mod.plugins'

export let smartbrowserInst: plugins.smartbrowser.Smartbrowser

export let run = (configArg: IPlrConfig) => {
    let done = q.defer<IPlrConfig>()
    smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    })
    return done.promise
}
