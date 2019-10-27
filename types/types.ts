//enum is collection with ordered elements. It's usefull when you want to know if some element of the enum correponds
enum DaysOfWeek {
    SUN, //0
    MON, //1
    TUE, //2
    WED, //3,
    THU, //4,
    FRI, //5,
    SAT, //6
}

const sum = (x: number, y: number): number => x + y;

class Types {
    
    //String
    name: string;
    lastName = ""; //Accepts only a string, because it was initialize with a string (implicit typing).
    
    //Number
    age: number; //Accepts only a number

    //Boolean
    hasHobbies: boolean; //Accepts only a boolean value
    
    //Arrays of types
    hobbies: string[] = []; //Accepts only an array of strings
    
    //Tuples
    address: [string, number, object]; //Accepts an array of different types. The elements needs to be the type they were defined.

    day: DaysOfWeek;

    //Typed functions:
    //sum has to be a function with this assignature and with return type as number;
    sum: (x: number, y: number) => number;


    constructor(name: string, age: number, day: number, sum: (x: number, y: number) => number, hobbies: string[]) {
        this.name = name;
        
        this.lastName = "Cruz"; //this.lastName = 12; //lastName was defined as string automatically because it received a string in its initialization. So any other type will show an error.
        
        this.age = age;
        
        this.hasHobbies = true;
        
        this.hobbies = hobbies;

        this.address = ['Main street', 123, { state: 'São Paulo', country: 'Brazil' }]; //This tuple needs to obey the types and order defined previously

        this.day = day;

        this.sum = sum;

    }

    //This function does not have a return value, it's just print some information, so its return type is void.
    show = (): void => {
        
        console.log('name:', `${this.name} ${this.lastName}`);
        console.log('age:', this.age);
        console.log('has Hobbies:', this.hasHobbies);

        console.log(' \nHobbies:');
        this.hobbies.map(hobbie => console.log(hobbie));
            
        console.log('\nAddress:');
        this.address.map(address => console.log(address));

        console.log('\nDay of week:');
        if (DaysOfWeek.FRI === this.day)
            console.log('Its Friday, lets drink something after work.');
        else
            console.log('Im looking forward to the holiday.'); 

        console.log('sum:',this.sum(5, 5));
    }

    //A function wich returns a string, any other type will show an error.
    showName = (): string => {
        //return this.age; //it's show an error, because age is a number, and this function must returns a string value.
        return this.name;
    }
}

const types = new Types("Anderson", 29, 5, sum, ['Jogging', 'Video Games', 'Codding']); //It works fine.
types.show();

