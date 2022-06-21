$(window).load(function() {
	// Index 2 banners
	var bannerContainer = $('#banner-container');

	bannerContainer.isotope({
		itemSelector: '.banner',
		masonry: {
			columnWidth: '.grid-sizer',
			gutter: 0
		}
	});
	
	// Index 18 banners
	var bannerContainers = $('#masonry-grid-18');

	bannerContainers.isotope({
		itemSelector: '.masonry-grid-item',
		masonry: {
			columnWidth: '.grid-sizer',
			gutter: 0
		}
	});
});
	
$(window).scroll(function(){
	$(".common-home .skin19-category-list li a").each(function(){
	    if($("#category_"+$(this).attr("data-cat")+"").offset() && ($(window).scrollTop() >= $("#category_"+$(this).attr("data-cat")+"").offset().top - $(window).innerHeight() / 2) && ($(window).scrollTop() <= $("#category_"+$(this).attr("data-cat")+"").offset().top + $("#category_"+$(this).attr("data-cat")+"").height() - $(window).innerHeight() / 2)) {
	    	$(".skin19-category-list li a").removeClass("active");
	        $(this).addClass("active");
	    }
	});
});
	
$(document).ready(function() {
	HomeSidebarVarious();
	
	$(".skin19-category .title p").click(function () {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});
	
	$(".common-home .skin19-category-list li:first-child a").addClass("active");
	
	$(".common-home .skin19-category-list li a").click(function () {
		$(".skin19-category-list li a").removeClass("active");
		$(this).addClass("active");
		var headerheight = $("header").outerHeight();
		$('html, body').animate({
		    scrollTop: $("#category_" + $(this).attr("data-cat")).offset().top-headerheight
		}, 500);
		return false;
	});
	
	$(".skin20-load-more-products").click(function () {
		var id = $(this).attr('title');
		$(this).hide();
		$("#" + id).find(".skin20-loader-products").addClass("active");
		setTimeout(function(){
			$("#" + id).find(".skin20-loader-products").removeClass("active");
		    $("#" + id).find(".hidden-product").show();
		},500);
		return false;
	});
	
	// Sticky tabs
	$(".sticky-tabs .nav li a").click(function () {
		var id = $(this).attr('aria-controls');
		$('html, body').animate({
		    scrollTop: $("#" + id).offset().top-80
		}, 500);
	});
	
	/* Index 20 products */
	$('.rtl .owl-carousel.skin20-products-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		rtl: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:6
			}
		}
	});
	
	$('.no-rtl .owl-carousel.skin20-products-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:6
			}
		}
	});
	
	/* Index 19 products */
	$('.rtl .owl-carousel.skin19-products-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		rtl: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:5
			}
		}
	});
	
	$('.no-rtl .owl-carousel.skin19-products-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:5
			}
		}
	});

	/* Featured carousel - (index14.html - homepage) */
	$('.rtl .owl-carousel.parallax-featured-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		rtl: true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:5
			}
		}
	});
	
	$('.no-rtl .owl-carousel.parallax-featured-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:5
			}
		}
	});

	/* Featured carousel - (index14.html - homepage) */
	$('.rtl .owl-carousel.parallax-featured-carousel-two').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:5
			}
		}
	});
	
	$('.no-rtl .owl-carousel.parallax-featured-carousel-two').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992: {
				items:4
			},
			1200: {
				items:5
			}
		}
	});
	
	/* index18.html - Clients - brands carousel 2 */
	$('.no-rtl .owl-carousel.brands-carousel-index18').owlCarousel({
		loop:true,
		margin:8,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive:{
			0: {
				items:2
			},
			480: {
				items:3
			},
			768: {
				items:4
			},
			992: {
				items:5
			},
			1200: {
				items:6
			}
		}
	});
	
	$('.rtl .owl-carousel.brands-carousel-index18').owlCarousel({
		loop:true,
		margin:8,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 8000,
		responsive:{
			0: {
				items:2
			},
			480: {
				items:3
			},
			768: {
				items:4
			},
			992: {
				items:5
			},
			1200: {
				items:6
			}
		}
	});
	
	/* index18.html - Product carousel */
	$('.no-rtl .owl-carousel.index18-products-carousel').owlCarousel({
		loop:true,
		margin:20,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive:{
			0: {
				items:1
			},
			480: {
				items:1
			},
			768: {
				items:2
			},
			992: {
				items:2
			},
			1200: {
				items:3
			}
		}
	});
	
	$('.rtl .owl-carousel.index18-products-carousel').owlCarousel({
		loop:true,
		margin:20,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 8000,
		responsive:{
			0: {
				items:1
			},
			480: {
				items:1
			},
			768: {
				items:2
			},
			992: {
				items:2
			},
			1200: {
				items:3
			}
		}
	});
	
	/* index11.html - Clients - brands carousel 2 */
	$('.no-rtl .owl-carousel.brands-carousel2').owlCarousel({
		loop:true,
		margin:20,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive:{
			0: {
				items:2
			},
			480: {
				items:3
			},
			768: {
				items:4
			},
			992: {
				items:5
			},
			1200: {
				items:6
			}
		}
	});
	
	$('.rtl .owl-carousel.brands-carousel2').owlCarousel({
		loop:true,
		margin:20,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 8000,
		responsive:{
			0: {
				items:2
			},
			480: {
				items:3
			},
			768: {
				items:4
			},
			992: {
				items:5
			},
			1200: {
				items:6
			}
		}
	});
	
	/* blog post carousel  - (index7.html - homepage) */
	$('.no-rtl .owl-carousel.post-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			}
		}
	});
	
	$('.rtl .owl-carousel.post-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		rtl: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			}
		}
	});
	
	/* blog post carousel  - (index7.html - homepage) */
	$('.no-rtl .owl-carousel.post-carousel2').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			}
		}
	});
	
	$('.rtl .owl-carousel.post-carousel2').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:false,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: true,
		rtl: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			}
		}
	});
	
	/* index4new - Clients -partners carousel  */
	$('.no-rtl .owl-carousel.new-brands-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		nav:true,
		navText : ["",""],
		dots: true,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768: {
				items:4
			},
			992:{
				items:5
			}
		}
	});
	
	$('.rtl .owl-carousel.new-brands-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		nav:true,
		navText : ["",""],
		dots: true,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 8000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768: {
				items:4
			},
			992:{
				items:5
			}
		}
	});
	
	/* index4 - Clients -partners carousel  */
	$('.no-rtl .owl-carousel.brands-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive:{
			0:{
				items:2
			},
			480: {
				items:3
			},
			768: {
				items:4
			},
			992:{
				items:5
			}
		}
	});
	
	$('.rtl .owl-carousel.brands-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 8000,
		responsive:{
			0:{
				items:2
			},
			480: {
				items:3
			},
			768: {
				items:4
			},
			992:{
				items:5
			}
		}
	});
	
	/* Colection carousel long - (index6.html - homepage) */
	$('.no-rtl .owl-carousel.collection-carousel-long').owlCarousel({
		loop:false,
		margin:16,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:4
			},
			1200:{
				items:5
			}
		}
	});
	
	$('.rtl .owl-carousel.collection-carousel-long').owlCarousel({
		loop:false,
		margin:16,
		responsiveClass:true,
		nav:false,
		dots: true,
		rtl: true,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:4
			},
			1200:{
				items:5
			}
		}
	});
	
	/* Colection carousel - (index6.html - homepage) */
	$('.no-rtl .owl-carousel.collection-carousel').owlCarousel({
		loop:false,
		margin:30,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			}
		}
	});
	
	$('.rtl .owl-carousel.collection-carousel').owlCarousel({
		loop:false,
		margin:30,
		responsiveClass:true,
		nav:false,
		dots: true,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			}
		}
	});
	
	/* banner/category carousel  - (index7.html - homepage) */
	$('.no-rtl .owl-carousel.banners-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			}
		}
	});
	
	$('.rtl .owl-carousel.banners-carousel').owlCarousel({
		loop:false,
		margin:20,
		responsiveClass:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-left">', '<i class="fa fa-chevron-right">'],
		dots: false,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 12000,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			}
		}
	});
	
	/* index5 - Products Slider */
	$('.no-rtl .owl-carousel.product-slider').owlCarousel({
		loop:false,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 9000,
	});
	
	$('.rtl .owl-carousel.product-slider').owlCarousel({
		loop:false,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		rtl: true,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 9000,
	});
	
	/* index4 - info Slider */
	$('.no-rtl .owl-carousel.info-carousel').owlCarousel({
		loop:false,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 14000,
	});
	
	$('.rtl .owl-carousel.info-carousel').owlCarousel({
		loop:false,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		rtl: true,
		autoplay: true,
		autoplayTimeout: 14000,
	});
	
	/* index - Sidebar banner Slider */
	$('.no-rtl .owl-carousel.widget-banner-slider').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 14000,
	});
	
	$('.rtl .owl-carousel.widget-banner-slider').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 14000,
		rtl: true
	});
	
	// Menu Display via btn (see: index4.hmtl)
	$('.mobile-toggle, #mobile-menu-overlay').on('click', function (e) {
		$('body').toggleClass('opened-menu');
		e.preventDefault();
	});
	
			/* toggle side menu + mobile menu sub menus */
			$('.accordion-menu').find('.arrow').on('click', function(e) {

				if ($(this).closest('li').find('ul').length) {
					$(this).closest('li').children('ul').slideToggle(350, function () {
						$(this).closest('li').toggleClass('open');
					});
					e.preventDefault();
				} else {
					return;
				}

			});
	
	/* index7 - Testimonials carousel */
	$('.no-rtl .owl-carousel.testimonial-carousel').owlCarousel({
		loop:false,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000
	});
	
	$('.rtl .owl-carousel.testimonial-carousel').owlCarousel({
		loop:false,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000,
		rtl: true
	});
	
	/* index - Post Slider */
	$('.no-rtl .owl-carousel.post-slider').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000,
	});	
	
	$('.rtl .owl-carousel.post-slider').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		responsiveClass:true,
		nav:false,
		navText: ['Previous', 'Next'],
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000,
		rtl: true
	});	

	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();
		
		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && responsive_design == 'yes' && $(window).width() < 768) {
		var i = 0;
		var produkty = [];
		
		$( ".box-product .carousel .item" ).each(function() {
			$( this ).find( ".product-grid .row > div" ).each(function() {
				if(i > 1) {
					produkty.push($(this).html());
				}
				
				i++;
			});
			for ( var s = i-3; s >= 0; s--, s-- ) {
				var html = "<div class='item'><div class='product-grid'><div class='row'>";
				if (produkty[s-1] != undefined) {
					html += "<div class='col-xs-6'>" + produkty[s-1] + "</div>";
				} else {
					html += "<div class='col-xs-6'>" + produkty[s+1] + "</div>";
				}
								
				if (produkty[s] != undefined) {
					html += "<div class='col-xs-6'>" + produkty[s] + "</div>";
				} else {
					html += "<div class='col-xs-6'>" + produkty[s+1] + "</div>";
				}
				html += "</div></div></div>";
				
				$( this ).after( html );
			}
			
			produkty = [];
			i = 0;
		});
	}
	
	/* Search */
	$('.button-search').bind('click', function() {
		url = $('base').attr('href') + 'index.php?route=product/search';
				 
		var search = $('header input[name=\'search\']').val();
		
		if (search) {
			url += '&search=' + encodeURIComponent(search);
		}
		
		var category_id = $('header select[name=\'category_id\']').val();
		
		if (category_id) {
			url += '&category_id=' + encodeURIComponent(category_id);
		}
		
		location = url;
	});
	
	$('header input[name=\'search\']').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = $('base').attr('href') + 'index.php?route=product/search';
			 
			var search = $('header input[name=\'search\']').val();
			
			if (search) {
				url += '&search=' + encodeURIComponent(search);
			}
			
			var category_id = $('header select[name=\'category_id\']').val();
			
			if (category_id) {
				url += '&category_id=' + encodeURIComponent(category_id);
			}
			
			location = url;
		}
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
	    	$('#scroll-top').fadeIn();
	    } else {
			$('#scroll-top').fadeOut();
		}
	}); 
	
	$('#scroll-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	
	/* Search MegaMenu */
	$('.button-search2').bind('click', function() {
		url = $('base').attr('href') + 'index.php?route=product/search';
				 
		var search = $('.container-megamenu input[name=\'search2\']').val();
		
		if (search) {
			url += '&search=' + encodeURIComponent(search);
		}
		
		location = url;
	});
	
	$('.container-megamenu input[name=\'search2\']').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = $('base').attr('href') + 'index.php?route=product/search';
			 
			var search = $('.container-megamenu input[name=\'search2\']').val();
			
			if (search) {
				url += '&search=' + encodeURIComponent(search);
			}
			
			location = url;
		}
	});
	
	$('.search-toggle').bind('click', function() {
		url = $('base').attr('href') + 'index.php?route=product/search';
		location = url;
	});
	
	// Scroll to
	$('.scrollto').click(function(){
		var to = $(this).attr('href');
		$('html, body').animate( { scrollTop: $(to).offset().top }, 500 );
		return false;
	});
	
	/* Quatity buttons */
	
	$('#q_up').click(function(){
		var q_val_up=parseInt($("input#quantity_wanted").val());
		if(isNaN(q_val_up)) {
			q_val_up=0;
		}
		$("input#quantity_wanted").val(q_val_up+1).keyup(); 
		return false; 
	});
	
	$('#q_down').click(function(){
		var q_val_up=parseInt($("input#quantity_wanted").val());
		if(isNaN(q_val_up)) {
			q_val_up=0;
		}
		
		if(q_val_up>1) {
			$("input#quantity_wanted").val(q_val_up-1).keyup();
		} 
		return false; 
	});
	
	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	
	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});	
	
	FixedTop();
});

function getURLVar(key) {
    var value = [];
    
    var query = String(document.location).split('?');
    
    if (query[1]) {
        var part = query[1].split('&');

        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');
            
            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }
        
        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
} 
	
// Cart add remove functions	
var cart = {
	'add': function(product_id, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			success: function(json) {			
				if (json['redirect']) {
					location = json['redirect'];
				}
				
				if (json['success']) {
				     $.notify({
				     	message: json['success'],
				     	target: '_blank'
				     },{
				     	// settings
				     	element: 'body',
				     	position: null,
				     	type: "info",
				     	allow_dismiss: true,
				     	newest_on_top: false,
				     	placement: {
				     		from: "top",
				     		align: "right"
				     	},
				     	offset: 20,
				     	spacing: 10,
				     	z_index: 2031,
				     	delay: 5000,
				     	timer: 1000,
				     	url_target: '_blank',
				     	mouse_over: null,
				     	animate: {
				     		enter: 'animated fadeInDown',
				     		exit: 'animated fadeOutUp'
				     	},
				     	onShow: null,
				     	onShown: null,
				     	onClose: null,
				     	onClosed: null,
				     	icon_type: 'class',
				     	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
				     		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				     		'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
				     		'<div class="progress" data-notify="progressbar">' +
				     			'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
				     		'</div>' +
				     		'<a href="{3}" target="{4}" data-notify="url"></a>' +
				     	'</div>' 
				     });
				     					
					$('#mini-cart #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#mini-cart #total_item_ajax').load('index.php?route=common/cart/info #total_item');
				}
			}
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			success: function(json) {
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#mini-cart #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#mini-cart #total_item_ajax').load('index.php?route=common/cart/info #total_item');
				}			
			}
		});			
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',			
			success: function(json) {
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#mini-cart #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#mini-cart #total_item_ajax').load('index.php?route=common/cart/info #total_item');
				}
			}
		});			
	}
}

var voucher = {
	'add': function() {
		
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},      
			complete: function() {
				$('#cart > button').button('reset');
			},			
			success: function(json) {
				$('#cart-total').html(json['total']);
				
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#mini-cart #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#mini-cart #total_item_ajax').load('index.php?route=common/cart/info #total_item');
				}			
			}
		});	
	}
}

var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {							
				if (json['success']) {
					$.notify({
						message: json['success'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
							'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
				}   
				
				if (json['info']) {
					$.notify({
						message: json['info'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-info" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
							'<span data-notify="message"><i class="fa fa-info"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
				}   
				
				$('#wishlist-total').html(json['total']);
			}
		});
	},
	'remove': function() {
	
	}
}

var compare = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {							
				if (json['success']) {
					$.notify({
						message: json['success'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
							'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
					
					$('#compare-total').html(json['total']);
				}   
			}
		});
	},
	'remove': function() {
	
	}
}

/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
	e.preventDefault();
	
	$('#modal-agree').remove(); 
	
	var element = this;
	
    $.ajax({
        url: $(element).attr('href'),
        type: 'get',
        dataType: 'html',
        success: function(data) {
			html  = '<div id="modal-agree" class="modal fade">';
			html += '  <div class="modal-dialog">';
			html += '    <div class="modal-content">';
			html += '      <div class="modal-header">'; 
			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
			html += '      </div>';
			html += '      <div class="modal-body">' + data + '</div>';
			html += '    </div';
			html += '  </div>';
			html += '</div>';
			
			$('body').append(html);
			
			$('#modal-agree').modal('show');
        }
    });
});

/* Autocomplete */
(function($) {
	function Autocomplete(element, options) {
		this.element = element;
		this.options = options;
		this.timer = null;
		this.items = new Array();

		$(element).attr('autocomplete', 'off');
		$(element).on('focus', $.proxy(this.focus, this));
		$(element).on('blur', $.proxy(this.blur, this));
		$(element).on('keydown', $.proxy(this.keydown, this));

		$(element).after('<ul class="dropdown-menu"></ul>');
		$(element).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));
	}

	Autocomplete.prototype = {
		focus: function() {
			this.request();
		},
		blur: function() {
			setTimeout(function(object) {
				object.hide();
			}, 200, this);
		},
		click: function(event) {
			event.preventDefault();

			value = $(event.target).parent().attr('data-value');

			if (value && this.items[value]) {
				this.options.select(this.items[value]);
			}
		},
		keydown: function(event) {
			switch(event.keyCode) {
				case 27: // escape
					this.hide();
					break;
				default:
					this.request();
					break;
			}
		},
		show: function() {
			var pos = $(this.element).position();

			$(this.element).siblings('ul.dropdown-menu').css({
				top: pos.top + $(this.element).outerHeight(),
				left: pos.left
			});

			$(this.element).siblings('ul.dropdown-menu').show();
			$(this).siblings('ul.dropdown-menu').css("opacity", "1");
			$(this).siblings('ul.dropdown-menu').css("visibility", "visible");
		},
		hide: function() {
			$(this.element).siblings('ul.dropdown-menu').hide();
		},
		request: function() {
			clearTimeout(this.timer);

			this.timer = setTimeout(function(object) {
				object.options.source($(object.element).val(), $.proxy(object.response, object));
			}, 200, this);
		},
		response: function(json) {
			html = '';

			if (json.length) {
				for (i = 0; i < json.length; i++) {
					this.items[json[i]['value']] = json[i];
				}

				for (i = 0; i < json.length; i++) {
					if (!json[i]['category']) {
						html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
					}
				}

				// Get all the ones with a categories
				var category = new Array();

				for (i = 0; i < json.length; i++) {
					if (json[i]['category']) {
						if (!category[json[i]['category']]) {
							category[json[i]['category']] = new Array();
							category[json[i]['category']]['name'] = json[i]['category'];
							category[json[i]['category']]['item'] = new Array();
						}

						category[json[i]['category']]['item'].push(json[i]);
					}
				}

				for (i in category) {
					html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

					for (j = 0; j < category[i]['item'].length; j++) {
						html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
					}
				}
			}

			if (html) {
				this.show();
			} else {
				this.hide();
			}

			$(this.element).siblings('ul.dropdown-menu').html(html);
		}
	};

	$.fn.autocomplete = function(option) {
		return this.each(function() {
			var data = $(this).data('autocomplete');

			if (!data) {
				data = new Autocomplete(this, option);

				$(this).data('autocomplete', data);
			}
		});
	}
})(window.jQuery);

function openPopup(module_id, product_id) {
     product_id = product_id || undefined;
     $.magnificPopup.open({
          items: {
               src: 'index.php?route=extension/module/popup/show&module_id=' + module_id + (product_id ? '&product_id=' + product_id : '')
          },
          mainClass: 'popup-module mfp-with-zoom',
          type: 'ajax',
          removalDelay: 200
     });
}

$(window).resize(function() {
     FixedTop();
});

$(window).scroll(function() {
     FixedTop();
});

function FixedTop() {
     if($(window).width() >= 1160 && $(window).scrollTop() > 280) {
          $('.fixed-header').addClass('active');
     } else { 
          $('.fixed-header').removeClass('active');
     }
}

$(window).resize(function() {
     FixedTopHeader21();
});

$(window).scroll(function() {
     FixedTopHeader21();
});

function FixedTopHeader21() {
	$('.header21').removeClass('active');
	var height = $('.header21').outerHeight();
	
    if($(window).scrollTop() > 130) {
         $('.header21').addClass('active');
         $('.header21-before').css('height', height);
    } else { 
         $('.header21').removeClass('active');
         $('.header21-before').css('height', '0px');
    }
}

$(window).resize(function() {
     FixedTopHeader20();
});

$(window).scroll(function() {
     FixedTopHeader20();
});

function FixedTopHeader20() {
	$('.header20').removeClass('active');
	var height = $('.header20').outerHeight();
	
    if($(window).scrollTop() > 130) {
         $('.header20').addClass('active');
         $('.header20-before').css('height', height);
    } else { 
         $('.header20').removeClass('active');
         $('.header20-before').css('height', '0px');
    }
}

$(window).resize(function() {
     FixedTopHeader20Categories();
});

$(window).scroll(function() {
     FixedTopHeader20Categories();
});

$(document).ready(function() {
     FixedTopHeader20Categories();
});

function FixedTopHeader20Categories() {
	if (($(".skin19-category-list").length > 0)){
		$('.skin19-category-list').show();
		var height = $('.overflow-header').outerHeight();
		var heighttwo = $('.header20').outerHeight();
		var heightbreadcrumb = $('.page-top').outerHeight();
		
	    if($(window).scrollTop() > (height-heighttwo+76) && $(window).scrollTop() > 130) {
	         $('.skin19-category-list ul').css('top', heighttwo).css('bottom', 'auto').css('padding-top', 0).css('position', 'fixed');
	         var positionbottom = $('.skin19-category-list ul').offset();
	         var positionbottom2 = $('#footer').offset();
	         if(positionbottom.top + $('.skin19-category-list ul').outerHeight()  >= positionbottom2.top) {
	         	$('.skin19-category-list ul').css('top', 'auto').css('bottom', $('#footer').outerHeight()).css('padding-top', 0).css('position', 'absolute');
	         }
	    } else { 
	         $('.skin19-category-list ul').css('top', height+heightbreadcrumb).css('bottom', 'auto').css('padding-top', '76px').css('position', 'absolute');
	    }
    }
}

function HomeSidebarVarious() {
     var height_two = $("header > div").height()+140;
     if($(window).height() > height_two) {
          $("body").addClass("with-fixed");
     } else {
          $("body").removeClass("with-fixed");
     }
}

$(window).resize(function() {
     HomeSidebarVarious();
});

$(window).scroll(function() {
	if($(".sticky-tabs").length) {
     	StickyTabs();
    }
});

function StickyTabs() {
	var scrollTop = $(window).scrollTop()+30;
	var tabsTop = $(".sticky-tabs .tab-content").offset();
	if(scrollTop > tabsTop.top) {
		$(".sticky-nav-tabs").show();
		var paddingLeft = $(".main-content .pattern > .container > .row").offset();
		$(".sticky-nav-tabs .container").css("margin-left", paddingLeft.left+10);
		$(".sticky-nav-tabs .container").css("margin-right", paddingLeft.left+10);
		var height = $(".fixed-header").outerHeight();
		if(height > 1) {
			var height2 = height;
		} else {
			var height2 = 0;
		}
		var height3 = $(".header20.with-fixed").outerHeight();
		if(height3 > 0) {
			height2 = height2+height3;
		}
		var height4 = $(".header21.with-fixed").outerHeight();
		if(height4 > 0) {
			height2 = height2+height4;
		}
		$(".sticky-nav-tabs").css("top", height2);
	} else {
		$(".sticky-nav-tabs").hide();
	}
}

$(window).scroll(function() {
	if($(".sticky-product").length) {
     	StickyProduct();
    }
});

function StickyProduct() {
	var scrollTop = $(window).scrollTop();
	var tabsTop = $(".product-center .price").offset();
	if(scrollTop > tabsTop.top) {
		$(".sticky-product").show();
		var paddingLeft = $(".main-content .pattern > .container > .row").offset();
		$(".sticky-product .container").css("margin-left", paddingLeft.left+10);
		$(".sticky-product .container").css("margin-right", paddingLeft.left+10);
		var height = $(".fixed-header").outerHeight();
		if(height > 1) {
			var height2 = height;
		} else {
			var height2 = 0;
		}
		var height3 = $(".header20.with-fixed").outerHeight();
		if(height3 > 0) {
			height2 = height2+height3;
		}
		var height4 = $(".header21.with-fixed").outerHeight();
		if(height4 > 0) {
			height2 = height2+height4;
		}
		$(".sticky-product").css("top", height2);
	} else {
		$(".sticky-product").hide();
	}
}