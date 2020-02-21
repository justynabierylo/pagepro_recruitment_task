import 'core-js/stable'
import 'regenerator-runtime/runtime'
import svg4everybody from 'svg4everybody'
import Swiper from 'swiper'

svg4everybody()

const hamburger = document.querySelector('.c-burger')
const nav = document.querySelector('.c-main-nav__content')
const footer = document.querySelector('.l-footer')
const overlay = document.querySelector('.overlay')

// SIDE MENU MOBILE

const handleOpen = () => {
  nav.classList.add('c-main-nav--active')
  footer.classList.add('l-footer--active')
  overlay.classList.add('overlay--active')

  document.body.style.overflowY = 'hidden'
}

const handleClose = () => {
  nav.classList.remove('c-main-nav--active')
  footer.classList.remove('l-footer--active')
  overlay.classList.remove('overlay--active')

  document.body.style.overflowY = 'scroll'
}

hamburger.addEventListener('click', handleOpen)
overlay.addEventListener('click', handleClose)

// initialize Swiper
var mySwiper = new Swiper('#swiper-1', {
  speed: 600,
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {

    768: {
      spaceBetween: 20
    },

    1200: {
      spaceBetween: 30
    }
  }

})

var mySwiperSecond = new Swiper('#swiper-2', {
  speed: 600,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  slidesPerView: 1,
  slidesPerColumnFill: 'column',
  slidesPerColumn: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {

    768: {
      slidesPerColumnFill: 'row',

      slidesPerView: 2
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }

})
