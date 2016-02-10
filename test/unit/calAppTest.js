'use strict';

describe('Testing UHU Calorie App', function() {
  beforeEach(module('calApp'));
  describe('MainController', function() {
    var scope, ctrl, $httpBackend, mealsEndpoint;

    beforeEach(inject(function($controller, $rootScope, $injector) {
      scope = $rootScope.$new();

      $httpBackend = $injector.get('$httpBackend');
      mealsEndpoint = $httpBackend.when('GET', 'http://localhost:3000/meals')
        .respond(['alma']);

      ctrl = $controller('MainController', {$scope:scope});
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('test existence of functions', function() {
      expect(scope.newMeal).toBeDefined();
      expect(scope.getAll).toBeDefined();
      
      $httpBackend.expectGET('http://localhost:3000/meals');
      mealsEndpoint.respond('teve');
      scope.getAll();
      $httpBackend.flush();
      console.log(scope.meals);
    });
  });
});
