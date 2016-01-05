'use strict';

//Gifs service used to communicate Gifs REST endpoints
angular.module('core').factory('Gifs', ['$resource',
	function($resource) {
		return $resource('/:gifId', { gifId: '@id'
		}, {}); //Simple service for retrieving single Gif data
	}
]);