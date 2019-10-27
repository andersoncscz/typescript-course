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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var logClass = function (constructor) { return console.log('Decorator: ', constructor); };
var HouseholdAppliance = (function () {
    function HouseholdAppliance() {
        console.log('new HouseholdAppliance');
    }
    HouseholdAppliance = __decorate([
        logClass
    ], HouseholdAppliance);
    return HouseholdAppliance;
}());
console.log('\n\n');
var decoratorFactory = function (value) { return value ? logClass : function (_) { }; };
var TestDecoratorFactory = (function () {
    function TestDecoratorFactory() {
        console.log('new TestDecoratorFactory');
    }
    TestDecoratorFactory = __decorate([
        decoratorFactory(true)
    ], TestDecoratorFactory);
    return TestDecoratorFactory;
}());
console.log('\n\n');
var decoratorFactory2 = function (value, obj) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return value
        ? function (_) {
            console.log(value);
            console.log(obj);
            console.log(args);
        }
        : function (_) { };
};
var TestDecoratorFactory2 = (function () {
    function TestDecoratorFactory2() {
        console.log('new TestDecoratorFactory2');
    }
    TestDecoratorFactory2 = __decorate([
        decoratorFactory2(true, { name: 'Anderson', age: 29 }, 1, 3, 4, 5, 6)
    ], TestDecoratorFactory2);
    return TestDecoratorFactory2;
}());
console.log('\n\n');
function logObject(constructor) {
    console.log('Loaded!');
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            console.log('Before calling the super Class!');
            _this = _super.apply(this, args) || this;
            console.log('After calling the super Class!');
            return _this;
        }
        return class_1;
    }(constructor));
}
var TestDecoratorWithHeritage = (function () {
    function TestDecoratorWithHeritage() {
        console.log('new TestDecoratorWithHeritage');
    }
    TestDecoratorWithHeritage = __decorate([
        logObject
    ], TestDecoratorWithHeritage);
    return TestDecoratorWithHeritage;
}());
console.log('\nFirst Instance: \n');
new TestDecoratorWithHeritage();
console.log('\nSecond Instance: \n');
new TestDecoratorWithHeritage();
console.log('\nThird Instance: \n');
new TestDecoratorWithHeritage();
console.log('\n\n');
function printable(constructor) {
    constructor.prototype.print = function () {
        console.log('Print: I was injected via prototype');
        console.log('Context: ', this);
    };
}
var TestDecoratorWithPrototype = (function () {
    function TestDecoratorWithPrototype() {
        console.log('new TestDecoratorWithPrototype');
    }
    TestDecoratorWithPrototype = __decorate([
        printable
    ], TestDecoratorWithPrototype);
    return TestDecoratorWithPrototype;
}());
var testDP = new TestDecoratorWithPrototype();
if (testDP.print) {
    testDP.print();
}
var CheckingAccount = (function () {
    function CheckingAccount(balance) {
        this.balance = balance;
    }
    CheckingAccount.prototype.cashOut = function (value) {
        if (value <= this.balance) {
            this.balance -= value;
            return true;
        }
        return false;
    };
    CheckingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    __decorate([
        onlyPositive
    ], CheckingAccount.prototype, "balance", void 0);
    __decorate([
        freeze,
        __param(0, parameterInfo)
    ], CheckingAccount.prototype, "cashOut", null);
    __decorate([
        freeze
    ], CheckingAccount.prototype, "getBalance", null);
    return CheckingAccount;
}());
var ca = new CheckingAccount(10248.57);
ca.cashOut(5000);
console.log(ca.getBalance());
function freeze(target, property, descriptor) {
    console.log(target);
    console.log(property);
    descriptor.writable = false;
}
var ca2 = new CheckingAccount(10248.57);
ca2.cashOut(5000);
ca2.cashOut(5248.57);
ca2.cashOut(5248.57);
console.log(ca.getBalance());
function onlyPositive(target, property) {
    delete target[property];
    Object.defineProperty(target, property, {
        get: function () {
            return target["_" + property];
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value invalid.');
            else
                target["_" + property] = value;
        }
    });
}
function parameterInfo(target, method, parameterIndex) {
    console.log("Target: " + target);
    console.log("Method: " + method);
    console.log("Index: " + parameterIndex);
}
