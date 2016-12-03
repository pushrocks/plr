"use strict";
const q = require("q");
const plr_log_1 = require("../plr.log");
const plugins = require("./mod.plugins");
exports.run = function (configArg) {
    let done = q.defer();
    let config = configArg;
    plr_log_1.plrOra.text(`now compiling TypeScript for Angular`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmNvbXBpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2Rfc3RhbmRhcmQvbW9kLmNvbXBpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUd0Qix3Q0FBbUM7QUFHbkMseUNBQXlDO0FBRTlCLFFBQUEsR0FBRyxHQUFHLFVBQVUsU0FBcUI7SUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3BCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQTtJQUN0QixnQkFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQzFELElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDakQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5RSxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==