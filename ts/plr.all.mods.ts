import * as q from 'q'
import { LazyModule } from 'smartsystem'

import * as plugins from './plr.all.plugins'

// Just Types
import * as _mod00 from './plr.mod00' // standardTask
import * as _mod01 from './plr.mod01' // installs Jspm dependencies

let mod00 = new LazyModule<typeof _mod00>('./plr.mod00.js',__dirname)
let mod01 = new LazyModule<typeof _mod01>('./plr.mod01.js',__dirname)
