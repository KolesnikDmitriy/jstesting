const axios = require('axios');
const { options } = require('../options');

axios.defaults.baseURL = `http://${options.hostname}:${options.port}/`;

test('GET localhost:3000 expect 200 and hello message', async () => {
  const { status, data } = await axios.get();

  expect(status).toBe(200);
  expect(data).toBe('Hello Node.js Server!');
});

test('expect fail', async () => {
  const { data } = await axios.get();

  expect(data).toBe('This is Node.js Server!');
});
