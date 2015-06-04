;(function() {
	'use strict';

	angular.module('serviceExamples', [])
		.constant('API_ROOT', 'http://example.com')
		.value('sharedValue', { widgetCount: 0})
		.service('stringUtilsService', function(){
			this.makeAwesome = function(s) {
				return s + " is awesome!";
			};			
		})
		.factory('stringUtilsFactory', function(){
			return new function(){
				this.makeAwesome = function(s) {
					return s + " is awesome!";
				};			
			}
		})
		.controller('ServicesController', function($scope, API_ROOT, sharedValue, 
				stringUtilsService, stringUtilsFactory) {

			var vm = this;

			vm.API_ROOT = API_ROOT;
			vm.sharedValue = sharedValue;

			vm.original = 'everything';
			vm.after = stringUtilsService.makeAwesome(vm.original);

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