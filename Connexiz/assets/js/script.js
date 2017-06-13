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


setTimeout(function(){ 

$('span.transi').css({top       : 0,   transition : 'opacity 5s ease-in-out'
});

}, 3000);






