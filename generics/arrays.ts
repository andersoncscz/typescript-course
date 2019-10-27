//The line bellow will tell us to specify wich type the array should be. Arrays are generics by default in typescript: Generic type 'Array<T>'
const ratingsString: Array<string> = [];
const ratingsNumber: Array<number> = [];

ratingsNumber.push(1);
//ratingsNumber.push('1'); //It's not going to work, our array is type number.
ratingsNumber.push(2);
ratingsNumber.push(3);


//ratingsString.push(1); //show an error.
ratingsString.push('1');
ratingsString.push('2');
ratingsString.push('3');


//This function is generic, it prints the elements of an array. It can be generic because we don't know which type the array will be.
const printArray = <T>(args: T[]): T[] => {
    args.map(item => console.log(item));
    return args;
}

//This function will work for all types of array.
console.log('Printing a array type <number>: \n');
printArray(ratingsNumber);

console.log('\nPrinting a array type <string>: \n');
printArray(ratingsString);


//This function is prepared to receive only an array of numbers, so any other type will show an error.
const printArrayOfNumbers = (args: number[]): void => {
    args.map(item => console.log(item));
}

console.log('\nPrinting a array type <number>: \n');
//printArrayOfNumbers(ratingsString); //This won't work, because the array passed is type string
printArrayOfNumbers(ratingsNumber);