'use strict';

var mysql = require('./connection.js');

function listMeals(cb){
  mysql.conn.query('SELECT * FROM meal;', function(err, res){
    cb(res);
  });
}

module.exports = {
  list: listMeals
};
