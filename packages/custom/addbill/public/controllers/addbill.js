'use strict';

/* jshint -W098 */
angular.module('mean.addbill').controller('AddbillController', ['$scope', 'Global', 'Addbill',
  function($scope, Global, Addbill) {
    $scope.global = Global;
    $scope.package = {
      name: 'addbill'
    };
  }
]);
