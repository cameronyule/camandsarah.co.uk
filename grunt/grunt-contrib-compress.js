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
          src:                    'dist/assets/optimized.js',
          ext:                    '.gz.js'
        },
        {
          expand:                 true,
          src:                    'dist/assets/optimized.css',
          ext:                    '.gz.css'
        },
        {
          expand:                 true,
          src:                    'assets/data/photos.json',
          dest:                   'dist/',
          ext:                    '.gz.json'
        },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
};
