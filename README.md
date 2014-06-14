# camandsarah.co.uk

A prototype of a lightweight, modern, web gallery built to scratch a personal itch.

## Dependencies

* [npm](https://www.npmjs.org/)
* [Grunt](http://gruntjs.com/)
* [GraphicsMagick](http://www.graphicsmagick.org/)
* [Bower](http://bower.io/)

## Setup

Once you have all the dependencies installed:

* `npm install`
* `bower install`

## Usage

Add your photos to the `assets/photos/originals` directory, then:

  `grunt responsive_images`

Build the index of your photos:

  `grunt photo_database`

Run a local development server:

  `grunt connect`
