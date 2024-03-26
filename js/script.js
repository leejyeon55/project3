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