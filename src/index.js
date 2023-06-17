const express = require('express');
const http = require('http');
const app = express();

http.createServer(app).listen(3000);
console.log("Listening at:// port:%s (HTTP)", 3000);

require('./endpoints')(app);