// JavaScript Document
jQuery.fn.fireflies = function() {
	return this.each(function(){

		var flies;
		
		var defaults = {
			sparkleHtml : '<img src="js/dust.png"/>',
			createSpeed: 50,
			fadeSpeed: 2000,
			randomness: 40,
			scatterness : 80
		}
		
		
		for (var i = 0; i < 20; i++) 
    	{
			
			//sparkling = window.setInterval(function(){
				
				var sizeRandom = Math.random() * 20;
				var orgTop = randomInteger(500, 800);
				var orgLeft = randomInteger(100, 1200);

				var firefly = $(defaults.sparkleHtml).css({
					width : sizeRandom+ 'px',
					height : sizeRandom + 'px',
					opacity : 0.5,
					position : 'absolute',
					top: orgTop+'px',
					left: orgLeft+'px',
					'z-index' : '9999'
				}).appendTo('body');
				
				glowOut(firefly);
				
			//},defaults.createSpeed);
		}
		
		function glowIn(el) {
			el.animate({'opacity' : 0.5, 
						'left' : (el.position().left + (Math.random()-.5)*defaults.scatterness)+'px',
						'top' : (el.position().top + (Math.random()-.5)*defaults.scatterness)+'px'
					 }, (3000 + Math.random() * defaults.fadeSpeed), function(){ glowIn(el); });
		}
		
		function glowOut(el) {
			el.animate({'opacity' : 0, 
						'left' : (el.position().left + (Math.random()-.5)*defaults.scatterness)+'px',
						'top' : (el.position().top + (Math.random()-.5)*defaults.scatterness)+'px'
					 }, (3000 + Math.random() * defaults.fadeSpeed), function(){ glowIn(el); });
	
		}

		function randomInteger(low, high)
		{
			return low + Math.floor(Math.random() * (high - low));
		}
	});

}