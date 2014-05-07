/* Author:

*/

$(document).ready(function(){
	
	$('body').fairydust();
	$('body').fireflies();
	
	//theatre light
	var topLight = $('.top-light');
	topLight.hide().delay(1000).show().delay(1000).hide().delay(2000).show();
	/*
	var topLightInterval = setInterval(function(){
		$('.top-light').fadeOut(1000).delay(3000).fadeIn(1000);	
	}, 6000);*/
	
	
	var light; // = $('.light');
    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop, el = document.createElement('div');
   
    for(var i = 0, l = props.length; i < l; i++) {
            if(typeof el.style[props[i]] !== "undefined") {
                prop = props[i];
                break;
            }
    }
        
    if (!light) light = document.getElementById('light');
    //light.style[prop] = "rotateZ("+ (-30) +"deg)";
    
	
	$(".loading-screen img").css({'top': '10%', 'opacity' : 0}).show().animate({'top' : '0%', 'opacity' : 1}, 1200);
	$(".loading-screen h1").css({'top': '100px', 'opacity' : 0}).show().delay(800).animate({'top' : '80px', 'opacity' : 1}, 1200);
	
	$("#loading").hover(function(){
		$(this).find("img").stop().animate({'top' : '4%'});	
		$(this).find("h1").stop().animate({'opacity' : '0'});	
		$(this).find("#enter-site").stop().show().animate({'opacity' : 1, 'top' : '80px'}, 800);
		
	}, function(){
		$(this).find("img").animate({'top' : '0%'});	
		$(this).find("h1").animate({'opacity' : '1'});	
		
		$(this).find("#enter-site").stop().animate({'opacity' : 0, 'top' : '60px'}, 600);
		
	});
	
	$(".theatre").css({'opacity' : 0});
	
	
	/*
	 * Navigation
	 * ****************************/
	
	/* 
	 $(window).load(function() {
		$(".loading-screen").fadeOut(600);
		$(".theatre").delay(600).animate({'top': '0%', 'opacity' : 1}, 2500, 'easeOutExpo');	
		$("footer").delay(1000).animate({'bottom' : 0}, 600);
	 });
	 
	 
	 $("footer").delay(1000).show().animate({'bottom' : 0}, 600);
	 */
	 
});




