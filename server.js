//Setting up the web server to listen on set port

const http = require('http');
const app = require('./app');
const port = 3000;
const server = http.createServer(app);
server.listen(port);