"use strict";
const q = require("q");
const plr_all_log_1 = require("../plr.all.log");
const plugins = require("./plr.mod00.plugins");
exports.run = function (configArg) {
    let done = q.defer();
    let config = configArg;
    plr_all_log_1.plrOra.text(`now compiling TypeScript for Angular`);
    plugins.tsn.compileGlobStringObject(config.ts, config.tsOptions)
        .then(() => {
        plugins.beautylog.ok('compiled main TypeScript!');
        plugins.beautylog.log('now compiling tests!');
        return plugins.tsn.compileGlobStringObject(config.testTs, config.tsOptions);
    })
        .then(function () {
        plugins.beautylog.ok('compiled all TypeScript!');
        done.resolve(config);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLmNvbXBpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2QwMC9wbHIubW9kMDAuY29tcGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBR3RCLGdEQUF1QztBQUd2QywrQ0FBK0M7QUFFcEMsUUFBQSxHQUFHLEdBQUcsVUFBVSxTQUFxQjtJQUM1QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDcEIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFBO0lBQ3RCLG9CQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUE7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDMUQsSUFBSSxDQUFDO1FBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUNqRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlFLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9