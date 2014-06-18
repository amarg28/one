
$(document).ready(function(){
    $('#content a').nivoLightbox();
});

$(window).load(function() {
    $('#slider').nivoSlider();
});


//navbar fade
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

//hover people
$(document).ready(function(){
    $('#pages').hover(function() {
        $("#pages").addClass('zoom');
    
    }, function() {
        $("#pages").removeClass('zoom');
    });
});

$(document).ready(function(){
    $('#pages').hover(function() {
        $("#text").addClass('zoomText');
    
    }, function() {
        $("#text").removeClass('zoomText');
    });
});

//hover places
$(document).ready(function(){
    $('#pages2').hover(function() {
        $("#pages2").addClass('zoom');
    
    }, function() {
        $("#pages2").removeClass('zoom');
    });
});

$(document).ready(function(){
    $('#pages2').hover(function() {
        $("#text2").addClass('zoomText');
    
    }, function() {
        $("#text2").removeClass('zoomText');
    });
});
