var isSmallScreenDevice = false;

$(document).ready(function(){
  checkSmallScreen();
  loadPhotoDatabase();
})

function checkSmallScreen() {
  if (window.matchMedia) {
    isSmallScreenDevice = window.matchMedia("only screen and (max-width: 480px)").matches;
  }
}

function loadPhotoDatabase() {
  $.getJSON("assets/data/photos.json", function(data) {
    createPhotoElements(data.photos);
  });
}

function createPhotoElements(photos) {
  var photoContainer = $("#photos");

  $.each(photos, function(i, photo){
    var anchor  = createAnchorElement(photo);
    var image   = createImageElement(photo);
    $(anchor).append(image);

    photoContainer.append(anchor);
  });

  initialiseMasonry();
}

function createAnchorElement(photo) {
  var anchor = document.createElement("a");
  $(anchor).attr('rel', 'group');

  if (isSmallScreenDevice) {
    $(anchor).attr('href', 'assets/photos/medium/' + photo.filename);
  } else {
    $(anchor).attr('href', 'assets/photos/large/' + photo.filename);
  }

  return anchor;
}

function createImageElement(photo) {
  var image = document.createElement("img");
  $(image).width(photo.width);
  $(image).height(photo.height);
  $(image).addClass('lazy');
  $(image).attr('data-original', 'assets/photos/small/' + photo.filename);

  return image;
}

function initialiseMasonry() {
  var container = document.querySelector('#photos');

  var masonry = new Masonry(container, {

    gutter:         2,
    itemSelector:   '.lazy'
  });

  initialiseLazyLoad();
}

function initialiseLazyLoad() {
  $('#photos img.lazy').lazyload({
    threshold : 200,
  });

  initialiseFancyBox();
}

function initialiseFancyBox() {
  var useFancyBox = (isSmallScreenDevice) ? false : true;

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
