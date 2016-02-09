'use strict';


beforeEach(module('myApp.admin.controllers'));
beforeEach(module('myApp.admin.services'));

beforeEach(module('ngResource'));
beforeEach(module('ui.router'));

describe('PostController Test\n', function(){

    var $httpBackend;

    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend=_$httpBackend_;
        $httpBackend.expectGET('http://localhost:8000/api/post').respond([{title:'Test',_id:1},{title:'Test2',_id:2}]);
    }));

    afterEach(function() {
    	$httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
   	
    it('Should initialize controller with 2 posts', inject(function($rootScope,$controller,Post) {
    	var $scope=$rootScope.$new();
    	$controller('PostListController',{$scope:$scope,Post:Post});
    	$httpBackend.flush();
    	expect($scope.posts.length).toBe(2);
    }));
});

describe('PostDetailsController Test\n', function(){

    var $httpBackend;

    beforeEach(inject(function(_$httpBackend_) {
    	
        $httpBackend=_$httpBackend_;

        $httpBackend.expectGET('http://localhost:8000/api/post/2').respond({title:'Test2',_id:2});

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should initialize controller with 1 post', inject(function($state,$stateParams,$rootScope,$controller,Post) {

        var $scope=$rootScope.$new();

        $stateParams.id=2;

        $controller('PostUpdateController',{$scope:$scope,$stateParams:$stateParams,$state:$state,Post:Post});

        $httpBackend.flush();

        expect($scope.post).not.toBe(undefined);
        expect($scope.post.title).toBe('Test2');
    }));

});


