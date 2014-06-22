module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: require('./package.json'),
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('photos',
    'Resize, optimise and build database of your source images.',
    ['clean:photos', 'responsive_images', 'imageoptim', 'photo_database']);

  grunt.registerTask('build',
    'Build optimised version of the site for deployment.',
    ['clean:build', 'requirejs', 'cssmin', 'compress', 'copy', 'targethtml', 'htmlmin']);

  grunt.registerTask('default', ['build']);
};
