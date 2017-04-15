"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const paths = require("../plr.paths");
const plugins = require("./mod.plugins");
exports.run = (configArg) => {
    let done = q.defer();
    exports.smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2Rfc3RhbmRhcmQvbW9kLmJyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBc0I7QUFFdEIsc0NBQXFDO0FBR3JDLHlDQUF3QztBQUk3QixRQUFBLEdBQUcsR0FBRyxDQUFDLFNBQXFCO0lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWMsQ0FBQTtJQUNoQyx3QkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ3JELE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRztRQUNsQixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3JELENBQUMsQ0FBQTtJQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9