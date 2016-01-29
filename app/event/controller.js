'use strict';

angular.module('myApp.event', [ 'ui.router' ])

.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider,   $urlRouterProvider,   $locationProvider) {
	
	$stateProvider.state('event',{
		url: '/event',
		controller:'SiteController',
		templateUrl:'/event/view.html'
	});
}])

.controller('SiteController', [ '$scope', function($scope) {
	$scope.publisher='SitePoint';
	$scope.type="Web Development";
	$scope.name="Scope for SiteController";
}])
.controller('BookController', [ '$scope', function($scope) {
	$scope.books = ['Jump Start HTML5','Jump Start CSS','Jump Start Responsive Web Design'];
	$scope.name="Scope for BookController";
	
	$scope.addToWishList=function(book){
		$scope.wishListCount++;
	};
	
	$scope.wishListCount=0;
	$scope.$watch('wishListCount',function(newValue,oldValue){
		console.log('called '+newValue+' times');
		//if(newValue!=oldValue){
			if(newValue==2){
				alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
			}
		//}
	});
}])
.controller('TimeoutController', [ '$scope', function($scope) {
	$scope.scheduleTask = function() {
		setTimeout(function() {
			$scope.$apply(function() {
				$scope.message = 'Fetched after 3 seconds';
				console.log('message='+$scope.message); //log this to console
			});
		}, 3000);
	}
}]);