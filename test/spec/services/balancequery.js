'use strict';

describe('Service: balanceQuery', function () {

  // load the service's module
  beforeEach(module('accountsApp'));

  // instantiate service
  var balanceQuery;
  beforeEach(inject(function (_balanceQuery_) {
    balanceQuery = _balanceQuery_;
  }));

  it('should do something', function () {
    expect(!!balanceQuery).toBe(true);
  });

});
