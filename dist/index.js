"use strict";
const early = require('early');
early.start('plr');
const plugins = require('./plr.plugins');
early.stop().then(() => {
    plugins.beautylog.figletSync('plr');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxLQUFLLFdBQU0sT0FDdkIsQ0FBQyxDQUQ2QjtBQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2xCLE1BQU8sT0FBTyxXQUFXLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDZCxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUMsQ0FBQSJ9