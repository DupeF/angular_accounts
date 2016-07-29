'use strict';

/**
 * @ngdoc service
 * @name accountsApp.balanceQuery
 * @description
 * # balanceQuery
 * Service in the accountsApp.
 */
angular.module('accountsApp')
  .service('balanceQuery', function () {
    return {
      total: function() {
        return {
          success: function(callback) {
            callback({total: 50});
          }
        };
      }
    };
  });
