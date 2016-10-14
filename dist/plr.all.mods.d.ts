import { LazyModule } from 'smartsystem';
import * as _mod00 from './mod00/index';
import * as _mod01 from './mod01/index';
/**
 * mod00 is the standard Task!
 * It is respnsible for compiling and bundeling all assets
 */
export declare let mod00: LazyModule<typeof _mod00>;
/**
 * mod01 installs dependencies into the dev directory
 */
export declare let mod01: LazyModule<typeof _mod01>;
