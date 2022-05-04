var appName = "MyApp";

let pdtList = [{
  pdtCode: 1,
  pdtName: "iPhone",
  cost: 67567
},
{
  pdtCode: 2,
  pdtName: "MacBook Pro",
  cost: 200000
},
{
  pdtCode: 3,
  pdtName: "Airpos Pro",
  cost: 20000
}];

function getTotalProducts(){
  document.getElementById("totalPdts").innerText = pdtList.length;
}
getTotalProducts();


let AddToCart = function(pdtCode, pdtName, cost){
 
  this.pdtCode = pdtCode; 
  this.pdtName = pdtName; 
  this.cost = cost; 
 
  // private method -- logic about calc offer is abstracted.
  let getOffers = function(_cost){
    if(_cost >= 50000){
      return '5000 cashback';
    }else{
      return "1000 cashback";
    }
  }
 
  this.getProductInfo = function(){
    //console.log(`${this.pdtName} is at ${this.cost}. You are eligible for ${getOffers(this.cost)}`);

    
  }
 
}


document.getElementById("addToCartBtn").addEventListener("click", function(){
  /// TODO: pick one obj randomly from the pdtList array 
  // create an obj for AddToCart 
  // get product info with offer from the method
  // display the product info with offer in html
});



// Facade Pattern - Simple Explanation
class UserExperience{
  changeBg(className, color){
    for(let i= 0; i < document.getElementsByClassName(className).length; i++){
      document.getElementsByClassName(className)[i].style.backgroundColor = color;
    }
  }
}
const userExperience = new UserExperience();

document.getElementById("changeBgBtn").addEventListener("click", function(){
  userExperience.changeBg("facadeWrapper", "yellow"); // providing interface to change color
});

// Factory Pattern
const productsInCart = ["iPhone 13 Pro", "Macbook Pro", "Airpods"];

// Step 1: Have multiple related classes
// Step 2: Have one Factory class with a public Method 
// Step 3: Inside the factory Instantiate the defined classes conditionally. 
// Step 4: Invoke the factory method appropriately

class PackIt {  
  constructor(pdtList){
    this.pdtList = pdtList;
    this.unit = "PackingUnit";
    this.packedTime = new Date();
  }
}

class ShipIt {  
  constructor(pdtList){
    this.pdtList = pdtList;
    this.unit = "ShippingUnit";
    this.shippedTime = new Date();
  }
}

// Factory class
class OnlineShoppingFactory{
  constructor(){
    // factory method
    this.order = function(pdtList, unit){
      
      switch(unit){
        case 'PackingUnit':
          return new PackIt(pdtList);
        
        case 'ShippingUnit':
          return new ShipIt(pdtList);
        
        default: 
          return {}
      }
    }
  }
}

document.getElementById("checkoutBtn").addEventListener('click', function(event){
  // Step 1: approach factory class and instantiate PackIt class 
  const onlineShoppingFactory = new OnlineShoppingFactory();
  const packageStatus = onlineShoppingFactory.order(productsInCart, "PackingUnit");
  console.log(packageStatus);
  // Step 2: Display the button label as 'Packing....' and also disable it. 
  event.target.innerText = "Packing...";
  event.target.disabled = true;

  // Step 3: After 10 secs, instantiate ShipIt class
  setTimeout(  function(){
    const shippingStatus = onlineShoppingFactory.order(productsInCart, "ShippingUnit");
    console.log(shippingStatus);
    event.target.innerText = "Shipping..."; // Step 4:  Display the button label as 'Shipping....' 
    event.target.disabled = true;
  }, 10000);
  
});

const observable = Rx.Observable.create(function(o){ 
  setInterval(function(){
    o.next("Wow " + new Date());
  }, 2000);
});

document.getElementById("subscribeBtn").addEventListener("click", function(event){
  event.target.innerText = "Subscribed -- Check the console";

  //subscribe to observable to get info frequently.
  //you decide when you don't want to subscribe
  observable.subscribe( function(value)  { //successful subscription msg
    console.log(value);
  },
  //when error occured
  function(error) {
    console.log(error);
  },
  // when completes
  function(_) {
    console.log("Complete");
  });

});
