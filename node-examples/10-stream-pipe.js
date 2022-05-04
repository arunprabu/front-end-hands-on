var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('example1.txt', {start: 0, end: 40});

// Create a writable stream
var writerStream = fs.createWriteStream('example3.txt');

// Pipe the read and write operations 
// read example1.txt and write data to example3.txt
readerStream.pipe(writerStream);

console.log("Program Ended");