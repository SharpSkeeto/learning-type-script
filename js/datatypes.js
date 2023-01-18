"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let thisString = "";
let thisUpperCaseString = "";
thisString = "This is a string";
thisUpperCaseString = thisString.toUpperCase();
console.log(`String value: ${thisString}`);
console.log(`String uppercased: ${thisUpperCaseString}`);
let thisNumber = 0;
let parsedNumber = 0;
let result = 0;
thisNumber = 100;
parsedNumber = parseInt("50");
result = thisNumber + parsedNumber;
console.log(`This ${thisNumber} plus ${parsedNumber} equals ${result}`);
let hasValue = false;
console.log(`This is the ${!hasValue} value`);
let thisStringArray;
let thisNumberArray;
thisStringArray = ["one", "two", "three", "four", "five"];
thisNumberArray = [1, 2, 3, 4, 5];
thisStringArray.push("six");
thisStringArray.pop();
;
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
let defaultExtension = 2;
console.log(`Enum value (ts): ${defaultExtension}`);
let newExtensionValue = 1;
console.log(`Enum value (js): ${newExtensionValue}`);
var FileExtensions3;
(function (FileExtensions3) {
    FileExtensions3["cs"] = "cs";
    FileExtensions3["js"] = "js";
    FileExtensions3["ts"] = "ts";
    FileExtensions3["xml"] = "xml";
    FileExtensions3["json"] = "json";
})(FileExtensions3 || (FileExtensions3 = {}));
const checkFileExtension = (extensions) => { };
const checkFileExtension2 = (extensions) => { };
const checkFileExtension3 = (extensions) => { };
checkFileExtension(2);
checkFileExtension2("cs");
checkFileExtension3(FileExtensions3.json);
let numberTuple;
let stringTuple;
let mixTuple;
numberTuple = [10, 20];
stringTuple = ["ten", "twenty"];
mixTuple = ["ten", 10, "twenty", 20];
console.log(`Number tuple: ${numberTuple}`);
console.log(`String tuple: ${stringTuple}`);
console.log(`Mixed type tuple: ${mixTuple}`);
function swapAny(arg1, arg2) {
    return [arg2, arg1];
}
function swapTyped(arg1, arg2) {
    return [arg2, arg1];
}
let swappedAnyArgs = swapAny(10, "twenty");
console.log(`Swapped tuple 'any' values [10, 'twenty']: ${swappedAnyArgs}`);
let swappedTypedArgs = swapTyped(10, 20);
console.log(`Swapped tuple 'typed' values [10, 20]: ${swappedTypedArgs}`);
let anyThing;
anyThing = "Anything is acceptable!";
console.log(anyThing);
anyThing = 1001;
console.log(`Yes, anything is acceptable: ${anyThing}`);
class UnKnownUser {
    constructor() {
        this.name = 'John';
    }
}
class NotUnKnownUser {
    constructor() {
        this.notName = 'Not John';
    }
}
const safeJSONParser = (json) => JSON.parse(json);
let instanceOfUnKnownUser = new UnKnownUser();
let unknownUserString = JSON.stringify(instanceOfUnKnownUser);
let instanceOfNotUnKnownUser = new NotUnKnownUser();
let notUnknownUserString = JSON.stringify(instanceOfNotUnKnownUser);
const parsedUnKnownUserJSON = safeJSONParser(unknownUserString);
const parsedNotUnKnownUserJSON = safeJSONParser(notUnknownUserString);
console.log('UnKnownUser parsed JSON:');
console.log(parsedUnKnownUserJSON);
console.log('NotUnKnownUser parsed JSON:');
console.log(parsedNotUnKnownUserJSON);
checkUnKnownType(parsedUnKnownUserJSON);
checkUnKnownType(parsedNotUnKnownUserJSON);
function checkUnKnownType(json) {
    if (IsUserTypeUnKnownUser(json)) {
        console.log(`Is type of UnKnownUser: true, UnKnownUser is: ${json.name}`);
    }
    else {
        console.log('Is type of UnKnownUser: false, this is not the UnKnownUser class');
    }
}
function IsUserTypeUnKnownUser(object) {
    if (object !== null && typeof object === 'object') {
        return "name" in object;
    }
    return false;
}
console.log();
