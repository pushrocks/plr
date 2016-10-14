"use strict";
const q = require("q");
const paths = require("./plr.all.paths");
const plugins = require("./plr.all.plugins");
const plr_all_log_1 = require("./plr.all.log");
/**
 * evaluates the config for plr
 */
exports.run = (argvArg) => {
    let done = q.defer();
    plr_all_log_1.plrOra.text('evaluating npmextra.json');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmFsbC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIuYWxsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBRXRCLHlDQUF3QztBQUN4Qyw2Q0FBNEM7QUFDNUMsK0NBQXNDO0FBUXRDOztHQUVHO0FBQ1EsUUFBQSxHQUFHLEdBQUcsQ0FBQyxPQUFPO0lBQ3JCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWMsQ0FBQTtJQUNoQyxvQkFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBRXZDLElBQUksZUFBZSxHQUFlO1FBQzlCLEVBQUUsRUFBRTtZQUNBLG1CQUFtQixFQUFFLGVBQWU7U0FDdkM7UUFDRCxTQUFTLEVBQUUsRUFFVjtRQUNELE1BQU0sRUFBRTtZQUNKLGdCQUFnQixFQUFFLFFBQVE7U0FDN0I7S0FDSixDQUFBO0lBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBYSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==