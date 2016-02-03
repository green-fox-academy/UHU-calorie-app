'use strict';

var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'calories',
  timezone: 'utc'
};

var connection = mysql.createConnection(dbConfig);

module.exports = {
  connection: connection
};
