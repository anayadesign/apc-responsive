//for the value props?
$(document).ready(function() {
  $('.vp').hover(function() {
    $(this).append('<div class="vphover"></div>');
  }, function() {
    $(this).find('.vphover').remove()
  });
});
