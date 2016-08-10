jQuery(document).ready(function($){
            $("#top").click(function (){
					$('html, body').animate({
							scrollTop: $("#cssmenu").offset().top
						}, 1000);
		});
	});