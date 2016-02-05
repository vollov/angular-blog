'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [ 'ui.router', 'myApp.blog','myApp.admin', 'myApp.view1', 'myApp.view2', 'myApp.event', 'myApp.emit'

]).config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider,   $urlRouterProvider,   $locationProvider) {
	
	$urlRouterProvider.otherwise('/view1');

} ]).run(function($rootScope) {
	$rootScope.title = 'Famous Books';
	$rootScope.name = "Root Scope";
});