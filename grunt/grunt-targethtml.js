module.exports = function(grunt) {
  'use strict';

  grunt.config('targethtml', {
    dist: {
      files: [
        {
          src:                    'index.html',
          dest:                   'dist/index.html'
        },
      ],
    }
  });

  grunt.loadNpmTasks('grunt-targethtml');
};
