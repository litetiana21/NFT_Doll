var active = false;
var hover = false;
var megamenuresponsive = false;
var rtl = $('html').hasClass('rtl');
$(document).ready(function() {
	if(responsive_design == 'yes' && $(window).width() < 992) {
		megamenuresponsive = true;
	}
	
	$("ul.megamenu > li").each(function () {
		var i = 0;
		$(this).find(".mobile-enabled").each(function () {
			i++;
		});
				
		if(i == 0) {
			$(this).find(".open-menu").addClass("mobile-disabled");
		}
	});
	
	$("ul.megamenu li .sub-menu .content .hover-menu ul li").hover(function () {
		$(this).children("ul").addClass("active");
	},function () {
		$(this).children("ul").removeClass("active");
	});
	
	$('.close-categories').on('click', function () {
		$(this).parent().removeClass("active");
		$(this).next().animate({ height:"hide" },400);
		return false;
	});
	
	$('.open-categories').on('click', function () {
		$(".open-categories").parent().removeClass("active");
		$('.open-categories').next().next().animate({ height:"hide" },400);
		
		$(this).parent().addClass("active");
		$(this).next().next().animate({ height:"show" },400);
		return false;
	});
	
	$('.close-menu').on('click', function () {
		$(this).parent().removeClass("active");
		$(this).next().next().next().animate({ height:"hide" },400);
		return false;
	});
	
	$('.open-menu').on('click', function () {
		$("ul.megamenu > li").removeClass("active");
		$("ul.megamenu > li").find(".sub-menu").animate({ height:"hide" },400);
		
		$(this).parent().addClass("active");
		$(this).next().next().animate({ height:"show" },400);
		megamenuresponsive = true;
		return false;
	});
	
	$("ul.megamenu > li.click .content a").click(function () {
		window.location = $(this).attr('href');
	});
		
	$("ul.megamenu > li.hover").hover(function () {
		if(megamenuresponsive == false) {
			active = $(this);
			hover = true;
			$("ul.megamenu > li").removeClass("active");
			$(this).addClass("active");
			if($("#header.header2 #header-inner > .container").length > 0) {	
				if(!rtl){
				    $(this).children(".sub-menu").css("right", "auto");	
				    var $whatever        = $(this).children(".sub-menu");
				    var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				    var $whatever2       = $("#header.header2 #header-inner > .container");
				    var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
				    if(ending_right2 > ending_right) {
				    	$(this).children(".sub-menu").css("right", "0");
				    }
				}else{
				    $(this).children(".sub-menu").css("right", "auto");	
				    $(this).children(".sub-menu").css("left", "auto");	
				    var $whatever        = $(this).children(".sub-menu");
				    var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
				    var $whatever2       = $("#header.header2 #header-inner > .container");
				    var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
				    if(ending_right2 > ending_right) {
				        $(this).children(".sub-menu").css("left", "0");
				    }  
				}
			} else {
				if(!rtl){
				    $(this).children(".sub-menu").css("right", "auto");	
				    var $whatever        = $(this).children(".sub-menu");
				    var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				    var $whatever2       = $("ul.megamenu");
				    var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
				    if(ending_right2 > ending_right) {
				    	$(this).children(".sub-menu").css("right", "0");
				    }
				}else{
				    $(this).children(".sub-menu").css("right", "auto");	
				    $(this).children(".sub-menu").css("left", "auto");	
				    var $whatever        = $(this).children(".sub-menu");
				    var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
				    var $whatever2       = $("ul.megamenu");
				    var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
				    if(ending_right2 > ending_right) {
				        $(this).children(".sub-menu").css("left", "0");
				    }  
				}
			}
			var widthElement = $(this).children("a").outerWidth()/2;
			var marginElement = $(this).children("a").offset().left-$(this).find(".content").offset().left;
			$(this).find(".content > .arrow").css("left", marginElement+widthElement);
		} 
	},function () {
		if(megamenuresponsive == false) {
			var rel = $(this).attr("title");
			hover = false;
			if(rel == 'hover-intent') {
				var hoverintent = $(this);
				setTimeout(function (){
					if(hover == false) {
						$(hoverintent).removeClass("active");
					}
				}, 500);
			} else {
				$(this).removeClass("active");
			}
		}
	});
	
	$("ul.megamenu > li.click").click(function () {
		if($(this).removeClass("active") == true) { return false; }
		active = $(this);
		hover = true;
		$("ul.megamenu > li").removeClass("active");
		$(this).addClass("active");
		if($("#header.header2 #header-inner > .container").length > 0) {	
			if(!rtl){
			    $(this).children(".sub-menu").css("right", "auto");	
			    var $whatever        = $(this).children(".sub-menu");
			    var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
			    var $whatever2       = $("#header.header2 #header-inner > .container");
			    var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
			    if(ending_right2 > ending_right) {
			    	$(this).children(".sub-menu").css("right", "0");
			    }
			}else{
			    $(this).children(".sub-menu").css("right", "auto");	
			    $(this).children(".sub-menu").css("left", "auto");	
			    var $whatever        = $(this).children(".sub-menu");
			    var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
			    var $whatever2       = $("#header.header2 #header-inner > .container");
			    var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
			    if(ending_right2 > ending_right) {
			        $(this).children(".sub-menu").css("left", "0");
			    }  
			}
		} else {
			if(!rtl){
			    $(this).children(".sub-menu").css("right", "auto");	
			    var $whatever        = $(this).children(".sub-menu");
			    var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
			    var $whatever2       = $("ul.megamenu");
			    var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
			    if(ending_right2 > ending_right) {
			    	$(this).children(".sub-menu").css("right", "0");
			    }
			}else{
			    $(this).children(".sub-menu").css("right", "auto");	
			    $(this).children(".sub-menu").css("left", "auto");	
			    var $whatever        = $(this).children(".sub-menu");
			    var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
			    var $whatever2       = $("ul.megamenu");
			    var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
			    if(ending_right2 > ending_right) {
			        $(this).children(".sub-menu").css("left", "0");
			    }  
			}
		}
		var widthElement = $(this).children("a").outerWidth()/2;
		var marginElement = $(this).children("a").offset().left-$(this).find(".content").offset().left;
		$(this).find(".content > .arrow").css("left", marginElement+widthElement);
		return false;
	});
	
	$(".categories-image-right ul > li > a").hover(function () {
	     $(this).closest('.categories-image-right').find('img').attr('src', $(this).attr('data-image'));
	},function(){
	     var src = $(this).closest('.categories-image-right').attr('data-image');
	     $(this).closest('.categories-image-right').find('img').attr('src', src);
	});
	
	$(".megaMenuToggle").click(function () {
		if($(this).removeClass("active") == true) {
			$(this).parent().find(".megamenu-wrapper").stop(true, true).animate({ height:"hide" },400);
		} else {
			$(this).parent().find(".megamenu-wrapper").stop(true, true).animate({ height:"toggle" },400);
			$(this).addClass("active");
		}
		return false;
	});
	
	$('html').on('click', function () {
		if(!(responsive_design == 'yes' && $(window).width() < 992)) {
			$("ul.megamenu > li.click").removeClass("active");
		}
	});
});

$(window).resize(function() {
	megamenuresponsive = false;
	
	if(responsive_design == 'yes' && $(window).width() < 992) {
		megamenuresponsive = true;
	}
});