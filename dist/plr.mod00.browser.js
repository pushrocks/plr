"use strict";
const paths = require("./plr.all.paths");
const plugins = require("./plr.mod00.plugins");
exports.run = () => {
    let done = plugins.q.defer();
    exports.smartbrowserInst = new plugins.smartbrowser.Smartbrowser({
        webroot: paths.cwd,
        watchFiles: [plugins.path.join(paths.cwd, '**/*')]
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLmJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIubW9kMDAuYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUluQyxRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsd0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUNyRCxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUc7UUFDbEIsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEifQ==