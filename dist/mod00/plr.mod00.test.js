"use strict";
const q = require("q");
const plr_all_log_1 = require("../plr.all.log");
exports.run = (configArg) => {
    let done = q.defer();
    plr_all_log_1.plrOra.text('now testing the module');
    plr_all_log_1.plrOra.stop();
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2QwMC9wbHIubW9kMDAudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBR3RCLGdEQUF1QztBQUk1QixRQUFBLEdBQUcsR0FBRyxDQUFDLFNBQXFCO0lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWMsQ0FBQTtJQUNoQyxvQkFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0lBQ3JDLG9CQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9