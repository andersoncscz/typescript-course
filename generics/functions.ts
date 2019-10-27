/*
    Functions can also be generics like below. This functions is type T, receives an argument type T, and return a value type T.
    T is a generic type because the function can receive different types (number, string, object...).
*/

const echo = <T>(arg: T): T => {
    return arg;
}

//The type of T is defined when we call the function.
console.log(echo<string>('Anderson').length); //T will be of type string.
console.log(echo<number>(29)); //T will be  of type number.
console.log(echo<object>({ name: 'Anderson', age: 29 })); //T will be of type object