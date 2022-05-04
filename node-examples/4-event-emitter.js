const events = require('events');

const eventEmitter = new events.EventEmitter();

console.log('Program started');
// custom event
// 1. define custom event listener
eventEmitter.on("open_connection", () => {
  console.log("Inside open_connection");

  eventEmitter.on("close_connection", () => {
    console.log("inside closed_connection");
  });
  eventEmitter.emit("close_connection");
});

// 2. emit the custom event
eventEmitter.emit("open_connection");

console.log('Program Ended');

