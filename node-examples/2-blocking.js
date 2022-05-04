// Demo of Blocking I/O or Sync I/O
const fs = require("fs"); // File System Module / Package

console.log("Program Started");

const data = fs.readFileSync("sample.txt");     // blocking I/O
console.log(data.toString());

console.log("Program Ended");