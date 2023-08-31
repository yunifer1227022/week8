import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  enabled:false,
  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints:{
    768:{
      slidesPerView: 2,
      enabled: false
    },
    992:{
      slidesPerView: 3,
      enabled: true
    }
  },
  // 使 swiper 可以使用滑鼠滾輪捲動
  mousewheel: true,
});