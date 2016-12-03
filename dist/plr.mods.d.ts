import { LazyModule } from 'smartsystem';
import * as _modStandard from './mod_standard/index';
import * as _modInstall from './mod_install/index';
import * as _modBundle from './mod_bundle/index';
/**
 * modStandard is the standard Task!
 * It is respnsible for compiling and bundeling all assets
 */
export declare let modStandard: LazyModule<typeof _modStandard>;
/**
 * modInstall installs dependencies
 */
export declare let modInstall: LazyModule<typeof _modInstall>;
/**
 * modBundle installs dependencies into the dev directory
 */
export declare let modBundle: LazyModule<typeof _modBundle>;
