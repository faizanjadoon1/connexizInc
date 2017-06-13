$(function(){
	
	var imp = impress();
	
	$('#arrowLeft').click(function(e){
		imp.prev();
		e.preventDefault();
	});
	
	$('#arrowRight').click(function(e){
		imp.next();
		e.preventDefault();
	});

});




$(document).ready(function () {
    if(window.location.href.indexOf("corp") > -1) {
       
 setTimeout(function(){


$('.scaling').css({'transform': 'scale(2.7)', 'transition-delay':'5s' });




	 }, 1000);
  
  }
});







