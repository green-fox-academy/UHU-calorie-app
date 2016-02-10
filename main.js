'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var server = require('./server.js');
var defaultPort = 3000;

function serverStartLog(){
  console.log('The Server started!');
}

app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(process.env.PORT || defaultPort, serverStartLog);

server.serverFunctions(app);
