$(document).ready(function() {

  // Sidebar

  $('#sidebar-button').click(function() {
    if ($("#sidebar-button").hasClass("button-active")) {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $("body").removeClass("no-scroll");

    }

    else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $("body").addClass("no-scroll");
      }, 300);
    }

  });

   $(".page-wrapper").click(function(){
    if ($(".page-wrapper").hasClass("wrapper-active")){
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $("body").removeClass("no-scroll");
    }
  });

   $(".sidebar-item").click(function(){
    $('body').removeClass('no-scroll');
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    $(this).delay(10000);
    $('#sidebar-button').removeClass('button-active');
    $('.sidebar-container').removeClass('sidebar-active');
    $('.page-wrapper').removeClass('wrapper-active');
  });

  // Lightbulb click
  $("#light-icon").click(function(){
      $("#profile-img").fadeIn(400);
  });

  // Contact
  $("#link").click(function(){
      $("#email").fadeIn(1000);
      $("#phone").fadeIn(1000);
  });

});