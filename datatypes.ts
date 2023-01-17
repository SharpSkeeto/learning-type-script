/* 
JavaScript syntax
let thisString = "This is a string";
*/

// Be sure to default variablea at declaration.
// 'use strict' is true by default in tsconfig.json
// This will avoid errors at compile time or unexpected behaviors in JavaScript at runtime.


/***** strings *****/
let thisString: string = "";
let thisUpperCaseString: string = "";

thisString = "This is a string";
thisUpperCaseString = thisString.toUpperCase();
console.log(`String value: ${thisString}`);
console.log(`String uppercased: ${thisUpperCaseString}`);


/***** numbers *****/
let thisNumber: number = 0;
let parsedNumber: number = 0;
let result: number = 0;

thisNumber = 100;
parsedNumber = parseInt("50");
result = thisNumber + parsedNumber;

console.log(`This ${thisNumber} plus ${parsedNumber} equals ${result}`);


/*****  booleans *****/
let hasValue: boolean = false;
// flip the boolean value with ! 
console.log(`This is the ${!hasValue} value`);


/***** arrays *****/
let thisStringArray: string[];
// generics declaration
let genericsNumberArray: Array<number>;

thisStringArray = ["one", "two", "three", "four", "five"];
genericsNumberArray = [1, 2, 3, 4, 5];

console.log(`String array: ${thisStringArray}`);
let foundSecondString = thisStringArray.find((num) => num === 'two');
console.log(`The second value of the array is: ${foundSecondString}`);

console.log(`Number array: ${genericsNumberArray}`);
let foundThirdNumber = genericsNumberArray.find((num) => num === 3);
console.log(`The third value of the array is: ${foundThirdNumber}`);
let sumOfNumbers = genericsNumberArray.reduce((total, current) => total + current);
console.log(`The sum of the array is: ${sumOfNumbers}`);
let minNumber = Math.min(...genericsNumberArray);
console.log(`The lowest number value of the array is: ${minNumber}`);
let maxNumber = Math.max(...genericsNumberArray);
console.log(`The highest number value of the array is: ${maxNumber}`);
let averageNumber = genericsNumberArray.reduce((total, current) => total + current) / genericsNumberArray.length;
console.log(`The average number value of the array is: ${averageNumber}`);

/***** enums *****/
// When using the keyword 'const', this will remove the generated (function()) code from the JavaScript file.
const enum FileExtensions {
    cs,
    js,
    ts,
    xml,
    json
}

// enum 
let defaultExtension: FileExtensions = FileExtensions.ts;
console.log(`Enum value (ts): ${defaultExtension}`);
let newExtensionValue = FileExtensions.js;
console.log(`Enum value (js): ${newExtensionValue}`);


/***** tuples *****/
let numberTuple: [firstNumber: number, secondNumber: number];
let stringTuple: [firstString: string, secondString: string];
let mixTuple: [firstString: string, firstNumber: number, secondString: string, secondNumber: number];

numberTuple = [10, 20];
stringTuple = ["ten", "twenty"];
mixTuple = ["ten", 10, "twenty", 20];

console.log(`Number tuple: ${numberTuple}`);
console.log(`String tuple: ${stringTuple}`);
console.log(`Mixed type tuple: ${mixTuple}`);

// untyped function
function swapAny(arg1: any, arg2: any): [any, any] {
    return [arg2, arg1];
}
// typed tuple
function swapTyped(arg1: number, arg2: number): [number, number] {
    return [arg2, arg1];
}

let swappedAnyArgs = swapAny(10, "twenty");
console.log(`Swapped tuple 'any' values [10, 'twenty']: ${swappedAnyArgs}`);
let swappedTypedArgs = swapTyped(10, 20);
console.log(`Swapped tuple 'typed' values [10, 20]: ${swappedTypedArgs}`);

// any (try to avoid), set the noImplicitAny flag to true in tsconfig to enforce.
let anyThing: any;
anyThing = "Anything is acceptable!";
console.log(anyThing);
anyThing = 1001; // even a number
console.log(`Yes, anything is acceptable: ${anyThing}`);


/***** unknown *****/
// This is similar to the 'any' type, but is safer because it’s not legal to do anything with an unknown value
interface IUnKnownUser {
    name: string;
}
class UnKnownUser implements IUnKnownUser {
    name: string = 'John';
}
interface INotUnKnownUser {
    notName: string;
}
class NotUnKnownUser implements INotUnKnownUser {
    notName: string = 'Not John';
}

// Simulate API call with above dummy models
let instanceOfUnKnownUser = new UnKnownUser();
let unknownUserString = JSON.stringify(instanceOfUnKnownUser);
let instanceOfNotUnKnownUser = new NotUnKnownUser();
let notUnknownUserString = JSON.stringify(instanceOfNotUnKnownUser);

const parsedUnKnownUserJSON: unknown = safeParse(unknownUserString);
const parsedNotUnKnownUserJSON: unknown = safeParse(notUnknownUserString);
let isUnKnownUserType = IsUserTypeUnKnownUser(parsedUnKnownUserJSON);

console.log('UnKnownUser parsed JSON:');
console.log(parsedUnKnownUserJSON);
console.log('NotUnKnownUser parsed JSON:');
console.log(parsedNotUnKnownUserJSON);

checkUnKnownType(parsedUnKnownUserJSON);
checkUnKnownType(parsedNotUnKnownUserJSON);

function checkUnKnownType(someJSON: unknown) {
    if (IsUserTypeUnKnownUser(someJSON)) {
        // can see properties of the 'unknown' type
        console.log('Is type of UnKnownUser: true');
        console.log(`UnKnownUser is: ${someJSON.name}`);
    } else {
        console.log('Is type of UnKnownUser: false');
    }
}

// Make sure to return booelean based on object type
function IsUserTypeUnKnownUser(object: unknown): object is IUnKnownUser {
    if (object !== null && typeof object === 'object') {
        // can cast if needed for value checking
        // let localName = (object as IUnKnownUser).name;
        return "name" in object;
    }
    return false;
}

function safeParse(s: string): unknown {
    return JSON.parse(s);
}


/***** void *****/
// void represents the return value of functions which don’t return a value.
// The inferred return type is void
function noop() {
    return;
}

// In TypeScript void is not the same as undefined
// When a literal function definition has a void return type, that function must not return anything.
function f2(): void {
    // @ts-expect-error
    return true;
}


/***** never *****/
// Represents values which are never observed.
function IHaveFailed(failedMessage: string): never {
    throw new Error(failedMessage);
}

function fn(x: string | number): void {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // has type 'never'!
    }
}

console.log();






















