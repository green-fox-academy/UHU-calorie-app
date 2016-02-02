'use strict';

var mysql = require('mysql');

var dbConfig = {
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'be2be2ab917e7e',
  password: '95dd4052',
  database: 'heroku_e0c3a986f86f1ae',
  timezone: 'utc'
};

var connection = mysql.createConnection(dbConfig);

module.exports = {
  conn: connection
};
