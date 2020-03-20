//node core modules : http, fs, path, os
const http = require("http");
// read, write, delete, append

const PORT = 5000;
http
  .createServer((req, res) => {
    // headers
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>hello world from HOME page</h1>");
      res.end();
    } else if (req.url == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>hello world from ABOUT page</h1>");
      res.end();
    } else if (req.url == "/text") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Some text");
      res.end();
    } else if (req.url == "/students") {
      const students = [
        {
          firstName: "Atik",
          lastName: "Rahman",
          age: 250,
          country: "Finland",
          skills: ["HTML", "CSS", "JS"]
        },
        {
          firstName: "Rakesh",
          lastName: "Rahman",
          age: 250,
          country: "Finland",
          skills: ["HTML", "CSS", "JS"]
        },
        {
          firstName: "Asabeneh",
          lastName: "Rahman",
          age: 250,
          country: "Finland",
          skills: ["HTML", "CSS", "JS"]
        }
      ];
      res.writeHead(200, { "Content-Type": "text/plain" });
      const jason = JSON.stringify(students);
      res.write(jason);
      res.end();
    }
  })
  .listen(PORT);

console.log(`a server is running in 5000 port ${PORT}`);
