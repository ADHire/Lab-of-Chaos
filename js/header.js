
angular
	.module("labApp")
	.directive("myheader", function() {
		return{
			restrict: "EA", //E = element, A = attribute, C = class, M = comment 
			templateUrl: "sections/header.html",
		    replace: true
		};
	});



