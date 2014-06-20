module.exports = function(grunt) {
  'use strict';

  grunt.config('imageoptim', {
    optimise: {
      options: {
        jpegMini:                 true,
        imageAlpha:               false,
        quitAfter:                true
      },
      src: [
        'assets/photos/small/*.jpg',
        'assets/photos/medium/*.jpg',
        'assets/photos/large/*.jpg'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-imageoptim');
};
