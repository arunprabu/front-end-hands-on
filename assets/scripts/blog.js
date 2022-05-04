// load blog posts

var blogPostList = [];

let generatePostListElements = function(postItem){
  let blogWrapper = document.getElementById("blogPostsWrapper");
  let spanEl = document.createElement("span");
  let blogIdText = document.createTextNode('#' +postItem.id);
  spanEl.appendChild(blogIdText);

  let h3El = document.createElement("h3");
  let blogTitleText = document.createTextNode(postItem.title);
  h3El.appendChild(blogTitleText);

  let pEl = document.createElement("p");
  let blogContenText = document.createTextNode(postItem.body);
  pEl.appendChild(blogContenText);

  let blogSectionEl = document.createElement("div");
  blogSectionEl.classList.add('postSection');
  blogSectionEl.appendChild(spanEl);
  blogSectionEl.appendChild(h3El);
  blogSectionEl.appendChild(pEl);

  blogWrapper.appendChild(blogSectionEl);
}

let renderBlogPosts = function ( blogPosts) { // receiving blog posts

  // sort in reverse order by id

  let blogWrapper = document.getElementById("blogPostsWrapper");
  blogWrapper.innerHTML = "";
  // generating elements with texts inside
  for (let i = 0; i < blogPosts.length; i++) {
    generatePostListElements(blogPosts[i]);

    // TODO: learn about rendering blog posts using clone
  }
}

// ajax logic to load blog posts over get method
let getBlogPosts = function () {

  // ajax req
  //1. what url? https://jsonplaceholder.typicode.com/posts
  //2. any data? no 
  //3. what method? GET
  //4. What http client tool? XMLHttpRequest

  let xhttp = new XMLHttpRequest(); // fetch api
  console.log(xhttp);

  // prepare to get resp 
  xhttp.onreadystatechange = function () {
    // this !== window 

    if (this.readyState == 4 && this.status == 200) { // getting the resp
      console.log(this.response);
      blogPostList = this.response;// JSON.parse(this.response); // convert the res into an obj
      renderBlogPosts(blogPostList); // start the blog post rendering
    }
  }

  // prepare to send req 
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhttp.setRequestHeader("Content-Type", "applicaion/json");
  xhttp.responseType = "json"; // playing around with response type
  // xhttp.setRequestHeader("cache control", "no cache"); // or else use random query param in url
  xhttp.send();
}

getBlogPosts();

let searchBlogPosts = function(){
  let searchQuery = document.getElementById('searchQueryInput').value;
  console.log(searchQuery);

  // search thru blogPosts
  // since blogPosts is an array of obj... I use regex 
  // searching / filtering partial text inside an array of object

    const regexp = new RegExp(searchQuery, 'i'); // /est/i
  
    let searchResults = blogPostList.filter( function(post) {
      return regexp.test(post.title);
    });
  
    console.log(searchResults);
    document.getElementById("searchBtn").nextElementSibling.innerHTML = "Search results: " + searchResults.length;
    renderBlogPosts(searchResults);
}
// registering event for searching thru blog posts
document.getElementById("searchBtn").addEventListener('click', searchBlogPosts);
document.getElementById("searchQueryInput").addEventListener('keyup', searchBlogPosts); // live search

document.getElementById("blogForm").addEventListener('submit', function(event){
  event.preventDefault();

  // make the data as obj
  const postData = {
    title: document.getElementById("postTitle").value,
    body:  document.getElementById("postContent").value
  }

  console.log(postData);

  // send the above data to the REST API over ajax call
  // What's the API URL? https://jsonplaceholder.typicode.com/posts
  // What is the http method? POST
  // What data? postData
  // What http client tool? XMLHttpRequest

  // TODO: send the above data to the backend 
  // TODO: upon getting resp, you have to parse 
  // TODO: add the above resp into blogPostList
  // TODO: generatePostListElements(resp);

  generatePostListElements(postData);

});
