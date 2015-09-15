'use strict';

/**
 * @ngdoc service
 * @name ngoptionsApp.users
 * @description
 * # users
 * Service in the ngoptionsApp.
 */
angular.module('ngoptionsApp')
  .service('usersResources', function ($resource) {

    return $resource("http://jsonplaceholder.typicode.com", {}, {

      get: {
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users',
        isArray: true
      }

    });

  });
