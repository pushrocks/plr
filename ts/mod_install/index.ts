import * as q from 'q'
import { SmartJspm } from 'smartjspm'

import * as plugins from './mod.plugins'
import * as paths from '../plr.paths'

export let run = () => {
    let done = q.defer<SmartJspm>()
    let localSmartjspm = new SmartJspm({
        npmDevDir: paths.cwd,
        targetDir: plugins.path.join(paths.cwd, 'plr_build/')
    })
    localSmartjspm.readNpmextraJspmDependencies(plugins.path.join(paths.cwd))
    plugins.beautylog.info('Now installing dependencies for npm development dir')
    localSmartjspm.installNpmDevDir()
    plugins.beautylog.info('Now installing dependencies for web target dir with jspm')
    localSmartjspm.installJspmTarget()
    done.resolve(localSmartjspm)
    return done.promise
}
