import * as paths from './plr.all.paths'
import * as plugins from './plr.mod00.plugins'

export let smartbrowserInst: plugins.smartbrowser.Smartbrowser

export let run = () => {
    let done = plugins.q.defer()
    smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    })
}
