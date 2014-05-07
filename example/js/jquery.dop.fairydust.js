// JavaScript Document
jQuery.fn.fairydust = function() {
	return this.each(function(){

		var sparkling;
		var mousePositionX;
		var mousePositionY;
		
		var defaults = {
			//sparkleHtml: '<div style="width:20px;height:20px;border-radius:4px;background:white;box-shadow:0 0 4px #b9eaf1;position:absolute;"/></div>',
			sparkleHtml : '<img src="js/dust.png"/>',
			createSpeed: 80,
			fadeSpeed: 2000,
			randomness: 40,
			scatterness : 80
		}
		
		
		$(window).hover(function(){
			
			sparkling = window.setInterval(function(){
				
				var sizeRandom = Math.random() * 20;
				var orgTop = mousePositionY+((Math.random()-.5)*defaults.randomness);
				var orgLeft = mousePositionX+((Math.random()-.5)*defaults.randomness)

				var sparkleItem = $(defaults.sparkleHtml).css({
					'pointer-events' : 'none',
					width : sizeRandom+ 'px',
					height : sizeRandom + 'px',
					position : 'absolute',
					top: orgTop+'px',
					left: orgLeft+'px',
					'z-index' : '9999'
				}).appendTo('body').animate({'opacity' : 0, 
											'left' : (orgLeft + (Math.random()-.5)*defaults.scatterness)+'px',
											'top' : (orgTop + (Math.random()-.5)*defaults.scatterness)+'px'
											 }, defaults.fadeSpeed, function(){ $(this).remove(); });

			},defaults.createSpeed);
		},function(){
			window.clearInterval(sparkling);
		});

		$(this).mousemove(function(e){
			mousePositionX = e.pageX;
			mousePositionY = e.pageY;
		});
	});

}