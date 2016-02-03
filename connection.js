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

function handleDisconnection() {
	connection.connect(function(err) {
		if(err) {
			console.log('Error when connecting to database...', err);
			setTimeout(handleDisconnection, 2000);
		}
	});

	connection.on('error', function(err) {
		console.log('database error...', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnection();
		} else{
			throw err;
		}
	});
}

handleDisconnection();

module.exports = {
  connection: connection
};
