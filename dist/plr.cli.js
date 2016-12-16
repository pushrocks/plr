"use strict";
const q = require("q");
const plugins = require("./plr.plugins");
const plrConfig = require("./plr.config");
const plrMods = require("./plr.mods");
exports.run = () => {
    let done = q.defer();
    let localCli = new plugins.smartcli.Smartcli();
    // Task Standard
    localCli.standardTask() // the standardTask
        .then(plrConfig.run)
        .then(configArg => {
        return plrMods.modStandard.load()
            .then((modStandard) => {
            return modStandard.run(configArg);
        })
            .then(() => {
            done.resolve();
        });
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    // Task Install
    localCli.addCommand({ commandName: 'install' })
        .then(plrConfig.run)
        .then(configArg => {
        return plrMods.modInstall.load()
            .then(modInstall => {
            return modInstall.run();
        });
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    // Task Bundle
    localCli.addCommand({ commandName: 'bundle' })
        .then(plrConfig.run)
        .then(configArg => {
        return plrMods.modBundle.load().then(modBundle => {
            return modBundle.run();
        });
    });
    // Task Serve
    localCli.addCommand({ commandName: 'serve' })
        .then().catch(err => {
        if (err instanceof Error) {
            console.log(err);
        }
    });
    localCli.startParse();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUV0Qix5Q0FBd0M7QUFDeEMsMENBQXlDO0FBQ3pDLHNDQUFxQztBQUcxQixRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQVEsQ0FBQTtJQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7SUFFOUMsZ0JBQWdCO0lBQ2hCLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxtQkFBbUI7U0FDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7U0FDbkIsSUFBSSxDQUFDLFNBQVM7UUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDNUIsSUFBSSxDQUFDLENBQUMsV0FBVztZQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ1IsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFTixlQUFlO0lBQ2YsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUNuQixJQUFJLENBQUMsU0FBUztRQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTthQUMzQixJQUFJLENBQUMsVUFBVTtZQUNaLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztRQUNSLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRU4sY0FBYztJQUNkLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7U0FDbkIsSUFBSSxDQUFDLFNBQVM7UUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFTixhQUFhO0lBQ2IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztTQUN4QyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRztRQUNiLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9