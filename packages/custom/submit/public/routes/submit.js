'use strict';

angular.module('mean.submit').config(['$viewPathProvider', function($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'submit/views/index.html');
}]).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('landing', {
      url: '/submit/search',
      templateUrl: 'submit/views/index.html',
      views:{
        url:'/submit/search/results',
        templateUrl:'submit/views/search.results.html'
      }
    });
  }
]);
