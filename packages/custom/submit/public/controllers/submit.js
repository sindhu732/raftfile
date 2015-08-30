'use strict';

/* jshint -W098 */
angular.module('mean.submit').controller('SubmitController', ['$scope', 'Global', 'Submit',
  function($scope, Global, Submit) {
    $scope.global = Global;
    $scope.package = {
      name: 'submit'
    };
  }
]);
