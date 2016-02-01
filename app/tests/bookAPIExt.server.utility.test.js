'use strict';

var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../../server'),
    agent = request.agent(app),
    bookAPIExt = require('../utilities/bookAPIExt.server.utility.js');


/**
 * JSON retrieval utility tests
 */

describe('Book JSON retrieval utility tests', function () {

    it('should return the book list with more than 1 book', function (done) {
        bookAPIExt.retrieveBooks(function (books) {
            expect(books).to.not.be.empty;
            expect(books).to.be.ok;
            expect(books).to.have.length.above(2);
            done();
        });
    });

    it('should return the single book', function (done) {
        bookAPIExt.bookByID(600, function (book) {
            expect(book).to.not.be.empty;
            expect(book).to.be.ok;
            done();
        });
    });

    it('should return the cannot find book message when incorrect book id', function (done) {
        bookAPIExt.bookByID(601, function (book) {
            expect(book.message).to.not.be.empty;
            expect(book.message).to.be.ok;
            expect(book.message).to.equal('Cannot find book');
            done();
        });
    });

});