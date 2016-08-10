$(function() {
  // Toggle off-canvas on Click
  $(document).on('click', '.off-canvas-trigger', function() {
    var transitionClass = $(this).data('transition');
    $('#global-center, #global-center + .tpl_cb').addClass(transitionClass);
    $('#pageContainer').toggleClass('off-canvas-active');
    $('body').toggleClass('bodyAllowHelp');
    return false;
  });

  //Prepends help box to first-child of body
  if (document.location.href.indexOf('www.allposters.com.au') > -1) {
    //only for US
  } else if (document.location.href.indexOf('www.allposters.com/es/') > -1) {
    //not ES
  } else if (document.location.href.indexOf('www.allposters.com') > -1) {
      $("#hdr-help-box").prependTo("body");
  }

  //ACCORDION
  function close_accordion_section() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function (e) {
      if ((screen.width < 1008) || ($(window).width() < 1008)) {
          // Grab current anchor value
          var currentAttrValue = $(this).attr('name');

          if ($(e.target).is('.active')) {
              close_accordion_section();
          } else {
              close_accordion_section();

              // Add active class to section title
              $(this).addClass('active');
              // Open up the hidden content panel
              $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
          }

          e.preventDefault();
      }
  });

  //Search bar
  $("#hdr-bar-cell-empty").hide();
  $("#hdr-search-bar").hide();
  $(document).on('click', '#hdr-search-icon', function (e) {
      e.preventDefault();
      $("#hdr-search-icon").hide();
      $("#hdr-search-bar").slideDown();
  });

  $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
          $("#hdr-search-bar").hide();
          $("#hdr-search-icon").show();
      }
  });
  //Back to top link
  //source: http://codyhouse.co/gem/back-to-top/
  var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
      offset_opacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      scroll_top_duration = 700, //duration of the top scrolling animation (in ms)
      $back_to_top = $('.back2top'); //grab the "back to top" link

  //hide or show the "back to top" link
  $(window).scroll(function () {
      ($(this).scrollTop() > offset) ? $back_to_top.addClass('back2top-visible') : $back_to_top.removeClass('back2top-visible back2top-fade');
      if ($(this).scrollTop() > offset_opacity) {
          $back_to_top.addClass('back2top-fade');
      }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
      event.preventDefault();
      $('body,html').animate({
          scrollTop: 0,
      }, scroll_top_duration);
  });
});
