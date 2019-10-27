/*
    Decorator: In Java it's known as Annotations.
    
    Experimental support for decorators is a feature that is subject to change in a future release. 
    Set the 'experimentalDecorators' option (in tsconfig.json) to remove this warning.
*/

//This function logs the class at the console, the parameter 'constructor' is type Function because every class turns into a function UNDER THE HOOD.
const logClass = (constructor: Function) => console.log('Decorator: ', constructor);

//The logClass function is decorating the HouseholdAppliance only when the class is LOADED. This function is not called for each new instance.
@logClass
class HouseholdAppliance {
    constructor() {
        console.log('new HouseholdAppliance');
    }
}


// ******************************************************************************************************************************************************************************************************************
console.log('\n\n');

//Decorator Factory is a function that return a decorator.
const decoratorFactory = (value: boolean) => value ? logClass : (_: Function) => {};

//If we pass 'true' the function decoratorFactory() will return the decorator 'logClass'.
//If we pass 'false' the function decoratorFactory() will return only a signature for a decorator which does nothing: (_: Function) => {}
@decoratorFactory(true)
class TestDecoratorFactory {
    constructor() {
        console.log('new TestDecoratorFactory');
    }
}



// ******************************************************************************************************************************************************************************************************************
console.log('\n\n');


//Another way to decorate passing parameters.
const decoratorFactory2 = (value: boolean, obj: object, ...args: Array<number>): Function => {
    return value 
        ? (_: Function):void => {
            console.log(value) 
            console.log(obj) 
            console.log(args) 
        }
        : (_: Function):void => {};
}

@decoratorFactory2(true, { name: 'Anderson', age: 29 }, 1, 3, 4, 5, 6)
class TestDecoratorFactory2 {
    constructor() {
        console.log('new TestDecoratorFactory2');
    }
}


// ******************************************************************************************************************************************************************************************************************


console.log('\n\n');
//This is a Generic Constructor:
type GenericConstructor = { new (...args: any[]): {} };

//A decorator can also be implemented using simple function syntax:
function logObject(constructor: GenericConstructor) {
    
    console.log('Loaded!');

    //Returns a new class which inherits the parent class (in this case will be: TestDecoratorWithHeritage) that was decorated previously
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('Before calling the super Class!');
            super(...args);
            console.log('After calling the super Class!');
        }
    }
}

@logObject
class TestDecoratorWithHeritage {
    constructor() {
        console.log('new TestDecoratorWithHeritage');
    }
}

//Now in every instance, a new class is decorated.
console.log('\nFirst Instance: \n');
new TestDecoratorWithHeritage();
console.log('\nSecond Instance: \n');
new TestDecoratorWithHeritage();
console.log('\nThird Instance: \n');
new TestDecoratorWithHeritage();


// ******************************************************************************************************************************************************************************************************************


console.log('\n\n');

interface TestDecoratorWithPrototypeInterface {
    print?: () => void;
}

//Creates a decorator injecting the method 'print' prototyping.
function printable(constructor: Function) {
    
    //We can't use arrow functions here because we want the context of 'this' in run time, so 'this' will be the class that was decorated.
    constructor.prototype.print = function() {
        console.log('Print: I was injected via prototype');
        console.log('Context: ', this);
    }
}


@printable
class TestDecoratorWithPrototype implements TestDecoratorWithPrototypeInterface {
    
    //print is optional, so the safest way to deal with it is using an interface. The method print is implemeted inside de decorator 'printable'.
    print?: () => void;

    constructor() {
        console.log('new TestDecoratorWithPrototype');
    }
}

const testDP = new TestDecoratorWithPrototype();
//print is optional method, so we have to check if it exists first, and then, call it or not.
if (testDP.print) { 
    testDP.print();
}


// ******************************************************************************************************************************************************************************************************************


class CheckingAccount {
    
    //PROPERTY DECORATOR
    @onlyPositive
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    //METHOD DECORATOR
    //Protected with the writable: false, so it can be assigned
    @freeze
    cashOut(@parameterInfo value: number): boolean { //@parameterInfo: It's a Parameter decorator for the param: value
        if (value <= this.balance) {
            this.balance -= value;
            return true;
        }

        return false;
    }

    //Protected with the writable: false, so it can be assigned
    @freeze
    getBalance(): number {
        return this.balance;
    } 
}

const ca = new CheckingAccount(10248.57);
ca.cashOut(5000);
console.log(ca.getBalance());





//If we try to assign the functions with the decorator, we'll receive an error: Cannot assign to read only property 'getBalance' of object
//ca.getBalance = function() { return 0; }

//METHOD DECORATOR
function freeze(target: any, property: string, descriptor: PropertyDescriptor) {
    
    //This is a methods' decorator, based on Object.freeze(), which makes an object imutable. This function will works like this.
    //PropertyDescriptor: This is an option that allow us to defined some 'validations' for a method. It's based on 'Object.defineProperty' and used only for methods.

    console.log(target);
    console.log(property);
    descriptor.writable = false; //protect the methods which have this decorators.
}


// *****************************************************************************************



//PROPERTY DECORATOR:

const ca2 = new CheckingAccount(10248.57);
ca2.cashOut(5000);
ca2.cashOut(5248.57); //Allows to cash out all of the money at maximun.
ca2.cashOut(5248.57); //If we try to cash out some value which would cause a negative balance, the operation doesn't happen.
console.log(ca.getBalance());



function onlyPositive(target: any, property: string) {
    
    //Deletes the property of the class which has this decorator. The same property will be recreated but with another behavior.
    delete target[property];
    
    //Recreates the property deleted, but name with a getter and a setter, changing the name to _propertyName. ex: balance to _balance
    Object.defineProperty(target, property, {
        get: function():any {
            return target["_" + property]
        },
        set: function(value: any): void {
            //Applies a validation to guarantee that balance always wi'll be a positive value.
            if (value < 0)
                throw new Error('Value invalid.');
            else
                target["_" + property] = value;
        }
    })
}


// *****************************************************************************************


//PARAMETER DECORATOR:

function parameterInfo(target: any, method: string, parameterIndex: number) {
    console.log(`Target: ${target}`);
    console.log(`Method: ${method}`);
    console.log(`Index: ${parameterIndex}`);
}