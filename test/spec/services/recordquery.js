'use strict';

describe('Service: recordQuery', function () {

  // load the service's module
  beforeEach(module('accountsApp'));

  // instantiate service
  var recordQuery;
  beforeEach(inject(function (_recordQuery_) {
    recordQuery = _recordQuery_;
  }));

  it('should do something', function () {
    expect(!!recordQuery).toBe(true);
  });

});
