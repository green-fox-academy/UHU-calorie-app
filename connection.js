'use strict';

var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'mysql44',
  database: 'meal',
  timezone: 'utc'
};

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || dbConfig);
connection.connect();

module.exports = {
  connection: connection
};
