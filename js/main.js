
angular
	.module("labApp")
	.directive("leftmain", function() {
		return{
			restrict: "EA", //E = element, A = attribute, C = class, M = comment 
			template: '<main>hi</main>',
		    replace: true
		};
	});