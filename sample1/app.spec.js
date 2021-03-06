const http = require('http');
const assert = require('assert');
const { options } = require('../options');

function testPassed() {
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

function testFailed() {
  const req = http.request(options, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => {
      assert.deepEqual(chunk, 'This is not Node.js server!');
    });
  });
  req.end();
}

testPassed();
testFailed();
