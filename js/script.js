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

	//Главная
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

	//Каталог фильтр
	pickmeup('.catalog_single', {
	  flat : true
	});

	//Календарь страница мероприятия
	
	$(function(){
		
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Пред.',
			nextText: 'След.',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);
		
		var date = new Date();
		date.setDate(date.getDate() + 1);
		
		
		$("#datepicker").datepicker({
			minDate: date
		});
	});
	
	//Каталог Фильтр прайс 
		 $('#catalog_filter_price').ionRangeSlider && $('#catalog_filter_price').ionRangeSlider({
			type: 'double',
			min: 0,
			max: 10000,
			from: 0,
			to: 10000
		});

	//Каталог кастомная прокрутка блока
	$(function() {  
		$(".catalog_playgrounds_values").niceScroll({
			cursoropacitymin: 0.5,
			cursoropacitymax: 1,
			cursorcolor:"#F69707",
			cursorwidth: "5px",
			cursorminheight: 30,
			cursorborder: "0",
			cursorborderradius: "5px",
			});
	});
	
	
	//Каталог читать больше отзывы
	$('.event_page_feedback').readmore({
		collapsedHeight: 100,
		embedCSS: false,
		moreLink: '<a class="top_20">Читать полностью</a>',
		lessLink: '<a class="top_20">Скрыть</a>'
	});

	//Страницы события читать больше описание
	$('.organizer_page_description').readmore({
		collapsedHeight: 190,
		embedCSS: false,
		moreLink: '<a class="top_20">Читать полностью</a>',
		lessLink: '<a class="top_20">Скрыть</a>'
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



//Форма логина
$('.login_btn').click (function() {
	$('.login').fadeIn();
});
$('.login_close').click (function() {
	$('.login').fadeOut();
});

$('.header_modile_login').click (function() {
	$('.login').fadeIn();
});
$('.login_close').click (function() {
	$('.login').fadeOut();
});

$('.create_accaunt').click (function() {
	$('#login_form').fadeOut(300);
	$('#registration_form').delay(500).fadeIn(400);
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

/*Мобильное меню*/
$('.buter').click (function() {
	$('.popup_menu').fadeIn();
	$('#buter').attr('style', 'display: none;');
	$('body').addClass('stop-scrolling')
})
$('.popup_menu_close').click (function() {
	$('.popup_menu').fadeOut();
	$('#buter').attr('style', 'display: block;');
	$('body').removeClass('stop-scrolling')
})	

//Мобильный поиск
$('.header_modile_search').click (function() {
	$('.search').fadeIn();
});
$('.search_close').click (function() {
	$('.search').fadeOut();
});

//Маска для номера телефона в инпут
jQuery(function($) {
$(".registration_phone_input").mask("+7 (999) 999-99-99");
});

});