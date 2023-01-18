"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumbers(number1, number2) {
    return number1 + number2;
}
console.log(`Adding numbers with named declaration: ${addNumbers(1, 2)}`);
const addNumbersArrow = (number1, number2) => number1 + number2;
console.log(`Adding numbers with arrow declaration: ${addNumbersArrow(3, 4)}`);
const addNumbersExpression = function (number1, number2) {
    return number1 + number2;
};
console.log(`Adding numbers with expression declaration: ${addNumbersExpression(5, 6)}`);
function getItems(items) {
    return new Array().concat(items);
}
const getMoreItems = (items) => {
    return new Array().concat(items);
};
const getItem = (id, items) => {
    let found = items.find((i) => i === id);
    return found !== null && found !== void 0 ? found : -1;
};
let answer = getItem(42, [1, 2, 3, 4, 5, 6, 7, 8, 9, 42]);
console.log(`This answer is: ${answer}`);
function getAnotherItem(myNumber) {
    return myNumber;
}
const addNumbersArrowOptional = (number1, number2, number3) => number3 ? number1 + number2 + number3 : number1 + number2;
console.log(`Adding numbers with an optional argument: ${addNumbersArrowOptional(3, 4)}`);
console.log(`Adding numbers with a populated optional argument:  ${addNumbersArrowOptional(3, 4, 1)}`);
const addNumbersArrowOptionalDefault = (number1, number2, number3 = 3) => number1 + number2 + number3;
console.log(`Adding numbers with an optional defaulted argument: ${addNumbersArrowOptionalDefault(3, 4)}`);
console.log(`Adding numbers with a populated optional argument: ${addNumbersArrowOptionalDefault(3, 4, 8)}`);
const addNumbersArrowRest = (...numbers) => numbers.reduce((total, current) => total + current);
console.log(`Calculating the sum with rest argument: ${addNumbersArrowRest(...[1, 2, 3, 4, 5])}`);
console.log(`Calculating the sum with rest argument (passing array): ${addNumbersArrowRest(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);
let numberGenericResult = getItems([1, 2, 3, 4, 5]);
console.log(`Getting numbers with generic declaration: ${numberGenericResult}`);
let stringGenericResult = getItems(["a", "b", "c", "d", "e"]);
console.log(`Getting strings with generic declaration: ${stringGenericResult}`);
function noop() {
    return;
}
const noop2 = () => { };
const voidResult = noop();
console.log(`Return void type from 'noop' function: ${voidResult}`);
function logInfo(message) {
    console.log(`Log message: ${message}`);
}
logInfo('Logging some irrelevant information');
function IHaveFailed(failedMessage) {
    throw new Error(failedMessage);
}
function fn(x) {
    if (typeof x === "string") {
    }
    else if (typeof x === "number") {
    }
    else {
        x;
    }
}
function GetProductById(id) {
    return { id: 1, name: 'shoe lace' };
}
let myProductItem = GetProductById(1);
console.log(`Procduct Name: ${myProductItem.name}`);
let anotherStringArray = numberGenericResult.map((number) => {
    return `${number}`;
});
console.log(anotherStringArray);
console.log();
