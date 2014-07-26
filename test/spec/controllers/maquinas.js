'use strict';

describe('Controller: MaquinasctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var MaquinasctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaquinasctrlCtrl = $controller('MaquinasctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
