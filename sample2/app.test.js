const http = require('http');
const { options } = require('../options');

test('GET localhost:3000 expect 200 and hello message', done => {
  const req = http.request(options, res => {
    const { statusCode } = res;
    expect(statusCode).toBe(200);
    res.setEncoding('utf8');
    res.on('data', chunk => {
      expect(chunk).toBe('Hello Node.js Server!');
      done();
    });
  });
  req.end();
});

test('expect fail', done => {
  const req = http.request(options, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => {
      expect(chunk).toBe('This is not Node.js server!');
      done();
    });
  });
  req.end();
});
