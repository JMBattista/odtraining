;(function() {
	angular.module('directiveExamples', [])
		.controller('DirectiveExampleController', function($scope) {
			var vm = this;

		})
		.directive('logo', function() {
			return {
				templateUrl: 'app/directiveExamples/logo.html'
			};
		})
})();