const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>Hello GSI</h1></body></html>");
    res.end();
  } else if (req.url == "/berita") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>Halaman berita</h1></body></html>");
    res.end();
  } else if (req.url == "/admin/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>Halaman login admin</h1></body></html>");
    res.end();
  } else if (req.url == "/mahasiswa/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>Halaman login mahasiswa</h1></body></html>");
    res.end();
  } else if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Hello GSI from JSON" }));
    res.end();
  } else {
    res.end("Invalid request");
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log(`Error ${error}`);
  } else {
    console.log(`Server berjalan di port ${port}`);
  }
});
