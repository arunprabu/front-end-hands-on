// all imports should always be on top 
const fs = require('fs'); // importing core nodejs module 

const react = require('react');  // importing from third party node_modules

const calc = require('./calc'); // custom import -- importing my own module

console.log("Hello from npm demo");

const x = 10;

console.log(x);

console.log(calc);

console.log(calc.add(10, 20)); // accessing a method from my custom module

