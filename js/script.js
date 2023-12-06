


//timelapsのjs
jQuery(function($){
   var bg_movie = document.getElementById("background-video");
    bg_movie.controls = false;
   var tl_movie = document.getElementById("timelapse-ditails");
    tl_movie.controls = false;
});


window.onload = function() {

  $(function(){
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
  
  

  // lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

  lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 ',//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
    'showImageNumberLabel': false,  //false の場合、現在の画像番号とセット内の画像の総数を示すテキスト (例: "image 2 of 4") が非表示にできる
    'alwaysShowNavOnTouchDevices':  true //true時、スマホ閲覧で左右の矢印を常に表示
  });


  // map が存在する場合の処理

  var obj = document.getElementById('map');

  if(obj==null){

     // Do Nothing

  }else{

    var map = L.map('map');
    map.setView([33.591796023990646, 130.40053679829194], 14);

    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    L.marker([33.670655, 130.444721],{title:"九州産業大学 2号館"}).addTo(map)
    .bindPopup('<p>九州産業大学 2号館</p>')
    .openPopup();
    L.marker([33.591796023990646, 130.40053679829194],{title:"天神ビジネスセンター"}).addTo(map)
    .bindPopup('<p>天神ビジネスセンター</p>')
    .openPopup();
    L.marker([33.59197591938904, 130.4032882343487],{title:"アクロス福岡"}).addTo(map)
    .bindPopup('<p>アクロス福岡</p>')
    .openPopup();
    L.marker([33.59254288492705, 130.40356137517006],{title:"AQUA HAKATA"}).addTo(map)
    .bindPopup('<p>AQUA HAKATA</p>')
    .openPopup();
    L.marker([33.5880221289339, 130.39915365055128],{title:"ソラリアターミナルビル"}).addTo(map)
    .bindPopup('<p>ソラリアターミナルビル</p>')
    .openPopup();
    L.marker([33.591575065574865, 130.3986365156948],{title:"福岡ダイヤモンドビル"}).addTo(map)
    .bindPopup('<p>福岡ダイヤモンドビル</p>')
    .openPopup();
  }

    // nothing to do

}

// window.onload = function() {

  // div要素のid
  // var map = L.map('map');

  // 中心の緯度・経度とズームレベルを指定
  // map.setView([35, 136], 5);

  //表示するタイルレイヤのURLとAttributionコントロールを設定
//   L.tileLayer(
//     // OpenStreetMap を利用
//     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);

//   /* 地理院タイル を利用する場合
//   L.tileLayer(
//      'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',{
//         attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
//   }).addTo(map);
//   */

//   L.marker([ 33.66983627668292, 130.44487416744232 ] ).addTo(map)
//     .bindPopup('Kyushu Sangyo University')
//     .openPopup();

// }