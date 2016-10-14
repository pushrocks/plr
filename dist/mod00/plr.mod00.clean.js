"use strict";
const q = require("q");
const paths = require("../plr.all.paths");
const plugins = require("./plr.mod00.plugins");
exports.run = (configArg) => {
    let done = q.defer();
    plugins.smartfile.fs.removeSync(paths.distWeb);
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZDAwLmNsZWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbW9kMDAvcGxyLm1vZDAwLmNsZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBc0I7QUFFdEIsMENBQXlDO0FBR3pDLCtDQUE4QztBQUVuQyxRQUFBLEdBQUcsR0FBRyxDQUFDLFNBQXFCO0lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=