/// <reference types="q" />
import * as q from 'q';
import { IPlrConfig } from '../plr.all.config';
import * as plugins from './plr.mod00.plugins';
export declare let smartbrowserInst: plugins.smartbrowser.Smartbrowser;
export declare let run: (configArg: IPlrConfig) => q.Promise<IPlrConfig>;
