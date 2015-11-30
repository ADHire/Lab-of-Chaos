
var app = angular.module("labApp", []);

app.controller('primeController', function primeNumbers($scope) {

	$scope.primes = function(number) {
		console.log(number);
		var factors = [];
		for (var i = 2; i <= number; i++) {
			while (number % i === 0) {
				factors.push(i);
				number = number / i;
				$scope.factors = factors;

			}
		}
		console.log(factors);
		return factors;
	}
});