var app = angular.module('mrio3', [])

app.controller('BillsController', ['$scope', function($scope) {
	$scope.bills = [
	{
		bill_image: 'blah',
		amount: '34',
		detail: 'blah blah',
		date: new Date('2015', '10', '03'),
	},
	{
		bill_image: 'blah',
		amount: '34',
		detail: 'blah blah',
		date: new Date('2015', '10', '03'),
	}
	]
}]);

app.controller('unclaimed_bills', function($scope, $http) {
	$http.get('/api/addbill/getbills').success(function(response) {
		$scope.bills = response.getBills.unclaimed_bills;
	})
});

app.controller('add_newbill', function($scope, $http) {
	$http.post('/api/addbill/postbill').success(function(response) {
		$scope.bill = response.postBill.new_bill;
	})
})