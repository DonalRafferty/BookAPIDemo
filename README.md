# Giphy Demo Exercise

This is a simple example exercise that demonstrates the use of the Giphy API.

It is a simple application based on the MEAN stack that allows a user to cos cats or dogs (or both) and a selection of 100 Gifs are then returned from the Giphy API.

## Dependencies

* NodeJS
* NPM
* Bower
* GruntJS

## To build

* After cloning the project from the root folder run npm install
* This should also run a bower install command but if you have issues running npm you may also need to manually run bower install
* Run the grunt command
* Open a browser and go to localhost:3000

## To Test

* After building simply run the grunt test command to run both server and client tests

## Things to improve

* Provide a loading indicator to the user while the Gifs are loading
* Lazy load the Gif images
* Provide a better pagination experience and make it a directive so it can be used at the top and bottom of the Gifs