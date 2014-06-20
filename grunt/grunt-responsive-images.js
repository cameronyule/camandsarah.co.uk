module.exports = function(grunt) {
  'use strict';

  grunt.config('responsive_images', {
    resize: {
      files: [{
        expand:                   true,
        src:                      'assets/photos/originals/*.jpg',
        custom_dest:              'assets/photos/{%= name %}/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
};
