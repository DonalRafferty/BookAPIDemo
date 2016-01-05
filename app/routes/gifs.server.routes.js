'use strict';

//Routes for the GIF API end piints
module.exports = function(app){
    var gifs = require('../controllers/gifs.server.controller.js');

    // Gifs routes
    app.route('/giphs')
        .post(gifs.list); //Get all gifs

    app.route('/:gifId')
        .get(gifs.read); //Get a single gif

    // Finish by binding the Gif middleware
    app.param('gifId', gifs.gifByID);

};
