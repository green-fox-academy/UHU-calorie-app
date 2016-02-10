'use strict';

var main = require('./main.js');
var defaultPort = 3000;
var app = main.serverFunction(connectionCreator());

function serverStartLog(){
  console.log('The Server started!');
}

function connectionCreator(){
  var mysql = require('mysql');
  var envVar = process.env.CLEARDB_DATABASE_URL;
  var dbConfig = {
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'calorie',
    timezone: 'utc'
  };
  var connection = mysql.createConnection( envVar || dbConfig);

  connection.connect();
  return connection;
}

app.listen(process.env.PORT || defaultPort, serverStartLog);