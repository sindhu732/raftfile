'use strict';



angular.module('mean.addbill').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('addbill example page', {
      url: '/addbill/example',
      templateUrl: 'addbill/views/index.html'
    });
  }
]);
