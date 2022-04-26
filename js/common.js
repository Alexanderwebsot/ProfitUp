$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");

  $('.reviews-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      dots: true,
      prevArrow: $('.reviews-arrow__prev'),
      nextArrow: $('.reviews-arrow__next'),
   });

  $('.tariff-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      swipe: false,
   });

  $('.opportunities-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      swipe: false,
      breakpoint: 969,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              swipe: true,
              arrows: true,
              adaptiveHeight: true,
              prevArrow: $('.opportunities-arrow__prev'),
              nextArrow: $('.opportunities-arrow__next'),
            }
          }
        ]
   });

  if ($(window).width() <= '1024') {
    $('.utility-row').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 700,
        variableWidth: true,
     });
  }

  $('.cookies-close').on('click', function() {
  	$('body').removeClass('body-cookies');
  })

  $('.tariff-variant').on('click', function() {
  	let element = $(this);
  	let element_index = $('.tariff-variant').index(element)
  	$('.tariff-variant').removeClass('active');
  	$(this).addClass('active');
  	$('.tariff-slider').slick('slickGoTo', element_index);
  })

  $('.opportunities-list__item').on('click', function() {
  	let element = $(this);
  	let element_index = $('.opportunities-list__item').index(element)
  	$('.opportunities-list__item').removeClass('opportunities-active');
  	$(this).addClass('opportunities-active');
  	$('.opportunities-slider').slick('slickGoTo', element_index);
  })

  $('.tariff-price__btn').on('click', function() {
  	let block = $(this).closest('.tariff-block');
  	$(block).addClass('hidden-visible');
  	return false;
  })

  $('.footer-col__title').on('click', function() {
    let parent_elemet = $(this).closest('.footer-col');
    parent_elemet = $(parent_elemet).children('.footer-col__title');
    let index_element = $(parent_elemet).index(this);
    let parent_list = $(this).closest('.footer-col');
    parent_list = $(parent_list).children('.footer-list');
    let current_element = $(parent_list[index_element]);
    $(this).toggleClass('footer-col__title_active')
    $(current_element).toggleClass('footer-list-active');
  })

  $('.nav-burger').on('click', function() {
    $('.menu-modal ').addClass('modal-menu-active');
  })

  jQuery(function($){
    $(document).mouseup( function(e){ 
      var div = $( "#menu-modal" );
      if ( !div.is(e.target) 
          && div.has(e.target).length === 0 ) { 
        $('.menu-modal ').removeClass('modal-menu-active');
      }
    });
  });
})