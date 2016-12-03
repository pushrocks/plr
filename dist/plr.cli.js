"use strict";
const q = require("q");
const plugins = require("./plr.plugins");
const plrConfig = require("./plr.config");
const plrMods = require("./plr.mods");
const plr_log_1 = require("./plr.log");
exports.run = () => {
    let done = q.defer();
    let localCli = new plugins.smartcli.Smartcli();
    localCli.standardTask() // the standardTask
        .then(argvArg => {
        let done = q.defer();
        plugins.beautylog.figletSync('plr');
        plr_log_1.plrOra.start('Loading additional modules');
        plrConfig.run(argvArg).then(configArg => {
            done.resolve(configArg);
        });
        return done.promise;
    })
        .then(configArg => {
        plrMods.modStandard.load()
            .then((modStandard) => {
            modStandard.run(configArg);
        });
        done.resolve();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    localCli.addCommand({ commandName: 'install' })
        .then(argvArg => {
        plrMods.modInstall.load()
            .then(modInstall => {
            modInstall.run();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUV0Qix5Q0FBd0M7QUFDeEMsMENBQXlDO0FBQ3pDLHNDQUFxQztBQUNyQyx1Q0FBa0M7QUFFdkIsUUFBQSxHQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzlDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxtQkFBbUI7U0FDdEMsSUFBSSxDQUFDLE9BQU87UUFDVCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUF3QixDQUFBO1FBQzFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLGdCQUFNLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUE7UUFDMUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLFNBQVM7UUFDWCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTthQUNyQixJQUFJLENBQUMsQ0FBQyxXQUFXO1lBQ2QsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztRQUNSLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUMxQyxJQUFJLENBQUMsT0FBTztRQUNULE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2FBQ3BCLElBQUksQ0FBQyxVQUFVO1lBQ1osVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDUixFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDeEMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDYixFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==