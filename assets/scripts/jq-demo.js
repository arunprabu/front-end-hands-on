
console.log("is it ready?...");

// jQuery Examples
$( document ).ready( function(){
  console.log("Ready...");
  // Event handling in jQuery 
  // 1. Find El and  2. Attach Event on that element 
  $("#changeBgBtn").on("click", function(event){
    console.log(event);
    $(event.target).css("background-color", "red"); // this will change the btn style
    $("#para1").css("color", "green"); // will change the para1 style
    $("#para1").css("background-color", "yellow"); // will change the para1 style
  });

  $("#increaseFontSizeBtn").on("click", function () {
    let fontSize = parseInt($("#para1").css("font-size"));
    fontSize += 1;
    $("#para1").css("font-size", fontSize);
  });

  $("#decreaseFontSizeBtn").on("click", function () {
      let fontSize = parseInt($("#para1").css("font-size"));
      fontSize -= 1;
      $("#para1").css("font-size", fontSize);
  });


  $("#para1").on("mouseover", function (event) {
    $(event.target).toggleClass("para");
  })
  .on("mouseleave", function (event) {
    $(event.target).toggleClass("para");
  });

  $("#addMenuBtn").on("click", function(){
    // TODO: Learn about prepend(), before(), after(), html(), insertBefore(), insertAfter()
    $("#menus").append("<li>Support</li>");
    
    attachEventsOnList(); // reinforcing to attach events on newly added elements also
  });

  function attachEventsOnList(){
    $("#menus li").on("click", function(event){
      $(event.target).css("background-color", "yellow");
    });
  }

  attachEventsOnList();

  $("#showBtn").on("click", function(event){
    $("#wrapper").toggle(1000);
    if($(event.target).text() == "Show"){
      $(event.target).text("Hide");
    }else{
      $(event.target).text("Show");
    }
  });

  // TODO: Use Toggle to show/hide elements


  // Working on Reading form data and AJAX using jQuery
  $("form#contactForm").on("submit", function(event){
    event.preventDefault();
    // read the form data
    let contactData = {
      name: $("#nameInput").val(),
      email: $("#emailInput").val()
    }
    console.log(contactData);
    
    // AJAX Logic for our POST Request
    // What's the API URL? https://jsonplaceholder.typicode.com/users
    // What's the Http Method? POST 
    // What's the data? contactData
    // What's the Client Tool? jQuery Ajax with $.post() 

    // $.post("https://jsonplaceholder.typicode.com/users",
    //         contactData,
    //         function(res, status){
    //           console.log(res); // res from the REST API
    //           if(res && res.id){
    //             $("#contactFormStatus").text("Saved Successfully!")
    //                                    .css({"background-color": "green", "color": "#fff"})
    //                                    .slideDown(1000);
    //           }
    //           console.log(status); // success
    //         });
      
    $("#contactFormStatus").hide();
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      data: contactData,
      type: 'POST',
      success: function(result, status, xhr){ // upon success
        console.log(result, status);
        if(xhr && xhr.status == 201){
          $("#contactFormStatus").text("Saved Successfully!")
                                .css({"background-color": "green", "color": "#fff"})
                                .slideDown(1000);
        }
      },
      error: function(err, status, xhr){ // upon error
        console.log(err);
        if(err && err.status == 404){
          $("#contactFormStatus").text("Wrong API URL!")
                                .css({"background-color": "red", "color": "#fff"})
                                .slideDown(1000);
        }
      }
    });
  });

  $("#loadHtmlBtn").click( function(){
    // load html using jQuery AJAX
    $("#htmlContentWrapper").load("http://localhost:5501/dom-demo.html", 
                                  function( result, status, xhr){
                                    console.log(result);
                                    console.log(status);
                                    console.log(xhr);
                                  });
  });

});

console.log("Program Ended.");


