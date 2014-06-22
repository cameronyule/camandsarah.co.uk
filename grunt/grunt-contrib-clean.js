module.exports = function(grunt) {
  'use strict';

  grunt.config('clean', {
    build: {
      src:                      'dist/',
    },
    photos: {
      options: {
        // 'no-write':             true,
      },
      files: [{
        expand:                 true,
        src:                    ['assets/photos/**', '!assets/photos', '!assets/photos/originals'],
        filter:                 'isDirectory',
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
