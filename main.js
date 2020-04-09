$(document).ready(function(){
  //show nav menu
  if($('.nav__hamburger-icon input').get(0).checked)
    $('.nav__hamburger-menu').css('transform', 'none');
    $('.nav__hamburger-icon input').on( "click", function() {
      if(this.checked)
        $('.nav__hamburger-menu').css('transform', 'none');
      else
        $('.nav__hamburger-menu').css('transform', 'translate(-1000%, 0)');
    });
})