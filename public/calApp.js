'use strict';

var calApp = angular.module('calApp', []);
var localURL = 'http://localhost:3000/meals';

calApp.controller('MainController', function($rootScope, $scope, $http) {

  $scope.addNewMeal = function() {
    var newMeal = {
      meal_name: $scope.addNewMeal.meal_name,
      calories: $scope.addNewMeal.calories,
      date: $scope.addNewMeal.date
    };

    var config = {
      headers : {'Content-Type': 'application/json'}
    };

    var clearInputFields = function() {
      $scope.addNewMeal.meal_name = '';
      $scope.addNewMeal.calories = 0;
    };

    var succesCbPost = function(response) {
      $scope.meals.push(newMeal);
      console.log(response);
    };

    var errorCbPost = function(response) {
      $scope.error = response.data;
    };

    $http.post(localURL, newMeal, config).then(succesCbPost,errorCbPost);
    clearInputFields();
  };

  var succesCbGet = function (response){
    $scope.meals = response.data;
  };
  var errorCbGet= function (response){
    $scope.error = response.data;
  };

  $scope.getAll = function() {
    $http.get(localURL).then( succesCbGet, errorCbGet);
  };

  $scope.addNewMeal.date = new Date();
  $scope.getAll();
});
