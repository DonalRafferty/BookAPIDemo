'use strict';

/**
 * Module dependencies.
 */
var bookAPIExt = require('./../utilities/bookAPIExt.server.utility.js');

/**
 * A function that gets called from the /books
 * API route, it utilises a helper class to get the
 * JSON from the external books API
 * @param req
 * @param res
 * @returns {*}
 */
exports.list = function (req, res) {
    bookAPIExt.retrieveBooks(function (books) {
        res.jsonp(books);
    });
};

/**
 * Function that simply takes the single Book as found by the middleware
 * and returns it in the response
 * @param req
 * @param res
 */
exports.read = function(req, res) {
    res.jsonp(req.book);
};


/**
 * Book Middleware that runs once the bookId is detected in the URL
 * It retrieves the single Book via the bookId and passes it on to the
 * read endpoint, it utilises a helper class to get the
 * JSON from the external books API
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.gifByID = function(req, res, next, id) {
    bookAPIExt.bookByID(id, function (book) {
        if (! book) return next(new Error('Failed to load Book ' + id));
        req.book = book ;
        next();
    });
};