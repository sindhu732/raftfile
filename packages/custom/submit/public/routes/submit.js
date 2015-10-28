'use strict';

angular.module('mean.submit').config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

angular.module('mean.submit').config(['$viewPathProvider', function($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'submit/views/index.html');
}]).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('landing', {
        url: '/submit/search',
        templateUrl: 'submit/views/index.html'
      })
      .state('landing.searched', {
        url: '/:fromDate/:toDate',
        templateUrl: 'submit/views/search.results.html',
        controller: 'BillsController'
      });
  }
]);
