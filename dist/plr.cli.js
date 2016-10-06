"use strict";
const plugins = require("./plr.plugins");
const plrPromisechain = require("./plr.promisechain");
const q = require("q");
exports.run = () => {
    let done = q.defer();
    let localCli = new plugins.smartcli.Smartcli();
    localCli.standardTask().then((argvArg) => {
        plugins.beautylog.figletSync('plr');
        plrPromisechain.run();
    });
    localCli.startParse();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQUN4QyxzREFBcUQ7QUFFckQsdUJBQXNCO0FBRVgsUUFBQSxHQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzlDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==