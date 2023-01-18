"use strict";
class Fishing {
    constructor() {
        this.hobbies = "fishing";
    }
    castReel() {
        console.log("This hobby requires a fishing rod/reel to cast!");
    }
}
class Hunting {
    constructor() {
        this.hobbies = "hunting";
    }
    inDeerStand() {
        console.log("Patiently waiting for a deer...");
    }
}
function isFishing(hobby) {
    return hobby.hobbies === 'fishing';
}
function isHunting(hobby) {
    return hobby.hobbies === 'hunting';
}
const h1 = new Fishing();
const h2 = new Hunting();
if (isFishing(h1)) {
    h1.castReel();
}
if (isHunting(h2)) {
    h2.inDeerStand();
}
console.log();
function padLeft(padding, input) {
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
