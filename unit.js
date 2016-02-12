'use strict';
describe('Testing AngularJS Test Suite', function() {
  beforeEach(module('testingAngularApp'));
  describe('Testing AngularJS Controller', function() {
    var scope, ctrl;
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('testingAngularCtrl', {$scope:scope});
    }));
    it('should initalize the title in the scope', function() {
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe('Testing AngularJS Application');
    });
    it('should add 2 destination to destination list', function() {
      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);
      scope.newDestionation = {
        city: 'London',
        country: 'England'
      };
      scope.addNewDestination();
      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe('London');
      expect(scope.destinations[0].country).toBe('England');
      scope.newDestionation.city = 'Frankfurt';
      scope.newDestionation.country = 'Germany';
      scope.addNewDestination();
      expect(scope.destinations.length).toBe(2);
      expect(scope.destinations[1].city).toBe('Frankfurt');
      expect(scope.destinations[1].country).toBe('Germany');
    });
  });
});
