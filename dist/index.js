"use strict";
const early = require("early");
early.start('plr');
const plugins = require("./plr.plugins");
const plrPromisechain = require("./plr.promisechain");
early.stop().then(() => {
    plugins.beautylog.figletSync('plr');
    plrPromisechain.run();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQThCO0FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDbEIseUNBQXdDO0FBQ3hDLHNEQUFxRDtBQUVyRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ3pCLENBQUMsQ0FBQyxDQUFBIn0=