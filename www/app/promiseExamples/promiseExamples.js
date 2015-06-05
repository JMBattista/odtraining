;(function() {

	angular.module('promiseExamples', [])
		.controller("PromisesController", function ($http, $log, $interval, $timeout, $q) {
			var vm = this;
			vm.foo = "FOO!";

			var p1 = $http.get("pretend-api/customers.json")
				.then(function() {
					return "p1";
				})
			var p2 = $http.get("pretend-api/xcustomers.json")
				.then(function() {
					return "p2";
				})
			var p3 = $http.get("pretend-api/customers.json")
				.then(function() {
					return "p3";
				})


			var plistFail = [p1, p2, p3];
			var plistPass = [p1, p3];
			var plistAllFail = [p2, p2, p2];

			$q.all(plistFail)
				.then(function(value) {
					$log.log("all pass", value);
				})
				.catch(function(value) {
					$log.log("all fail", value);
				});

			$q.all(plistPass)
				.then(function(value) {
					$log.log("all pass", value);
				})
				.catch(function(value) {
					$log.log("all fail", value);
				})

			function any(list) {
				var len = list.length;
				var failCount = 0;
				var i = len;
				var deferred = $q.defer();
				while (i--) {
					list[i].then(
						function(value) {
							deferred.resolve(value);
						},
						function(value) {
							failCount++;
							if (failCount === len)
								deferred.reject(value);
						});
				}

				return deferred.promise;
			}

			any(plistFail).then(function() {
				$log.log("First any passed");
			})

			any(plistPass).then(function() {
				$log.log("Second any failed");
			})

			any(plistAllFail)
				.then(function() {
					$log.log("any passed but should not have");
				})
				.catch(function() {
					$log.log("any failed and should have");
				})


			var d = $q.defer();

			$log.log("Result of notify", d.notify("foo"));

		});


})();