const http = require("http");
const fs = require("fs");

fs.readFile("home.html", (err, home) => {
    console.log(home.toString());
  });

  fs.readFile("home.html", (err, home) => {
    if (err) {
      throw err;
    }
    http
      .createServer((request, response) => {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(home);
        response.end();
      })
      .listen(5000);
  });

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) 
    {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(5000);