'use strict';

angular.module('mean.phoneapp').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('phoneapp example page', {
      url: '/phoneapp/example',
      templateUrl: 'phoneapp/views/index.html'
    });
  }
]);
