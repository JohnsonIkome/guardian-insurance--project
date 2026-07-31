'use strict'

// Mobile Navigation
const navBtn = document.querySelector('.mobile-nav-btn')
const navEl = document.querySelector('.navigation')
const links = document.querySelectorAll('.nav-link')
const mobIcon = document.querySelector('.nav-btn-icon')

navBtn.addEventListener('click', function () {
 navEl.classList.toggle('show-nav')
 navBtn.classList.toggle('show-nav')
})

links.forEach((link) => {
 link.addEventListener('click', function () {
  navEl.classList.remove('show-nav')
  navBtn.classList.toggle('show-nav')
 })
})

/*........... slider.............*/

const slides = document.querySelectorAll('.srv-slide')
const btnLeft = document.querySelector('.srv-btn__left')
const btnRight = document.querySelector('.srv-btn__right')

let curSlide = 0
let maxSlide = slides.length

function goToSlide(slide) {
 slides.forEach(
  (s, i) => (s.style.transform = `translate(${100 * (i - slide)}%)`)
 )
}

const nextSlide = function () {
 if (curSlide === maxSlide - 1) {
  curSlide = 0
 } else {
  curSlide++
 }
 goToSlide(curSlide)
}

const prevSlide = function () {
 if (curSlide === 0) {
  curSlide = maxSlide - 1
 } else {
  curSlide--
 }
 goToSlide(curSlide)
}

goToSlide(0)

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)
/*.............................*/

/*........... Q-A SECTION.............*/
const cards = document.querySelectorAll('.Q-A-card')

cards.forEach((card) => {
 const desc = card.querySelector('.Q-A_description')
 const icon = card.querySelector('.Q-A-icon')

 card.addEventListener('click', (e) => {
  // Prevent closing when clicking inside the description text
  if (e.target.classList.contains('Q-A_description')) return

  const isOpen = desc.classList.contains('show')

  // Close all cards
  cards.forEach((otherCard) => {
   const otherDesc = otherCard.querySelector('.Q-A_description')
   const otherIcon = otherCard.querySelector('.Q-A-icon')

   otherDesc.classList.remove('show')
   otherIcon.setAttribute('name', 'eye-off')
  })

  // Toggle clicked card
  if (!isOpen) {
   desc.classList.add('show')
   icon.setAttribute('name', 'eye')
  } else {
   desc.classList.remove('show')
   icon.setAttribute('name', 'eye-off')
  }
 })
})

///////////////////////////////////////////////
// // modal
// const readMoreLink = document.querySelectorAll('.read-more-link')
// const overlay = document.querySelector('.overlay')
// const closeModalEl = document.querySelector('.close-modal')
// const modal = document.querySelector('.modal')

// const addEvent = function () {
//  overlay.classList.add('hidden')
//  modal.classList.add('hidden')
// }

// readMoreLink.forEach((link) => {
//  link.addEventListener('click', function (e) {
//   console.log(e)
//   e.preventDefault()
//   modal.classList.remove('hidden')
//   overlay.classList.remove('hidden')
//  })
// })

// closeModalEl.addEventListener('click', addEvent)

// document.querySelector('.overlay').addEventListener('click', addEvent)

// document.addEventListener('keydown', function (e) {
//  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//   addEvent()
//  }
// })
