import * as q from 'q'

import * as plugins from './plr.all.plugins'
import * as plrConfig from './plr.all.config'
import * as plrMods from './plr.all.mods'

export let run = (): q.Promise<void> => {
    let done = q.defer<void>()
    let localCli = new plugins.smartcli.Smartcli()
    localCli.standardTask() // the standardTask
        .then(argvArg => { // get the config
            plugins.beautylog.figletSync('plr')
            let done = q.defer<plrConfig.IPlrConfig>()
            plrConfig.run(argvArg).then(done.resolve)
            return done.promise
        })
        .then(configArg => { // load the standard module and execute it
            plrMods.mod00.load()
                .then((mod00) => {
                    mod00.run(configArg)
                })
            done.resolve()
        }).catch(err => { console.log(err) })
    localCli.startParse()
    return done.promise
}
