'use strict';

var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../../server'),
    agent = request.agent(app),
    requestBody,
    url = '/books';

/**
 * Book routes tests
 */
describe('Book route tests', function () {

    beforeEach(function (done) {
        done();
    });

    describe('Correct GET call', function () {
        it('should return the book list', function (done) {
            agent.get(url)
                .send()
                .expect(200)
                .end(function (gifSaveErr, bookSaveRes) {
                    expect(bookSaveRes.body).to.not.be.empty;
                    expect(bookSaveRes.body).to.be.ok;
                    // Call the assertion callback
                    done(gifSaveErr);
                });
        });
        it('should return objects with id, title, isbn, price, currencyCode and author parameters', function (done) {
            agent.get(url)
                .send()
                .expect(200)
                .end(function (gifSaveErr, bookSaveRes) {
                    expect(bookSaveRes.body[0]).to.include.keys('id');
                    expect(bookSaveRes.body[0]).to.include.keys('title');
                    expect(bookSaveRes.body[0]).to.include.keys('isbn');
                    expect(bookSaveRes.body[0]).to.include.keys('price');
                    expect(bookSaveRes.body[0]).to.include.keys('currencyCode');
                    expect(bookSaveRes.body[0]).to.include.keys('author');
                    // Call the assertion callback
                    done(gifSaveErr);
                });
        });
    });
    describe('Incorrect URL', function () {
        it('should return 404', function (done) {
            agent.get(url + 'broke')
                .send()
                .expect(404)
                .end(function (gifSaveErr, gifSaveRes) {
                    done();
                });
        });
    });
});