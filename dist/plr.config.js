"use strict";
const q = require("q");
const paths = require("./plr.paths");
const plugins = require("./plr.plugins");
const plr_log_1 = require("./plr.log");
/**
 * evaluates the config for plr
 */
exports.run = (argvArg) => {
    let done = q.defer();
    plr_log_1.plrOra.text('evaluating npmextra.json');
    let defaultSettings = {
        ts: {
            './angular/**/*.ts': './distweb/app'
        },
        tsOptions: {},
        testTs: {
            './test/**/*.ts': './test'
        }
    };
    let plrNpmextra = new plugins.npmextra.Npmextra(paths.cwd);
    let finalConfig = plrNpmextra.dataFor('plr', defaultSettings);
    done.resolve(finalConfig);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUV0QixxQ0FBb0M7QUFDcEMseUNBQXdDO0FBQ3hDLHVDQUFrQztBQVFsQzs7R0FFRztBQUNRLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBTztJQUNyQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFjLENBQUE7SUFDaEMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUV2QyxJQUFJLGVBQWUsR0FBZTtRQUM5QixFQUFFLEVBQUU7WUFDQSxtQkFBbUIsRUFBRSxlQUFlO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFLEVBRVY7UUFDRCxNQUFNLEVBQUU7WUFDSixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCO0tBQ0osQ0FBQTtJQUVELElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQWEsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=