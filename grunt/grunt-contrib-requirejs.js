module.exports = function(grunt) {
  'use strict';

  grunt.config('requirejs', {
    compile: {
      options: {
        baseUrl:                  'bower_components/',
        name:                     'almond/almond',
        mainConfigFile:           'assets/javascripts/application.js',
        include:                  ['../assets/javascripts/application'],
        insertRequire:            ['../assets/javascripts/application'],
        optimize:                 'uglify2',
        wrap:                     true,
        generateSourceMaps:       false,
        preserveLicenseComments:  false,
        useStrict:                true,
        out:                      'dist/optimized.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
