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
 })
})

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
