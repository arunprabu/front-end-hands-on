
/* Event Bubble Related */
let handleParentClick = function(){
  alert("Parent Element Clicked");
}
document.getElementById("parentEl").addEventListener('click', handleParentClick);

let handleChildClick = function(event){ // arg
  event.stopPropagation();
  alert("Child Element Clicked - Stopped Propagation");
}
document.getElementById("childEl").addEventListener('click', handleChildClick);

/* Event Capturing Related */
let handleParentClick2 = function(){
  alert("Parent Element Clicked");
}
//look at the 3rd param true -- that enables event capturing 
document.getElementById("parentEl2").addEventListener('click', handleParentClick2, true);

let handleChildClick2 = function(event){ // arg
  event.stopPropagation();
  alert("Child Element Clicked");
}
document.getElementById("childEl2").addEventListener('click', handleChildClick2);

document.getElementById("getDataBtn").addEventListener('click', function(event){
  console.log(event);
  let _originalBtn = event.target;
  console.dir(_originalBtn);
  let _innerText = _originalBtn.previousElementSibling.innerText;
  alert(_innerText);
});


// window.onload = function(){
//   console.log('Page Loaded Successfully!');
// };

window.addEventListener('load', function(){
  console.log('Page Loaded Successfully!');
  // ideal place for you to show modal / popup 
});

window.addEventListener("unload", function(event) {
  console.log('Unloaded');
});

// Note: The following will not work with addEventListener approach
// window.onbeforeunload = function() {
//   return "Do you really want to leave our brilliant application?";
//   //if we return nothing here (just calling return;) then there will be no pop-up question at all
//   //return;
// };

// onfocus
document.getElementById("nameInput").addEventListener('focus', function(event){
  console.log(event);
  let inputEl = event.target;
  inputEl.style.backgroundColor = "yellow";
  inputEl.style.color = "red";  
  inputEl.nextElementSibling.style.display = "block";
});

// onblur
document.getElementById("nameInput").addEventListener('blur', function(event){
  console.log(event);
  let inputEl = event.target;
  inputEl.style.backgroundColor = "#fff";
  inputEl.style.color = "#000";  
  inputEl.disabled = true;
  inputEl.nextElementSibling.style.display = "none";
});

// resize
window.addEventListener('resize', function(){
  console.log('Page Resized Successfully!');
  document.body.style.backgroundColor = '#eee';

  // find out width and height of the window in js

});

// Slideshow in JS
let slideshowImages = [
  {
    id: 1,
    url: './assets/images/macbook-pro-slide1.jpeg',
    altText: 'MacBook Pro'
  },
  {
    id: 2,
    url: './assets/images/ipad-slide2.jpeg',
    altText: 'iPad Air'
  },
  {
    id: 3,
    url: './assets/images/apple-watch-slide3.jpeg',
    altText: 'Apple Watch'
  }
];
// interval 
let slideshowInterval = 4000; // 2sec
let i = 0; // starting index

function startSlideshow(){
  //console.log('Starting Slideshow');

  if(i <= slideshowImages.length -1 ){
    //console.log(i);
    // find the img el 
    document.getElementById("slideImg").src = slideshowImages[i].url;
    document.getElementById("slideImg").alt = slideshowImages[i].altText;
    i++;
  }else{
    //console.log("Inside else");
    i = 0;
  }

  setTimeout(startSlideshow, slideshowInterval );
}

startSlideshow();


// onChange 
let handleTextChange = function(event){
  console.log(event);
  console.log(event.target.value);
  let enteredInput = event.target.value;
  // later I can send the above to the backend
}

let handleKeyDown = function(event){
  console.log(event); // event.target.value
}

let handleKeyUp = function(event){
  console.log(event); // event.target.value
}