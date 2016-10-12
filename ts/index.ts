import * as early from 'early'
early.start('plr')
import * as plrCli from './plr.all.cli'
early.stop().then(() => {
    plrCli.run()
})


