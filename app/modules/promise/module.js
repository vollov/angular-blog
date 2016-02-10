'use strict';

angular.module('myApp.promise', ['ui.router', 'myApp.promise.controllers'])
.config([ '$stateProvider', '$locationProvider', 
  function($stateProvider,   $locationProvider) {

	$stateProvider.state('prom_demo',{
		url: '/promise',
		controller:'PromiseController',
		templateUrl:'modules/promise/views/main.html'
	});
	
}]);
