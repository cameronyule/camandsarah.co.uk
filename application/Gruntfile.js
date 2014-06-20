module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: require('./package.json'),
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('build',
    'Build site files for testing or deployment.',
    ['clean', 'requirejs', 'cssmin', 'compress', 'copy']);

  grunt.registerTask('photos',
    'Resize, optimise and build database of your source images.',
    ['responsive_images', 'imageoptim', 'photo_database']);

  grunt.registerTask('default', ['build']);
};
