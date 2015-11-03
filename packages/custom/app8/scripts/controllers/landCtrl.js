
document.addEventListener('deviceready',function(){

},false);


app.controller('UploadController',['$scope','Upload',function($scope,Upload){
	$scope.upload = function(file){
		$scope.imageSrc = imgSrc;
		console.log( 'uploaded', $scope.imageSrc );
		Upload.upload({
				url:'http://192.168.1.172:3000/api/addbill/upload/url',
				data:{file:$scope.file}
			}).progress(function(evt){
				console.log('uploading')
			})
			.success(function(evt){
				console.log('done')
			});	
			$scope.imageSrc = imgSrc;
			console.log( 'uploaded', $scope.imageSrc );
	}

}]);

app.controller( 'landCtrl', function( $scope, $rootScope, $timeout, $http, fileReader ){
	$rootScope.tiles = data;
	$scope.models = {};
	$scope.placeholder = [ '', 'description', 'date', 'amount' ];
	$scope.dateType = 'date';
	$scope.today = ( ( new Date() ).getDate() + '-' + ( new Date() ).getMonth() +
			 		 '-' + ( new Date() ).getFullYear() ).toString();

	for ( i = 0; i < $scope.tiles.length; i ++ ){
		$scope.tiles[i].img = '../images/bill.jpg'; }

	$scope.save = function(){
		if( $scope.models[ 0 ] != null ){

			if( $scope.models[ 2 ] != null ){
				var date = $scope.models[ 2 ];
			}else {
				var date = $scope.today;
			}
			
			$rootScope.tiles.push( { amount : $scope.models[ 0 ],
								date : date,
								tag : $scope.models[ 1 ],
								img : $scope.imageSrc } );

			for( i = 0; i < $scope.models.length; i ++ ){
				$scope.models[ i ] = null;
			}
		}
		else { alert( 'fill those out.'); }
		$scope.models = {};
		$scope.imageSrc = null;
		$scope.dateType = 'text';
		//$scope.tileClass[ 0 ] = "createTile";
		$timeout( function() { $scope.tileClass[ 0 ] = ""; }, 300 );
	}

	$scope.tileClass = [];
	
	$scope.toEvent = function( id ){
		$scope.tileClick = true;
		$scope.eventId = id;
		$scope.tileClassChange( id );
	}

	$scope.tileClassChange = function( id ){
		$scope.tileClass = [];
		if( id != 0 ){ $scope.tileClass[ id - 1 ] = 'newTile'; }
	}

	$scope.bodyClick = function(){
		if( $scope.tileClick != true ){ $scope.tileClassChange(0); }
		$scope.tileClick = false;
	}

	$scope.check = function() { console.log( $scope.models[ 1 ] ); }
	
	$scope.getFile = function () {
		$scope.check();
        $scope.progress = 0;
        fileReader.readAsDataUrl( $scope.file, $scope )
            .then( function( result ) {
                $scope.imageSrc = result;
            });
    };
 
    $scope.$on( "fileProgress", function( e, progress ) {
        $scope.progress = progress.loaded / progress.total;
    });


});