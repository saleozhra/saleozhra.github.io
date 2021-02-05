//event pada saat link di klik
$('.page-scroll').on('click',function(e){
	//ambil isi href
	var tujuan=$(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan =$(tujuan);
	$('html,body').animate({
		scrollTop:elemenTujuan.offset().top -50
	},1250,'easeInOutExpo');
	e.preventDefault();

});
//paralax
//abaut
$(window).on('load',function() {
	$('.pKiri').addClass('pKiri-go');
	$('.pKanan').addClass('pKanan-go');
});

$(window).scroll(function(){
	var wScroll =$(this).scrollTop();
	//jumbotron 

	$('.jumbotron img').css({
		'transform': 'translate(0px,'+wScroll/4 + '%)'
	});
	//jumbotron h1
	$('.jumbotron h1').css({
		'transform': 'translate(0px,'+wScroll/2 + '%)'
	});
	//jumbotron p
	$('.jumbotron p').css({
		'transform': 'translate(0px,'+wScroll/1.5 + '%)'
	});

	//portofolio
	if (wScroll> $('.portofolio').offset().top - 200){
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i).addClass('muncul');

			},300 * (i+1));

		});
		
		
		

	}
	
});

