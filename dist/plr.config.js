"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const paths = require("./plr.paths");
const plugins = require("./plr.plugins");
/**
 * evaluates the config for plr
 */
exports.run = (argvArg) => {
    let done = q.defer();
    plugins.beautylog.ora.start();
    plugins.beautylog.ora.text('evaluating npmextra.json');
    let defaultSettings = {
        ts: {
            './angular/**/*.ts': './distweb/app'
        },
        tsOptions: {},
        testTs: {}
    };
    let plrNpmextra = new plugins.npmextra.Npmextra(paths.cwd);
    let finalConfig = plrNpmextra.dataFor('plr', defaultSettings);
    plugins.beautylog.ora.end();
    done.resolve(finalConfig);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBc0I7QUFFdEIscUNBQW9DO0FBQ3BDLHlDQUF3QztBQVF4Qzs7R0FFRztBQUNRLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBTztJQUN2QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFjLENBQUE7SUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFFdEQsSUFBSSxlQUFlLEdBQWU7UUFDaEMsRUFBRSxFQUFFO1lBQ0YsbUJBQW1CLEVBQUUsZUFBZTtTQUNyQztRQUNELFNBQVMsRUFBRSxFQUVWO1FBQ0QsTUFBTSxFQUFFLEVBQ1A7S0FDRixDQUFBO0lBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBYSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDekUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==