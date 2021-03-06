// http
const http = require("http");
const PORT = 5000;
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

const callback = (req, res) => {
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
    const student = {
      firstName: "Rayet",
      lastName: "Rahman",
      age: 250,
      country: "Bangladesh",
      skills: ["Englidh", "Match", "Basic computing"]
    };
    students.push(student);
    res.writeHead(200, { "Content-Type": "text/plain" });
    const jason = JSON.stringify(students);
    res.write(jason);
    res.end();
  }
};
http.createServer(callback).listen(PORT);
