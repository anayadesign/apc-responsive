$(function() {
  // Toggle off-canvas on Click
  $(document).on('click', '.off-canvas-trigger', function() {
    var transitionClass = $(this).data('transition');
    $('#global-center, #global-center + .tpl_cb').addClass(transitionClass);
    $('#pageContainer').toggleClass('off-canvas-active');
    $('body').toggleClass('bodyAllowHelp');
    return false;
  });
});
