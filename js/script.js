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


//main banner gsap
$(()=>{let tl = gsap.timeline({
    repeat: -1, 
    repeatDelay: 1 
});

tl.to('.main-banner1', {
    opacity: 1,
    duration: 1,
    y: '-85%',
})
.to('.main-banner1', {
    opacity: 0,
    duration: 1,
}, '+=1')
.to('.main-banner2', {
    opacity: 1,
    duration: 1,
    y: '-40%',
}, '+=1')
.to('.main-banner2', {
    opacity: 0,
    duration: 1,
}, '+=1');})

//main banner gsap
$(()=>{let Tl = gsap.timeline({
    repeat: -1, 
    repeatDelay: 1 
});

Tl.to('.main-banner3', {
    opacity: 1,
    duration: 1,
    y: '-13%',
})
.to('.main-banner3', {
    opacity: 0,
    duration: 1,
}, '+=1')
.to('.main-banner4', {
    opacity: 1,
    duration: 1,
    y: '-18%',
}, '+=1')
.to('.main-banner4', {
    opacity: 0,
    duration: 1,
}, '+=1');})


//gsap
gsap.to('.section1-step1',{
    scrollTrigger:'.section1-step1',
    y:'-100px',
    duration: 1,
})
gsap.to('.section1-step2',{
    scrollTrigger:'.section1-step2',
    y:'-100px',
    duration: 1,
})
gsap.to('.section1-step3',{
    scrollTrigger:'.section1-step3',
    y:'-100px',
    duration: 1,
})