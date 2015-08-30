'use strict';

angular.module('mean.submit').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('submit example page', {
      url: '/submit/example',
      templateUrl: 'submit/views/index.html'
    });
  }
]);
