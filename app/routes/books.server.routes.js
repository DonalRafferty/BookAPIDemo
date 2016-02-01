'use strict';

//Routes for the Book API end points
module.exports = function(app){
    var books = require('../controllers/books.server.controller.js');

    // Books routes
    app.route('/books')
        .get(books.list); //Get all Books

    app.route('/books/:bookId')
        .get(books.read); //Get a single Book

    // Finish by binding the Book middleware
    app.param('bookId', books.gifByID);

};
