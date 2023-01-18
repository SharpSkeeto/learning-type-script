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
let thisNumberArray: Array<number>;

thisStringArray = ["one", "two", "three", "four", "five"];
thisNumberArray = [1, 2, 3, 4, 5];

// append to end of array, returns indexed number
thisStringArray.push("six");
// remove last element, returns typed value
thisStringArray.pop();;

console.log(`String array: ${thisStringArray}`);
let foundSecondString = thisStringArray.find((num) => num === 'two');
console.log(`The second value of the array is: ${foundSecondString}`);

console.log(`Number array: ${thisNumberArray}`);
let foundThirdNumber = thisNumberArray.find((num) => num === 3);
console.log(`The third value of the array is: ${foundThirdNumber}`);
let sumOfNumbers = thisNumberArray.reduce((total, current) => total + current);
console.log(`The sum of the array is: ${sumOfNumbers}`);
let minNumber = Math.min(...thisNumberArray);
console.log(`The lowest number value of the array is: ${minNumber}`);
let maxNumber = Math.max(...thisNumberArray);
console.log(`The highest number value of the array is: ${maxNumber}`);
let averageNumber = thisNumberArray.reduce((total, current) => total + current) / thisNumberArray.length;
console.log(`The average number value of the array is: ${averageNumber}`);

/***** enums *****/
// When using the keyword 'const', this will remove the generated (function()) code from the JavaScript file.
// but aboid using number based enums, see below
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

/**** another way to handle enum type, non-number based *****/
// types
type FileExtensions2 = "cs" | "js" | "ts" | "xml" | "json";
//or string based
enum FileExtensions3 {
    cs = "cs",
    js = "js",
    ts = "ts",
    xml = "xml",
    json = "json"
}

const checkFileExtension = (extensions: FileExtensions) => { };
const checkFileExtension2 = (extensions: FileExtensions2) => { };
const checkFileExtension3 = (extensions: FileExtensions3) => {};

checkFileExtension(FileExtensions.ts);
checkFileExtension2("cs");
checkFileExtension3(FileExtensions3.json);


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

//***** any *****/
// 'any' (try to avoid), set the noImplicitAny flag to true in tsconfig to enforce.
// 'any' is not typed-checked and TypeScript can not infer from context
let anyThing: any;
anyThing = "Anything is acceptable!";
console.log(anyThing);
anyThing = 1001; // even a number
console.log(`Yes, anything is acceptable: ${anyThing}`);


/***** unknown *****/
// Similar to the 'any' type, but is safer because it’s not legal to do anything with an unknown value
// 'any' allows for ambiguity - 'unknown' requires specifics
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

// json Parser definition
// Simulate API call with above dummy models
const safeJSONParser = (json: string): unknown => JSON.parse(json);

let instanceOfUnKnownUser = new UnKnownUser();
let unknownUserString = JSON.stringify(instanceOfUnKnownUser);
let instanceOfNotUnKnownUser = new NotUnKnownUser();
let notUnknownUserString = JSON.stringify(instanceOfNotUnKnownUser);
// json into a class model unknown type
const parsedUnKnownUserJSON: unknown = safeJSONParser(unknownUserString);
const parsedNotUnKnownUserJSON: unknown = safeJSONParser(notUnknownUserString);

console.log('UnKnownUser parsed JSON:');
console.log(parsedUnKnownUserJSON);
console.log('NotUnKnownUser parsed JSON:');
console.log(parsedNotUnKnownUserJSON);

checkUnKnownType(parsedUnKnownUserJSON);
checkUnKnownType(parsedNotUnKnownUserJSON);

function checkUnKnownType(json: unknown) {
    if (IsUserTypeUnKnownUser(json)) {
        // can see properties of the 'unknown' type
        console.log(`Is type of UnKnownUser: true, UnKnownUser is: ${json.name}`);
    } else {
        console.log('Is type of UnKnownUser: false, this is not the UnKnownUser class');
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

console.log();

export { }






















