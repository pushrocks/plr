import * as plugins from './plr.plugins'

// directories
// -- package related
export let packageDir = plugins.path.join(__dirname, '../')
export let sideworkDir = plugins.path.join(packageDir, 'sidework')

// -- project related
export let cwd = process.cwd()
export let distWeb = plugins.path.join(cwd, 'distweb') // called distweb to along well with npmts
export let angular = plugins.path.join(cwd, 'angular')
