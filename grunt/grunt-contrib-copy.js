module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    dist: {
      files: [
        {
          expand:                 true,
          flatten:                true,
          src:                    'bower_components/fancybox/source/*.{gif,png}',
          dest:                   'dist/assets/',
          filter:                 'isFile'
        },
        {
          src:                    'bower_components/html5shiv/dist/html5shiv.min.js',
          dest:                   'dist/assets/html5shiv.min.js',
        },
        {
          expand:                 true,
          src:                    ['assets/photos/**', '!assets/photos/originals', '!assets/photos/originals/*'],
          dest:                   'dist/',
        },
        {
          expand:                 true,
          src:                    ['assets/data/*'],
          dest:                   'dist/',
        },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
