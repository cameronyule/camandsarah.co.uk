require.config({
  baseUrl:                  '/bower_components/',
  paths: {
    jquery:                 'jquery/dist/jquery',
    lazyload:               'jquery.lazyload/jquery.lazyload',
    masonry:                'masonry/masonry',
    fancybox:               'fancybox/source/jquery.fancybox',
    bind:                   '../assets/javascripts/function.bind.polyfill'
  }
});

require(['jquery', 'masonry', 'lazyload', 'fancybox', 'bind'], function($, Masonry) {

  function Application() {
    this.isSmallScreenDevice = false;

    this.checkSmallScreen();
    this.loadPhotoDatabase();
  }

  Application.prototype.checkSmallScreen = function() {
    if (window.matchMedia) {
      this.isSmallScreenDevice = window.matchMedia('only screen and (max-width: 480px)').matches;
    }
  }

  Application.prototype.loadPhotoDatabase = function() {
    var photoDatabase = 'assets/data/';

    if (typeof DEVELOPMENT === "undefined") {
      photoDatabase += 'photos.gz.json';
    } else {
      photoDatabase += 'photos.json';
    }

    $.getJSON(photoDatabase, this.onPhotoDatabaseLoaded.bind(this));
  }

  Application.prototype.onPhotoDatabaseLoaded = function(data) {
    this.createPhotoElements(data.photos);
  }

  Application.prototype.createPhotoElements = function(photos) {
    var photoContainer = $('#photos');
    var that = this;

    $.each(photos, function(i, photo){
      var anchor  = that.createAnchorElement(photo);
      var image   = that.createImageElement(photo);
      $(anchor).append(image);

      photoContainer.append(anchor);
    });

    this.initialiseMasonry();
  }

  Application.prototype.createAnchorElement = function(photo) {
    var anchor = document.createElement('a');
    $(anchor).attr('rel', 'group');

    if (this.isSmallScreenDevice) {
      $(anchor).attr('href', 'assets/photos/medium/' + photo.filename);
    } else {
      $(anchor).attr('href', 'assets/photos/large/' + photo.filename);
    }

    return anchor;
  }

  Application.prototype.createImageElement = function(photo) {
    var image = document.createElement('img');
    $(image).width(photo.width);
    $(image).height(photo.height);
    $(image).addClass('lazy');
    $(image).attr('data-original', 'assets/photos/small/' + photo.filename);

    return image;
  }

  Application.prototype.initialiseMasonry = function() {
    var container = document.querySelector('#photos');

    var masonry = new Masonry(container, {
      columnWidth:    320,
      gutter:         2,
      itemSelector:   '.lazy'
    });

    this.initialiseLazyLoad();
  }

  Application.prototype.initialiseLazyLoad = function() {
    $('#photos img.lazy').lazyload({
      threshold : 200
    });

    this.initialiseFancyBox();
  }

  Application.prototype.initialiseFancyBox = function() {
    var useFancyBox = (this.isSmallScreenDevice) ? false : true;

    if (useFancyBox) {
      $('#photos a').fancybox({
        openEffect    : 'none',
        closeEffect   : 'none',
        prevEffect    : 'none',
        nextEffect    : 'none',
        live          : false
      });
    }
  }

  $(document).ready(function(){
    new Application();
  });

});
