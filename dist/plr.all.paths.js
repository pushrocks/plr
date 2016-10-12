"use strict";
const plugins = require("./plr.all.plugins");
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
exports.angular = plugins.path.join(exports.cwd, 'angular');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmFsbC5wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5hbGwucGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE0QztBQUU1QyxjQUFjO0FBQ2QscUJBQXFCO0FBQ1YsUUFBQSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQ2hELFFBQUEsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFFbEUscUJBQXFCO0FBQ1YsUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBRTlCOztHQUVHO0FBQ1EsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFBLENBQUMsNkNBQTZDO0FBRXBHOztHQUVHO0FBQ1EsUUFBQSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzlDLFFBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQSJ9