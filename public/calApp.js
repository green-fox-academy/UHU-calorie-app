'use strict';

var calApp = angular.module('calApp', []);

calApp.controller('MainController', function($scope, $http) {

  $scope.newMeal = function() {
    var mealCreator = {
      meal_name: $scope.newMeal.meal_name,
      calories: $scope.newMeal.calories,
      date: $scope.newMeal.date
    };
    
    var config = {
      headers : {'Content-Type': 'application/json'}
    }
    
    $http.post('http://localhost:3000/meals', mealCreator, config   
  ).then(function(response){
      $scope.getAll();
    },
        function(response) {
      console.log(response);
    });
    //$scope.meals.push(mealCreator);
    $scope.newMeal.meal_name = '';
    $scope.newMeal.calories = 0;

  };

  $scope.newMeal.date = new Date();

  $scope.getAll = function() {$http({
    method: 'GET',
    url:'http://localhost:3000/meals'
  }).then(function succesCallback(response){
    $scope.meals = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });
  };
  
  $scope.getAll();
});

