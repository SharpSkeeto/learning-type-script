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
console.log(`Yes, anything is accepable: ${anyThing}`);


/***** void *****/


/***** never *****/



console.log();






















