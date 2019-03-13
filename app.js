const http = require('http');
const { options } = require('./options');
const { port } = options;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.setHeader('Access-Control-Allow-Origin', ['*']);
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
