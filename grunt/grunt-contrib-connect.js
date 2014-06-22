module.exports = function(grunt) {
  'use strict';

  grunt.config('connect', {
    dev: {
      options: {
        port:                     8000,
        base:                     '.',
        keepalive:                true
      }
    },
    dist: {
      options: {
        port:                     8000,
        base:                     'dist',
        keepalive:                true
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
