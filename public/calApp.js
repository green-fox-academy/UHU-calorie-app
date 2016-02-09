'use strict';

var calApp = angular.module('calApp', []);

calApp.controller('MainController', function($scope, $http) {

  $scope.newMeal = function() {
    var mealCreator = {
      meal_name: $scope.newMeal.meal_name,
      calories: $scope.newMeal.calories,
      date: $scope.newMeal.date
    };

    $scope.meals.push(mealCreator);
    $scope.newMeal.meal_name = '';
    $scope.newMeal.calories = 0;

  };

  $scope.newMeal.date = new Date();

  $http({
    method: 'GET',
    url:'http://localhost:3000/meals'
  }).then(function succesCallback(response){
    $scope.meals = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });

  $http({
    method: 'POST',
    url:'http://localhost:3000/meals'
  }).then(function succesCallback(req){
    console.log(req.data);
  }, function errorCallback(response) {
    console.log(response);
  });
});
