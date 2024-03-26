const header = $('header');
$(window).on('scroll',function () {
    const scroll = $(window).scrollTop();
    if(scroll <= 0 ){
        header.removeClass('on');
    }else{
        header.addClass('on');
    }
    
})

// popup
$(".popup>span").on("click", function () {
    $(".popup").css('display','none');
  });

// 애니메이션
gsap.to('.main-banner1',{
    duration:3,
    opacity:1,
    y:-280,
})
// gsap.to('.section1-step1',{
//     duration:3,
//     opacity:1,
//     y:-20,
// })