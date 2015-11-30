angular
	.module("labApp")
	.directive("sidebar", function() {
		return{
			restrict: "EA", //E = element, A = attribute, C = class, M = comment 
			templateUrl: "sections/sidebar.html",
		    replace: true
		};
	});