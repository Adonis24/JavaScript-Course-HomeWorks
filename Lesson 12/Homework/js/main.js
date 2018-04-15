$(document).ready(function() {
	$('.main_btna').on('click', function() {
    $('.overlay').fadeIn();
    $('.modal').animate({
      opacity: 'toggle',
      height: 'toggle',
      left: '-25px',
      borderRadius: '50px',
      width: '45%'
    }, 1000);
    $('.close').animate({
      fontSize: '4rem'
    },1000);
  });
  $('.main_btn').on('click', function() {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  });
  $('.main_nav a:eq(1)').on('click', function() {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  });
  $('.close').on('click', function() {
    $('.overlay').fadeOut();
    $('.modal').slideUp();
  });
  $('.overlay').on('click', function() {
    $('.overlay').fadeOut();
    $('.thanks').slideUp();
    $('.modal').slideUp();
  });
  $('.back').on('click', function() {
    $('.overlay').fadeOut();
    $('.thanks').slideUp();
  });



  $('.form-inline').submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "server.php",
      data: th.serialize()
    }).done(function() {
      $('.modal').fadeOut();
      $('.thanks').show();
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
