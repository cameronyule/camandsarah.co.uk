module.exports = function(grunt) {
  'use strict';

  grunt.config('compress', {
    main: {
      options: {
        mode: 'gzip'
      },
      files: [
        {
          expand:                 true,
          src:                    'dist/optimized.js',
          ext:                    '.gz.js'
        },
        {
          expand:                 true,
          src:                    'dist/optimized.css',
          ext:                    '.gz.css'
        },
        {
          expand:                 true,
          flatten:                true,
          src:                    'assets/data/photos.json',
          dest:                   'dist/',
          ext:                    '.gz.json'
        },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
};
