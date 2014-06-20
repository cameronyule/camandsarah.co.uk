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
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
