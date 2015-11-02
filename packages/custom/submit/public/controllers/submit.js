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
    //$scope.formats = ['dd-MMMM-yy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = 'mediumDate';
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
      $state.go('landing.searched', {
        fromDate: $scope.fromDate,
        toDate: $scope.toDate
      });
    }

  }
]);


angular.module('mean.submit').controller('BillsController', ['$scope', 'Global', 'Submit', '$stateParams', '$http', '$state',
  function($scope, Global, Submit, $stateParams, $http, $state) {
    $http.post('/api/addbill/claim', {
      fromDate: $stateParams.fromDate,
      toDate: $stateParams.toDate
    }).success(function(data) {
      $scope.bills = data.unclaimedBills
    }).error(function(err) {
      console.log(err)
    });

    $scope.toggleDisplay = function(index) {
      if ($scope.bills[index].show) {
        $scope.bills[index].show = false;
        return;
      }
      for (var i = 0; i < $scope.bills.length; i++) {
        $scope.bills[i].show = false;
      }
      $scope.bills[index].show = true;
    }
    $scope.generateClaim = function() {

      $http({
        url: '/api/submit/generateClaim',
        method: 'POST',
        data: {
          bills: $scope.bills
        },
        responseType: 'arraybuffer'
      }).success(function(data) {

        console.log(data.length);
        var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        var Blob = window.Blob;

        if (URL && Blob) {
          console.log(data);
          var blob = new Blob(data, {
            type: 'application/octet-stream'
          });
          url = URL.createObjectURL(blob);
          var link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("download", name || "Download.bin");
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
          link.dispatchEvent(event);

        } else {
          throw 'URL is not supported. Falling back to the next method';
        }
      }).error(function() {

      })
    }
  }
]);
