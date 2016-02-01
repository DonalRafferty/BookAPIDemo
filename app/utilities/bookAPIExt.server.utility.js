'use strict';

/**
 * Module dependencies.
 */
var http = require('http'),
config = require('./../../config/config');

/**
 * Private helper function for performing the HTTP Requests
 * @param options
 * @param injectedCallback
 */
var doRequest = function(options, injectedCallback){
    //Simple HTTP GET to retrieve and append the data to a String
    http.get(options.host + options.path, function(response){
        var str = '';

        //Another chunk of data has been received, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been received, so we just print it out here
        response.on('end', function () {
            injectedCallback(JSON.parse(str)); //Send the full JSON back via the callback
        });
    });
};

/**
 * Helper function that retrieves the list of Books
 * from the url in JSON format.
 * The injectedCallback is used to asynchronously pass
 * the results to the next part of the chain.
 * @param injectedCallback
 */
exports.retrieveBooks = function(injectedCallback){
    var options = { //options object for holding URL data
        host: config.book_api.host,
        path: 'books'
    };

    doRequest(options, injectedCallback);
};

/**
 * Helper function that retrieves a single Book
 * from the url in JSON format.
 * The injectedCallback is used to asynchronously pass
 * the results to the next part of the chain.
 * @param injectedCallback
 */
exports.bookByID = function(value, injectedCallback){
    var options = { //options object for holding URL data
        host: config.book_api.host,
        path: 'book/' + encodeURIComponent(value)
    };

    doRequest(options, injectedCallback);
};

