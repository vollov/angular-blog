'use strict';

angular.module('myApp.emit', [ 'ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/emit', {
		templateUrl : 'emit/view.html',
		controller : 'MessageController'
	});
} ])

.controller('MessageController', [ '$scope', '$timeout',function($scope, $timeout) {
	$scope.messages = [{
		sender: 'user1',
		text: 'Message1'
	}];
	
	var timer;
	var count=0;
	$scope.loadMessages = function() {
		count++;
		$scope.messages.push({
			sender: 'user1',
			text: 'Random message'+count
		});
		timer=$timeout($scope.loadMessages, 2000);
		if(count==3){
			$scope.$broadcast('EVENT_NO_DATA', 'Not Connected');
			$timeout.cancel(timer);
		}
	};
	
	timer=$timeout($scope.loadMessages, 2000);
	$scope.$on('EVENT_RECEIVED',function(){
		console.log('Received emitted event');
	});
}])
.controller('StatsController', [ '$scope', function($scope) {
	$scope.name = 'World';
	$scope.status = 'Connected';
	$scope.statusColor='green';
	
	$scope.$on('EVENT_NO_DATA', function(event, data) {
		console.log('received broadcasted event');
		$scope.status = data;
		$scope.statusColor='red';
		$scope.$emit('EVENT_RECEIVED');
	});
}]);