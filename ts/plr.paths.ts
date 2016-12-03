import * as plugins from './plr.plugins'

// directories
// -- package related
export let packageDir = plugins.path.join(__dirname, '../')
export let sideworkDir = plugins.path.join(packageDir, 'sidework')

// -- project related
export let cwd = process.cwd()

/**
 * distWeb holds all files that are exposed to the web
 */
export let distWeb = plugins.path.join(cwd, 'distweb') // called distweb to go along well with npmts

/**
 * distWebApp holds the angular files (by convention)
 */
export let distWebApp = plugins.path.join(distWeb, 'app')
export let angular = plugins.path.join(cwd, 'angular')
