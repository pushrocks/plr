"use strict";
const plugins = require("./plr.plugins");
const plrCompile = require("./plr.compile");
const plrConfig = require("./plr.config");
const beautylog_1 = require("beautylog");
exports.plrOra = new beautylog_1.Ora('starting PLR...', 'blue', true);
exports.run = () => {
    let done = plugins.q.defer();
    plrConfig.run()
        .then(plrCompile.run)
        .then(() => {
        exports.plrOra.endOk('Done!');
    }).catch(err => { console.log(err); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLnByb21pc2VjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Bsci5wcm9taXNlY2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQUV4Qyw0Q0FBMkM7QUFDM0MsMENBQXlDO0FBRXpDLHlDQUErQjtBQUVwQixRQUFBLE1BQU0sR0FBRyxJQUFJLGVBQUcsQ0FBQyxpQkFBaUIsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUE7QUFFL0MsUUFBQSxHQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUSxDQUFBO0lBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7U0FDVixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUNwQixJQUFJLENBQUM7UUFDRixjQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9