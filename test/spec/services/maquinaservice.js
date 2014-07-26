'use strict';

describe('Service: Maquinaservice', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Maquinaservice;
  beforeEach(inject(function (_Maquinaservice_) {
    Maquinaservice = _Maquinaservice_;
  }));

  it('should do something', function () {
    expect(!!Maquinaservice).toBe(true);
  });

});
