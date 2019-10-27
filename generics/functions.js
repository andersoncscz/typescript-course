"use strict";
var echo = function (arg) {
    return arg;
};
console.log(echo('Anderson').length);
console.log(echo(29));
console.log(echo({ name: 'Anderson', age: 29 }));
