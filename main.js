$(document).ready(function () {
  //show nav menu
  if ($('.nav__hamburger-icon input').get(0).checked)
    $('.nav__hamburger-menu').css('transform', 'none');
  $('.nav__hamburger-icon input').on("click", function () {
    if (this.checked)
      $('.nav__hamburger-menu').css('transform', 'none');
    else
      $('.nav__hamburger-menu').css('transform', 'translate(-1000%, 0)');
  });
  //smooth scrolling to anchors
  if ($(".nav")[0]) {
    var nav_height; //scrolling needs repositioning because fixed nav is taking some space
    if ($(window).width() >= 1331)
      nav_height = 108
    else if ($(window).width() < 1331 && $(window).width() >= 768)
      nav_height = 211
    else
      nav_height = 47
    $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - nav_height
        }, 1000);
      }
    });
  }
})