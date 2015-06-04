;(function() {
	'use strict';

	angular.module('serviceExamples', [])
		.constant('API_ROOT', 'http://example.com')
		.value('sharedValue', { widgetCount: 0})
		.controller('ServicesController', function($scope, API_ROOT, sharedValue) {
			var vm = this;

			vm.API_ROOT = API_ROOT;
			vm.sharedValue = sharedValue;
		})
		.controller('Controller1', function(sharedValue) {
			var vm = this;

			vm.sharedValue = sharedValue;
		})
		.controller('Controller2', function(sharedValue) {
			var vm = this;

			vm.sharedValue = sharedValue;
		})

	;
})();