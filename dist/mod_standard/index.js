"use strict";
const q = require("q");
const plr_log_1 = require("../plr.log");
const plrCompile = require("./mod.compile");
const plrClean = require("./mod.clean");
const plrBrowser = require("./mod.browser");
const plrTest = require("./mod.test");
exports.run = (configArg) => {
    let done = q.defer();
    plr_log_1.plrOra.text('now running standard module');
    plrClean.run(configArg)
        .then(plrCompile.run)
        .then(plrTest.run)
        .then(plrBrowser.run)
        .then(() => {
        plr_log_1.plrOra.endOk('Done!');
    }).catch(err => { console.log(err); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2Rfc3RhbmRhcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUd0Qix3Q0FBbUM7QUFHbkMsNENBQTJDO0FBQzNDLHdDQUF1QztBQUN2Qyw0Q0FBMkM7QUFDM0Msc0NBQXFDO0FBRzFCLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBcUI7SUFDbkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBUSxDQUFBO0lBQzFCLGdCQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDMUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7U0FDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDcEIsSUFBSSxDQUFDO1FBQ0YsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=