"use strict";
const q = require("q");
const plr_all_log_1 = require("../plr.all.log");
const plrCompile = require("./plr.mod00.compile");
const plrClean = require("./plr.mod00.clean");
const plrBrowser = require("./plr.mod00.browser");
const plrTest = require("./plr.mod00.test");
exports.run = (configArg) => {
    let done = q.defer();
    plr_all_log_1.plrOra.text('now running standard module');
    plrClean.run(configArg)
        .then(plrCompile.run)
        .then(plrTest.run)
        .then(plrBrowser.run)
        .then(() => {
        plr_all_log_1.plrOra.endOk('Done!');
    }).catch(err => { console.log(err); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2QwMC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBR3RCLGdEQUF1QztBQUd2QyxrREFBaUQ7QUFDakQsOENBQTZDO0FBQzdDLGtEQUFpRDtBQUNqRCw0Q0FBMkM7QUFHaEMsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUFxQjtJQUNuQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDMUIsb0JBQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUMxQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUNwQixJQUFJLENBQUM7UUFDRixvQkFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==