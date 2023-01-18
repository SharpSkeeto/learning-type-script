/***** operators / keywords *****/
// 'is' keyword, type predicates, type guards

type Hobbies = "fishing" | "hunting";

interface Hobby {
    hobbies: Hobbies
}

class Fishing implements Hobby {
    hobbies: Hobbies = "fishing";
    castReel(): void {
        console.log("This hobby requires a fishing rod/reel to cast!");
    }
}

class Hunting implements Hobby {
    hobbies: Hobbies = "hunting";
    inDeerStand(): void {
        console.log("Patiently waiting for a deer...");
    }
}

// type predicate
// 'hobby is Fishing' is the type predicate
function isFishing(hobby: Hobby): hobby is Fishing {
    return hobby.hobbies === 'fishing';
}

function isHunting(hobby: Hobby): hobby is Hunting {
    return hobby.hobbies === 'hunting';
}

const h1: Hobby = new Fishing();
const h2: Hobby = new Hunting();

if (isFishing(h1)) {
    h1.castReel();
}
if (isHunting(h2)) {
    h2.inDeerStand();
}

console.log();


// type guard 'typeof'
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

let paddedString = padLeft(5, "pad this string.");
console.log(paddedString);

paddedString = padLeft("-----", "pad this string.");
console.log(paddedString);




console.log();

