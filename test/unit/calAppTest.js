'use strict';

describe('Testing UHU Calorie App', function () {
  beforeEach(module('calApp'));

  describe('MainController', function() {
    var scope, ctrl, $httpBackend, mealsEndpoint, postEndpoint;
    beforeEach(inject(function($controller, $rootScope, $injector) {
      scope = $rootScope.$new();
      $httpBackend = $injector.get('$httpBackend');
      mealsEndpoint = $httpBackend.when('GET', 'http://localhost:3000/meals').respond(['alma']);
      postEndpoint = $httpBackend.when('POST', 'http://localhost:3000/meals').respond(200,'ok');

      ctrl = $controller('MainController', {$scope:scope});
    }));
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('test existence of functions', function () {
      expect(scope.addNewMeal).toBeDefined();
      expect(scope.getAll).toBeDefined();
      $httpBackend.flush();
    });

    it('test GET request', function () {
      $httpBackend.expectGET('http://localhost:3000/meals');
      mealsEndpoint.respond('teve');
      scope.getAll();
      $httpBackend.flush();
      expect(scope.meals).toBe('teve');
    });

    it('test POST request', function() {
      $httpBackend.expectPOST('http://localhost:3000/meals',
      {meal_name: 'kacsa', calories: 'majon', date: 'blabla'});
      scope.addNewMeal.meal_name = 'kacsa';
      scope.addNewMeal.calories = 'majon';
      scope.addNewMeal.date = 'blabla';
      scope.addNewMeal();
      $httpBackend.flush();
      expect(scope.meals.length).toBe(2);
    });

    it('test POST request', function() {
      $httpBackend.expectPOST('http://localhost:3000/meals');
      scope.addNewMeal.meal_name = 'radir';
      scope.addNewMeal();
      $httpBackend.flush();
      expect(scope.meals[1].meal_name).toBe('radir');
    });

    it('test POST request', function() {
      $httpBackend.expectPOST('http://localhost:3000/meals');
      scope.addNewMeal.calories = '300';
      scope.addNewMeal();
      $httpBackend.flush();
      expect(scope.meals[1].calories).toBe('300');
    });

    it('test POST request', function() {
      $httpBackend.expectPOST('http://localhost:3000/meals');
      scope.addNewMeal.date = 'blabla';
      scope.addNewMeal();
      $httpBackend.flush();
      expect(scope.meals[1].date).toBe('blabla');
    });
  });
});
