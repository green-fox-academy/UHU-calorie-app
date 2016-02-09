'use strict';

var calApp = angular.module('calApp', []);
var localurl = 'localhost:3000';

calApp.controller('MainController', function($scope, $http) {
 /* $scope.meals = [
    {mealName: 'Banán', calories: 100, date: '2016-02-05'},
    {mealName: 'Banán', calories: 200, date: '2016-02-05'},
    {mealName: 'Banán', calories: 300, date: '2016-02-05'},
    {mealName: 'Banán', calories: 400, date: '2016-02-07'},
    {mealName: 'Banán', calories: 500, date: '2016-02-05'}
  ];*/

  $scope.newMeal = function() {
    $scope.meals.push({meal_name: $scope.newMeal.meal_name, calories: $scope.newMeal.calories, date: $scope.newMeal.date });
    $scope.newMeal.mealName = '';
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
  console.log($scope.meals);
});
