const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./static/index.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading index.html');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
