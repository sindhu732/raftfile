'use strict';

/* jshint -W098 */
angular.module('mean.submit').controller('SubmitController', ['$scope', 'Global', 'Submit', '$state',
  function($scope, Global, Submit, $state) {
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

    $scope.go = function() {
      debugger;
      $state.go('landing.searched', {
        fromDate: $scope.fromDate,
        toDate: $scope.toDate
      });
    }

  }
]);


angular.module('mean.submit').controller('BillsController', ['$scope', 'Global', 'Submit', '$stateParams', '$http',
  function($scope, Global, Submit, $stateParams, $http) {
    $http({
      url: 'http://192.168.1.172:3000/api/addbill/claim',
      method: 'POST',
      data: {
        fromDate: $stateParams,
        toDate: $stateParams.toDate
      }
    }).then(function(data) {
      $scope.bills = data.unclaimedBills
    }, function(err) {
      console.log(err);
    });
  }
]);
