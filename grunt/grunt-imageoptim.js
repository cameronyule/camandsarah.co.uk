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
        'assets/photos/**/*.jpg',
        '!assets/photos/originals/*.jpg'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-imageoptim');
};
