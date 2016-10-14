"use strict";
const q = require("q");
const plugins = require("./plr.all.plugins");
const plrConfig = require("./plr.all.config");
const plrMods = require("./plr.all.mods");
const plr_all_log_1 = require("./plr.all.log");
exports.run = () => {
    let done = q.defer();
    let localCli = new plugins.smartcli.Smartcli();
    localCli.standardTask() // the standardTask
        .then(argvArg => {
        plugins.beautylog.figletSync('plr');
        plr_all_log_1.plrOra.start('Loading additional modules');
        let done = q.defer();
        plrConfig.run(argvArg).then(done.resolve);
        return done.promise;
    })
        .then(configArg => {
        plrMods.mod00.load()
            .then((mod00) => {
            mod00.run(configArg);
        });
        done.resolve();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    localCli.addCommand({ commandName: 'install' })
        .then(argvArg => {
        plrMods.mod01.load()
            .then(mod01 => {
            mod01.run();
        });
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    localCli.addCommand({ commandName: 'serve' })
        .then().catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    localCli.startParse();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmFsbC5jbGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIuYWxsLmNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBRXRCLDZDQUE0QztBQUM1Qyw4Q0FBNkM7QUFDN0MsMENBQXlDO0FBQ3pDLCtDQUFzQztBQUUzQixRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQVEsQ0FBQTtJQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDOUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLG1CQUFtQjtTQUN0QyxJQUFJLENBQUMsT0FBTztRQUNULE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLG9CQUFNLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUE7UUFDMUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBd0IsQ0FBQTtRQUMxQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLFNBQVM7UUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTthQUNmLElBQUksQ0FBQyxDQUFDLEtBQUs7WUFDUixLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ1IsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDO1NBQzFDLElBQUksQ0FBQyxPQUFPO1FBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7YUFDZixJQUFJLENBQUMsS0FBSztZQUNQLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDUixFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDeEMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDYixFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==