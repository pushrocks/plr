import * as q from 'q'

import * as plugins from './plr.plugins'
import * as plrConfig from './plr.config'
import * as plrMods from './plr.mods'
import { plrOra } from './plr.log'

export let run = (): q.Promise<void> => {
    let done = q.defer<void>()
    let localCli = new plugins.smartcli.Smartcli()

    // Task Standard
    localCli.standardTask() // the standardTask
        .then(plrConfig.run)
        .then(configArg => { // load the standard module and execute it
            return plrMods.modStandard.load()
                .then((modStandard) => {
                    return modStandard.run(configArg)
                })
                .then(() => {
                    done.resolve()
                })
        }).catch(err => {
            if (err instanceof Error) {
                console.log(err)
            }
        })

    // Task Install
    localCli.addCommand({ commandName: 'install' })
        .then(plrConfig.run)
        .then(configArg => {
            return plrMods.modInstall.load()
                .then(modInstall => {
                    return modInstall.run()
                })
        }).catch(err => {
            if (err instanceof Error) {
                console.log(err)
            }
        })

    // Task Bundle
    localCli.addCommand({ commandName: 'bundle' })
        .then(plrConfig.run)
        .then(configArg => {
            return plrMods.modBundle.load().then(modBundle => {
                return modBundle.run()
            })
        })

    // Task Serve
    localCli.addCommand({ commandName: 'serve' })
        .then().catch(err => {
            if (err instanceof Error) {
                console.log(err)
            }
        })
    localCli.startParse()
    return done.promise
}
