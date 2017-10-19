$(document).ready(function(){
	
	var scroll;

	$("#TextBan").addClass("animated fadeInUp");
	$("#PafBan").addClass("animated fadeInUp");
	$("#Foco").addClass("animated fadeIn");
	if ($('#TextBan').css('display') == 'none' || $('#TextBan').css('opacity') == 1) {

	}
	$("#vermas").click(function(){
		$('html, body').animate( { scrollTop : 1800 }, 3000 );
	});
	$(window).scroll(function(){
		scroll=$(window).scrollTop();//En esta funcion se obtiene el valor del scroll
		console.log(scroll);



		if (scroll>300) {
			$("#PafPres").addClass("animated fadeInUp");
		}
		if(scroll>1200){
			$("#Card1").addClass("animated bounceIn");
			if ($('#Card1').css('display') == 'none' || $('#Card1').css('opacity') == 1) {
				$("#Card2").addClass("animated bounceIn");
			}
			if ($('#Card2').css('display') == 'none' || $('#Card2').css('opacity') == 1) {
				$("#Card3").addClass("animated bounceIn");
			}
			if ($('#Card3').css('display') == 'none' || $('#Card3').css('opacity') == 1) {
				$("#Card4").addClass("animated bounceIn");
			}
			if ($('#Card4').css('display') == 'none' || $('#Card4').css('opacity') == 1) {
				$("#Card5").addClass("animated bounceIn");
			}
			if ($('#Card5').css('display') == 'none' || $('#Card5').css('opacity') == 1) {
				$("#Card6").addClass("animated bounceIn");
			}
		}
	});//End function scroll
});

/*
	 var options = [ {selector: '#TextBan', offset: 50, callback: function(el) { Materialize.fadeInImage('#TextBan'); } }, 
	 {selector: '#TextBan', offset: 50, callback: function(el) { Materialize.fadeInImage('#PafBan'); } },
	 {selector: '#PafPres', offset: 300, callback: function(el) { Materialize.fadeInImage('#PafPres'); } }, 
	 {selector: '#staggered-test', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } }, 
	 {selector: '#image-test', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; 
	 Materialize.scrollFire(options);
*/