;(function() {
	'use strict';

	angular.module('digestCycleExamples', [])
		.controller("DigestCycleController", function($scope, $log) {
			var vm = this;
			vm.person = {};
			vm.valid = false;

			$scope.$watch(function() { return vm.person.firstname; },
				function(newValue, oldValue) {
					$log.log("First name function watcher");
				});

			// can use a function
			$scope.$watchCollection('dce.person', function(newValue, oldValue) {
				$log.log('Person changes: ', oldValue, newValue);
				if (newValue && parseInt(newValue.zipcode).toString() === newValue.zipcode && newValue.zipcode.length === 5)
					vm.valid = true;
				else
					vm.valid = false;
			});

			// can also be an array of functions
			$scope.$watchGroup(['dce.person.firstname', 'dce.person.lastname'], function() {
				$log.log("First or last name changed");
			})
		});
})();