(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('.current').removeClass('current');
    $(this).addClass('current');
    var offset = ($(window).height() - $($(this).attr('href')).height()) / 2 - 50;
    if (offset < 0) { offset = 0; }
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - offset
    }, 500);
  });

  var sidebar = $('.sidebar');
  var main = $('.main');

  function mouseMoveHandler(e) {
    console.log("mousemove");
    if (e.pageX < 200) {
      sidebar.removeClass('hidden');
      main.removeClass('full');
    } else {
      sidebar.addClass('hidden');
      main.addClass('full');
    }
  }

  function showOrHideMenu() {
    var w = $(window).width();
    if (w >= 1280) {
      $(window).off('mousemove', mouseMoveHandler);
      sidebar.removeClass('hidden');
      main.removeClass('full');
    } else if (w < 1280 && w > 900) {
      $(window).off('mousemove', mouseMoveHandler)
        .on('mousemove', mouseMoveHandler);
    } else {
      $(window).off('mousemove', mouseMoveHandler);
      sidebar.addClass('hidden');
      main.addClass('full');
    }
  }
  showOrHideMenu();

  $(window).on('resize', showOrHideMenu);

  $(".lazy").unveil(null, function () {
    $(this).load(function () {
      this.style.opacity = 1;
    });
  });

})(jQuery, window, document);