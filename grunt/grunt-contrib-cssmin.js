module.exports = function(grunt) {
  'use strict';

  grunt.config('cssmin', {
    combine: {
      files: {
        'dist/optimized.css': [
          'assets/stylesheets/reset.css',
          'bower_components/fancybox/source/jquery.fancybox.css',
          'assets/stylesheets/application.css',
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
