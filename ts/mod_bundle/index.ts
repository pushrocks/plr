/**
 * This module installs the the dependencies needed for angular 2 or later for the IDE
 */

import * as q from 'q'
import { SmartJspm } from 'smartjspm'

import * as paths from '../plr.paths'

import * as plugins from './mod.plugins'

export let run = () => {
    let localSmartjspm = new SmartJspm({
        npmDevDir: paths.cwd,
        targetDir: paths.distWeb
    })
    localSmartjspm.readNpmextraJspmDependencies(plugins.path.join(paths.cwd))
    plugins.smartfile.fs.ensureDirSync(paths.plrBundle)
    localSmartjspm.createBundle(paths.distWeb, './app/main.js', paths.plrBundle)
}
