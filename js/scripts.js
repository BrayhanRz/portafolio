//Animations WOW init
new WOW().init();

//Sticky menu function
$(document).ready(function(){
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 100 ){
			$('header').addClass('fixed-header');
		} else {
			$('header').removeClass('fixed-header');
		}
	});
	
});

//Responsive menu
$(document).ready(function(){

	$(window).ready(function(){
		if( $(window).width() <= 720 ) {
			$('#nav-bar').click(function(){
				$('nav').slideToggle();
			});
		} if( $(window).width() <= 720 ) {
			$('nav ul li a').click(function(){
				$('nav').slideToggle();
			});
		} if( $(window).width() > 720 ) {
			$('nav').css({
				'display': 'block !important'
			});
		}
	});

});

//Smooth scrolling
$(document).on('ready', navScrolling);

function navScrolling(){
  $('a').on('click', irA);
}

function irA(){
  var secciones = $(this).attr('href');

  $('body, html').animate({
    scrollTop: $(secciones).offset().top-55
  }, 800);

  return false;
}
