// DOMの読み込みが完了してから実行
document.addEventListener('DOMContentLoaded', () => {

  // --- hamburger menu ---
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.hamburger-list');
  const icon = document.querySelector('.icon');

  if (hamburgerBtn && mobileMenu && icon) {
    hamburgerBtn.addEventListener('click', () => {
      // アイコンのアニメーション用クラスのトグル
      icon.classList.toggle('close');
      
      // アクセシビリティ（aria-expanded）の切り替え
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
      
      // メニューの表示・非表示
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
    });
  }

  // --- scroll indicator ---
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const overviewIntro = document.getElementById('overview-intro');

  if (scrollIndicator && overviewIntro) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      const overviewIntroOffset = overviewIntro.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPos > overviewIntroOffset - windowHeight) {
        scrollIndicator.style.display = 'none';
      } else {
        scrollIndicator.style.display = 'flex'; // 元がdisplay:flexのため
      }
    });
  }

  // --- Slide ---
  const slides = document.querySelectorAll('.slide-image');
  if (slides.length > 0) {
    let currentSlide = 0;

    // 初期設定: 最初だけ表示してトランジションを付与
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
      slide.style.transition = 'opacity 0.5s ease';
    });

    // 画像をフェード切り替える関数
    const slideSwitch = () => {
      // 現在の画像をフェードアウト
      slides[currentSlide].style.opacity = '0';
      
      setTimeout(() => {
        slides[currentSlide].style.display = 'none';
        
        // 次の画像へ
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 次の画像をフェードイン
        slides[currentSlide].style.display = 'block';
        void slides[currentSlide].offsetWidth; // reflowを強制
        slides[currentSlide].style.opacity = '1';
      }, 500); // 0.5秒後に表示切替
    };

    // 5秒ごとに画像を切り替える
    setInterval(slideSwitch, 5000);
  }

  // --- gallery-btn ---
  const filterBtns = document.querySelectorAll('.gallery-btn-container [data-filter]');
  const galleryItems = document.querySelectorAll('.gallery [data-category]');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // アクティブクラスの切り替え
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // 表示・非表示の制御
        galleryItems.forEach(item => {
          item.style.transition = 'opacity 0.3s ease';
          item.style.opacity = '0';

          setTimeout(() => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block'; 
              item.classList.add('animate');
              void item.offsetWidth;
              item.style.opacity = '1';
            } else {
              item.style.display = 'none';
              item.classList.remove('animate');
            }
          }, 300);
        });
      });
    });
  }

  // --- map ---
  if (document.getElementById('TenjinHakata-map') != null) {
    var map = L.map('TenjinHakata-map');

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

    var popupContent1 = '<div style="max-width: 500px;"><img src="images/ksubldg2.jpg" alt="Image" style="width: 200px; height: auto;"></div>';
    L.marker([33.670655, 130.444721], { title: "Kyushu Sangyo University - Bldg.2" }).addTo(map)
      .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/ksu-bldg2.html">Kyushu Sangyo University - Bldg.2</a><br>' + popupContent1 + '</p>')
      .openPopup();

    var popupContent2 = '<div style="max-width: 500px;"><img src="images/tenjinbc.jpg" alt="Image" style="width: 200px; height: auto;"></div>';
    L.marker([33.591796023990646, 130.40053679829194],{title:"Tenjin Business Center"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/tenjinbc.html">Tenjin Business Center</a><br>' + popupContent2 + '</p>')
    .openPopup();

    var popupContent3 = '<div style="max-width: 500px;"><img src="images/acrosfukuoka.jpg" alt="Image" style="width: 200px; height: auto;"></div>';
    L.marker([33.59197591938904, 130.4032882343487],{title:"Acros Fukuoka"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/acrosfukuoka.html">Acros Fukuoka</a><br>' + popupContent3 + '</p>')
    .openPopup();

    var popupContent4 = '<div style="max-width: 500px;"><img src="images/aquahakata.jpg" alt="Image" style="width: 200px; height: auto;"></div>';
    L.marker([33.59254288492705, 130.40356137517006],{title:"AQUA HAKATA"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/aquahakata.html">AQUA HAKATA</a><br>' + popupContent4 + '</p>')
    .openPopup();

    var popupContent5 = '<div style="max-width: 500px;"><img src="images/solariatb.jpg" alt="Image" style="width: 200px; height: auto;"></div>';
    L.marker([33.5880221289339, 130.39915365055128],{title:"Solaria Terminal Building"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/solariatb.html">Solaria Terminal Building</a><br>' + popupContent5 + '</p>')
    .openPopup();

    var popupContent6 = '<div style="max-width: 500px;"><img src="images/fukuokadb.jpg" alt="Image" style="width: 200px; height: auto;"></div>';
    L.marker([33.591575065574865, 130.3986365156948],{title:"Fukuoka Diamond Building"}).addTo(map)
    .bindPopup('<p><a href="https://adamay-design.github.io/mutedscapes/fukuokadb.html">Fukuoka Diamond Building</a><br>' + popupContent6 + '</p>')
    .openPopup();

    map.setView([33.59126845237014, 130.40155185709037], 15.5);
  }
});

// --- lightbox (既存のjQueryプラグインを引き続き使う場合用) ---
if (typeof $ !== 'undefined' && typeof lightbox !== 'undefined') {
  $(function(){
    lightbox.option({
        'wrapAround': true,
        'albumLabel': ' %1 / total %2 ',
        'showImageNumberLabel': true,
        'alwaysShowNavOnTouchDevices': true,
        'disableScrolling': true  // ★この行が必須です
    });
  });
}