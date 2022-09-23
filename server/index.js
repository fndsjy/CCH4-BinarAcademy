const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 9000;

function onRequest(req, res) {
    switch (req.url) {
      case '/':
        res.writeHead(200)
        req.url = "index.html";
        break;
      case '/cars':
        res.writeHead(200)
        req.url = "get.cars.html";
        break;
      default:
        res.writeHead(404)
        req.url = req.url;
        break;
    }
    
    let path = "public/" + req.url;
    fs.readFile(path, function(err, data){
      if(err){
        console.log(path);
        res.statusCode = 500;
        res.end(`Error getting the file is about ${err}`);
      }
      else{
        res.writeHead(200);
        res.end(data);
      }
    })
  }
    const server = http.createServer(onRequest);

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });