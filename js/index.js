"use strict";
console.log('Hello from TypeScript');
const element = document.querySelector('#hello-div');
console.log(`div element is ` + element);
element === null || element === void 0 ? void 0 : element.append('This is the TypeScript learning index page.');
