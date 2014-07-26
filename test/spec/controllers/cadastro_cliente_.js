'use strict';

describe('Controller: CadastroClienteCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var CadastroClienteCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroClienteCtrlCtrl = $controller('CadastroClienteCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
