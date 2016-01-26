'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [ 'ngRoute', 'myApp.view1', 'myApp.view2', 'myApp.event', 'myApp.emit'
// 'myApp.version'
]).config([ '$routeProvider', function($routeProvider) {
	$routeProvider
//	.when('/event', {
//		templateUrl : 'event/view.html',
//		controller : 'SiteController'
//	})
	.otherwise({
		redirectTo : '/view1'
	});
} ]).run(function($rootScope) {
	$rootScope.title = 'Famous Books';
	$rootScope.name = "Root Scope";
});