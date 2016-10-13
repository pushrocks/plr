"use strict";
const q = require("q");
const plugins = require("./plr.all.plugins");
const plrMods = require("./plr.all.mods");
exports.run = () => {
    let done = q.defer();
    let localCli = new plugins.smartcli.Smartcli();
    localCli.standardTask().then((argvArg) => {
        plugins.beautylog.figletSync('plr');
        plrMods.mod01.load().then(() => {
            console.log('hi');
        });
        done.resolve();
    });
    localCli.startParse();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmFsbC5jbGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIuYWxsLmNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBRXRCLDZDQUE0QztBQUM1QywwQ0FBeUM7QUFFOUIsUUFBQSxHQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzlDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=