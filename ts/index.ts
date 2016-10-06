import * as early from 'early'
early.start('plr')
import * as plugins from './plr.plugins'
import * as plrCli from './plr.cli'
early.stop().then(() => {
    let loaded = plugins // makes sure that plugins get really loaded
    plrCli.run()
})


