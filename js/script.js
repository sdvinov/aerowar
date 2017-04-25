$(function() {
	$(window).scroll(function() {
		// If distance to top is 0, remove arrow
		// Or if it's not, show it
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
			}
		});
	// On click, animate page to top
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});


$(document).ready(function(){
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		// Prevent default behavior
		e.preventDefault();
		// Get target name from URL
		var target = this.hash,
		$target = $(target);
		// Animate to the target
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

});
