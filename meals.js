'use strict';

function Meal(connection) {
  this.listMeals = function(cb){
    connection.query('SELECT * FROM meal;', function(err, res){
      cb(err, res);
    });
  };

  this.addMeals = function(meal, cb){
    connection.query('INSERT INTO meal SET ?;', meal,  function(err, res){
      cb(err, res);
    });
  };

  this.deleteMeals= function(id, cb){
    connection.query('DELETE FROM meal WHERE meal_id = ?;', id,  function(err, res){
      cb(err, res);
    });
  };
}
module.exports = {
  Meal: Meal
};
