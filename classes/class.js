"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(year, color, _horsePower, hasTurbo, hasAutoPark) {
        this.year = year;
        this.color = color;
        this._horsePower = _horsePower;
        this.hasTurbo = hasTurbo;
        this.hasAutoPark = hasAutoPark;
        this.turboActivated = false;
        this.accelerate = function () { return console.log('Vrummm!'); };
        this.brake = function () { return console.log('Irrrrr!'); };
        this.toggleTurbine = function () { };
        this.autoPark = function () { };
        this.factoryID = Math.random();
    }
    Object.defineProperty(Vehicle.prototype, "horsePower", {
        get: function () {
            return !this.turboActivated ? this._horsePower : this._horsePower + 100;
        },
        set: function (horsePower) {
            if (horsePower >= 0) {
                this._horsePower = horsePower;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(year, color, horsePower, hasTurbo, hasAutoPark, brand, model) {
        var _this = _super.call(this, year, color, horsePower, hasAutoPark, hasTurbo) || this;
        _this.brand = brand;
        _this.model = model;
        _this.toggleTurbine = function () {
            _this.hasTurbo ? _this.turboActivated = !_this.turboActivated : console.log('TURBO: Sorry. This model doesnt have this funcionality');
        };
        _this.autoPark = function () {
            _this.hasAutoPark ? console.log('AUTO-PARK: Please, take your hands out of the wheel. Auto park activated.') : console.log('AUTO-PARK: Sorry. This model doesnt have this funcionality');
        };
        return _this;
    }
    return Car;
}(Vehicle));
var car = new Car(2019, 'red', 350, true, true, 'Ferrari', '458 Italia');
console.log("\n    Its a Ferrari, Factory ID: " + car.factoryID + "\n");
car.horsePower = -150;
console.log('HorsePower: ', car.horsePower);
car.horsePower = 450;
console.log('HorsePower: ', car.horsePower);
car.toggleTurbine();
console.log('HorsePower + Turbo ON: ', car.horsePower);
car.accelerate();
car.brake();
car.autoPark();
var popularCar = new Car(2019, 'red', 150, false, false, 'Volkswagem', 'Jetta');
console.log("\n    Its a popular car, Factory ID: " + popularCar.factoryID + " \n");
console.log('HorsePower:', popularCar.horsePower);
popularCar.toggleTurbine();
console.log('HorsePower + Turbo:', popularCar.horsePower);
popularCar.accelerate();
popularCar.brake();
popularCar.autoPark();
