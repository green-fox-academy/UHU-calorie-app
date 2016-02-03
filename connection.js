'use strict';

var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'database',
  timezone: 'utc'
};

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || dbConfig);
connection.connect();

// function handleDisconnection() {
// 	connection.connect(function(err) {
// 		if(err) {
// 			console.log('Error when connecting to database...', err);
// 			setTimeout(handleDisconnection, 2000);
// 		}
// 	});

// 	connection.on('error', function(err) {
// 		console.log('database error...', err);
// 		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
// 			handleDisconnection();
// 		} else{
// 			throw err;
// 		}
// 	});
// }

// handleDisconnection();

module.exports = {
  connection: connection
};
