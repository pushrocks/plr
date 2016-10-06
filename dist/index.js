"use strict";
const early = require("early");
early.start('plr');
const plugins = require("./plr.plugins");
const plrCli = require("./plr.cli");
early.stop().then(() => {
    let loaded = plugins; // makes sure that plugins get really loaded
    plrCli.run();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQThCO0FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDbEIseUNBQXdDO0FBQ3hDLG9DQUFtQztBQUNuQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFBLENBQUMsNENBQTRDO0lBQ2pFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixDQUFDLENBQUMsQ0FBQSJ9