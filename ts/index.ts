import * as early from 'early'
early.start('plr')
import plugins = require('./plr.plugins')

early.stop().then(() => {
    plugins.beautylog.figletSync('plr')
})


