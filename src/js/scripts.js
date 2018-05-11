(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

  // Internal links with animated scroll
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('.current').removeClass('current');
    $(this).addClass('current');
    var offset = ($(window).height() - $($(this).attr('href')).height()) / 2;
    if (offset < 0) { offset = 0; }
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - offset
    }, 500);
    if ($(window).width() <= 900 && $('.sidebar').hasClass('shown')) toggleMobileMenu();
  });

  $(window).on('scroll', function () {
    var position = $(this).scrollTop();

    // Marks current section on the menu
    $('section').each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      if (position + $(window).height() / 2 >= target) {
        $('nav > a').removeClass('current');
        $('nav > a[href="#' + id + '"]').addClass('current');
      }
    });

    //Fixes menu on desktop
    if ($(window).width() > 900 && position >= $(window).height()) {
      $('.sidebar').addClass('fixed');
    } else {
      $('.sidebar').removeClass('fixed');
    }

  });

  // Lazy loader for the images
  $('.lazy').unveil(null, function () {
    $(this).load(function () {
      this.style.opacity = 1;
      if ($(this).parent().attr('id') === 'lookbook') this.style.height = 'auto';
    });
  });

})(jQuery, window, document);

function toggleMobileMenu() {
  $('.sidebar').toggleClass('shown');
  $('.toggle').toggleClass('open');
}

// Make playing on video stop others

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function(){
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

var videoTrailer = document.getElementById('video-trailer');
var videoKeypoints = document.getElementById('video-keypoints');
var videoWashable = document.getElementById('video-washable');

videoTrailer.onclick = function() {
  this.setAttribute('controls', 'controls');
  this.play();
  if (videoKeypoints.playing) videoKeypoints.pause();
  if (videoWashable.playing) videoWashable.pause();
};

videoKeypoints.onclick = function() {
  this.setAttribute('controls', 'controls');
  this.play();
  if (videoTrailer.playing) videoTrailer.pause();
  if (videoWashable.playing) videoWashable.pause();
};

videoWashable.onclick = function() {
  this.setAttribute('controls', 'controls');
  this.play();
  if (videoTrailer.playing) videoTrailer.pause();
  if (videoKeypoints.playing) videoKeypoints.pause();
};