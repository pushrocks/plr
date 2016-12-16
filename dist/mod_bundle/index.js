/**
 * This module installs the the dependencies needed for angular 2 or later for the IDE
 */
"use strict";
const smartjspm_1 = require("smartjspm");
const paths = require("../plr.paths");
const plugins = require("./mod.plugins");
exports.run = () => {
    let localSmartjspm = new smartjspm_1.SmartJspm({
        npmDevDir: paths.cwd,
        targetDir: paths.distWeb
    });
    localSmartjspm.readNpmextraJspmDependencies(plugins.path.join(paths.cwd));
    plugins.smartfile.fs.ensureDirSync(paths.plrBundle);
    localSmartjspm.createBundle(paths.distWeb, './app/main.js', paths.plrBundle);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2RfYnVuZGxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUdILHlDQUFxQztBQUVyQyxzQ0FBcUM7QUFFckMseUNBQXdDO0FBRTdCLFFBQUEsR0FBRyxHQUFHO0lBQ2IsSUFBSSxjQUFjLEdBQUcsSUFBSSxxQkFBUyxDQUFDO1FBQy9CLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRztRQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU87S0FDM0IsQ0FBQyxDQUFBO0lBQ0YsY0FBYyxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkQsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDaEYsQ0FBQyxDQUFBIn0=