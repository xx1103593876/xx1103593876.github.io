$(function() {
	$(".turn i").click(function() {
		$('.back').toggleClass("back-turn").toggleClass('opacity-all');
		$('.front').toggleClass("front-turn").toggleClass('opacity-all');
	});

	$(".school-body ul li").on("mouseenter", function() {
		$(this).stop().animate({
			fontSize: "1.5rem"
		}, 200)
	})
	$(".school-body ul li").on("mouseleave", function() {
		$(this).stop().animate({
			fontSize: "1rem"
		}, 200)
	})
	$(".pull-right").on("click",function(){
		$('body,html').stop().animate({
			scrollTop:0
		})
	})
})