import * as plugins from './plr.plugins'
import * as paths from './plr.paths'

export let smartbrowserInst: plugins.smartbrowser.Smartbrowser

export let run = () => {
    let done = plugins.q.defer()
    smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    })
}
