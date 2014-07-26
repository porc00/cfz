'use strict';

describe('Service: Memoria', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Memoria;
  beforeEach(inject(function (_Memoria_) {
    Memoria = _Memoria_;
  }));

  it('should do something', function () {
    expect(!!Memoria).toBe(true);
  });

});
