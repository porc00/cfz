'use strict';

describe('Controller: DefeitosctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DefeitosctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DefeitosctrlCtrl = $controller('DefeitosctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
