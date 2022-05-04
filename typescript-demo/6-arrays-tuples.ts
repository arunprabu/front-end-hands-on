
let myArr1: number[] = [10, 20, 30]; // array of numbers
let myArr2: Array<number> = [10, 20, 30]; // array of numbers

let myArr3: any[] = ["a", "b", true, 100, {}, []];
myArr3 = [ 300, 400 ]; //will work

let myArr4: Array<any> = ["a", "b", true, 100, {}, []];

// Check the following example -- Tuple
// This is Tuple. Tuple is a data structure consisting of multiple parts.
let myArr5: [number, string] = [123, "ABC"];
// myArr5 = ["ABC", 123]; // will throw an error as the array element should match the data type specified.
myArr5 = [2421414321312, "rtweter"]; // this will work