'use strict';

describe('Controller: ClienteCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var ClienteCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteCtrlCtrl = $controller('ClienteCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
