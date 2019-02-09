const http = require('http');
const assert = require('assert');

function smokeTest() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    method: 'GET'
  };
  const req = http.request(options, res => {
    const { statusCode } = res;
    assert.deepEqual(statusCode, '200');

    res.setEncoding('utf8');
    res.on('data', chunk => {
      assert.deepEqual(chunk, 'Hello Node.js Server!');
    });
  });
  req.end();
}

smokeTest();
