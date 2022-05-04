// External JS 

var appName = "My App V1"; 


(function(){ // IIFE
  let div5 = document.getElementById("div5");
  div5.scrollIntoView({ behavior: 'smooth', block: 'end' });
})();

function handleClickMe3() {
  var x = 100;
  console.log(x);
}

/* DOM Demo */
document.getElementById("changeStyleBtn").addEventListener("mouseover", function(){
  let divEl = document.getElementById("div1");
  console.log(divEl);
  divEl.style.backgroundColor = "red";
  divEl.style.color = "#fff";
  // TODO: solid border with 2px in black color 
});

let handleShowHide = function(){
  let divEl = document.querySelector("#div2");
  if(divEl.style.display === 'none'){
    divEl.style.display = 'block';
  }else{
    divEl.style.display = 'none';
  }

  // TODO: learn about changing css classes 
  // TODO: learn about toggle in js 
}
document.getElementById("showHideBtn").addEventListener("click", handleShowHide);

let handleAddContent = function(){
  let divEl = document.querySelector("#div3");
  //divEl.innerText = "<p>Random Text</p>";
  divEl.innerHTML = "<p>Random Text</p>";
}

let handleCreateElement = function(){
  /*  Steps: 
    1. What El? <p></p>
    2. What content inside? Random Text 
    3. Add the Text inside   <p>Random Text</p>
    4. Where should we add the element? 
  */
  // TODO: have an array with 5 names of users. 
  // Randomly Pick one from the array and createTextNode using the picked user name 

  let usersList = ["john", "steve", "virat", "david", "smith"];

  // inner function 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomIndex = getRandomInt(5);

  let newParaEl = document.createElement("p"); //<p></p>
  let newText = document.createTextNode(usersList[randomIndex]); // Random Text 
  newParaEl.appendChild(newText); // <p>Random Text</p> 

  console.log(newParaEl);
  let targetEl = document.querySelector("#div4"); // Finding the target El
  targetEl.appendChild(newParaEl); // appending the newParaEl into target El
}

let handleCloneExperience = function(){
  let experienceUl = document.querySelector("#experience");
  let experienceUlClone = experienceUl.cloneNode(true);
  experienceUlClone.id = ""; // TODO: use counter to create new id

  let targetEl = document.querySelector("#div5"); // Finding the target El
  targetEl.appendChild(experienceUlClone);
}

let removeElementBtn = document.getElementById("removeElementBtn");
let handleRemoveElement = function(event) {
  console.log(event); // event object -- what event, what x, y pos, what type, on what el it occured
  let divEl = document.querySelector("#div6");
  divEl.remove();
  event.target.innerText = "Removed";
  event.target.disabled = true;
  removeElementBtn.removeEventListener('click', handleRemoveElement); // unreg event or detaching event
  removeElementBtn.removeEventListener('mouseleave', handleRemoveElement); // unreg event or detaching event

  // TODO: have if/else to check whether divEl is present or not 
  // if yes... then remove
}
removeElementBtn.addEventListener('click', handleRemoveElement); // registering event
removeElementBtn.addEventListener('mouseleave', handleRemoveElement); // registering event one more

let heading2 = document.getElementById('heading2');
heading2.onmousemove = function(){
  console.log('Inside Heading 2');
}
heading2.onclick = function(){
  console.log('Inside Heading 2');
}

