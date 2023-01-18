/***** classes & types *****/
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

// abstract class
// can not create and instance of this class, only can inherit from
abstract class AbstractExampleClass {

    protected first: number;
    protected second: number;

    constructor(
        firstArg: number,
        secondArg: number
    ) {
        this.first = firstArg;
        this.second = secondArg;
    }

    // needs to be implemented by inherited class
    abstract add(): number;
    // implemented method in abstract
    getFirstNumber(): number {
        return this.first;
    }
}

// produced error if uncommented
//let abstractClass = new AbstractExampleClass(1,2);
// inherit it instead
class InheritFromAbstract extends AbstractExampleClass {
    constructor(firstArg: number, secondArg: number) {
        super(firstArg, secondArg)
    }
    add(): number {
        return this.first + this.second;
    }
    // implemented method in class that inherited from abstract
    // abstract was missing this method
    getSecondNumber(): number {
        return this.second;
    }
}

let AddMethodResult = new InheritFromAbstract(1, 2).add();
let InheritExample1 = new InheritFromAbstract(1, 2).getFirstNumber();
let InheritExample2 = new InheritFromAbstract(1, 2).getSecondNumber();

console.log(`Call 'add' method from implemented abstract class - result: ${AddMethodResult}`)

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

/**** intersection type example *****/
type MovieTitle = {
    title: string;
}
type MovieRelease = {
    release: Date;
}
// combine two or more types to make one, intersect
type MovieMetaData = MovieTitle & MovieRelease;

function getMovieDetail(): MovieMetaData {
    return { title: 'Jaws', release: new Date(1975, 5, 20) };
}
console.log(getMovieDetail());

//***** union type, infer two or more types with an or '|' *****/
type MovieUnionTypeExample = MovieTitle | MovieRelease;

// another example of union types in argument
function getSomeThing(someType: MovieUnionTypeExample): string {
    console.log('getSomeThing argument:');
    console.log(someType);
    // union narrowing a custom type, example
    if ((someType as MovieTitle).title) {
        return `Movie title is: ${(someType as MovieTitle).title}`;
    }
    if ((someType as MovieRelease).release) {
        return `Movie title is: ${(someType as MovieRelease).release}`;
    }
    return 'Umm... something wrong.';
}
getSomeThing({ title: 'Jaw II' });
getSomeThing({ release: new Date(1978, 5, 16) });

export { }





