// hamburger menu　//////////////////////

$(function () {

  $('#hamburger').on('click', function(){
    $('.icon').toggleClass('close');
    $('.hamburger-list').slideToggle();
  });

});


$(document).ready(function() {
  var scrollIndicator = $('.scroll-indicator');
  var overviewIntro = $('#overview-intro');
  var windowHeight = $(window).height();

  $(window).on('scroll', function() {
    var scrollPos = $(this).scrollTop();
    var overviewIntroOffset = overviewIntro.offset().top;

    if (scrollPos > overviewIntroOffset - windowHeight) {
      scrollIndicator.hide();
    } else {
      scrollIndicator.show();
    }
  });
});




// Slide //////////////////////////////////////////

$(function () {
  
  // 初期設定
  $(".slide-image:first").show();

  // 画像をフェード切り替える関数
  function slideSwitch() {
      var $active = $(".slide-image:visible");

      if ($active.length === 0) $active = $(".slide-image:last");

      var $next = $active.next(".slide-image").length ? $active.next(".slide-image") : $(".slide-image:first");

      $active.fadeOut(function () {
          $next.fadeIn();
      });
  }

  // 3秒ごとに画像を切り替える
  setInterval(slideSwitch, 5000);

});



// lightbox //////////////////////////////////////////

$(function(){

  // lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照
  lightbox.option({
      'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
      'albumLabel': ' %1 / total %2 ',//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
      'showImageNumberLabel': true,  //false の場合、現在の画像番号とセット内の画像の総数を示すテキスト (例: "image 2 of 4") が非表示にできる
      'alwaysShowNavOnTouchDevices':  true //true時、スマホ閲覧で左右の矢印を常に表示
  });

});


// gallery-btn //////////////////////////////////////////

$(function(){

  // gallery-btn-container ////
  var $btn = $('.gallery-btn-container [data-filter]'),
      $list = $('.gallery [data-category]');
    
  $btn.on('click', function(e) {
    e.preventDefault();
        
    var $btnTxt = $(this).attr('data-filter');
        
    $btn.removeClass('active'); // すべてのボタンから active クラスを削除
    $(this).addClass('active'); // クリックされたボタンに active クラスを追加
        
    if ($btnTxt == 'all'){
      $list.fadeOut().promise().done(function() {
        $list.addClass('animate').fadeIn();
      });
    } else {
      $list.fadeOut().promise().done(function() {
        $list.filter('[data-category = "' + $btnTxt + '"]').addClass('animate').fadeIn();
      });
    }
  });

});


// map ///////////////////////////////////////////////////////

$(function(){

  if( document.getElementById('map') != null){   // mapが存在する場合は・・

    var map = L.map('map');

    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var popupContent = '<div style="max-width: 500px;"><img src="images/ksubldg2.jpg" alt="Image" style="width: 225px; height: auto;"></div>';
    L.marker([33.670655, 130.444721],{title:"Kyushu Sangyo University - Bldg.2"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/ksu-bldg2.html">Kyushu Sangyo University - Bldg.2</a><br>' + popupContent + '</p>')
    .openPopup();

    var popupContent = '<div style="max-width: 500px;"><img src="images/tenjinbc.jpg" alt="Image" style="width: 225px; height: auto;"></div>';
    L.marker([33.591796023990646, 130.40053679829194],{title:"Tenjin Business Center"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/tenjin-bc.html">Tenjin Business Center</a><br>' + popupContent + '</p>')
    .openPopup();

    var popupContent = '<div style="max-width: 500px;"><img src="images/acrosfukuoka.jpg" alt="Image" style="width: 225px; height: auto;"></div>';
    L.marker([33.59197591938904, 130.4032882343487],{title:"Acros Fukuoka"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/acrosfukuoka.html">Acros Fukuoka</a><br>' + popupContent + '</p>')
    .openPopup();

    var popupContent = '<div style="max-width: 500px;"><img src="images/aquahakata.jpg" alt="Image" style="width: 225px; height: auto;"></div>';
    L.marker([33.59254288492705, 130.40356137517006],{title:"AQUA HAKATA"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/aquahakata.html">AQUA HAKATA</a><br>' + popupContent + '</p>')
    .openPopup();

    var popupContent = '<div style="max-width: 500px;"><img src="images/solariatb.jpg" alt="Image" style="width: 225px; height: auto;"></div>';
    L.marker([33.5880221289339, 130.39915365055128],{title:"Solaria Terminal Building"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/solariatb.html">Solaria Terminal Building</a><br>' + popupContent + '</p>')
    .openPopup();

    var popupContent = '<div style="max-width: 500px;"><img src="images/fukuoka-db.jpg" alt="Image" style="width: 225px; height: auto;"></div>';
    L.marker([33.591575065574865, 130.3986365156948],{title:"Fukuoka Diamond Building"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/fukuokadb.html">Fukuoka Diamond Building</a><br>' + popupContent + '</p>')
    .openPopup();

    map.setView([33.591796023, 130.400936798], 15.5);

  }

});