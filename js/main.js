'use strict';

// navbar 스크롤링시 고정
document.addEventListener('scroll', function() {
  var navbar = document.querySelector('.header');
  var navbarHeight = navbar.offsetTop;

  if(window.pageYOffset > navbarHeight) {
    navbar.classList.add('stiky');
  } else {
    navbar.classList.remove('stiky');
  }
});


// toggle btn
var menuIcon = document.querySelector('.toggle-btn');

menuIcon.addEventListener('click', function() {
  var navbar = document.querySelector('.header');
  var navWrap = document.querySelector('.nav');
  navWrap.classList.toggle('active');
  navbar.classList.toggle('active');
});