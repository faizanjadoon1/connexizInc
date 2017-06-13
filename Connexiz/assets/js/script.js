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




$('.arrow').click(function () {
    if(window.location.href.indexOf("corp") > -1) {
       
 
$('#corp b').css({'margin-top':'3.5px','transition-delay':'1.5s' });

  
  }else{
  
 $('#corp b').css({'margin-top':'-63px','transition-delay':'0.5s' });
  
  }
});







