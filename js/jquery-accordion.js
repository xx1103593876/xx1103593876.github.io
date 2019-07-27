$.fn.accordion = function(arr, width) {
	arr=arr||[];
	width=width||100;
	
	var $li = this.find("li");

	var boxLength = this.width();
	var maxLength = boxLength - ($li.length - 1) * width;
	var avgLength = boxLength / $li.length;

	$li.each(function(i, e) {
		$(e).css("background-color", arr[i]);
	});

	$li.on("mouseenter", function() {
		$(this).stop().animate({
			width: maxLength
		}).siblings().stop().animate({
			width: width
		});
	});

	$li.on("mouseleave", function() {
		$li.stop().animate({
			width: avgLength
		})
	});
	
	return this;
};