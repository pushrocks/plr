/// <reference types="q" />
export interface IPlrConfig {
    ts: any;
    tsOptions: any;
}
/**
 * evaluates the config for plr
 */
export declare let run: () => Q.Promise<IPlrConfig>;
