$(document).ready(function(){
    // $("#fullpage").fullpage({
    //   keyboardScrolling: false,
    //   scrollOverflow: true,
    // });
    // 메인 슬라이더
    $('.section01 > .slider-wrap > .slider').slick({
        autoplay: 800,
        cssEase: 'linear',
        arrows: false,
        fade: true,
    })
    $(".section01 > .slider-wrap > .prev-btn").click(function(){
        //     슬라이드가 이전으로 간다.
        $('.section01 > .slider-wrap > .slider').slick('slickPrev');
      })
    $(".section01 > .slider-wrap > .next-btn").click(function(){
        //     슬라이드가 다음으로 간다.
        $('.section01 > .slider-wrap > .slider').slick('slickNext');
      })
    // 슬라이더 2  
    $('.section03 > .content-box > .slider-wrap > .slider').slick({
      cssEase: 'linear',
      arrows: false,
      fade: true,
    })
    $(".section03 > .content-box > .prev-btn").click(function(){
      $('.section03 > .content-box > .slier-wrap > .slider').slick('slickPrev');
    })
  $(".section03 > .content-box > .next-btn").click(function(){
      $('.section03 > .content-box > .slider-wrap > .slider').slick('slickNext');
    })

// 브랜드 리스트
$('.section05 > .content-box > .right-content > .nav-box > .btn').click(function(){
  let indexNum = $(this).index()
    
    $(this).addClass("active")
    $(this).siblings().removeClass("active")

  $('.section05 > .content-box > .right-content > .logo-list-box').eq(indexNum).addClass("active")
  $('.section05 > .content-box > .right-content > .logo-list-box').eq(indexNum).siblings().removeClass("active")
})




})