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


//Центрирование большого баннера под ивентами
$(function () {
  $('.events_big_banner>img').css({
    marginTop: -0.5*$('.events_big_banner>img').height()+'px',
    marginLeft: -0.5*$('.events_big_banner>img').width()+'px'
  });
});

//Форма логина
$('.login_btn').click (function() {
	$('.login').fadeIn();
});
$('.login_close').click (function() {
	$('.login').fadeOut();
});

//Переключалка табов
(function(s) {
    var n;
    s(".login_position>ul").on("click", "li:not(.active)", function() {
        n = s(this).parents(".login_position"), s(this).dmtabs(n)
    }), s.fn.dmtabs = function(n) {
        s(this).addClass("active").siblings().removeClass("active"), n.find("form").eq(s(this).index()).show(1, function() {
            s(this).addClass("open_form")
        }).siblings("form").hide(1, function() {
            s(this).removeClass("open_form")
        })
    }
})(jQuery);

//Маска для номера телефона в инпут
jQuery(function($) {
$(".registration_phone_input").mask("+7 (999) 999-99-99");
});

});