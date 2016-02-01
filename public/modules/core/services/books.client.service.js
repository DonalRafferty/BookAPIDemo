'use strict';

//Books service used to communicate Books REST endpoints
angular.module('core').factory('Books', ['$resource',
    function($resource) {
        return $resource('books/:bookId', { bookId: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);