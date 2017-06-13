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

$('#corp b').css({'margin-top':'3.5px','transition-delay':'1.5s' });

    if(window.location.href.indexOf("margin_share") > -1 || window.location.href.indexOf("immigration") > -1 ) {
       
 
	$('#corp b').css({'margin-top':'-63px','transition-delay':'0.5s' });

  
  }else{
	  



}



  
  
});







