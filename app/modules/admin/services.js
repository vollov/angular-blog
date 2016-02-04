'use strict';

angular.module('myApp.admin.services', ['ngResource'])
.factory('Post', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT) {
	return $resource(API_ENDPOINT, {
				id : '@_id'
			}, {
				update : {
					method : 'PUT'
				}
			});
	}
]).service('popupService', [ '$window', function($window) {
	this.showPopup = function(message) {
		return $window.confirm(message); // Ask the users if they really want
											// to delete the post entry
	}
}]).value('API_ENDPOINT',
		'http://localhost:3000/api/posts/:id'); // This
																		// is
																		// our
																		// end
																		// point