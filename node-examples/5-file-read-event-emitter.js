const events = require('events');
const fs = require("fs");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("fileReadingStart", (file) => {
    console.log("1. File Reading Started");
    
    fs.readFile(file,(err,data)=>{
        if(!err){
            eventEmitter.on("fileReadingEnd", (fileContent) => {
                console.log(fileContent?.toString());
                console.log("2. file Reading Ended");       
            });
            eventEmitter.emit("fileReadingEnd", data);
        }else{
            console.log(err);
        }
    })
});

eventEmitter.emit("fileReadingStart","sample.txt");