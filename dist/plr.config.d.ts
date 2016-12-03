/// <reference types="q" />
import * as q from 'q';
export interface IPlrConfig {
    ts: any;
    tsOptions: any;
    testTs: any;
}
/**
 * evaluates the config for plr
 */
export declare let run: (argvArg: any) => q.Promise<IPlrConfig>;
