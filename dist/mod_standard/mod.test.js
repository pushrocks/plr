"use strict";
const q = require("q");
const plr_log_1 = require("../plr.log");
exports.run = (configArg) => {
    let done = q.defer();
    plr_log_1.plrOra.text('now testing the module');
    plr_log_1.plrOra.stop();
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2Rfc3RhbmRhcmQvbW9kLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUd0Qix3Q0FBbUM7QUFJeEIsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUFxQjtJQUNuQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFjLENBQUE7SUFDaEMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUNyQyxnQkFBTSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==