/* - - - */	
function marginCrew(){
	var arr_crew = $('.crew20_left, .crew20_right');
	for (var i=0; i<arr_crew.length; i++) {
		var crew_hei = $(arr_crew[i]).innerHeight();
		var crew_mar = ((crew_hei * 0.360) / 2) + 2;
		if ($(arr_crew[i]).hasClass('crew20_left')) {
			$(arr_crew[i]).css('margin-left',-crew_mar+'px');
			$(arr_crew[i]).children().css('margin-left',crew_mar+'px');
		} else {
			$(arr_crew[i]).css('margin-right',-crew_mar+'px');
			$(arr_crew[i]).children().css('margin-right',crew_mar+'px');
			if ($(arr_crew[i]).hasClass('crew_index_right')) {
				//$(arr_crew[i]).children().css('margin-left',crew_mar+'px');
			}
			if ($(arr_crew[i]).parent().hasClass('holland_textline_wrapp')) {
				$(arr_crew[i]).children().css('margin-left',-crew_mar+'px');
			}
		}
	}
};
function menuCrew(){
	var arr_menu = $('.main_submenu, .language_wrapp ul');
	var k = 6;
	if ($(window).width() < 1440) {
		k = $(window).width() / 100 * 0.4167;
	}
	if ($(window).width() < 800) {
		k = 3.5;
	}
	for (var i=0; i<arr_menu.length; i++) {
		$(arr_menu[i]).parent().css('top',-$(arr_menu[i]).innerHeight()-71+'px');
		
		var arr_submenu = $(arr_menu[i]).children('.crew7_right');
		for (var j=0; j<arr_submenu.length; j++) {
			$(arr_submenu[j]).css('margin-left',-j*k+'px');
		}
	}
};
function hollandLeft(){
	if ($('.holland_page')) {
		var left_hei = $('.holland_slide_text').children().innerHeight();
		var foot_hei = $('.footer').innerHeight();
		var min_h = $('.holland_textline_wrapp').innerHeight() + foot_hei + left_hei;
		var hei = $(document).height() - $('.header').innerHeight();
		$('.holland_page .content').css('min-height',min_h+'px').css('height',hei+'px');
		
		$('.holland_textline_wrapp').css('margin-top',left_hei+'px').css('margin-bottom',foot_hei+'px');
		
		marginCrew();
	}
};
function indexImages(){
	if ($('.index_page').length) {
		var ww = $('.index_top').innerWidth();
		var img_1_hei = $('.index_top > img').innerHeight();
		var img_1_wid = $('.index_top > img').innerWidth();
		var img_2_hei = $('.index_bottom > img').innerHeight();
		var img_2_wid = $('.index_bottom > img').innerWidth();

		if (img_1_wid / img_1_hei > ww / $('.index_top').innerHeight()) {
			var mar_img = (ww - (img_1_wid * $('.index_top').innerHeight()) / img_1_hei) / 2;
			if (mar_img < -15) {
				$('.index_top > img').css('height','100%').css('width','auto').css('margin-left',mar_img+'px');
			} else {
				$('.index_top > img').css('height','auto').css('width','100%').css('margin-left','0');
			}
		} else {
			$('.index_top > img').css('height','auto').css('width','100%').css('margin-left','0');
		}

		var crew_mar = $('.index_bottom').innerHeight() * 0.360;
		var new_wid = $(window).innerWidth() - $('.index_bottom .crew_index_right').innerWidth() + crew_mar + 3;
		var condit_k_img = img_2_wid / img_2_hei;
		var condit_k_par = new_wid / $('.index_bottom').innerHeight();
		var condit_small = $('.index_bottom').innerWidth() / $('.index_bottom').innerHeight();
		
		if ($(window).width() > 950) {
			$('.index_bottom > img').css('width',new_wid + 'px').css('height','auto');
			if (condit_k_img > condit_k_par) {
				$('.index_bottom > img').css('width','auto').css('height','100%');
			}
		} else {
			$('.index_bottom > img').css('width','100%').css('height','auto');
			if (condit_k_img > condit_small) {
				$('.index_bottom > img').css('width','auto').css('height','100%');
			}
		}
	}
};
function hardNew(){
	if ($('.hard_fruit_new').length) {
		
		$('.hard_fruit_new').css('height','auto');
		$('.crew_slide_left').css('min-height',($('.holland_slide_text > div').innerHeight())+'px');
		var sl_text_hei = $('.crew_slide_left').innerHeight() + $('.header').innerHeight();
		$('.hard_fruit_new').css('height',sl_text_hei+'px');
		var bg_height = $('.hard_fruit_new .holland_page_bg img').innerHeight();
		var bg_width = $('.hard_fruit_new .holland_page_bg img').innerWidth();
		var bg_par_width = $('.hard_fruit_new').innerWidth();
		var bg_par_hei = $('.hard_fruit_new').innerHeight() - $('.header').innerHeight();
		var bg_height_new = (bg_height * bg_par_width)/bg_width;
		if (bg_par_hei >= bg_height_new) {
			$('.hard_fruit_new .holland_page_bg img').css('width','auto').css('height',bg_par_hei+'px');
		} else {
			$('.hard_fruit_new .holland_page_bg img').css('width','100%').css('height','auto');
		}
	}
};
function sameHeight(bgname, textname){
	//$('.'+bgname).css('width','100%').css('height','auto');
	if ($('.hard_fruit_new').length) {
		
	} else {
		var bg_height = $('.'+bgname).innerHeight();
		var bg_width = $('.'+bgname).innerWidth();
		var bg_par_width = $('.'+bgname).parent().innerWidth();
		bg_height = (bg_height * bg_par_width)/bg_width;
		var text_height = $('.'+textname).innerHeight();
		if (text_height > bg_height) {
			$('.'+bgname).css('width','auto').css('min-height',text_height+'px');
			if ($('.hard_fruit_new').length) {
				$('.'+bgname).css('height',text_height+'px');
			}
			if (($('.hard_cat_page').length)||($('.farm_page').length)) {
				if (bgname == 'about_image_wrapp .about_image img') {
					$('.about_image_wrapp .about_image').css('height',text_height+'px');
					bg_height = $('.'+bgname).innerHeight();
					bg_width = $('.'+bgname).innerWidth();
					bg_par_width = $('.'+bgname).parent().innerWidth();
					bg_par_height = $('.'+bgname).parent().innerHeight();
					bg_height = (bg_height * bg_par_width)/bg_width;
					if (bg_height < bg_par_height) {
						$('.about_image_wrapp .about_image img').css('width','auto').css('height',text_height+'px');
					} else {
						$('.about_image_wrapp .about_image img').css('width','100%').css('height','auto');
					}
				}
			} 
		} else {
			$('.'+bgname).css('width','100%').css('min-height','0');
			if ($('.hard_fruit_new').length) {
				$('.'+bgname).css('height','auto');
			}
			if (($('.hard_cat_page').length)||($('.farm_page').length)) {
				if (bgname == 'about_image_wrapp .about_image img') {
					$('.about_image_wrapp .about_image').css('height',text_height+'px');
					bg_height = $('.'+bgname).innerHeight();
					bg_width = $('.'+bgname).innerWidth();
					bg_par_width = $('.'+bgname).parent().innerWidth();
					bg_par_height = $('.'+bgname).parent().innerHeight();
					bg_height = (bg_height * bg_par_width)/bg_width;
					if (bg_height < bg_par_height) {
						$('.about_image_wrapp .about_image img').css('width','auto').css('height',text_height+'px');
					} else {
						$('.about_image_wrapp .about_image img').css('width','100%').css('height','auto');
					}
				}
			} 
		}
	}
};

/* - Создание селекта - */
function CreateSelect(selector) {
    var selector =  selector || '.select_hollbars';
	var arr_selects = $(selector);
	for (var j=0; j<arr_selects.length; j++) {
        $(arr_selects[j]).wrapAll('<div class="select_hollbars_wrapp" style="z-index:'+(arr_selects.length-j)+'">');
		var sel_text = $(arr_selects[j]).children("option:selected").html();
		
		var sel_option = $(arr_selects[j]).children("option:selected").val();
		if ($(arr_selects[j]).parent('.select_hollbars_wrapp').parent().hasClass('link_lang')) {
			var flag_src = $(arr_selects[j]).children("option:selected").attr('flag-src');
			sel_text = '<span class="flag" style="background-image: url('+flag_src+')"></span>' + sel_text;
		}
		var flag = "";

		var placeholder = '';
		if ($(arr_selects[j]).children("option:selected").val()==0) {
			placeholder = 'placeholder';
		} 
		var sel_perem = "";
		var select_html = '<div class="select_view"><span class="select_text '+placeholder+'">'+sel_text+'</span><span class="select_triangle"></span></div><div class="select_drop"><ul>';
		var arr_options = $(arr_selects[j]).children("option");
		for (var i=0; i<arr_options.length; i++) {
			if ($(arr_options[i]).is(':selected') == true) {
				sel_perem = "selected";
			} else {
				sel_perem = "";
			}
			if ($(arr_selects[j]).parent('.select_hollbars_wrapp').parent().hasClass('link_lang')) {
				flag =  $(arr_options[i]).attr('flag-src');
			} else {
				flag = "";
			}
			//select_html = select_html+'<li style="background-image: url('+flag+')" option="'+$(arr_options[i]).val()+'" class="'+sel_perem+'">'+$(arr_options[i]).html()+'</li>';
			select_html = select_html+'<li option="'+$(arr_options[i]).val()+'" class="crew7_right '+sel_perem+'"><span>'+$(arr_options[i]).html()+'</span></li>';
		}
		select_html = select_html+'</ul></div>';
		$(select_html).insertAfter($(arr_selects[j]));
	}
};

/* - изменение селекта - */
function changeSelect() {
    var arr_selects = $(".select_hollbars");
    for (var j=0; j<arr_selects.length; j++) {
        var sel_text = $(arr_selects[j]).children("option:selected").html();

		var sel_option = $(arr_selects[j]).children("option:selected").val();
		if ($(arr_selects[j]).parent('.select_hollbars_wrapp').parent().hasClass('link_lang')) {
			var flag_src = $(arr_selects[j]).children("option:selected").attr('flag-src');
			sel_text = '<span class="flag" style="background-image url('+flag_src+')"></span>' + sel_text;
		}

        $(arr_selects[j]).parent().children(".select_view").detach();
        $(arr_selects[j]).parent().children(".select_drop").detach();
        var placeholder = '';
        if ($(arr_selects[j]).children("option:selected").val()==0) {
            placeholder = 'placeholder';
        }
        var sel_perem = "";
        var flag = "";
        var select_html = '<div class="select_view"><span class="select_text '+placeholder+'">'+sel_text+'</span><span class="select_triangle"></span></div><div class="select_drop"><ul>';
        var arr_options = $(arr_selects[j]).children("option");
        for (var i=0; i<arr_options.length; i++) {
            if ($(arr_options[i]).is(':selected') == true) {
                sel_perem = "selected";
            } else {
                sel_perem = "";
            }
            if ($(arr_selects[j]).parent('.select_hollbars_wrapp').parent().hasClass('link_lang')) {
					flag =  $(arr_options[i]).attr('flag-src');
				} else {
					flag = "";
				}
            //select_html = select_html+'<li style="background-image: url('+flag+')" option="'+$(arr_options[i]).val()+'" class="'+sel_perem+'">'+$(arr_options[i]).html()+'</li>';
            select_html = select_html+'<li option="'+$(arr_options[i]).val()+'" class="crew7_right '+sel_perem+'"><span>'+$(arr_options[i]).html()+'</span></li>';
        }
        select_html = select_html+'</ul></div>';
        $(select_html).insertAfter($(arr_selects[j]));
    }
};

function slideFunc(){
	
};
function slide_left(){
	
};

$(document).ready(function(){
	
	/* - раскрытие-сворачивание поиска- */	
	$(document).on('click', '.search_wrapp:not(.active)', function(e) {
		e.preventDefault();
		$('.search_wrapp').addClass(' active');
		$('.search_in input').focus();
	});	
	$(document).on('click', function(event) {
		if( $(event.target).closest(".search_wrapp").length ) 
			return;
		$(".search_wrapp").removeClass('active');
		event.stopPropagation();
	});
	
	/* - раскрытие-сворачивание меню на моб- */	
	$(document).on('click', function(event) {
		if ($(window).width() <= 800) {
			if( $(event.target).closest(".main_submenu_wrapp").length ) 
				return;
			
				if ($(this).children('.main_submenu').hasClass('active') == false) {
					$('.main_submenu').removeClass('active').slideUp(200);
					$(this).children('.main_submenu').addClass(' active').slideDown(200);
				} else {
					$(this).children('.main_submenu').removeClass('active').slideUp(200);
				}
		
			event.stopPropagation();
		}
	});
	$(document).on('click', '.main_submenu_wrapp', function(e) {
		//e.preventDefault();
		if ($(window).width() <= 800) {
			if ($(this).children('.main_submenu').hasClass('active') == false) {
				$('.main_submenu').removeClass('active').slideUp(200);
				$(this).children('.main_submenu').addClass(' active').slideDown(200);
			} else {
				$(this).children('.main_submenu').removeClass('active').slideUp(200);
			}
		}
	});	
	
/* - Селекты - */	
	CreateSelect();
	$(document).on('click', '.select_view', function() {
		if ($(this).parent().hasClass('active') == true) {
			$(this).parent().removeClass('active');
			//$(this).parent().children('.select_drop').slideUp(300);
			$(this).parent().children('.select_drop').css('margin-right','-180%');
		} else {
			$(this).parent().addClass('active');
			//$(this).parent().children('.select_drop').slideDown(300);
			$(this).parent().children('.select_drop').css('margin-right','0');
		}
		
		var arr_selects = $(".select_view");
		for (var j=0; j<arr_selects.length; j++) {
			if($(this).is(arr_selects[j]) == false){
				$(arr_selects[j]).parent().removeClass('active');
				//$(arr_selects[j]).parent().children('.select_drop').slideUp(300);
				$(arr_selects[j]).parent().children('.select_drop').css('margin-right','-180%');
			}
		}
	});
	$(document).on('click', '.select_drop ul li', function() {
		$(this).parent().children('li').removeClass('selected');
		$(this).addClass(' selected');
		var sel_option = $(this).attr('option');
		var sel_text = $(this).text();

		
		if ($(this).parents('.select_hollbars_wrapp').parent().hasClass('link_lang')) {
			var flag_src = $(this).attr('style');
			sel_text = '<span class="flag" style="'+flag_src+'"></span>' + sel_text;
		}

		$(this).parent().parent().parent().children('.select_view').children('.select_text').html(sel_text);
		$(this).parent().parent().parent().children('.select_hollbars').val(sel_option).change();
		
		if ($(this).attr('option')==0) {
			$(this).parent().parent().parent().children('.select_view').children('.select_text').addClass(' placeholder');
		} else {
			$(this).parent().parent().parent().children('.select_view').children('.select_text').removeClass('placeholder');
		}
		
		$(this).parent().parent().parent().removeClass('active');
		//$(this).parent().parent('.select_drop').slideUp(300);
		$(this).parent().parent('.select_drop').css('margin-right','-180%');

		
		var parentSelect = $(this).parents().children('select');
		parentSelect.change();

	});
	$(document).on('click', function(event) {
		if( $(event.target).closest(".select_hollbars_wrapp").length ) 
			return;
		$(".select_hollbars_wrapp").removeClass('active');
		//$(".select_hollbars_wrapp").children('.select_drop').slideUp(300);
		$(".select_hollbars_wrapp").children('.select_drop').css('margin-right','-180%');
		event.stopPropagation();
	});

/* - выпадающее меню для моб- */
	$(document).on('click', '.main_menu_label', function() {
		if ($(window).width() <= 800) {
			if ($('.main_menu').hasClass('active') == true) {
				//$('.main_menu').removeClass('active').slideUp(300);
				$('.main_menu').removeClass('active');
				$(".language_wrapp").removeClass('active');
			} else {
				//$('.main_menu').addClass(' active').slideDown(300);
				$('.main_menu').addClass(' active');
				$(".language_wrapp").addClass('active');
			}
		}
	});
	$(document).on('click', function(event) {
		if ($(window).width() <= 800) {
			if( $(event.target).closest(".main_menu, .main_menu_label, .language_wrapp").length ) 
				return;
			//$(".main_menu").removeClass('active').slideUp(300);
			$(".main_menu").removeClass('active');
			$(".language_wrapp").removeClass('active');

			event.stopPropagation();
		}
	});


	sameHeight('hard_bottom_image img', 'hard_bottom_text');
	sameHeight('about_image_wrapp .about_image img', 'about_image_wrapp .holland_slide_text > div');
	//sameHeight('hard_fruit_new .holland_page_bg img', 'hard_fruit_new');
	hardNew();

	indexImages();
	setTimeout("indexImages()", 300);
	marginCrew();
	setTimeout("marginCrew()", 300);
	menuCrew();
	
	hollandLeft();
	//setTimeout("hollandLeft()", 300);
	$('.crew_slide_left').addClass(' ready_slide');

	setTimeout("sameHeight('hard_bottom_image img', 'hard_bottom_text')", 300);
	setTimeout("sameHeight('about_image_wrapp .about_image img', 'about_image_wrapp .holland_slide_text > div')", 300);
	//setTimeout("sameHeight('hard_fruit_new .holland_page_bg img', 'hard_fruit_new')", 300);
	setTimeout("hardNew()", 300);
	setTimeout("marginCrew()", 300);
});

$(window).scroll(function () {
	
});

$(window).resize(function(){
	
	sameHeight('hard_bottom_image img', 'hard_bottom_text');
	sameHeight('about_image_wrapp .about_image img', 'about_image_wrapp .holland_slide_text > div');
	//sameHeight('hard_fruit_new .holland_page_bg img', 'hard_fruit_new .holland_slide_text');
	//hardNew();

	indexImages();
	setTimeout("indexImages()", 300);
	
	marginCrew();
	menuCrew();
	hollandLeft();
	setTimeout("menuCrew()", 300);

	setTimeout("sameHeight('hard_bottom_image img', 'hard_bottom_text')", 300);
	setTimeout("sameHeight('about_image_wrapp .about_image img', 'about_image_wrapp .holland_slide_text > div')", 300);
	//setTimeout("sameHeight('hard_fruit_new .holland_page_bg img', 'hard_fruit_new')", 300);
	setTimeout("hardNew()", 300);

});
