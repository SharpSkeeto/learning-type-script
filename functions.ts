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
// arrow generic declaration
const getMoreItems = <Type>(items: Array<Type>): Array<Type> => {
    return new Array<Type>().concat(items);
}
// arrow generic getItem from array
const getItem = <Type>(id: Type, items: Array<Type>): Type => {
    let found = (items.find((i) => i === id) as Type);
    return found ?? (-1 as Type);   // or incase not found/null:  ?? id
}
let answer = getItem(42, [1,2,3,4,5,6,7,8,9,42]);
console.log(`This answer is: ${answer}`);

// limit generic argument types, simple example, not a good practice, just use number type :)
function getAnotherItem<Type extends number>(myNumber: Type): Type {
    return myNumber;
}
// getAnotherItem("1");  <-- throws argument type error

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

/***** void return type *****/
// void represents the return value of functions which don’t return a value.
// The inferred return type is void
function noop() {
    return;
}
// or
const noop2 = () => { };

const voidResult = noop();
console.log(`Return void type from 'noop' function: ${voidResult}`);

// When a literal function definition has a void return type, that function must not return anything.
function logInfo(message: string): void {
    // expect-error directive
    //// @ts-expect-error 
    console.log(`Log message: ${message}`)
    //return true;  <-- will show error
}

logInfo('Logging some irrelevant information');


/***** never *****/
// Represents values which are never observed.
function IHaveFailed(failedMessage: string): never {
    throw new Error(failedMessage);
}

// uncomment to observe error stack
// IHaveFailed('1 / 0');  

function fn(x: string | number): void {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {  // should 'never' get here
        x; // has type 'never'!
    }
}

//***** custom type return *****/
// type: ProductItem
type ProductItem = {
    id: number;
    name: string;
}
// return type ProductItem
function GetProductById(id: number): ProductItem {
    return {id: 1, name: 'shoe lace'};
}

let myProductItem = GetProductById(1);
console.log(`Procduct Name: ${myProductItem.name}`);

// More on return types
// for loop returning string representation of a number array
let anotherStringArray = numberGenericResult.map((number) : string => {
    return `${number}`;
    //return number;  // <-- this will show an error
})

console.log(anotherStringArray);

console.log();
export { }









