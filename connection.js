'use strict';

var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'calorie',
  timezone: 'utc'
};

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || dbConfig);
connection.connect();

module.exports = {
  connection: connection
};