'use strict';

var mysql = require('./connection.js');

function listMeals(cb){
  mysql.connection.query('SELECT * FROM meal;', function(err, res){
    cb(err, res);
  });
}

function addMeals(meal, cb){
  mysql.connection.query('INSERT INTO meal SET ?;', meal,  function(err, res){
    cb(err, res);
  });
}

function deleteMeals(id, cb){
  mysql.connection.query('DELETE FROM meal WHERE meal_id = ?;', id,  function(err, res){
    cb(err, res);
  });
}

module.exports = {
  add: addMeals,
  del: deleteMeals,
  list: listMeals
};
