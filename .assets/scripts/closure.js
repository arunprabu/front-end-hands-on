function addToCart(name) {
  var name = name; // pvt data

  return function applyingCoupon(coupon) {
    console.log(name + ' cannot use ' + coupon);
    // embedding the pvt data and returning the unexec fn
    // closure: refering the pvt data will form closure
    return name + ' cannot use ' + coupon;
  }
}

var updateCart = addToCart(["Jungle Book", "iPhone"]);

function handleCheckout(){
  const checkoutStatus = updateCart(document.getElementById("couponInput").value);

  document.getElementById("status").innerText = checkoutStatus;
}

function calcShipping(productPrice, country){ // TODO: convert this to ES2015 class
  
  var country = country || 'India';
  var shipping = 50;
  var currency = "Rs.";
  if(country !== "India"){
    currency = "USD";
  }
  
  function updateCart() {
      var totalPrice = productPrice + shipping; // referring to pvt vars 
      console.log( `${currency} ${totalPrice}`);
      return `${currency} ${totalPrice}`;
      //we have refered productPrice, _shipping, _currency in above lines and return
     // that forms the closure
    // so we can find them in Closures in console.dir -- refer: browser console
    // _country is not refered inside so it wont be part of the closures
  }
  
  return updateCart; // returning function definition not the executed output
}

function handleCalcShipping(price){
  const cart =  calcShipping(price);
  console.dir(cart); //check the browser console
  const totalCost = cart();
  document.getElementById("totalCostEl").innerText = totalCost;

}

