//An interface works like a contract, which has to be respected.
interface PersonInterface {

    age: number;
    sex: string;
    weight: number;
    height: number;

    greet: () => void;
    sleep: () => void;
    wakeup: () => void;
}

//The class that assigns this contract, must to obey its rules, in this case, the class needs to have properties and methods defined in PersonInterface.
class Person implements PersonInterface {

    constructor(
        public age: number, 
        public sex: string, 
        public weight: number, 
        public height: number) {

        
    }

    greet = (): void => console.log('Hello!');
    sleep = (): void => console.log('ZZzzzZZZZzzzZZZ!');
    wakeup = (): void => console.log('Common, really?');
}

const person = new Person(29, 'M', 89, 173);

person.greet();
person.sleep();
person.wakeup();
/* 
    ************************************************************************************************************************************************************************************************
*/
//Functions also can implement an interface:
interface CircumferenceInterface {
    (radius: number): number;
}

interface RectangleInterface {
    (base: number, height: number): number;
}

//Bouth functions must to respect the interface:
const circumference: CircumferenceInterface = (radius: number): number => 3.14 * radius ** 2;
const rectangle: RectangleInterface = (base: number, height: number): number => base * height;

console.log('Circumference:', circumference(10));
console.log('Rectangle:', rectangle(2, 8));
/* 
    ************************************************************************************************************************************************************************************************
*/

//Heritage with interfaces:
interface A {
    a: () => void;
}

interface B {
    b: () => void;
}

interface ABC extends A, B {
    //This interface is a child of interfaces A and B, then, a class that implements this interface (ABC) will have to implement what came from heritage: methods a and b.
    c: () => void;
}

//This class must to implement both interfaces: A and B
class RealAB implements A, B {
    a = (): void => console.log('method a implemented');
    b = (): void => console.log('method b implemented');    
}

//This class must to implement the interfaces: ABC, which has methods: a, b and c, where b, c came from its 'parents': Interfaces A, B
class RealABC implements ABC {
    a = (): void => console.log('method a implemented');
    b = (): void => console.log('method b implemented');
    c = (): void => console.log('method c implemented');  
}
//In typescript abstract classes MUST TO implement everything that a interface has. This behavior doesnt exist in JAVA, but in typescript we have to do it.
abstract class AbstractABC implements A, B {
    a = ():void => {}; //It's obligatory here.
    b = ():void => {}; //It's obligatory here.
    abstract c = ():void => {};
}

class Test extends AbstractABC {
    //But here, we don't need to implement 'a' and 'b'. The abstract class had to. a, b will only be obligatory here, if they were abstract methods too.
    c = (): void => console.log('Test class!');
}