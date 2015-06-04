;(function () {
	'use strict';

	angular.module('demoApp', ['ngRoute', 'controllerExamples', 'digestCycleExamples'])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/menu', {
					templateUrl: 'templates/menu.html'
				})
				.when('/controllers', {
					templateUrl: 'app/controllerExamples/controllers.html'
				})				
				.when('/digestcycle', {
					templateUrl: 'app/digestCycleExamples/digestcycle.html',
					controller: 'DigestCycleController',
					controllerAs: 'dce'
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