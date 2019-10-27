/* 
    
    HERITAGE: use extends to inherit methods and properties.
    
    ACCESS MODIFIERS:
        public (default): Visible for everything.
        protected: Visible for the class and its children.
        private: Visible only for the class.
        readonly: this property can only be read, not assign.

    GETTER - SETTERS: Useful when only the class has the responsability to access some property, specialty when you have some logic to get or set it.

    ABSTRACT: 
        Abstract classes: They can't be instantiated. They serve like a model for its children. They may have both kinds of methods: abstracts or not.
        Abstract methods: They're defined in father classes, but must to be implemented in their children.

    
*/
abstract class Vehicle {
    
    readonly factoryID: number;
    protected turboActivated: boolean = false;
    
    constructor(
        protected year: number, 
        protected color: string, 
        private _horsePower: number, 
        protected hasTurbo: boolean, 
        protected hasAutoPark: boolean
    ) {
        this.factoryID = Math.random();
    }

    accelerate = (): void => console.log('Vrummm!');

    brake = (): void => console.log('Irrrrr!');

    //Getter and Setter
    get horsePower(): number {
        //Returns the horsePower, but with some logic applied, if turbine is on, returns horsePower + 100.
        return !this.turboActivated ? this._horsePower : this._horsePower + 100;
    }

    set horsePower(horsePower: number) {
        //Validates if the horsePower received is positive before set it.
        if (horsePower >= 0) {
            this._horsePower = horsePower;
        }
    }

    //Abstract method: These methods must to be implemented for its children.
    abstract toggleTurbine = (): void => {}
    abstract autoPark = (): void => {}

}

//Heritage: Ferrari has its own methods and properties, and those that were inherited from its "father" class: Vehicle.
class Car extends Vehicle {

    constructor(
        year: number, 
        color: string, 
        horsePower: number, 
        hasTurbo: boolean, 
        hasAutoPark: boolean,
        protected brand: string, 
        protected model: string) {
        //Calls the constructor from its "father": Vehicle
        super(year, color, horsePower, hasAutoPark, hasTurbo);
    }

    toggleTurbine = (): void => {
        this.hasTurbo ? this.turboActivated = !this.turboActivated : console.log('TURBO: Sorry. This model doesnt have this funcionality');
    }

    autoPark = (): void => {
        this.hasAutoPark ? console.log('AUTO-PARK: Please, take your hands out of the wheel. Auto park activated.') : console.log('AUTO-PARK: Sorry. This model doesnt have this funcionality');
    }
}


const car = new Car(2019, 'red', 350, true, true, 'Ferrari', '458 Italia');

console.log(`
    Its a Ferrari, Factory ID: ${car.factoryID}
`);
car.horsePower = -150; //It's not going to happen because there's a validation on setter method horsePower which allows only number >= 0.
console.log('HorsePower: ', car.horsePower);
car.horsePower = 450; //It works fine because 450 passes on setter method validation.
console.log('HorsePower: ', car.horsePower);
car.toggleTurbine();
console.log('HorsePower + Turbo ON: ', car.horsePower);

car.accelerate();
car.brake();
car.autoPark();


const popularCar = new Car(2019, 'red', 150, false, false, 'Volkswagem', 'Jetta');
console.log(`
    Its a popular car, Factory ID: ${popularCar.factoryID} 
`);
console.log('HorsePower:', popularCar.horsePower);
popularCar.toggleTurbine();
console.log('HorsePower + Turbo:', popularCar.horsePower);
popularCar.accelerate();
popularCar.brake();
popularCar.autoPark();