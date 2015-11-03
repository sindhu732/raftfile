

app.config( function( $stateProvider, $urlRouterProvider, $rootScopeProvider ){

	$urlRouterProvider.otherwise( "land" );

    $stateProvider
	    .state( 'land', {
	    	url: '/land',
	        templateUrl: 'views/landPage.html',
	        controller: 'landCtrl',
	    })

	    .state( 'event', {
	    	url : '/event',
	    	templateUrl : 'views/event.html',
	    	controller : 'eventCtrl',
	    })


});


// ================ Directive to get image from device ===================
app.directive("ngFileSelect",function(){
	return {
    	link: function($scope,el){
      
      		el.bind("change", function(e){
      	        $scope.file = (e.srcElement || e.target).files[0];
		        $scope.getFile();
      		})
      	}
    }
});