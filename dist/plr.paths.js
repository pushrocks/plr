"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./plr.plugins");
// directories
// -- package related
exports.packageDir = plugins.path.join(__dirname, '../');
exports.sideworkDir = plugins.path.join(exports.packageDir, 'sidework');
// -- project related
exports.cwd = process.cwd();
/**
 * distWeb holds all files that are exposed to the web
 */
exports.distWeb = plugins.path.join(exports.cwd, 'distweb'); // called distweb to go along well with npmts
/**
 * distWebApp holds the angular files (by convention)
 */
exports.distWebApp = plugins.path.join(exports.distWeb, 'app');
/**
 * angular is the default directory to expect the source angular ts files in
 */
exports.angular = plugins.path.join(exports.cwd, 'angular');
/**
 * plrBundle directory
 */
exports.plrBundle = plugins.path.join(exports.cwd, 'plr_bundle');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLnBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcGxyLnBhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXdDO0FBRXhDLGNBQWM7QUFDZCxxQkFBcUI7QUFDVixRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDaEQsUUFBQSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUVsRSxxQkFBcUI7QUFDVixRQUFBLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUE7QUFFOUI7O0dBRUc7QUFDUSxRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsU0FBUyxDQUFDLENBQUEsQ0FBQyw2Q0FBNkM7QUFFcEc7O0dBRUc7QUFDUSxRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFFekQ7O0dBRUc7QUFDUSxRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFFdEQ7O0dBRUc7QUFDUSxRQUFBLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUMsWUFBWSxDQUFDLENBQUEifQ==