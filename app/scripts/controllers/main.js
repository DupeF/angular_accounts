'use strict';

/**
 * @ngdoc function
 * @name accountsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accountsApp
 */
angular.module('accountsApp')
  .controller('MainCtrl', function ($scope, balanceQuery, recordQuery) {
    $scope.paginator = {
      currentPage: 1,
      totalRecords: 0,
      recordsPerPage: 10
    };

    $scope.newRecord = {
      date: '',
      title: '',
      amount: 0
    };
    $scope.balance = {
      total: 0
    };

    $scope.retrieveBalance = function(){
      balanceQuery.total().success(function(data){
        $scope.balance.total = data.total;
      });
    };

    $scope.retrieveRecords = function(){
      recordQuery.getPage($scope.paginator.currentPage).success(function(data){
        $scope.records = data.records;
        $scope.paginator.totalRecords = data.totalRecords;
      });
    };

    $scope.refresh = function(){
      $scope.retrieveBalance();
      $scope.retrieveRecords();
    };

    $scope.refresh();

  });
