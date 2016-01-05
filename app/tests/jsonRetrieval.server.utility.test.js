'use strict';

var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../../server'),
    agent = request.agent(app),
    jsonRetrieval = require('../utilities/jsonRetrieval.server.utility.js');

var values = {
    both: 'both',
    cats: 'cats',
    dogs: 'dogs'
};

/**
 * JSON retrieval utility tests
 */

describe('JSON retrieval utility tests', function () {

    it('should return the Gif list when value is both', function (done) {
        jsonRetrieval.retrieveGiphyJSON(values.both, function (gifs) {
            expect(gifs).to.not.be.empty;
            expect(gifs).to.be.ok;
            done();
        });
    });
    it('should return the Gif list as a JSON when value is both', function (done) {
        jsonRetrieval.retrieveGiphyJSON(values.both, function (gifs) {
            expect(typeof gifs).to.equal('object');
            done();
        });
    });
    it('should return the Gif list when value is dogs', function (done) {
        jsonRetrieval.retrieveGiphyJSON(values.dogs, function (gifs) {
            expect(gifs).to.not.be.empty;
            expect(gifs).to.be.ok;
            done();
        });
    });
    it('should return the Gif list as a JSON when value is dogs', function (done) {
        jsonRetrieval.retrieveGiphyJSON(values.dogs, function (gifs) {
            expect(typeof gifs).to.equal('object');
            done();
        });
    });
    it('should return the Gif list when value is cats', function (done) {
        jsonRetrieval.retrieveGiphyJSON(values.cats, function (gifs) {
            expect(gifs).to.not.be.empty;
            expect(gifs).to.be.ok;
            done();
        });
    });
    it('should return the Gif list as a JSON when value is cats', function (done) {
        jsonRetrieval.retrieveGiphyJSON(values.cats, function (gifs) {
            expect(typeof gifs).to.equal('object');
            done();
        });
    });

});