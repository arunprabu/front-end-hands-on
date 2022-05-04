// export data
// Refer: module2.js  for both named exports and default export
export var color = "red"; // named exports
let name = "Nicholas";
const magicNumber = 7;

// function
export function sum(num1, num2) {
    return num1 + num1;
}

// class
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// this function is private to the module
function subtract(num1, num2) {
    return num1 - num2;
}

// define a function...
function multiply(num1, num2) {
    return num1 * num2;
}

export default multiply;