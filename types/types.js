"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
    DaysOfWeek[DaysOfWeek["THU"] = 4] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 5] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 6] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
var sum = function (x, y) { return x + y; };
var Types = (function () {
    function Types(name, age, day, sum, hobbies) {
        var _this = this;
        this.lastName = "";
        this.hobbies = [];
        this.show = function () {
            console.log('name:', _this.name + " " + _this.lastName);
            console.log('age:', _this.age);
            console.log('has Hobbies:', _this.hasHobbies);
            console.log(' \nHobbies:');
            _this.hobbies.map(function (hobbie) { return console.log(hobbie); });
            console.log('\nAddress:');
            _this.address.map(function (address) { return console.log(address); });
            console.log('\nDay of week:');
            if (DaysOfWeek.FRI === _this.day)
                console.log('Its Friday, lets drink something after work.');
            else
                console.log('Im looking forward to the holiday.');
            console.log('sum:', _this.sum(5, 5));
        };
        this.showName = function () {
            return _this.name;
        };
        this.name = name;
        this.lastName = "Cruz";
        this.age = age;
        this.hasHobbies = true;
        this.hobbies = hobbies;
        this.address = ['Main street', 123, { state: 'São Paulo', country: 'Brazil' }];
        this.day = day;
        this.sum = sum;
    }
    return Types;
}());
var types = new Types("Anderson", 29, 5, sum, ['Jogging', 'Video Games', 'Codding']);
types.show();
