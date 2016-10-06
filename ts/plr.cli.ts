import * as plugins from './plr.plugins'
import * as plrPromisechain from './plr.promisechain'

import * as q from 'q'

export let run = (): q.Promise<void> => {
    let done = q.defer<void>()
    let localCli = new plugins.smartcli.Smartcli()
    localCli.standardTask().then((argvArg) => {
        plugins.beautylog.figletSync('plr')
        plrPromisechain.run()
    })
    localCli.startParse()
    return done.promise
}
