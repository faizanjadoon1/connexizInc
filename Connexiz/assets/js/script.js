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


    if(window.location.href.indexOf("corp") < 0 ) {
       
 
	$('#corp b').css({'margin-top':'-142px','transition-delay':'0s'});

  
  }
	
setTimeout(function(){  

    if(window.location.href.indexOf("corp") > -1 ) {
       
 
	$('#corp b').css({'margin-top':'3.5px','transition-delay':'0.8s' });

  
  }

}, 1500);


  
  
});







