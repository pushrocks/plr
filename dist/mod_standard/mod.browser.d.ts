/// <reference types="q" />
import * as q from 'q';
import { IPlrConfig } from '../plr.config';
import * as plugins from './mod.plugins';
export declare let smartbrowserInst: plugins.smartbrowser.Smartbrowser;
export declare let run: (configArg: IPlrConfig) => q.Promise<IPlrConfig>;
