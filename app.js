const http = require('http');
const { options } = require('./options');
const { hostname, port } = options;

const requestHandler = (req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', ['*']);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on http://${hostname}:${port}/`);
});
