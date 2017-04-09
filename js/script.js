$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
			}
		});
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
	});
});


$(document).ready(function(){
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

});