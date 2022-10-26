import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Worlds!');
  res.end();
}).listen(process.env.PORT);
