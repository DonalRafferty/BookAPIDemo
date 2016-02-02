'use strict';

(function () {
    describe('HomeController', function () {
        //Initialize global variables
        var scope,
            HomeController,
            exampleBooks,
            exampleBook,
            $httpBackend,
            $stateParams;

        // Load the main application module
        beforeEach(module(ApplicationConfiguration.applicationModuleName));

        beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$stateParams_) {
            scope = $rootScope.$new();

            // Point global variables to injected services
            $httpBackend = _$httpBackend_;
            $stateParams = _$stateParams_;

            HomeController = $controller('HomeController', {
                $scope: scope
            });

            exampleBooks = [{
                    id: 100,
                    title: 'Code Complete: A Practical Handbook of Software Construction',
                    isbn: '978-0735619678',
                    price: 2954,
                    currencyCode: 'EUR',
                    author: 'Mike Riley'
                },
                {
                    id: 200,
                    title: 'The Pragmatic Programmer',
                    isbn: '978-0201616224',
                    price: 3488,
                    currencyCode: 'EUR',
                    author: 'Andrew Hunt and Dave Thomas'
                }];

            exampleBook = {
                id: 600,
                title: 'Android Application Development For Dummies',
                isbn: '978-0470770184',
                description: 'The popularity of the Android market is soaring with no sign of slowing down. The open nature of the Android OS offers programmers the freedom to access the platform\'s capabilities and this straightforward guide walks you through the steps for creating amazing Android applications. Android programming expert Donn Felker explains how to download the SDK, get Eclipse up and running, code Android applications, and submit your finished products to the Android Market. Featuring two sample programs, this introductory book explores everything from the simple basics to more advanced aspects of the Android platform.',
                price: 1979,
                currencyCode: 'USD',
                author: 'Donn Felker'
            };
        }));

        it('$scope.findBooks should retrieve the list of Books', function () {
            // Test expected POST request
            $httpBackend.expectGET('books').respond(200, exampleBooks);

            scope.findBooks();
            $httpBackend.flush();

            // Test scope value
            expect(JSON.stringify(scope.books)).toEqual(JSON.stringify(exampleBooks));
        });

        it('$scope.findOne should retrieve a single book object fetched from XHR using a bookId URL parameter', function () {

            // Set the URL parameter
            $stateParams.bookId = '600';

            // Set GET response
            $httpBackend.expectGET(/books\/([0-9a-fA-F]{3})$/).respond(exampleBook);
            // Run controller functionality
            scope.findOne();
            $httpBackend.flush();

            // Test scope value
            expect(angular.equals(scope.book, exampleBook)).toBe(true);
        });
    });
})();