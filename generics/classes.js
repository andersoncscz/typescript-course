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
var BinaryOperation = (function () {
    function BinaryOperation(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
    return BinaryOperation;
}());
var BinarySum = (function (_super) {
    __extends(BinarySum, _super);
    function BinarySum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function () {
            return _this.op1 + _this.op2;
        };
        return _this;
    }
    return BinarySum;
}(BinaryOperation));
var BinarySumChanged = (function (_super) {
    __extends(BinarySumChanged, _super);
    function BinarySumChanged() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function () {
            return _this.op1 + _this.op2;
        };
        return _this;
    }
    return BinarySumChanged;
}(BinaryOperation));
console.log(new BinarySum(5, 15).execute());
console.log(new BinarySumChanged('5', '15').execute());
var CustomDate = (function () {
    function CustomDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return CustomDate;
}());
var Dates = (function (_super) {
    __extends(Dates, _super);
    function Dates() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function () {
            var t1 = _this.getTime(_this.op1);
            var t2 = _this.getTime(_this.op2);
            var dif = Math.abs(t1 - t2);
            var day = 1000 * 60 * 60 * 24;
            return Math.ceil(dif / day) + " day(s)";
        };
        _this.getTime = function (date) {
            var day = date.day, month = date.month, year = date.year;
            return new Date(month + "/" + day + "/" + year).getTime();
        };
        return _this;
    }
    return Dates;
}(BinaryOperation));
var date1 = new CustomDate(1, 2, 2020);
var date2 = new CustomDate(5, 5, 2020);
console.log(new Dates(date1, date2).execute());
var Queue = (function () {
    function Queue() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.getInLine = function (item) { return _this.queue.push(item); };
        this.next = function () {
            if (_this.queue.length >= 0 && _this.queue[0]) {
                var first = _this.queue[0];
                _this.queue.splice(0, 1);
                return first;
            }
            return null;
        };
        this.print = function () { return console.log(_this.queue); };
        this.queue = args;
    }
    return Queue;
}());
console.log('Generic Queue: \n');
var queueNumber = new Queue(1, 2, 3, 4);
var queue = new Queue('Anderson', 'Patricia', 'Alex', 'Maria');
queue.print();
queue.getInLine('Heitor');
queue.print();
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
queue.print();
var Map = (function () {
    function Map() {
        var _this = this;
        this.push = function (item) {
            var found = _this.get(item.key);
            found ? found.value = item.value : _this.items.push(item);
        };
        this.print = function () { return console.log(_this.items); };
        this.get = function (key) {
            var result = _this.items.filter(function (item) { return item.key === key; });
            return result ? result[0] : null;
        };
        this.clear = function () { return _this.items = new Array(); };
        this.items = new Array();
    }
    return Map;
}());
console.log('\nGeneric Map: \n');
var map = new Map();
map.push({ key: 1, value: 'Anderson' });
map.push({ key: 2, value: 'Patricia' });
map.push({ key: 3, value: 'Maria' });
map.push({ key: 4, value: 'Heitor' });
map.push({ key: 5, value: 'Alex' });
console.log('\nElement 3:');
console.log(map.get(3));
console.log('\nAll Map:');
map.print();
map.clear();
console.log('\nMap Cleaned:');
map.print();
