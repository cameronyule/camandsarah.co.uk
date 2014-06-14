module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: ".",
          keepalive: true
        }
      }
    },

    responsive_images: {
      resize: {
        files: [{
          expand:       true,
          src:          ['assets/photos/originals/**.jpg'],
          custom_dest:  'assets/photos/{%= name %}/'
        }]
      }
    },

    photo_database: {
      build: {
        options: {
          database:     'assets/data/photos.json'
        },
        files: [{
          expand:       true,
          src:          ['assets/photos/originals/**.jpg']
        }]
      }
    }
  });

  grunt.registerMultiTask('photo_database', function() {
    var async   = require('async');
    var path    = require('path');
    var gm      = require('gm');

    var done    = this.async();
    var task    = this;
    var options = task.data.options;
    var series  = [];

    var db      = {photos:[]};

    if (task.files.length === 0) {
      return grunt.log.warn('Unable to execute; no valid source files were found.');
    } else {
      task.files.forEach(function(f) {
        var filename  = path.basename(f.src);

        var photo     = {
          filename    : filename,
          orientation : 'undefined',
          width       : 0,
          height      : 0
        };

        series.push(function(callback) {
          var image = gm('assets/photos/small/' + filename);

          image.size(function(error, size) {
            var orientation   = (size.width > size.height) ? 'landscape' : 'portrait';

            photo.width       = size.width;
            photo.height      = size.height;
            photo.orientation = orientation;

            db.photos.push(photo);

            return callback();
          });
        });
      });
    }

    series.push(function(callback) {
      var output = JSON.stringify(db, null, 2);

      grunt.file.write(options.database, output);

      return callback();
    });

    async.series(series, done);
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-responsive-images');
};
