'use strict';

/* jshint -W098 */
angular.module('mean.submit').controller('SubmitController', ['$scope', 'Global', 'Submit',
  function($scope, Global, Submit) {
    $scope.global = Global;
    $scope.package = {
      name: 'submit'
    };
    $scope.dateOptions = {

    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.open = function($event) {
      $scope.status.opened = true;
    };
    $scope.status = {
      opened: false
    };
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

  }
]);
