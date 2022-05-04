console.log("Inside the Calc Worker");

onmessage = function(event) {
  console.log(event.data);

  const result = event.data[0] * event.data[1];

  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    const workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }
  
}