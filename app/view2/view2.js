'use strict';

angular.module('myApp.view2', ['ui.router'])

.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider,   $urlRouterProvider,   $locationProvider) {
	
	$stateProvider.state('view2',{
		url: '/view2',
		controller:'View2Ctrl',
		templateUrl:'/view2/view2.html'
	});
}])

.controller('View2Ctrl', [function() {

}]);