const fs = require("fs"); // File System Module

//source file -- content is read from
const readerStream = fs.createReadStream('example1.txt', 'utf8'); // 'utf8' can be second param
const writerStream = fs.createWriteStream('example2.txt');

readerStream.on('data', ( chunk ) => {
  console.log('New Chunk Arrived!');
  console.log("==================");
  console.log(chunk); // buffer
  writerStream.write(chunk);
});

