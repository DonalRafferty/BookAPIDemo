'use strict';

(function() {
    describe('HomeController', function() {
        //Initialize global variables
        var scope,
            HomeController,
            exampleGifs,
            exampleGif,
            $httpBackend,
            $stateParams;

        // Load the main application module
        beforeEach(module(ApplicationConfiguration.applicationModuleName));

        beforeEach(inject(function($controller, $rootScope, _$httpBackend_, _$stateParams_) {
            scope = $rootScope.$new();

            // Point global variables to injected services
            $httpBackend = _$httpBackend_;
            $stateParams = _$stateParams_;

            HomeController = $controller('HomeController', {
                $scope: scope
            });

            exampleGifs = {
                data: [{test:'Test Value'}],
                meta: {test: 'Test Value'},
                pagination: {test: 'Test Value'}
            };

            exampleGif = {
                data: {test:'Test Value'},
                meta: {test: 'Test Value'}
            };
        }));

        it('$scope.getGifs should retrieve the list of gifs when value of both is used', function() {
            // Test expected POST request
            $httpBackend.expectPOST('/giphs').respond(200, exampleGifs);

            scope.getGifs('both');
            $httpBackend.flush();

            // Test scope value
            expect(scope.gifs).toEqual(exampleGifs.data);
        });

        it('$scope.getGifs should retrieve the list of gifs when value of dogs is used', function() {
            // Test expected POST request
            $httpBackend.expectPOST('/giphs').respond(200, exampleGifs);

            scope.getGifs('dogs');
            $httpBackend.flush();

            // Test scope value
            expect(scope.gifs).toEqual(exampleGifs.data);
        });

        it('$scope.getGifs should retrieve the list of gifs when value of cats is used', function() {
            // Test expected POST request
            $httpBackend.expectPOST('/giphs').respond(200, exampleGifs);

            scope.getGifs('cats');
            $httpBackend.flush();

            // Test scope value
            expect(scope.gifs).toEqual(exampleGifs.data);
        });

        it('$scope.findOne should retrieve a single gif object fetched from XHR using a gifId URL parameter', function() {

            // Set the URL parameter
            $stateParams.gifId = 'QgcQLZa6glP2w';

            // Set GET response
            $httpBackend.expectGET(/\/([0-9a-zA-Z]{13})$/).respond(exampleGif);
            // Run controller functionality
            scope.findOne();
            $httpBackend.flush();

            // Test scope value
            expect(scope.gif).toEqual(exampleGif.data);
        });
    });
})();