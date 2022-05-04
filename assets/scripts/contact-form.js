
document.getElementById("contactForm").addEventListener("submit", handleContactFormSubmit);
function handleContactFormSubmit(event){
  console.log('Inside handleContactFormSubmit');
  //console.log(event.target);
  event.preventDefault(); // stop the default nature (refresh the page) of submit event 
  // console.log(this); // global window scope

  // read the form data
  let form = event.target; // the whole form element
  // console.log(form);
  let name = form.elements['customerName'].value; // reading form elements by name attribute
  console.log(name);

  let phone = form.elements['phone'].value;
  console.log(phone);

  let email = form.elements['email'].value;
  console.log(email);

  let password = form.elements['password'].value;
  console.log(password);

  let orderId = form.elements['orderId'].value;
  console.log(orderId);

  let country = form.elements['country'].value;
  console.log(country);

  let query = form.elements['query'].value;
  console.log(query);

  // validate the form data
  // display error messages

  // if no error.. submit this to the back end

  // Let's make an Object / JSON -- so that we can send it to the REST API backend
  let contactData = {
    name,  // shortcut for name: name
    phone,
    email,
    password,
    orderId,
    country,
    query
  }

  console.log(contactData);

  // Back End URL?  https://jsonplaceholder.typicode.com/users
  // HTTP Method? GET / POST (recommended)
  // What tool? JS based Http Client - XMLHttpRequest

  let xhttp = new XMLHttpRequest();  // creating an obj for XMLHttpRequest.
  console.log(xhttp); 

  xhttp.onreadystatechange = function(){ //preparing get the response
    console.log(this); // check the context of this !== window
    document.getElementById("status").style.display = "block";
    if(this.readyState == 4 && this.status == 201){
      console.log(this.response);
      document.getElementById("status").classList.add('alertSuccess');
      document.getElementById("status").innerText = "Saved Successfully!";
    }

    if(this.readyState == 4 && this.status != 201){
      document.getElementById("status").classList.add('alertError');
      document.getElementById("status").innerText = "Some error occured!";
    }
  }

  // preparing to send the req 
  xhttp.open("PUT", "https://ecom-app-rest-api-v1.herokuapp.com/orders/1" ) ;
  // sending the request
  xhttp.send(cartItems);
}




// dom based add event
let customerNameInput = document.getElementById("customerNameInput");
customerNameInput.addEventListener("blur", handleRequiredValidation);
customerNameInput.addEventListener("keyup", handleRequiredValidation);

// Util Function for Required Validation
function handleRequiredValidation(event){
  let enteredInput  = event.target.value;
  console.log(enteredInput);
  // working with mandatory input validation
  if(enteredInput.trim() == ''){
    event.target.nextElementSibling.style.display = "block";
    let msg = event.target.previousElementSibling.innerText;
    event.target.nextElementSibling.innerText = msg.substring(0, msg.length-1);
    return false;
  }else{
    event.target.nextElementSibling.style.display = "none";
    event.target.nextElementSibling.innerText = '';
    return true;
  }  
}

let phoneInput = document.getElementById("phoneInput");
phoneInput.addEventListener("blur", handleMinMaxLengthValidation);
phoneInput.addEventListener("keyup", handleMinMaxLengthValidation);
phoneInput.minLength = 9;
phoneInput.maxLength = 13;
phoneInput.errorMsg = "Phone Number should be between 10-13 characters";

let queryInput = document.getElementById("queryInput");
queryInput.addEventListener("blur", handleMinMaxLengthValidation);
queryInput.addEventListener("keyup", handleMinMaxLengthValidation);
queryInput.minLength = 4;
queryInput.maxLength = 10;
queryInput.errorMsg = "Query should be between 4-10 characters";

// util function for Min Length Validation
function handleMinMaxLengthValidation(event){
  if(handleRequiredValidation(event)){
    // min length and max length
    if(event.target.value.trim().length < event.target.minLength || event.target.value.trim().length > event.target.maxLength){
      event.target.nextElementSibling.style.display = "block";
      event.target.nextElementSibling.innerText = event.target.errorMsg;
    }
  }
}

function handleNumberValidation(event){
  if(handleRequiredValidation(event)){
    if(isNaN(event.target.value)){
      event.target.nextElementSibling.style.display = "block";
      event.target.nextElementSibling.innerText = "Please enter number";
    }
  }
}

function handleGotoHomePage(){
  // redirecting to the home page
  window.location.replace('./index.html');
}

