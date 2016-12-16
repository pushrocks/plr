"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLnBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcGxyLnBhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBd0M7QUFFeEMsY0FBYztBQUNkLHFCQUFxQjtBQUNWLFFBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUNoRCxRQUFBLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBRWxFLHFCQUFxQjtBQUNWLFFBQUEsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUU5Qjs7R0FFRztBQUNRLFFBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQSxDQUFDLDZDQUE2QztBQUVwRzs7R0FFRztBQUNRLFFBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUV6RDs7R0FFRztBQUNRLFFBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUV0RDs7R0FFRztBQUNRLFFBQUEsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBQyxZQUFZLENBQUMsQ0FBQSJ9