"use strict";
const q = require("q");
const paths = require("../plr.all.paths");
const plugins = require("./plr.mod00.plugins");
exports.run = (configArg) => {
    let done = q.defer();
    exports.smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLmJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2QwMC9wbHIubW9kMDAuYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBRXRCLDBDQUF5QztBQUd6QywrQ0FBOEM7QUFJbkMsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUFxQjtJQUNuQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFjLENBQUE7SUFDaEMsd0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUNyRCxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUc7UUFDbEIsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==