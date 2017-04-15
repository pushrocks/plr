"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const paths = require("../plr.paths");
const plugins = require("./mod.plugins");
exports.run = (configArg) => {
    let done = q.defer();
    plugins.smartfile.fs.removeSync(paths.distWebApp);
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmNsZWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbW9kX3N0YW5kYXJkL21vZC5jbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUFzQjtBQUV0QixzQ0FBcUM7QUFHckMseUNBQXdDO0FBRTdCLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBcUI7SUFDbkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==