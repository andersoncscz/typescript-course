"use strict";
var Geometry;
(function (Geometry) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        Area.circumference = function (radius) { return PI * Math.pow(radius, 2); };
        Area.rectangle = function (base, height) { return base * height; };
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
console.log('Circumference: ', Geometry.Area.circumference(10));
console.log('Rectangle: ', Geometry.Area.rectangle(10, 20));
