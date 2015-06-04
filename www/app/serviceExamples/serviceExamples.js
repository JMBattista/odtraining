;(function() {
	'use strict';

	angular.module('serviceExamples', [])
		.constant('API_ROOT', 'http://example.com')
		.controller('ServicesController', function($scope, API_ROOT) {
			var vm = this;

			vm.API_ROOT = API_ROOT;
		})
	;
})();