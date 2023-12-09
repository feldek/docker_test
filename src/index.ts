import http from 'http';
import { config } from 'dotenv';

const node_env = process.env.NODE_ENV;

if (node_env === undefined) {
  throw Error('You should set NODE_ENV variable');
}

config({ path: `.envs/.env` });

const port = 4000 + +node_env;

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`Server on port: ${port}. Content: ${process.env.TITLE}`);
    res.end();
  })
  .listen(port);

console.log(`server running on port ${port}`);
