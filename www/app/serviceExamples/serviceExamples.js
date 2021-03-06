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
		.factory('beHappy', function($log) {
			return function() {
				$log.log("Be Happy!");
			}
		})
		.controller('ServicesController', function($scope, API_ROOT, sharedValue, 
				stringUtilsService, stringUtilsFactory, beHappy) {

			var vm = this;

			vm.API_ROOT = API_ROOT;
			vm.sharedValue = sharedValue;

			vm.original = 'everything';
			vm.after = stringUtilsService.makeAwesome(vm.original);

			beHappy();

		})
		.controller('Controller1', function(sharedValue) {
			var vm = this;

			vm.sharedValue = sharedValue;
		})
		.controller('Controller2', function(sharedValue) {
			var vm = this;

			vm.sharedValue = sharedValue;
		})

		.factory('customerManager', function($http, $log) {
			return {
				getCustomers: function() {
					return $http.get("pretend-api/customers.json")
						.then(function(response) {
							$log.log("Response!", response);
							return response.data;
						});
				}
			}
		})
		.controller('CustomerController', function($scope, $log, customerManager) {
			var vm = this;

			customerManager.getCustomers()
				.then(function(data) {
					$log.log("Got data!")
					vm.customers = data;
				})
				.catch(function(error) {
					$log.log(error);
				});
		})

	;
})();