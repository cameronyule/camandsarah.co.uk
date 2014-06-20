module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    fancybox: {
      files: [
        {
          expand:                 true,
          flatten:                true,
          src:                    'bower_components/fancybox/source/*.{gif,png}',
          dest:                   'dist/',
          filter:                 'isFile'
        },
        {
          expand:                 true,
          src:                    ['assets/photos/**', '!assets/photos/originals', '!assets/photos/originals/*'],
          dest:                   'dist/',
        },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
