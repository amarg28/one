
$(document).ready(function(){
    $('#content a').nivoLightbox();
});

$(window).load(function() {
    $('#slider').nivoSlider();
});


$(document).ready(function() {
	var nav = $('.hideBar');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 500) {
			nav.removeClass('hideBar').fadeIn();
		} else {
			nav.fadeOut().addClass('hideBar');
		}
	});
});
