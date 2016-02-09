'use strict';

var calApp = angular.module('calApp', []);

calApp.controller('MainController', function($scope) {
  $scope.meals = [
    {mealName: 'Banán', calories: 100, date: '2016-02-05'},
    {mealName: 'Banán', calories: 200, date: '2016-02-05'},
    {mealName: 'Banán', calories: 300, date: '2016-02-05'},
    {mealName: 'Banán', calories: 400, date: '2016-02-07'},
    {mealName: 'Banán', calories: 500, date: '2016-02-05'}
  ];

  $scope.newMeal = function() {
    $scope.meals.push({mealName: $scope.newMeal.mealName, calories: $scope.newMeal.calories, date: $scope.newMeal.date });
    $scope.newMeal.mealName = "";
    $scope.newMeal.calories = 0;

  };

  $scope.newMeal.date = new Date();
});
