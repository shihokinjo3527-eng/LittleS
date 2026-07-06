
// -----------------------------------
// 1. HTML要素を取得する
// -----------------------------------
//const productIdSpan = document.getElementById("productId");
//const productNameSpan = document.getElementById("productName");
//const priceSpan = document.getElementById("price");
// const quantityInput = document.getElementById("quantity");
const buyButton = document.querySelectorAll(".productImage");
const result = document.getElementById("result");

// -----------------------------------
// 2. localStorage に保存するときのキー名
// -----------------------------------
const STORAGE_KEY = "goodsOrder";

// -----------------------------------
// 3. JSONから読み込んだ商品情報を入れておく変数(ここまではやる)
// -----------------------------------
let productDataFromJson = null;

// -----------------------------------
// 4. JSONファイルを読み込む（丸コピー）
// -----------------------------------
// goods.json を fetch で取得します
fetch("goods.json")
    .then(function (response) {
        // ファイルの取得に失敗した場合
        if (!response.ok) {
            throw new Error("JSONファイルの読み込みに失敗しました");
        }

        // JSON形式として読み込む
        return response.json();
    })
    .then(function (products) {
        // 今回は1件目の商品を使う
        const product = products[0,1];

        // 読み込んだ商品情報を変数に保存しておく
        productDataFromJson = products;

        // 画面に商品情報を表示する
        // productIdSpan.textContent = product.productId;
        // productNameSpan.textContent = product.productName;
        // priceSpan.textContent = product.price;
    })
    .catch(function (error) {
        console.error(error);
        result.textContent = "商品情報の読み込みに失敗しました";
    });

// -----------------------------------
// 5. 購入ボタンが押されたときの処理
// -----------------------------------
buyButton.forEach(button => {button.addEventListener("click", function () {
    // JSONの読み込みがまだ終わっていない場合
    if (!productDataFromJson) {
        result.textContent = "商品情報をまだ読み込み中です";
        return;
    }

    // 入力された個数を取得する
    // const quantity = quantityInput.value;

    // -----------------------------------
    // 6. 入力チェック
    // -----------------------------------
    // if (quantity === "" || Number(quantity) <= 0) {
    //     result.textContent = "1以上の個数を入力してください";
    //     return;
    // }

    const index = this.getAttribute("data-index");
    const selectedProduct = productDataFromJson[index];

    // -----------------------------------
    // 7. localStorage に保存するデータを作る
    // -----------------------------------
    const goodsOrder = {
      productId: selectedProduct.productId,
      productName: selectedProduct.productName,
      price: selectedProduct.price,
      image: selectedProduct.image,
      quantity: 1
    };

    // -----------------------------------
    // 8. localStorage に保存する
    // -----------------------------------
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goodsOrder));

    // 保存できたことを画面に表示
    //result.textContent = "保存しました: " + JSON.stringify(goodsOrder);

    // -----------------------------------
    // 9. カート画面へ移動する
    // -----------------------------------
    window.location.href = "cart.html";
});
});



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
  loop: false,
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

//フェードイン
$(function() {
  // スクロールイベント
  $(window).scroll(function() {
    // スクロール量を取得
    const scroll = $(window).scrollTop();
    // 画面の高さを取得
    const windowHeight = $(window).height();

    $(".s__box").each(function() {
      // それぞれの.boxまでの高さを取得
      const boxHeight = $(this).offset().top;
      // 条件式に合致する場合はis-activeを付与
      if(scroll + windowHeight > boxHeight) {
        $(this).addClass("box-active");
      }
    });
  });
});


$(function(){

   var $setElm = $('.container'),
    fadeSpeed = 500,
    switchDelay = 2000;

    $setElm.each(function(){
      var targetObj = $(this);
      var findUl = targetObj.find('.slider-image__wrapper');
      var findLi = targetObj.find('.slider-image');
      var findLiFirst = targetObj.find('.slider-image:first');

      findLi.css({display:'block',opacity:'0',zIndex:'99'});
      findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);
        setInterval(function(){

          findUl.find('.slider-image:first-child').animate({opacity:'0'},fadeSpeed).next('.slider-image').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});

        },switchDelay);

    });

});
