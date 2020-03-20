// http
const http = require("http");
const PORT = 5000;
http
  .createServer((req, res) => {
    // header
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home page node</h1>");
      res.end();
    } else if (req.url == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About page</h1>");
      res.end();
    } else if (req.url == "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contact page</h1>");
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
          firstName: "Hafizur",
          lastName: "Rahman",
          age: 250,
          country: "Finland",
          skills: ["HTML", "CSS", "JS"]
        },
        {
          firstName: "Rakibul",
          lastName: "Hasan",
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
