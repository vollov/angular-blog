'use strict';

angular.module('myApp.promise.controllers', [])
.controller('PromiseController',['$scope', '$q', '$interval', function($scope, $q, $interval) {
	
	$scope.getPromise = function() {
		var i = 0;
		//creates a new deferred object
		var deferred = $q.defer();
		
		var timer = $interval(function() {
			if ($scope.cancelRequested) { 
				//if cancellation is requested from UI, reject the Promise
				deferred.reject('Promise Rejected due to cancellation.');
				$interval.cancel(timer);
			}
			i = i + 1; //increment i each time
		
			if (i == 5) {
				//once the value of i=5, resolve the promise
				deferred.resolve('Counter has reached 5');
				//make sure to cancel timer
				$interval.cancel(timer);
			} else {
				//else notify the client about the progress
				deferred.notify('Counter has reached ' + i); 
			}
		}, 1000); //run the task every 1 second
		
		return deferred.promise; //finally, return the Promise instance
	}
	
	$scope.getAsyncMessage = function() {
		var promise = $scope.getPromise(); //get hold of the Promise instance
		
		promise.then(function(message) {
			$scope.status = 'Resolved : ' + message;
		}, function(message) {
			$scope.status = 'Rejected : ' + message;
		}, function(message) {
			$scope.status = 'Notifying : ' + message;
		});
	}
}]);
