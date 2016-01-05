'use strict';

var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../../server'),
    agent = request.agent(app),
    requestBody,
    url = '/giphs';

/**
 * Gif routes tests
 */
describe('Gif route tests', function () {

    beforeEach(function (done) {
        requestBody = {value: 'both'};
        done();
    });

    describe('Correct request body', function () {
        it('should return the gif list', function (done) {
            agent.post(url)
                .send(requestBody)
                .expect(200)
                .end(function (gifSaveErr, gifSaveRes) {
                    expect(gifSaveRes.body).to.not.be.empty;
                    expect(gifSaveRes.body).to.be.ok;
                    // Call the assertion callback
                    done(gifSaveErr);
                });
        });
        it('should return objects with data, meta and pagination parameters', function (done) {
            agent.post(url)
                .send(requestBody)
                .expect(200)
                .end(function (gifSaveErr, gifSaveRes) {
                    expect(gifSaveRes.body).to.include.keys('data');
                    expect(gifSaveRes.body).to.include.keys('meta');
                    expect(gifSaveRes.body).to.include.keys('pagination');
                    // Call the assertion callback
                    done(gifSaveErr);
                });
        });
        it('should return array objects under data parameter', function (done) {
            agent.post(url)
                .send(requestBody)
                .expect(200)
                .end(function (gifSaveErr, gifSaveRes) {
                    expect(gifSaveRes.body.data).to.be.instanceof(Array);
                    // Call the assertion callback
                    done(gifSaveErr);
                });
        });
        describe('Correct request body with dogs value', function () {
            it('should return objects', function (done) {
                agent.post(url)
                    .send({value: 'dogs'})
                    .expect(200)
                    .end(function (gifSaveErr, gifSaveRes) {
                        expect(gifSaveRes.body).to.not.be.empty;
                        expect(gifSaveRes.body).to.be.ok;
                        // Call the assertion callback
                        done(gifSaveErr);
                    });
            });
        });
        describe('Correct request body with cats value', function () {
            it('should return objects', function (done) {
                agent.post(url)
                    .send({value: 'cats'})
                    .expect(200)
                    .end(function (gifSaveErr, gifSaveRes) {
                        expect(gifSaveRes.body).to.not.be.empty;
                        expect(gifSaveRes.body).to.be.ok;
                        // Call the assertion callback
                        done(gifSaveErr);
                    });
            });
        });
    });
    describe('Incorrect request body', function () {
        it('should return all values as if both had been passed as value', function (done) {
            agent.post(url)
                .send({})
                .expect(200)
                .end(function (gifSaveErr, gifSaveRes) {
                    expect(gifSaveRes.body).to.not.be.empty;
                    expect(gifSaveRes.body).to.be.ok;
                    // Call the assertion callback
                    done(gifSaveErr);
                });
        });
    });
});