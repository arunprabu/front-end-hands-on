function handleLogin(event){
  event.preventDefault();

  const authToken = "QpwL5tke4Pnpja7X4"; 

  if(typeof(Storage) !== "undefined"){
    if(!localStorage.getItem('token')){
      localStorage.setItem('token', authToken);
      console.log('Token Saved:  ' + localStorage.getItem('token')  );
    }else{
      console.log('Token Found. Seems like you have already login');
    }
  }

}

function handleLogout(){
  if(localStorage.getItem('token')){
    localStorage.removeItem('token');
    console.log('You are logged out!');
  }
}

// Webworker Demo 
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
  const calcWorker = new Worker("calc-worker.js");

  first.onchange = function() {
    calcWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function() {
    calcWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  calcWorker.onmessage = function(event){
    console.log(event);
    result.innerText = event.data;
    console.log('Message received from worker');
  }
}
else{
  console.log('Your browser doesn\'t support web workers.');
}

function handleNextPage(){
  history.pushState({page: 1}, "title 1", "?page=1");
}

function handlePrevPage(){
  history.back();
}

function handleReplacePage(){
  history.replaceState({page: 10}, "title 10", "?page=10");
}

window.onpopstate = (event) => {
  console.log("You clicked back");
}

x = 10



