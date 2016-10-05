"use strict";
require("typings-global");
const plugins = require("./plr.plugins");
const paths = require("./plr.paths");
const plr_promisechain_1 = require("./plr.promisechain");
exports.run = function (configArg) {
    let done = plugins.q.defer();
    let config = configArg;
    plr_promisechain_1.plrOra.text(`now compiling TypeScript for Angular`);
    plugins.tsn.compileGlobStringObject(config.ts, config.tsOptions, paths.distWeb)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNvbXBpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIuY29tcGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMseURBQXlDO0FBRTlCLFFBQUEsR0FBRyxHQUFHLFVBQVUsU0FBUztJQUNoQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQTtJQUN0Qix5QkFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDeEUsSUFBSSxDQUFDO1FBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUNqRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==