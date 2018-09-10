//Setting up the web server to listen on set port

const http = require('http');
const app = require('./app');
const config = require('./config');
const port = config.server_port;
const server = http.createServer(app);

server.listen(port);