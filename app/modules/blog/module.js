'use strict';

angular.module('myApp.blog', ['ui.router', 'myApp.blog.services', 'myApp.blog.controllers'])
.config([ '$stateProvider', '$locationProvider', 
  function($stateProvider,   $locationProvider) {

	$stateProvider.state('posts',{
		url: '/posts',
		controller:'PostController',
		templateUrl:'modules/blog/views/list.html'
	});
	$stateProvider.state('post',{
		url:'/posts/:id',
		templateUrl: 'modules/blog/views/detail.html',
		controller: 'PostDetailsController'
	});
	
}]);

angular.module('myApp.blog').run(['$state' , function($state){ 
    $state.go('posts'); 
}]);

