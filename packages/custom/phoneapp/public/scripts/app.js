
var app = angular.module( 'App', [ 'ngTouch', 'ui.router' ] );

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


})