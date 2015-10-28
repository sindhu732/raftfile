
app.controller( 'landCtrl', function( $scope, $rootScope, $timeout ){
	$rootScope.tiles = data;
	$scope.models = {};
	$scope.placeholder = [ '', 'description', 'date', 'amount' ];
	$scope.dateType = 'date';
	$scope.today = ( ( new Date() ).getDate() + '-' + ( new Date() ).getMonth() +
			 		 '-' + ( new Date() ).getFullYear() ).toString();

	$scope.save = function(){
		if( $scope.models[3] != null ){

			if( $scope.models[ 2 ] != null ){
				var date = $scope.models[ 2 ];
			}else {
				var date = $scope.today;
			}
			
			$rootScope.tiles.push( { amount : $scope.models[ 3 ],
								date : date,
								tag : $scope.models[ 1 ] } );

			for( i = 0; i < $scope.models.length; i ++ ){
				$scope.models[ i ] = null;
			}
		}
		else { alert( 'fill those out.'); }
		$scope.models = {};
		$scope.dateType = 'text';
	}

	$scope.image = '../images/bill.jpg';
	
	$scope.toEvent = function( id ){
		$scope.eventId = id;
		console.log( id );
	}

});