'use strict';

describe('PostController Test\n', function(){
	beforeEach(module('myApp.blog.controllers'));
	beforeEach(module('myApp.blog.services'));

	it('Should initialize controller with 4 posts',
			inject(function($rootScope,$controller,postService) {
				var $scope=$rootScope.$new();
				$controller('PostController',{$scope:$scope,
					postService:postService});
				expect($scope.posts.length).toBe(4);
			})
	);
});

describe('PostDetailsController Test\n', function(){
	beforeEach(module('myApp.blog.controllers'));
	beforeEach(module('ui.router'));
	beforeEach(module('myApp.blog.services'));
	
	it('Should initialize controller with 1 post',
			inject(function($state,$stateParams,$rootScope,$controller,
					postService) {
				var $scope=$rootScope.$new();
				$stateParams.id=2;
				$controller('PostDetailsController',{$scope:$scope,
					$stateParams:$stateParams,$state:$state,postService:postService
				});
			
				expect($scope.singlePost).not.toBe(undefined);
			}) // inject end
	);// end it		
});
	