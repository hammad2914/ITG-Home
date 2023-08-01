

$(document).ready(function () {

  var accordion = (function () {
    return {
      init: function () {

        $('.twocolumn-accordion .trigger').on('click', function () {

          $('.accordion-menu li.active').removeClass('active');
          $(this).parent('li').toggleClass('active');

          var slideindex = $(this).parent().index();

          $('.accordion-slideshow ul li.slide-active').removeClass('slide-active');
          $('.accordion-slideshow ul').find('li:eq(' + slideindex + ')').addClass('slide-active');

        });

      },
    }
  })();
  accordion.init({});
  $('#tabs li').on('click', function () {
    var tab = $(this).data('tab');
    $(this).siblings('li.is-active').removeClass("is-active");
    $(this).addClass('is-active');
    $(this).parents(".tabs").siblings().children().removeClass("is-active");
    $(this).parents(".tabs").siblings().children('div[data-content="' + tab + '"]').addClass("is-active");
  });
});