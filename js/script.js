$(document).ready(function() {

//Главная страница

  //Слайдер
  $('.slider_asis').slick({
	  dots: true,
	  arrows: true,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 7000,
  });

//Каталог мероприятий

  //Выпадашки фильтра
  $('.show_filter').on('click',function() {
      if($(this).next().is(':visible')) {
          $(this).next().fadeOut();
      } else {
          $('.filter_val').not(this).hide();
          $(this).next().fadeIn();
      }
  });

// Скрываем фильтры при клике на пустое место, не работает с датой
//  $(document).on('click', function(e) {
//    if (!$(e.target).closest('.catalog_filter_container').length) {
//      $('.filter_val').fadeOut();
//    }
//    e.stopPropagation();
//  });



  //Фильтр цена
	 $('#catalog_filter_price').ionRangeSlider && $('#catalog_filter_price').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 10000,
		from: 0,
		to: 10000
	});

  $('#mobile_catalog_filter_price').ionRangeSlider && $('#mobile_catalog_filter_price').ionRangeSlider({
   type: 'double',
   min: 0,
   max: 10000,
   from: 0,
   to: 10000
  });

  //Фильтр площадки
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

  //Мобильный фильтр
  $('.filter_mobile_btn').click (function() {
  	$('.popup_filter').fadeIn();
  	$('body').addClass('stop-scrolling')
  })
  $('.popup_filter_close').click (function() {
  	$('.popup_filter').fadeOut();
  	$('body').removeClass('stop-scrolling')
  })

  //Раскрывашки мобильного фильтра
  $('.popup_show_filter').on('click',function() {
      if($(this).next().is(':visible')) {
          $(this).next().hide();
      } else {
          $('.popup_filter_val').not(this).hide();
  		    $(this).next().show();
      }
  });

// Страница мероприятия

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
		date.setDate(date.getDate());


		$("#datepicker").datepicker({
			minDate: date
		});
	});

  //Читать больше отзывы
  $('.event_page_feedback').readmore({
    collapsedHeight: 100,
    embedCSS: false,
    moreLink: '<a class="top_20">Читать полностью</a>',
    lessLink: '<a class="top_20">Скрыть</a>'
  });

//Страница организатора

	//Читать больше описание
	$('.organizer_page_description').readmore({
		collapsedHeight: 190,
		embedCSS: false,
		moreLink: '<a class="top_20">Читать полностью</a>',
		lessLink: '<a class="top_20">Скрыть</a>'
	});


//Раздел пользователя

  //Меню
  $('.user_accaunt_menu_show').on('click',function() {
      if($(this).next().is(':visible')) {
          $(this).next().fadeOut();
      } else {
          $('.user_accaunt_menu').not(this).hide();
          $(this).next().fadeIn();
      }
  });

  //Показать пароль
  $('.shpass').on('click',function() {
      var type = $(this).prev().attr('type') == "text" ? "password" : 'text',
          c = $(this).html() == "<span class=\"hpass\" title=\"Скрыть пароль\"></span>" ? "<span class=\"spass\" title=\"Показать пароль\"></span>" : "<span class=\"hpass\" title=\"Скрыть пароль\"></span>";
      $(this).html(c);
      $(this).prev().prop('type', type);
  });

  //svg
  //  $('#svg_increase').on('click',function() {
  //    var hall = document.getElementById('zoom_it');
  //    hall.setAttribute("transform", "scale(1.5)");
  //  });
  (function() {
    var $section = $('#contain');
    var $panzoom = $section.find('.panzoom').panzoom({
    $zoomIn: $section.find('.zoom-in'),
    $zoomOut: $section.find('.zoom-out'),
    $zoomRange: $section.find('.zoom-range'),
    $reset: $section.find('.reset'),
    cursor: 'pointer',
    startTransform: 'scale(1)',
    maxScale: 2.2,
    increment: 0.1,
    contain: false
    }).panzoom('zoom', true);
  })();

  $('.hall_svg').find('rect').on('click',function() {
    location.href = "place_choose.html";
  });

  $('.hall_svg').find('circle').on('click',function() {
//    $(this).attr('style','fill:#F69707; stroke:#fff;');
    if($(this).hasClass('circle_default_hover')){
        $(this).removeClass('circle_default_hover')
      } else {
        $(this).addClass('circle_default_hover')
      }
  });

  $(function(){
        $("[data-original-title]").bind('mousemove',function (eventObject) {
            $data_tooltip = $(this).attr("data-original-title");
            $("#tooltip").html($data_tooltip)
                .css({
					"top" : eventObject.pageY - 80,
					"left" : eventObject.pageX - 58
                })
                .show();
            }).mouseout(function () {
              $("#tooltip").hide()

        });
  });

//Анкета

$('.questionnaire_select_container').on('click',function() {
    if($(this).next().is(':visible')) {
        $(this).next().fadeOut();
         $(this).attr('class','questionnaire_select_container_vdwn');
    } else {
        $(this).next().fadeIn();
        $(this).attr('class','questionnaire_select_container_vup');
    }
});

//Кабинет организатора
  //Меню
  $('.manager_accaunt_menu_show').on('click',function() {
      if($(this).next().is(':visible')) {
          $(this).next().fadeOut();
      } else {
          $('.manager_accaunt_menu').not(this).hide();
          $(this).next().fadeIn();
      }
  });

  $(document).ready(function() {
  		$('.manager_file_input').change(function() {
  			var f_name = [];
  			for (var i = 0; i < $(this).get(0).files.length; ++i) {
  				f_name.push(" " + $(this).get(0).files[i].name);
  			}
  			$(this).next().text(f_name.join(", "));
  		});
  	});

    //Создание события
    $('.event_info_select_container').on('click',function() {
        if($(this).next().is(':visible')) {
            $(this).next().hide();
             $(this).attr('class','event_info_select_container_vdwn');
        } else {
            $(this).next().show();
            $(this).attr('class','event_info_select_container_vup');
        }
    });

    $('.event_info_select').select2();

    $('.event_info_date_time_clone').on('click',function() {
        $("#event_info_date_time").clone().addClass('top_10').appendTo('.event_info_date_time_cloning');
      });

	  //Регистрация на событие

		$('.event_registration_select_container').on('click',function() {
			if($(this).next().is(':hidden') && $('#cbx').is(':checked')) {
				$(this).next().fadeIn();
				$(this).addClass('event_registration_select_container_vup');
				$(this).removeClass('event_registration_select_container_vdwn');
			} else {
				$(this).next().fadeOut();
				$(this).addClass('event_registration_select_container_vdwn');
				$(this).removeClass('event_registration_select_container_vup');
			}
		});

		$('#cbx').on('change', function() {
			if($('#toogle_fix').is(':visible')) {
				$('#event_registration').addClass('disabled_color');
				$('#event_registration').find('textarea').prop('disabled', 'true').attr('class','manager_content_container_inputs_disabled');
				$('#event_registration').find('input').prop('disabled', 'true').attr('class','manager_content_container_inputs_disabled');
				$('#event_registration').find('.event_registration_select_container').addClass('manager_content_container_inputs_disabled');
				$('#toogle_fix').fadeOut();
			} else {
				$('#event_registration').removeClass('disabled_color');
				$('#event_registration').find('textarea').removeAttr('disabled').removeAttr('class','manager_content_container_inputs_disabled');
				$('#event_registration').find('input').removeAttr('disabled').removeAttr('class','manager_content_container_inputs_disabled');
				$('#event_registration').find('.event_registration_select_container').removeClass('manager_content_container_inputs_disabled');
				$('#event_registration').find('.manager_content_container_inputs_disabled').addClass('event_registration_select_container');
				$('#toogle_fix').fadeIn();
			}

		});

		//Билеты
    $('.manager_finance_block_promocode_config_btn').on('click',function() {
			if($('#manager_finance_block_config').is(':visible')) {
				$('#manager_finance_block_config').fadeOut();
			} else {
				$('#manager_finance_block_config').fadeIn();
			}
		});

		$('.event_tickets_additional_config').on('click',function() {
			if($(this).next().is(':visible')) {
				$(this).next().fadeOut();
				$(this).addClass('event_tickets_additional_config_vdwn');
				$(this).removeClass('event_tickets_additional_config_vup');
			} else {
				$(this).next().fadeIn();
				$(this).addClass('event_tickets_additional_config_vup');
				$(this).removeClass('event_tickets_additional_config_vdwn');
			}
		});

		$('.event_tickets_categories_wo_block_add').on('click',function() {
			$("#etcwo_clone").clone().appendTo('.etcwo_cloning');
    });

      $('.event_tickets_select').select2();

//Общее

  //Кнопка показать календать
  $('#calendar_btn').on('click',function() {
    if($(this).next().is(':visible')) {
      $(this).next().fadeOut();
      $(this).attr('class','calendar_vdwn');
    } else {
      $(this).next().fadeIn();
      $(this).attr('class','calendar_vup');
    }
  });

  $('div.datepicker-here').datepicker({
      // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
      minDate: new Date()
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

  //Временное показать еще на главной
  $('.show_more_btn').click (function() {
  	$('.show_more_data').fadeIn();
  })

  //Форма логина
  $('.mobile_menu_login').click (function() {
    $('.popup_menu').fadeOut();
  	$('.login').fadeIn();
    $('body').addClass('stop-scrolling');
    $('#registration_form').fadeOut(300);
    $('#login_form').delay(500).fadeIn(400);
    $('#login_navigarion').addClass('active');
    $('#registration_navigation').removeClass('active')
  });
  $('.login_btn').click (function() {
  	$('.login').fadeIn();
    $('body').addClass('stop-scrolling');
    $('#registration_form').fadeOut(300);
    $('#login_form').delay(500).fadeIn(400);
    $('#login_navigarion').addClass('active');
    $('#registration_navigation').removeClass('active')
  });
  $('.login_close').click (function() {
  	$('.login').fadeOut();
    $('body').removeClass('stop-scrolling')
  });

  $('.header_modile_login').click (function() {
  	$('.login').fadeIn();
    $('body').addClass('stop-scrolling');
    $('#registration_form').fadeOut(300);
    $('#login_form').delay(500).fadeIn(400);
    $('#login_navigarion').addClass('active');
    $('#registration_navigation').removeClass('active')
  });
  $('.login_close').click (function() {
  	$('.login').fadeOut();
    $('body').removeClass('stop-scrolling')
  });

  $('.create_accaunt').click (function() {
  	$('#login_form').fadeOut(300);
  	$('#registration_form').delay(500).fadeIn(400);
  });
  $('.create_accaunt_mobile_menu').click (function() {
    $('.popup_menu').fadeOut();
    $('.login').fadeIn();
    $('#login_form').fadeOut(300);
  	$('#registration_form').delay(500).fadeIn(400);
    $('body').addClass('stop-scrolling');
    $('#login_navigarion').removeClass('active');
    $('#registration_navigation').addClass('active')
  });

  //Переключалка табов форма логина
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

  //Мобильное меню
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
    $('body').addClass('stop-scrolling')
  });
  $('.search_close').click (function() {
  	$('.search').fadeOut();
    $('body').removeClass('stop-scrolling')
  });

  //Маска для номера телефона в инпут
  jQuery(function($) {
    $(".registration_phone_input").mask("+7 (999) 999-99-99");
  });

});
