"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const plugins = require("./mod.plugins");
const plrCompile = require("./mod.compile");
const plrClean = require("./mod.clean");
const plrBrowser = require("./mod.browser");
const plrTest = require("./mod.test");
exports.run = (configArg) => {
    let done = q.defer();
    plugins.beautylog.ora.text('now running standard module');
    plrClean.run(configArg)
        .then(plrCompile.run)
        .then(plrTest.run)
        .then(plrBrowser.run)
        .then(() => {
        plugins.beautylog.ora.endOk('Done!');
    }).catch(err => { console.log(err); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2Rfc3RhbmRhcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBc0I7QUFJdEIseUNBQXdDO0FBQ3hDLDRDQUEyQztBQUMzQyx3Q0FBdUM7QUFDdkMsNENBQTJDO0FBQzNDLHNDQUFxQztBQUcxQixRQUFBLEdBQUcsR0FBRyxDQUFDLFNBQXFCO0lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQVEsQ0FBQTtJQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUN6RCxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUNwQixJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=