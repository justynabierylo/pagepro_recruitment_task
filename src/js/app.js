import 'core-js/stable'
import 'regenerator-runtime/runtime'
import svg4everybody from 'svg4everybody'
import Swiper from 'swiper'

svg4everybody()

const hamburger = document.querySelector('.c-burger')
const nav = document.querySelector('.c-main-nav__content')

const handleClick = () => {
  hamburger.classList.toggle('burger--active')
  nav.classList.toggle('main-nav--active')
}

hamburger.addEventListener('click', handleClick)

// initialize Swiper
var mySwiper = new Swiper('.swiper-container', {
  speed: 600,
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }

})

console.log(mySwiper)
