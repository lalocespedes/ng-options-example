'use strict';

/**
 * @ngdoc function
 * @name ngoptionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngoptionsApp
 */
angular.module('ngoptionsApp')
  .controller('MainCtrl', function (usersResources) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var users = this;
    var getusers = usersResources.get();

    getusers.$promise.then(function(data) {

      users.all = data;
      users.user = users.all[1];

    });

    this.metodopago = [
      'Efectivo',
      'Transferencia Electronica',
      'Transferencias electronicas de fondos',
      'Cheque nominativo',
      'Tarjeta de credito',
      'Tarjeta de debito',
      'Tarjeta de Servicios',
      'Monedero electronico',
      'No identificado'
    ];

    this.payment_method = this.metodopago[0];

    //console.log(this.metodopago);


  });
