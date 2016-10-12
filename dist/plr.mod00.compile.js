"use strict";
const q = require("q");
const plr_all_log_1 = require("./plr.all.log");
const plugins = require("./plr.mod00.plugins");
exports.run = function (configArg) {
    let done = q.defer();
    let config = configArg;
    plr_all_log_1.plrOra.text(`now compiling TypeScript for Angular`);
    plugins.tsn.compileGlobStringObject(config.ts, config.tsOptions)
        .then(() => {
        plugins.beautylog.ok('compiled main TypeScript!');
        plugins.beautylog.log('now compiling tests!');
        return plugins.tsn.compileGlobStringObject(config.testTs);
    })
        .then(function () {
        plugins.beautylog.ok('compiled all TypeScript!');
        done.resolve(config);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLmNvbXBpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIubW9kMDAuY29tcGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBR3RCLCtDQUFzQztBQUV0QywrQ0FBK0M7QUFFcEMsUUFBQSxHQUFHLEdBQUcsVUFBVSxTQUFTO0lBQ2hDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNwQixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUE7SUFDdEIsb0JBQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQTtJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUMxRCxJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzdELENBQUMsQ0FBQztTQUNELElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9