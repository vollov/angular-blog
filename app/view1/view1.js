'use strict';

angular.module('myApp.view1', ['ui.router'])

.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider,   $urlRouterProvider,   $locationProvider) {
	
	$stateProvider.state('view1',{
		url: '/view1',
		controller:'View1Ctrl',
		templateUrl:'/view1/view1.html'
	}).
	state('view1.list', {
	      url: "/list",
	      templateUrl: "/view1/state1.list.html",
	      controller: function($scope) {
	        $scope.items = ["A", "List", "Of", "Items"];
	      }
	    });
}])

.controller('View1Ctrl', [function() {

}]);