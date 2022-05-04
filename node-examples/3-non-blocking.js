// Demo of Non-Blocking I/ or Async I/O
const fs = require("fs"); // File System Module

console.log("Program Started");

fs.readFile("example.txt", 'utf8', (err, data) => {
  if(!err){
    console.log(data);
  }else{
    console.log(err);
  }
});

console.log("Program Ended"); // will be printed before the file reading operation is over
