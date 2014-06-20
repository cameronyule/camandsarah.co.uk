module.exports = function(grunt) {
  'use strict';

  grunt.config('connect', {
    server: {
      options: {
        port:                     8000,
        base:                     '.',
        keepalive:                true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
