/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('.current').removeClass('current');
    $(this).addClass('current');
    var offset = ($(window).height() - $($(this).attr('href')).height()) / 2;
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

  $(window).on('scroll', function () {
    var position = $(this).scrollTop();

    $('section').each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr('id');

      if (position + $(window).height() / 2 >= target) {
        $('nav > a').removeClass('current');
        $('nav > a[href="#' + id + '"]').addClass('current');
      }
    });

    if(position >=$(window).height()) {
      $('.sidebar').addClass('fixed');
    } else {
      $('.sidebar').removeClass('fixed');
    }

  });

  $(".lazy").unveil(null, function () {
    $(this).load(function () {
      this.style.opacity = 1;
    });
  });

})(jQuery, window, document);