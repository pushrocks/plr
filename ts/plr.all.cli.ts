import * as q from 'q'

import * as plugins from './plr.all.plugins'
import * as plrMods from './plr.all.mods'

export let run = (): q.Promise<void> => {
    let done = q.defer<void>()
    let localCli = new plugins.smartcli.Smartcli()
    localCli.standardTask().then((argvArg) => {
        plugins.beautylog.figletSync('plr')
        plrMods.run()
        done.resolve()
    })
    localCli.startParse()
    return done.promise
}
