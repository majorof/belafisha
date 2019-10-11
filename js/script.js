$(document).ready(function() {
//Слайдер
  $('.slider_asis').slick({
	  dots: true,
	  arrows: true,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 7000,
  });


//Календарь

$('.calendar_btn').on('click',function() {
    if($(this).next().is(':visible')) {
        $(this).next().fadeOut();
        $(this).attr('class','calendar_vdwn');
    } else {
		$(this).next().fadeIn();
		$(this).attr('class','calendar_vup');
    }
});


pickmeup('.single', {
  flat : true
});


//Плавная прокрутка в топ
(function($) {
$(function() {

	$('.page_up').click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	})

})
})(jQuery)


//Временное показать еще

$('.show_more_btn').click (function() {
	$('.show_more_data').fadeIn();
})

});