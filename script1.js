'use strict'

// Mobile Navigation
const btnMobileEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const linksBtn = document.querySelectorAll('.nav-link')

btnMobileEl.addEventListener('click', function () {
 headerEl.classList.toggle('nav-open')
})

linksBtn.forEach((link) => {
 link.addEventListener('click', function () {
  headerEl.classList.remove('nav-open')
 })
})

// modal
const readMoreLink = document.querySelectorAll('.read-more-link')
const overlay = document.querySelector('.overlay')
const closeModalEl = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')

const addEvent = function () {
 overlay.classList.add('hidden')
 modal.classList.add('hidden')
}

readMoreLink.forEach((link) => {
 link.addEventListener('click', function (e) {
  console.log(e)
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
 })
})

closeModalEl.addEventListener('click', addEvent)

document.querySelector('.overlay').addEventListener('click', addEvent)

document.addEventListener('keydown', function (e) {
 if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
  addEvent()
 }
})
