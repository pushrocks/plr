"use strict";
const q = require("q");
const paths = require("./plr.all.paths");
const plugins = require("./plr.all.plugins");
const plr_all_log_1 = require("./plr.all.log");
/**
 * evaluates the config for plr
 */
exports.run = () => {
    let done = q.defer();
    plr_all_log_1.plrOra.text('evaluating npmextra.json');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmFsbC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIuYWxsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBRXRCLHlDQUF3QztBQUN4Qyw2Q0FBNEM7QUFDNUMsK0NBQXNDO0FBT3RDOztHQUVHO0FBQ1EsUUFBQSxHQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFjLENBQUE7SUFDaEMsb0JBQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUV2QyxJQUFJLGVBQWUsR0FBZTtRQUM5QixFQUFFLEVBQUU7WUFDQSxtQkFBbUIsRUFBRSxlQUFlO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFLEVBRVY7S0FDSixDQUFBO0lBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBYSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==