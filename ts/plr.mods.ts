import * as q from 'q'
import { LazyModule } from 'smartsystem'

import * as plugins from './plr.plugins'

// Just Types
import * as _modStandard from './mod_standard/index' // standardTask
import * as _modInstall from './mod_install/index' // installTask 
import * as _modBundle from './mod_bundle/index' // installs Jspm dependencies

/**
 * modStandard is the standard Task!
 * It is respnsible for compiling and bundeling all assets
 */
export let modStandard = new LazyModule<typeof _modStandard>('./mod_standard/index',__dirname)

/**
 * modInstall installs dependencies
 */
export let modInstall = new LazyModule<typeof _modInstall>('./mod_install/index',__dirname)

/**
 * modBundle installs dependencies into the dev directory
 */
export let modBundle = new LazyModule<typeof _modBundle>('./mod_bundle/index',__dirname)
