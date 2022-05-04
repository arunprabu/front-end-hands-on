const fs = require("fs"); // File System Module

const readerStream = fs.createReadStream('example1.txt', 'utf8');

readerStream.on("data", (chunk) => {  // data is an event emiited upon successul createReadStream
  console.log('---------------------');
  console.log("New Chunk Arrived");
  console.log('---------------------');
  
  console.log(chunk);
});

readerStream.on("end", () => {  
  console.log("All Chunks Arrived");
});

readerStream.on("error", (error) => {  
  console.log(error);
});

// readerStream.on("finish", () => {  
//   console.log('It is over!');
// });