"use strict";
const plugins = require("./plr.plugins");
const plrCompile = require("./plr.compile");
const plrConfig = require("./plr.config");
const beautylog_1 = require("beautylog");
exports.plrOra = new beautylog_1.Ora('starting PLR...', 'blue');
exports.run = () => {
    let done = plugins.q.defer();
    exports.plrOra.start();
    plrConfig.run()
        .then(plrCompile.run)
        .then(() => {
        exports.plrOra.endOk('Done!');
    }).catch(err => { console.log(err); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLnByb21pc2VjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5wcm9taXNlY2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQUV4Qyw0Q0FBMkM7QUFDM0MsMENBQXlDO0FBRXpDLHlDQUErQjtBQUVwQixRQUFBLE1BQU0sR0FBRyxJQUFJLGVBQUcsQ0FBQyxpQkFBaUIsRUFBQyxNQUFNLENBQUMsQ0FBQTtBQUUxQyxRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFRLENBQUE7SUFDbEMsY0FBTSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsU0FBUyxDQUFDLEdBQUcsRUFBRTtTQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3BCLElBQUksQ0FBQztRQUNGLGNBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=