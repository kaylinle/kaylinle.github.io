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

  // Contact
  $("#link").click(function(){
      $("#email").fadeIn(1000);
      $("#phone").fadeIn(1000);
  });

});