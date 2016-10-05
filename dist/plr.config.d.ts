/// <reference types="q" />
import * as plugins from './plr.plugins';
export interface IPlrConfig {
    ts: any;
}
/**
 * evaluates the config for plr
 */
export declare let run: () => plugins.q.Promise<IPlrConfig>;
