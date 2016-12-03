"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2Rfc3RhbmRhcmQvbW9kLmJyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUV0QixzQ0FBcUM7QUFHckMseUNBQXdDO0FBSTdCLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBcUI7SUFDbkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBYyxDQUFBO0lBQ2hDLHdCQUFnQixHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDckQsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHO1FBQ2xCLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDckQsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=