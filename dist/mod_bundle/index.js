/**
 * This module installs the the dependencies needed for angular 2 or later for the IDE
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9tb2RfYnVuZGxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7QUFHSCx5Q0FBcUM7QUFFckMsc0NBQXFDO0FBRXJDLHlDQUF3QztBQUU3QixRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksY0FBYyxHQUFHLElBQUkscUJBQVMsQ0FBQztRQUMvQixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUc7UUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPO0tBQzNCLENBQUMsQ0FBQTtJQUNGLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN6RSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ25ELGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ2hGLENBQUMsQ0FBQSJ9