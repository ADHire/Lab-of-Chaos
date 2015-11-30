var app = angular.module('labApp', ['ngRoute', 'ngAnimate']);

  app.config(function($routeProvider){
    $routeProvider.when('/',{
      controller: 'myController',
      templateUrl: 'sections/dog.html'
    });
    $routeProvider.when('/prime',{
      controller: 'myController',
      templateUrl: 'sections/prime.html'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
  });


  app.controller('myController', ['$scope', function($scope) {
    $scope.images = [{
      src: 'image1.jpg',
      title: 'Pic 1'
    }, {
      src: 'image2.jpg',
      title: 'Pic 2'
    }, {
      src: 'image3.jpg',
      title: 'Pic 3'
    }, {
      src: 'image4.jpg',
      title: 'Pic 4'
    }, {
      src: 'image5.jpg',
      title: 'Pic 5'
    }, {
      src: 'image6.jpg',
      title: 'Pic 6'
    }];
}]);

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