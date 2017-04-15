"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBc0I7QUFFdEIseUNBQXdDO0FBQ3hDLDBDQUF5QztBQUN6QyxzQ0FBcUM7QUFFMUIsUUFBQSxHQUFHLEdBQUc7SUFDZixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBRTlDLGdCQUFnQjtJQUNoQixRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsbUJBQW1CO1NBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1NBQ25CLElBQUksQ0FBQyxTQUFTO1FBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO2FBQzlCLElBQUksQ0FBQyxDQUFDLFdBQVc7WUFDaEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDVixFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVKLGVBQWU7SUFDZixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDO1NBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1NBQ25CLElBQUksQ0FBQyxTQUFTO1FBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2FBQzdCLElBQUksQ0FBQyxVQUFVO1lBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSixjQUFjO0lBQ2QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUNuQixJQUFJLENBQUMsU0FBUztRQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUVKLGFBQWE7SUFDYixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO1NBQzFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ2YsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDckIsQ0FBQyxDQUFBIn0=