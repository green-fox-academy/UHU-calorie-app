'use strict';

var mysql = require('./connection.js');

function listMeals(cb){
  mysql.conn.query('SELECT * FROM meal;', function(err, res){
    if (err) throw err;
    cb(res);
  });
}

function addMeals(meal, cb){
  mysql.conn.query('INSERT INTO meal SET ?;', meal,  function(err, res){
    if (err) throw err;
    cb(res);
  });
}

function deleteMeals(id, cb){
  mysql.conn.query('DELETE FROM meal WHERE meal_id = ?;', id,  function(err, res){
    if (err) throw err;
    cb(res);
  });
}

var test = {
/* jshint ignore:start */
  meal_name: 'viccaaaa',
/* jshint ignore:end */
  calories: 666,
};

addMeals(test, function(err, res){console.log(res);});
listMeals(function(err, res){console.log(res);});
deleteMeals(131, function(err, res){console.log(res);});

module.exports = {
  add: addMeals,
  del: deleteMeals,
  list: listMeals
};
