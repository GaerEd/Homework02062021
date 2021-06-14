$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu, .header__body, .header__logo, .header__btn').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		dots:true,
		adaptiveHeight:true,
		speed:1000,
	});
	$('.comment__slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		speed:1000,
	})
})
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

