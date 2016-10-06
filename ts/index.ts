import * as early from 'early'
early.start('plr')
import * as plugins from './plr.all.plugins'
let loaded = plugins // make sure things get loaded
import * as plrCli from './plr.all.cli'
early.stop().then(() => {
    plrCli.run()
})


