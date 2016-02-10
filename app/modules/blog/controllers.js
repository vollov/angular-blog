'use strict';

angular.module('myApp.blog.controllers', ['myApp.posts.directives'])
.controller('PostController',['$scope', 'Post', function($scope, Post) {
//	$scope.getAllPosts = function() {
//		return postService.getAll();
//	};
	//$scope.posts = $scope.getAllPosts();
	$scope.posts=Post.query();
}])
.controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'Post',
                              function($stateParams,   $state,   $scope,   Post) {
//	$scope.getPostById = function(id) {
//		return postService.getPostById(id);
//	};
	
	$scope.closePost = function() {
		$state.go('posts');
	};
	
	$scope.singlePost=Post.get({id:$stateParams.id});
	console.log('post is =' + $scope.singlePost);
	
//	$scope.singlePost = $scope.getPostById($stateParams.id);
}]);