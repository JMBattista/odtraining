;(function () {
	'use strict';

	angular.module('demoApp', ['ngRoute', 'controllerExamples', 'digestCycleExamples', 'serviceExamples', 
		'promiseExamples', 'directiveExamples'])
		.config(function ($routeProvider, API_ROOT) {
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
				.when('/services', {
					templateUrl: 'app/serviceExamples/serviceExamples.html',
					controller: 'ServicesController',
					controllerAs: 'vm'
				})
				.when('/promises', {
					templateUrl: 'app/promiseExamples/promiseExamples.html',
					controller: 'PromisesController',
					controllerAs: 'vm'
				})
				.when('/directives', {
					templateUrl: 'app/directiveExamples/directiveExamples.html',
					controller: 'DirectiveExampleController',
					controllerAs: 'vm'
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