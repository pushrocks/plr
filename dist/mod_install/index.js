"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const smartjspm_1 = require("smartjspm");
const plugins = require("./mod.plugins");
const paths = require("../plr.paths");
exports.run = () => {
    let done = q.defer();
    let localSmartjspm = new smartjspm_1.SmartJspm({
        npmDevDir: paths.cwd,
        targetDir: paths.distWeb
    });
    localSmartjspm.readNpmextraJspmDependencies(plugins.path.join(paths.cwd));
    plugins.beautylog.info('Now installing dependencies for npm development dir');
    localSmartjspm.installNpmDevDir();
    plugins.beautylog.info('Now installing dependencies for web target dir with jspm');
    localSmartjspm.installJspmTarget();
    done.resolve(localSmartjspm);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2RfaW5zdGFsbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUFzQjtBQUN0Qix5Q0FBcUM7QUFFckMseUNBQXdDO0FBQ3hDLHNDQUFxQztBQUUxQixRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWEsQ0FBQTtJQUMvQixJQUFJLGNBQWMsR0FBRyxJQUFJLHFCQUFTLENBQUM7UUFDL0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHO1FBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTztLQUMzQixDQUFDLENBQUE7SUFDRixjQUFjLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDekUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQTtJQUM3RSxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUFBO0lBQ2xGLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=