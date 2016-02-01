'use strict';

//Simple filter for currency selection, it takes in both the price of the book and its currency code and converts them to a readable currency string
angular.module('core').filter('currencyFilter', [
    function() {
        return function(currencyValue, currencyCode) {
            var currency = (parseInt(currencyValue) / 100).toFixed(2).toString(); //Change the currency to a two decimal place String
            var formattedCurrency = ''; //Empty string to start with for the finished formatted string

            //Switch statement to cycle through the currency codes
            switch(currencyCode){
                case 'GBP':
                    formattedCurrency = '£' + currency; //Sterling
                    break;
                case 'USD':
                    formattedCurrency = '$' + currency; //Dollars
                    break;
                default : //Assume Euro is default
                    formattedCurrency = '€' + currency; //Euros
                    break;
            }

            return formattedCurrency; //Return the fully formatted string
        };
    }
]);