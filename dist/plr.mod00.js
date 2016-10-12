"use strict";
const plr_all_log_1 = require("./plr.all.log");
const plugins = require("./plr.mod00.plugins");
const plrCompile = require("./plr.mod00.compile");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    plr_all_log_1.plrOra.start();
    plrCompile.run(configArg)
        .then(() => {
        plr_all_log_1.plrOra.endOk('Done!');
    }).catch(err => { console.log(err); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcGxyLm1vZDAwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSwrQ0FBc0M7QUFFdEMsK0NBQThDO0FBQzlDLGtEQUFpRDtBQUd0QyxRQUFBLEdBQUcsR0FBRyxDQUFDLFNBQStCO0lBQzdDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDbEMsb0JBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ3BCLElBQUksQ0FBQztRQUNGLG9CQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9