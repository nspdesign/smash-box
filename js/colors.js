$(document).ready(function(){
	
	$('.icon').click (function(event){
		event.preventDefault();
		if( $ (this).hasClass('inOut')  ){
			$('.colors-option').stop().animate({right:'0px'},500 );
		} else{
			$('.colors-option').stop().animate({right:'-200px'},500 );
		} 
		$(this).toggleClass('inOut');
		return false;

	}  );

	$(".color1" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color1.css" );
		return false;
	});
	
	$(".color2" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color2.css" );
		return false;
	});
	
	$(".color3" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color3.css" );
		return false;
	});
	
	$(".color4" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color4.css" );
		return false;
	});
		
	$(".color5" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color5.css" );
		return false;
	});
	
	$(".color6" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color6.css" );
		return false;
	});
	
	$(".color7" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color7.css" );
		return false;
	});
	
	$(".color8" ).click(function(){
		$("#colors" ).attr("href", "css/skin/color8.css" );
		return false;
	});
	
} );
