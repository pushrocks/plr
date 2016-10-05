import * as early from 'early'
early.start('plr')
import * as plugins from './plr.plugins'
import * as plrPromisechain from './plr.promisechain'

early.stop().then(() => {
    plugins.beautylog.figletSync('plr')
    plrPromisechain.run()
})


