'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http', '$stateParams', 'Books',
	function($scope, $http, $stateParams, Books) {

        /**
         * Simple helper function for showing and hiding the loading UI
         * @param onOff
         */
        var doLoadingUI = function(onOff){
            $scope.loading = onOff;
        };

        /**
         * Function to make the HTTP call to the API endpoint to get a single book
         * Uses the bookId taken from the state parameters in the URL
         */
        $scope.findOne = function () {
            doLoadingUI(true);
            Books.get({
                bookId: $stateParams.bookId //Taken from URL
            }, function (book) {
                $scope.book = book; //Add the retrieved book data to the scope
                doLoadingUI(false);
            });
        };

        /**
         * Function to make the HTTP call to the API endpoint to get the books
         */
        $scope.findBooks = function(){
            doLoadingUI(true);
            Books.query(function(books){
                $scope.books = books;
                doLoadingUI(false);
            });
        };
	}
]);
