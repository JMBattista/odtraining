;(function () {
	'use strict';

	angular.module('demoApp', ['ngRoute', 'controllerExamples'])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/menu', {
					templateUrl: 'templates/menu.html'
				})
				.when('/controllers', {
					templateUrl: 'templates/controllers.html'
				})
				.when('/error', {
					templateUrl: 'templates/error.html'
				})
				.otherwise({
					redirectTo: '/error'
				})
			;
		})
	;
})();