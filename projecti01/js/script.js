$(document).ready(function(){
    // AOS
    AOS.init();

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
      $('.section03 > .content-box > .slider-wrap > .slider').slick('slickPrev');
    })
  $(".section03 > .content-box > .next-btn").click(function(){
      $('.section03 > .content-box > .slider-wrap > .slider').slick('slickNext');
    })

    let indexNum = $(this).index()

// 브랜드 리스트
$('.section05 > .content-box > .right-content > .nav-box > .btn').click(function(){
    
    $(this).addClass("active")
    $(this).siblings().removeClass("active")

  $('.section05 > .content-box > .right-content > .logo-list-box').eq(indexNum).addClass("active")
  $('.section05 > .content-box > .right-content > .logo-list-box').eq(indexNum).siblings().removeClass("active")
})

// 모바일 메뉴
$(".mobile-top-bar-wrap > .service-box .fa-bars").click(function(){
  $(".nav-2-depth-wrap").addClass("active")
})
  $(".fa-xmark").click(function(){
    $(".nav-2-depth-wrap").removeClass("active")
  })

  $(".mobile-top-bar-wrap > .service-box .fa-bars").click(function(){
    $(".nav-2-depth-wrap .nav-box").addClass("active")
  })
  $(".nav-2-depth-wrap-bg").click(function(){
    $(".nav-2-depth-wrap .nav-box").removeClass("active")
    $(".nav-2-depth-wrap").removeClass("active")
  })

  $(".nav-2-depth-wrap > .nav-box > .menu-list > li > p").click(function(){
    $(this).parent().toggleClass("active")
    $(this).parent().siblings().removeClass("active")
  })
  $(".nav-2-depth-wrap > .nav-box > .menu-list > li > ul > li > p").click(function(){
    $(this).parent().toggleClass("active")
    $(this).parent().siblings().removeClass("active")
  })
})