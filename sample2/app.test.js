const http = require('http');
const { options } = require('../options');

test('GET localhost:3000 expect 200 and hello message', () => {
  const req = http.request(options, res => {
    const { statusCode } = res;
    expect(statusCode).toBe(200);

    res.setEncoding('utf8');
    res.on('data', chunk => {
      expect(chunk).toBe('Hello Node.js Server!');
    });
  });
  req.end();
});

test('test should fail', () => {
  const req = http.request(options, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => {
      expect(chunk).toBe('This is not Node.js server!');
    });
  });
  req.end();
});
