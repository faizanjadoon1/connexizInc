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
       
 
	$('#corp b').css({'margin-top':'-262px','-webkit-transition-delay': '0s','-moz-transition-delay': '0s', '-ms-transition-delay': '0s','-o-transition-delay': '0s' , 'transition-delay':'0s'});

  
  }
	
setTimeout(function(){  

    if(window.location.href.indexOf("corp") > -1 ) {
     
     $('#corp b').css({'margin-top':'3.5px','-webkit-transition-delay': '0.8s','-moz-transition-delay': '0.8s', '-ms-transition-delay': '0.8s','-o-transition-delay': '0.8s','transition-delay':'0.8s' });

  
  }

}, 1500);


  
  
});







