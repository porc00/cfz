'use strict';

describe('Controller: SelecionadorclienteCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var SelecionadorclienteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelecionadorclienteCtrl = $controller('SelecionadorclienteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
