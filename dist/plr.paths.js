"use strict";
const plugins = require("./plr.plugins");
// directories
// -- package related
exports.packageDir = plugins.path.join(__dirname, '../');
exports.sideworkDir = plugins.path.join(exports.packageDir, 'sidework');
// -- project related
exports.cwd = process.cwd();
exports.distWeb = plugins.path.join(exports.cwd, 'distweb'); // called distweb to along well with npmts
exports.angular = plugins.path.join(exports.cwd, 'angular');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLnBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcGxyLnBhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBd0M7QUFFeEMsY0FBYztBQUNkLHFCQUFxQjtBQUNWLFFBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUNoRCxRQUFBLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBRWxFLHFCQUFxQjtBQUNWLFFBQUEsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNuQixRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsU0FBUyxDQUFDLENBQUEsQ0FBQywwQ0FBMEM7QUFDdEYsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFBIn0=