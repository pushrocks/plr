/// <reference types="q" />
import * as q from 'q';
export interface IPlrConfig {
    ts: any;
    tsOptions: any;
}
/**
 * evaluates the config for plr
 */
export declare let run: () => q.Promise<IPlrConfig>;
