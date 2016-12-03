"use strict";
const smartsystem_1 = require("smartsystem");
/**
 * modStandard is the standard Task!
 * It is respnsible for compiling and bundeling all assets
 */
exports.modStandard = new smartsystem_1.LazyModule('./mod_standard/index', __dirname);
/**
 * modInstall installs dependencies
 */
exports.modInstall = new smartsystem_1.LazyModule('./mod_install/index', __dirname);
/**
 * modBundle installs dependencies into the dev directory
 */
exports.modBundle = new smartsystem_1.LazyModule('./mod_bundle/index', __dirname);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLm1vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wbHIubW9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQXdDO0FBU3hDOzs7R0FHRztBQUNRLFFBQUEsV0FBVyxHQUFHLElBQUksd0JBQVUsQ0FBc0Isc0JBQXNCLEVBQUMsU0FBUyxDQUFDLENBQUE7QUFFOUY7O0dBRUc7QUFDUSxRQUFBLFVBQVUsR0FBRyxJQUFJLHdCQUFVLENBQXFCLHFCQUFxQixFQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRTNGOztHQUVHO0FBQ1EsUUFBQSxTQUFTLEdBQUcsSUFBSSx3QkFBVSxDQUFvQixvQkFBb0IsRUFBQyxTQUFTLENBQUMsQ0FBQSJ9