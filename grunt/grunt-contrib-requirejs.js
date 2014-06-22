module.exports = function(grunt) {
  'use strict';

  grunt.config('requirejs', {
    dist: {
      options: {
        baseUrl:                  'bower_components/',
        mainConfigFile:           'assets/javascripts/application.js',
        name:                     'almond/almond',
        include:                  ['../assets/javascripts/application'],
        insertRequire:            ['../assets/javascripts/application'],
        optimize:                 'uglify2',
        wrap:                     true,
        generateSourceMaps:       false,
        preserveLicenseComments:  false,
        useStrict:                true,
        out:                      'dist/assets/optimized.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
