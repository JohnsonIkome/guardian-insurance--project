'use strict'

const container = document.querySelector('.best-services-imgs')
const buttons = document.querySelectorAll('.service-nav-btn')
const revContainer = document.querySelector('.latest-aside-container')
const revButtons = document.querySelectorAll('.customer-btn')

buttons[0].addEventListener('click', function () {
 container.scrollLeft -= 350
})

buttons[1].addEventListener('click', () => {
 container.scrollLeft += 350
})

revButtons[0].addEventListener('click', function () {
 revContainer.scrollLeft -= 350
})

revButtons[1].addEventListener('click', () => {
 revContainer.scrollLeft += 350
})

// Modal

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
