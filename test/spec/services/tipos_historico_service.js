'use strict';

describe('Service: TiposHistoricoService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var TiposHistoricoService;
  beforeEach(inject(function (_TiposHistoricoService_) {
    TiposHistoricoService = _TiposHistoricoService_;
  }));

  it('should do something', function () {
    expect(!!TiposHistoricoService).toBe(true);
  });

});
