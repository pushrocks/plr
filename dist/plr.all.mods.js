"use strict";
const smartsystem_1 = require("smartsystem");
let mod00 = new smartsystem_1.LazyModule('./plr.mod00.js', __dirname);
let mod01 = new smartsystem_1.LazyModule('./plr.mod01.js', __dirname);
exports.run = () => {
    mod01.load().then(m => {
        m.run();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxyLmFsbC5tb2RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcGxyLmFsbC5tb2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2Q0FBd0M7QUFReEMsSUFBSSxLQUFLLEdBQUcsSUFBSSx3QkFBVSxDQUFnQixnQkFBZ0IsRUFBQyxTQUFTLENBQUMsQ0FBQTtBQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLHdCQUFVLENBQWdCLGdCQUFnQixFQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzFELFFBQUEsR0FBRyxHQUFHO0lBQ2IsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ1gsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEifQ==