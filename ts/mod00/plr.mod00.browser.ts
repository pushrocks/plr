import * as q from 'q'

import * as paths from '../plr.all.paths'
import { IPlrConfig } from '../plr.all.config'

import * as plugins from './plr.mod00.plugins'

export let smartbrowserInst: plugins.smartbrowser.Smartbrowser

export let run = (configArg: IPlrConfig) => {
    let done = q.defer<IPlrConfig>()
    smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    })
    return done.promise
}
