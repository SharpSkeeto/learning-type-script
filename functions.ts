/***** functions *****/
/***** method 1: Named declaration *****/
// function name(arguments) : return type { }
function addNumbers(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(`Adding numbers with named declaration: ${addNumbers(1, 2) }`);

/***** method 2: arrow declaration *****/
const addNumbersArrow = (number1: number, number2: number): number => number1 + number2;
console.log(`Adding numbers with arrow declaration: ${addNumbersArrow(3, 4)}`);

/***** method 3: expression declaration *****/
const addNumbersExpression = function (number1: number, number2: number): number {
    return number1 + number2;
}
console.log(`Adding numbers with expression declaration: ${addNumbersExpression(5, 6)}`);

/***** method 4: generic declaration *****/
function getItems<Type>(items: Array<Type>): Array<Type> {
    return new Array<Type>().concat(items);
}

/***** Example function results *****/
// optional parameters: use ? after argument (arrow declaration for reference)
const addNumbersArrowOptional = (number1: number, number2: number, number3?: number): number => number3 ? number1 + number2 + number3 : number1 + number2;
console.log(`Adding numbers with an optional argument: ${addNumbersArrowOptional(3, 4) }`);
console.log(`Adding numbers with a populated optional argument:  ${addNumbersArrowOptional(3, 4, 1) }`);

// optional default argumets: assign defulat value (arrow declaration for reference)
const addNumbersArrowOptionalDefault = (number1: number, number2: number, number3: number = 3): number => number1 + number2 + number3;
console.log(`Adding numbers with an optional defaulted argument: ${addNumbersArrowOptionalDefault(3, 4)}`);
console.log(`Adding numbers with a populated optional argument: ${addNumbersArrowOptionalDefault(3, 4, 8)}`);

// array or rest arguments (arrow declaration for reference)
const addNumbersArrowRest = (...numbers: Array<number>): number => numbers.reduce((total, current) => total + current);
// pass by array / array variable
console.log(`Calculating the sum with rest argument: ${addNumbersArrowRest(...[1, 2, 3, 4, 5])}`);
// pass by nth numbers
console.log(`Calculating the sum with rest argument (passing array): ${addNumbersArrowRest(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);

// generic function results
let numberGenericResult = getItems<number>([1,2,3,4,5]);
console.log(`Getting numbers with generic declaration: ${numberGenericResult}`);
let stringGenericResult = getItems<string>(["a","b","c","d","e"]);
console.log(`Getting strings with generic declaration: ${stringGenericResult}`);
console.log();











