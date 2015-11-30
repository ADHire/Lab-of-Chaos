angular
	.module("labApp")
	.directive("myfooter", function() {
		return{
			restrict: "EA", //E = element, A = attribute, C = class, M = comment 
			templateUrl: "sections/footer.html",
		    replace: true
		};
	});




