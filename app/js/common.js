

$(function() {

	$(".carousel-services").owlCarousel({
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-angle-double-left'></i>","<i class='fa fa-angle-double-right'></i>"],
		responsiveClass: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1180:{
				items:3
			}
		}
	});

	$(".reviews").owlCarousel({
		loop: true,
		items: 1,
	});
	

	function carouselService(){
		$(".carousel-services-item").each(function(){
			var ths  = $(this),
					thsh = ths.find(".carousel-services-content").outerHeight();
					ths.find(".carousel-services-image").css("min-height", thsh);
		});	
	}carouselService();

	// $(".carousel-services-composition .h3").each(function() {
	// 	var ths =$(this);
	// 	ths.html(ths.html().replace(/(\S+)\s*$/, "<span>$1</span>"));
	// });

});
