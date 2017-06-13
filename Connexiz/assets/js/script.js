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





$('#corp b').css({'margin-top':'22px','transition-delay':'1s' });


	 }, 1000);
  
  }
});







