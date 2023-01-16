"use strict";
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
console.log();
