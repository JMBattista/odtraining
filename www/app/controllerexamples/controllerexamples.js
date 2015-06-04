;(function() {
	'use strict';

	angular.module('controllerExamples', [])

		.controller('FirstController', function() {
			var vm = this;

			function doThing() {
				vm.person = {firstname : "Lucia"};
			}

			doThing();
		})

		.controller('SecondController', function() {
		})
	;
})();