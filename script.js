//アコーディオン
$('.accordion-header').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});

//タブ
$(function(){
  $('.tab').on('click',function(){
    var idx=$('.tab').index(this);
    $(this).addClass('active').siblings('.tab').removeClass('active');
    $(this).closest('.tab-area').next('.panel-area').find('.panel').removeClass('active');
    $('.panel').eq(idx).addClass('active');
  });
});

//スワイパー
const swiper = new Swiper(".swiper", {
  loop: true,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // スクロールバー
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//フェードイン
$(function() {
  // スクロールイベント
  $(window).scroll(function() {
    // スクロール量を取得
    const scroll = $(window).scrollTop();
    // 画面の高さを取得
    const windowHeight = $(window).height();

    $(".about__inner").each(function() {
      // それぞれの.boxまでの高さを取得
      const boxHeight = $(this).offset().top;
      // 条件式に合致する場合はis-activeを付与
      if(scroll + windowHeight > boxHeight) {
        $(this).addClass("is-active");
      }
    });
  });
});