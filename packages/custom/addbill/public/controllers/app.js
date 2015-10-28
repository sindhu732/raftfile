var app = angular.module('mean.addbill', ['ngFileUpload']);

app.controller('MainController', ['$scope','$http', 'Upload', function($scope, $http, Upload) {

	  $scope.getTotal = function(){
    	var total = 0;
    	for(var i = 0; i < $scope.bills.length; i++){
       		 var bill = $scope.bills[i];
        	 total += bill.amount;
    		}
    	return total;
		};	

      $scope.upload = function(file){

	      	Upload.upload({
	        	url: '/api/addbill/upload/url',
	       		data: {'file':file}
	      		}).progress(function(evt) {
	        			console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
	      		}).success(function(data, status, headers, config) {
				        //console.log("Data "+data);				        	
				        //console.log("Headers "+headers);
				        //console.log(config);
				        if (status==200) {
				        	console.log("status "+status + " OK");
				        	$scope.postBill(data);
				        }
				      	});
  		};
	$scope.postBill=function(data){
		console.log("image path " + data);
		var newbillData = {
			created: new Date,
			billImage: data,
			amount: $scope.amount,
			detail: $scope.detail,
			date: $scope.date,
			claimed: false
		};

		console.log('New Bill ' + newbillData);
		$http.post('/api/addbill/postbill', newbillData).success(function(response) {
			console.log(response);
			$scope.newbill = response;
		});


	};

		$http.get('/api/addbill/getbills').success(function(response) {
			console.log(response);
			$scope.bills = response.unclaimedBills;
			$scope.total = $scope.getTotal();
		});


	$scope.claim = function() {
		var claimFilter = {
			fromDate: $scope.fromdate,
			toDate: $scope.todate
		};
		$http.post('/api/addbill/claim', claimFilter).success(function(response) {
			console.log(response);
			$scope.bills = response.unclaimedBills;
		})
	}
	
}]);

// file:///storage/emulated/0/Android/data/com.example.mrio/cache/...jpg