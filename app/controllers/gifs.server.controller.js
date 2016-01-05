'use strict';

/**
 * Module dependencies.
 */
var jsonRetrieval = require('./../utilities/jsonRetrieval.server.utility.js');

/**
 * A function that gets called from the /giphs
 * API route, it takes the supplied value and
 * checks it is valid, if not it automatically searches for
 * both cats and dogs, otherwise it searches given the value,
 * passing it to the jsonRetrieval helper class
 * @param req
 * @param res
 * @returns {*}
 */
exports.list = function (req, res) {
    var value = '';
    if(!req.body.value || req.body.value === 'both'){
        value = 'cats+dogs';
    }else{
        value = req.body.value;
    }
    jsonRetrieval.retrieveGiphyJSON(value, function (giphs) {
        res.jsonp(giphs);
    });
};

/**
 * Function that simple takes the single Gif as found by the middleware
 * and returns it in the response
 * @param req
 * @param res
 */
exports.read = function(req, res) {
    res.jsonp(req.gif);
};


/**
 * Gif Middleware that runs once the gifId is detected in the URL
 * It retrieves the single Gif via the GifId and passes it on to the
 * read endpoint
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.gifByID = function(req, res, next, id) {
    jsonRetrieval.gifByID(id, function (gif) {
        if (! gif) return next(new Error('Failed to load Gif ' + id));
        req.gif = gif ;
        next();
    });
};