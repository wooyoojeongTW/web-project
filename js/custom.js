$(document).ready(function(){

  //슬라이드 메뉴(확장형)
  $('nav ul li').mouseenter(function(){
    $(this).childern('div.submenu').stop().slideDown();
  })
  $('nav ul li').mouseleave(function(){
    $(this).childern('div.submenu').stop().slideUp();
  })

  //이미지 슬라이드(faed)
  let now_img,next_img;
  setInterval(function(){
    now_img = $('figure ul li').eq(0);
    next_img = $('figure ul li').eq(2);
    next_img.addClass('active').css({opacity:0}).animate({opacity:1},1000,function(){
      $('figure ul').append(now_img);
      now_img.removeClass('active')
    })
  },3000);

  //popup
  $('article.notice ul li.pop').click(function(){
    $('div#popup').fadeIn();
  })
  $('div#popup div.close').click(function(){
    $('div#popup').fadeOut();
  })
})