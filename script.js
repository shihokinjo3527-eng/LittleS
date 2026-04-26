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