// JS should receive req and send resp
const http = require('http'); // core nodejs module

http.createServer( (req, res) => { 
  console.log("Request Received!");
  //console.log(req); // received the req -- url, method, query params, req body
  
  res.writeHead(200, { 'Content-Type': 'text/html' });

  switch( req.url ){
    case '/':
      const homePageTemplate = `<html>
        <head><title>First NodeJS App</title></head>
        <body>
          <h1>Home Page</h1>
        </body>
      </html>`;
      res.end(homePageTemplate);
      break;
    
    case '/about': 
      const aboutPageTemplate = `<html>
        <head><title>First NodeJS App</title></head>
        <body>
          <h1>About Page</h1>
        </body>
      </html>`;
      res.end(aboutPageTemplate);
      break;
    
    default:
      const pageNotPageTemplate = `<html>
        <head><title>First NodeJS App</title></head>
        <body>
          <h1>Page Not Found Page</h1>
        </body>
      </html>`;
      res.end(pageNotPageTemplate);
  }


}).listen(3000, () => {
  console.log(`Server is started on localhost:3000. Open browser and hit localhost:3000`);
}); // localhost:3000