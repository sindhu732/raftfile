'use strict';

/* jshint -W098 */
angular.module('mean.phoneapp').controller('PhoneappController', ['$scope', 'Global', 'Phoneapp',
  function($scope, Global, Phoneapp) {
    $scope.global = Global;
    $scope.package = {
      name: 'phoneapp'
    };
  }
]);
