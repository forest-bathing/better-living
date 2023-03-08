var images = new Array('0.png', '1.png', '2.png');
var index = 1;

function rotateImage() {
  $('#myImage').fadeOut('fast', function () {
    $(this).attr('src', images[index]);

    $(this).fadeIn('fast', function () {
      if (index == images.length - 1) {
        index = 0;
      }
      else {
        index++;
      }
    });
  });
}

$(document).ready(function () {
  setInterval(rotateImage, 1000);
});
