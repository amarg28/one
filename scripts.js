
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

//hover
$(document).ready(function(){
    $('#pages').hover(function() {
        $("#pages").addClass('zoom');
    
    }, function() {
        $("#pages").removeClass('zoom');
    });
});

$(document).ready(function(){
    $('#pages2').hover(function() {
        $("#pages2").addClass('zoom');
    
    }, function() {
        $("#pages2").removeClass('zoom');
    });
});
