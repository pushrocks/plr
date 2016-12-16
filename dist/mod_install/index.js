"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2RfaW5zdGFsbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBQ3RCLHlDQUFxQztBQUVyQyx5Q0FBd0M7QUFDeEMsc0NBQXFDO0FBRTFCLFFBQUEsR0FBRyxHQUFHO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBYSxDQUFBO0lBQy9CLElBQUksY0FBYyxHQUFHLElBQUkscUJBQVMsQ0FBQztRQUMvQixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUc7UUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPO0tBQzNCLENBQUMsQ0FBQTtJQUNGLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN6RSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFBO0lBQzdFLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUE7SUFDbEYsY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==