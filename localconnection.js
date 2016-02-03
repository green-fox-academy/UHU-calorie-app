'use strict';

var mysql = require('mysql');

var dbConfig = {
  host: 'http://localhost',
  user: 'test',
  password: 'test',
  database: 'meal',
  timezone: 'utc'
};

var connection = mysql.createConnection(dbConfig);

module.exports = {
  connection: connection
};
