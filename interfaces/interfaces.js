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
var Person = (function () {
    function Person(age, sex, weight, height) {
        this.age = age;
        this.sex = sex;
        this.weight = weight;
        this.height = height;
        this.greet = function () { return console.log('Hello!'); };
        this.sleep = function () { return console.log('ZZzzzZZZZzzzZZZ!'); };
        this.wakeup = function () { return console.log('Common, really?'); };
    }
    return Person;
}());
var person = new Person(29, 'M', 89, 173);
person.greet();
person.sleep();
person.wakeup();
var circumference = function (radius) { return 3.14 * Math.pow(radius, 2); };
var rectangle = function (base, height) { return base * height; };
console.log('Circumference:', circumference(10));
console.log('Rectangle:', rectangle(2, 8));
var RealAB = (function () {
    function RealAB() {
        this.a = function () { return console.log('method a implemented'); };
        this.b = function () { return console.log('method b implemented'); };
    }
    return RealAB;
}());
var RealABC = (function () {
    function RealABC() {
        this.a = function () { return console.log('method a implemented'); };
        this.b = function () { return console.log('method b implemented'); };
        this.c = function () { return console.log('method c implemented'); };
    }
    return RealABC;
}());
var AbstractABC = (function () {
    function AbstractABC() {
        this.a = function () { };
        this.b = function () { };
        this.c = function () { };
    }
    return AbstractABC;
}());
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = function () { return console.log('Test class!'); };
        return _this;
    }
    return Test;
}(AbstractABC));
