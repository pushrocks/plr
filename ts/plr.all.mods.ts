import * as q from 'q'
import { LazyModule } from 'smartsystem'

import * as plugins from './plr.all.plugins'

// Just Types
import * as _mod00 from './plr.mod00' // standardTask
import * as _mod01 from './plr.mod01' // installs Jspm dependencies

/**
 * mod00 is the standard Task!
 * It is respnsible for compiling and bundeling all assets
 */
export let mod00 = new LazyModule<typeof _mod00>('./plr.mod00.js',__dirname)

/**
 * mod01 installs dependencies into the dev directory
 */
export let mod01 = new LazyModule<typeof _mod01>('./plr.mod01.js',__dirname)
