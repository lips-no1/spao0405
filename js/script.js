$(document).ready(function(){
  $('.slider').on('init', function(event, slick){    
    $(".dots-box>.dot").eq(0).addClass("active")
});
 
  $(".top-bar-wrap .left>.menu>li").mouseover(function(){

    
    let num=$(this).index()
  
  $(".nav-2-depth-wrap").addClass("active")
  $(".nav-2-depth-wrap>div").eq(num).addClass("active")
  $(".nav-2-depth-wrap>div").eq(num).siblings().removeClass("active")

})

$(".nav-2-depth-wrap>.bg").mouseover(function(){
  $(".nav-2-depth-wrap").removeClass("active")
  $(".nav-2-depth-wrap>div").removeClass("active")
})  
  
  
  $('.section01>.slider').slick({
      autoplay:true,
      autoplaySpeed:3000,
      fade:true,
    });
    $(".section01>.dots-box>.dot").click(function(){
     let num = $(this).index()
   $('.section01>.slider').slick("slickGoTo",num)
   })
     $('.section01 .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
   console.log(nextSlide);
     $(".section01>.dots-box>.dot").eq(nextSlide).addClass("active")
     $(".section01>.dots-box>.dot").eq(nextSlide).siblings().removeClass("active")    
 });
    
    $('.section02>.con .slider').slick({
      slidesToShow:3,
      slidesToScroll:1,
      autoplay:true,
    })
    $(".section02>.btn-box>.left-btn").click(function(){
      $('.section02>.con .slider').slick('slickPrev');
    })
    $(".section02>.btn-box>.right-btn").click(function(){
      $('.section02>.con .slider').slick('slickNext');
    })
    $(".section02>.dots-box>.dot").click(function(){
     let num = $(this).index()
   $('.section02 .slider').slick("slickGoTo",num)
   })
     $('.section02 .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
   console.log(nextSlide);
     $(".section02>.dots-box>.dot").eq(nextSlide).addClass("active")
     $(".section02>.dots-box>.dot").eq(nextSlide).siblings().removeClass("active")    
 });
    
    $('.section03>.con .slider').slick({
      slidesToShow:4,
      sliderToScroll:1,
      autoplay:false,
    })
    $(".section03>.btn-box>.left-btn").click(function(){
        $(".section03>.con .slider").slick('slickPrev')
    })
    $(".section03>.btn-box>.right-btn").click(function(){
        $(".section03>.con .slider").slick('slickNext')
    })
    
    $('.section08>.slider-wrap .slider .con').slick({
      slidesToShow:2,
      sliderToScroll:1,
      autoplay:true,
    })

    $('.section09>.con>.slider-wrap .slider').slick({
      slidesToShow:5,
      sliderToScroll:1,
      autoplay:true,
    })
    $(".section09>.btn-box>.left-btn").click(function(){
      $('.section09>.con>.slider-wrap .slider').slick('slickPrev')
    })
    $(".section09>.btn-box>.right-btn").click(function(){
      $('.section09>.con>.slider-wrap .slider').slick('slickNext')
    })

    $(".go-btn>.go-top").click(function(){
      // $("html,body").scrollTop(0)
      $("html,body").animate({
        "scrollTop":0,
      },1000)
    })
  });