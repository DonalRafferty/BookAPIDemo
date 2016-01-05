'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http', '$stateParams', 'Gifs',
	function($scope, $http, $stateParams, Gifs) {

        $scope.currentPage = 0; //Default variable for current page
        $scope.pageSize = 25; //Default page size for number of gifs to show on a page
        $scope.numberOfPages = 0; //Instantiation for the number of pages, default zero until data is retrieved

        /**
         * Scope variable for keeping track of the selected value from
         * the radio buttons
         * @type {{value: string}}
         */
        $scope.selection = {
            value: 'both'
        };

        /**
         * Function simply calls the getGifs function whenever a change occurs
         * by the user selecting one of the radio button options
         * @param selectedItem
         */
        $scope.onSelectionChanged = function(selectedItem){
            $scope.getGifs(selectedItem);
            $scope.currentPage = 0; //Go back to the first page
        };

        /**
         * Function to make the HTTP call to the API endpint to get a single gif
         * Uses the gifId taken from the state parameters in the URL
         */
        $scope.findOne = function () {
            Gifs.get({
                gifId: $stateParams.gifId //Taken from URL
            }, function (gif) {
                $scope.gif = gif.data; //Add the retrieved gif data to the scope
            });
        };

        /**
         * Function to make the HTTP call to the API endpoint to get the gifs
         * value is supplied on the scope from form in HTML (Radio Buttons)
         * The selected value from the radio buttons is sent to the server
         */
        $scope.getGifs = function(selectedItem){
            $http.post('/giphs', {value: selectedItem}).success(function (response) { //selectedItem comes from the HTML form
                $scope.gifs = response.data; //Got the Gifs
                $scope.numberOfPages = Math.ceil($scope.gifs.length/$scope.pageSize); //Calcuate the numbers required for pagination
            }).error(function (response) {
                $scope.error = response.message; //Something failed,
            });
        };
	}
]);
