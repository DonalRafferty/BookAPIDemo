'use strict';

//Simple filter for pagination to splice the array for each page
angular.module('core').filter('startFrom', [
	function() {
        return function(input, start) {
            start = +start;
            return input.slice(start);
        };
	}
]);

