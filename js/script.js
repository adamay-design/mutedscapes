//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
  })


// bodyタグを取得
const documentBody = document.querySelector('body');
// body直下に上部のカーテン
var newElement1 = document.createElement("div");
newElement1.setAttribute("class","topCurtainbg");
documentBody.prepend(newElement1);
// body直下に下部のカーテン
var newElement2 = document.createElement("div");
newElement2.setAttribute("class","bottomCurtainbg");
documentBody.prepend(newElement2);


// bodyタグにclassを付与
documentBody.classList.add('pageOn');

// 1.5秒経ったらオーバーレイ非表示
setTimeout(function(){ 
    newElement1.style.display = "none";
    newElement2.style.display = "none";
  }, 1500);

// ページ遷移時にフェードアウト
window.addEventListener("beforeunload", () => {
  documentBody.classList.add('fadeout');
  setTimeout(function(){ 
    documentBody.style.display = "none";
  }, 1000);
}, false);

let lat = 35.7100069; // 緯度
let lng = 139.8108103; // 経度
let zoom = 16; // ズームレベル

let map = L.map("map"); // 地図の生成
map.setView([lat, lng], zoom); // 緯度経度、ズームレベルを設定する

// タイルレイヤを生成し、地図に追加する
// 今回はOpenStreetMapを表示する
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
  {
    // 著作物の表示
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);