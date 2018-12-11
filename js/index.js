//轮播图插件
var swiper = new Swiper('.swiper-container', {
  autoplay:true,
  loop : true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//美味推荐里面的淡入淡出效果
  (function(){
      $(".fade").each(function(){
      if($(this).children().eq(0).attr("src") != $(this).children().eq(1).attr("src")){
          $(this).hover(function(){ 
              $(this).children().eq(1).fadeOut("0.3");
              $(this).children().eq(0).fadeIn("0.3");
          },function(){
              $(this).children().eq(1).fadeIn("0.3");
              $(this).children().eq(0).fadeOut("0.3");
              })
          }
      })
  })()

//侧边栏回到顶部
  $(function(){
  $(document).scrollTop(0);
  $(document).scroll(function(){
    if($(this).scrollTop() >= 220){
      $("#fixed").css("display","block");				
    }else{
      $("#fixed").css("display","none");
    }
  })
  $(".fff4").click(function(){
    $(document).scrollTop(0);
  })
})

