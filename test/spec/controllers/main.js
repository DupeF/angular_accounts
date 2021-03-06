'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('accountsApp'));

  var MainCtrl,
    scope, balanceQuery, recordQuery;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _balanceQuery_, _recordQuery_) {
    scope = $rootScope.$new();
    balanceQuery = _balanceQuery_;
    recordQuery = _recordQuery_;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      balanceQuery: balanceQuery,
      recordQuery: recordQuery
      // place here mocked dependencies
    });
  }));

  it('should set $scope.balance.total when $scope.retrieveBalance is called', function () {
    spyOn(balanceQuery, 'total').and.callFake(function(){
      return {
        success: function(callback){
          callback({total: 10});
        }
      };
    });

    scope.retrieveBalance();

    expect(scope.balance.total).toEqual(10);
  });

  it('should set $scope.records ad $scope.paginator.totalRecords when $scope.retrieveRecords is called', function () {
    scope.paginator = {currentPage: 5};

    spyOn(recordQuery, 'getPage').and.callFake(function(page){
      return {
        success: function(callback){
          callback({records: ['a', page], totalRecords: 10});
        }
      };
    });

    scope.retrieveRecords();

    expect(scope.records).toEqual(['a', 5]);
    expect(scope.paginator.totalRecords).toEqual(10);
  });

  it('should call $scope.retrieveRecords and $scope.retrieveBalance when $scope.refresh is called', function() {
    spyOn(scope, 'retrieveBalance');
    spyOn(scope, 'retrieveRecords');

    scope.refresh();

    expect(scope.retrieveBalance).toHaveBeenCalled();
    expect(scope.retrieveRecords).toHaveBeenCalled();
  });
});
