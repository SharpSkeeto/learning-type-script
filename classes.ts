/***** classes *****/
// TypeScript classes provides default constructor.
// TypeScript does not allow multiple constructors.

// default constructor
class Animal {
    id!: number;
    name!: string;
    species!: string;
}

let tabbyCat = new Animal();
tabbyCat.id = 1;
tabbyCat.name = "Tabby";
tabbyCat.species = "Feline";

console.log("Simple class declaration (default constructor)");
console.log(tabbyCat);
console.log(`Tabby Cat Id: ${tabbyCat.id}`);
console.log(`Tabby Cat Name: ${tabbyCat.name}`);
console.log(`Tabby Cat Species: ${tabbyCat.species}`);
console.log();

// class with constructor
// can use # for readonly property access modifier
// protected keyword for properties accessible to the class and inherited classes
class Vehicle {
    protected externalid: number;
    #internalId: number;
    model: string;
    private type: string;

    // getter for readonly property internalId
    get GetId(): number {
        return this.#internalId;
    }

    // setter for private property type
    set SetType(value: string) {
        this.type = value;
    }

    // constructor
    constructor(internalId: number, externalId: number, model: string, type: string) {
        this.externalid = externalId;
        this.#internalId = internalId;
        this.model = model;
        this.type = type;
    }

    // class function
    getVehicleModel(): string {
        return `The vehicle model is ${this.model}`;
    }
}

// create instance populating constructor and call class method
let vehicle = new Vehicle(4567, 1, "Mustang GT", "Sports Car");
console.log("Class declaration (with constructor):");
console.log(vehicle);
console.log(vehicle.getVehicleModel());
console.log();

// New Sedan class that inherits from Vehicle
// Implements a static method getDealershipInventoryCount()
class Sedan extends Vehicle {
    constructor(internalId: number, externalId: number, model: string, type: string) {
        super(internalId, externalId, model, type)
    }

    static getDealershipInventoryCount(): number {
        return 4;
    }

    getVehicleModel(): string {
        return `The sedan model is ${this.model}`;
    }
}

let tesla = new Sedan(1234, 2, "Model S Plaid", "Sedan");
console.log(tesla);
console.log(`Sedan model: ${tesla.getVehicleModel()}`);
// retrieve internal id from getter property GetId
console.log(`Internal Id of sedan record: ${tesla.GetId}`);
// set/change type on Sedan instance
tesla.SetType = "Fullsize Sports Sedan"
console.log(tesla);
// call static method from class
console.log(`Number of sedans at dealership: ${Sedan.getDealershipInventoryCount()}`);
console.log();







