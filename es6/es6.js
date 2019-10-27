"use strict";
var EcmaScript = (function () {
    function EcmaScript() {
        this.showArrayRest = function (a, b) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            console.log('\nRest Operator', [a, b].concat(args));
        };
        this.showArraySpread = function (teamA, teamB) {
            console.log('\nSpread Operator', teamA.concat(teamB));
        };
    }
    return EcmaScript;
}());
var teamA = ['Anderson', 'Patricia'];
var teamB = ['Ana', 'Josh'];
var ecma = new EcmaScript();
ecma.showArraySpread(teamA, teamB);
ecma.showArrayRest('zero', 'one', 2, 3, 4, 5, 6, 7, 8, 9, 10);
