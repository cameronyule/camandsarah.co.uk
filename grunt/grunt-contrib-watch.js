module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    application: {
      files: [
        'assets/javascripts/*.js',
        'assets/stylesheets/*.css',
        'index.html',
      ],
      tasks: ['build'],
    },
    original_photos: {
      files: [
        'assets/photos/originals/*.jpg',
      ],
      tasks: ['responsive_images', 'photo_database'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
