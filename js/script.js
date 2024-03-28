const header = $('header');
$(window).on('scroll', function () {
	const scroll = $(window).scrollTop();
	if (scroll <= 0) {
		header.removeClass('on');
	} else {
		header.addClass('on');
	}
});

// popup
$('.popup>span').on('click', function () {
	$('.popup').css('display', 'none');
});

//main banner animation
function animateBanners() {
	$(".main-banner1").css({
		top: '80%',
		opacity: 0 
	}).animate({
	  opacity: 1,
	  top: '55%'
	}, 1500).animate({
	  opacity: 0
	}, 1500, function() {
	  $(".main-banner2").css({
		top: '80%',
		opacity: 0 
	  }).animate({
		opacity: 1,
		top: '60%'
	  }, 1500).animate({
		opacity: 0
	  }, 1500, function() {
		animateBanners(); 
	  });
	});
  }
  animateBanners(); 
  

//main sm banner animation
function animateSbanners() {
	$(".main-banner3").css({
		top: '300px',
		opacity: 0 
	}).animate({
	  opacity: 1,
	  top: '43%'
	}, 1500).animate({
	  opacity: 0
	}, 1500, function() {
	  $(".main-banner4").css({
		top: '320px',
		opacity: 0 
	  }).animate({
		opacity: 1,
		top: '45%'
	  }, 1500).animate({
		opacity: 0
	  }, 1500, function() {
		animateSbanners(); 
	  });
	});
  }
  animateSbanners(); 

//gsap
gsap.to('.section1-step1', {
	scrollTrigger: '.section1-step1',
	y: '-100px',
	duration: 1,
	opacity:1
});
gsap.to('.section1-step2', {
	scrollTrigger: '.section1-step2',
	y: '-100px',
	duration: 1,
	opacity:1
});
gsap.to('.section1-step3', {
	scrollTrigger: '.section1-step3',
	y: '-100px',
	duration: 1,
	opacity:1
});
