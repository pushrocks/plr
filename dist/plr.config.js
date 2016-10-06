"use strict";
const plugins = require("./plr.plugins");
const paths = require("./plr.paths");
const plr_promisechain_1 = require("./plr.promisechain");
/**
 * evaluates the config for plr
 */
exports.run = () => {
    let done = plugins.q.defer();
    plr_promisechain_1.plrOra.text('evaluating npmextra.json');
    let defaultSettings = {
        ts: {
            './angular/**/*.ts': './distweb/app'
        },
        tsOptions: {}
    };
    let plrNpmextra = new plugins.npmextra.Npmextra(paths.cwd);
    let finalConfig = plrNpmextra.dataFor('plr', defaultSettings);
    done.resolve(finalConfig);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQUN4QyxxQ0FBb0M7QUFFcEMseURBQTJDO0FBTzNDOztHQUVHO0FBQ1EsUUFBQSxHQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBYyxDQUFBO0lBQ3hDLHlCQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFFdkMsSUFBSSxlQUFlLEdBQWU7UUFDOUIsRUFBRSxFQUFFO1lBQ0EsbUJBQW1CLEVBQUUsZUFBZTtTQUN2QztRQUNELFNBQVMsRUFBRSxFQUVWO0tBQ0osQ0FBQTtJQUVELElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQWEsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=