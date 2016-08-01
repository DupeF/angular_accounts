'use strict';

/**
 * @ngdoc service
 * @name accountsApp.recordQuery
 * @description
 * # recordQuery
 * Service in the accountsApp.
 */
angular.module('accountsApp')
  .service('recordQuery', function () {
    return {
      getPage: function (page) {
        return {
          success: function(callback){
            callback({
              records: [
                {
                  title: 'Patates - page' + page,
                  amount: -12,
                  date: '24/06/2016'
                },
                {
                  title: 'Tomates - page' + page,
                  amount: -18,
                  date: '12/07/2016'
                }
              ],
              totalRecords: 35
            });
          }
        };
      }
    };
  });
