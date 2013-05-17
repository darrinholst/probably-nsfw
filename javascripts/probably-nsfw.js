$(document).on("click", '.preview img', function(event) {
  event.preventDefault();
  event.stopPropagation();

  if($(this).css('opacity') < 1) {
    $(this).css('opacity', 1);
  } else {
    $(this).css('opacity', .04);
  }
});

