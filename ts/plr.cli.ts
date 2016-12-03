import * as q from 'q'

import * as plugins from './plr.plugins'
import * as plrConfig from './plr.config'
import * as plrMods from './plr.mods'
import { plrOra } from './plr.log'

export let run = (): q.Promise<void> => {
    let done = q.defer<void>()
    let localCli = new plugins.smartcli.Smartcli()
    localCli.standardTask() // the standardTask
        .then(argvArg => { // get the config
            let done = q.defer<plrConfig.IPlrConfig>()
            plugins.beautylog.figletSync('plr')
            plrOra.start('Loading additional modules')
            plrConfig.run(argvArg).then(configArg => {
                done.resolve(configArg)
            })
            return done.promise
        })
        .then(configArg => { // load the standard module and execute it
            plrMods.modStandard.load()
                .then((modStandard) => {
                    modStandard.run(configArg)
                })
            done.resolve()
        }).catch(err => {
            if (err instanceof Error) {
                console.log(err)
            }
        })
    localCli.addCommand({ commandName: 'install' })
        .then(argvArg => {
            plrMods.modInstall.load()
                .then(modInstall => {
                    modInstall.run()
                })
        }).catch(err => {
            if (err instanceof Error) {
                console.log(err)
            }
        })
    localCli.addCommand({ commandName: 'serve' })
        .then().catch(err => {
            if (err instanceof Error) {
                console.log(err)
            }
        })
    localCli.startParse()
    return done.promise
}
