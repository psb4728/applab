'use strict';

// navbar 스크롤링시 고정
document.addEventListener('scroll', function () {
  var navbar = document.querySelector('.header');
  var navbarHeight = navbar.offsetTop;

  if (window.pageYOffset > navbarHeight) {
    navbar.classList.add('stiky');
  } else {
    navbar.classList.remove('stiky');
  }
});


// gnb menu 클릭시 원하는 섹션으로 이동
var gnb = document.querySelector('.gnb');
gnb.addEventListener('click', function (event) {
  // 모바일 화면에서 nav-menu를 클릭시 active 클래스를 remove하기 위한 변수
  var navWrap = document.querySelector('.nav');
  var navbar = document.querySelector('.header');

  var target = event.target;
  var link = target.dataset.link;
  if (link == null) {
    return;
  }

  navbar.classList.remove('active');
  navWrap.classList.remove('active');
  gnb.classList.remove('active');
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  var scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// var gnb = document.querySelector('.header');
// gnb.addEventListener('click', function(e) {
//   // 모바일 화면에서 gnb를 클릭시 active 클래스를 reover하기 위한 변수
//   var gnb = document.querySelector('gnb');
//   var target = e.target;
//   var link = target.dataset.link;
//   if(link == null) {
//     return;
//   }

//   gnb.classList.remove('active');
//   gnb.classList.remove('active');
//   scrollIntoView(link);
// });

// function scrollIntoView(selector) {
//   var scrollTo = document.querySelector(selector);
//   scrollTo.scrollIntoView({ behavior: 'smooth' });
// }

// 
var appIcons = document.querySelector('.app-icon .icon-wrap'),
    desc = document.querySelector('.icon-description'),
    summaryTit = document.querySelector('.smart-tit .summary-title'),
    summaryDesc = document.querySelector('.smart-tit .summary-sub-description'),
    section = document.querySelector('.app-container').offsetTop - 400;

function showScroll() {
  var currentScroll = window.pageYOffset;
  if (section < currentScroll) {
    appIcons.classList.add('show');
    desc.classList.add('show');
    summaryTit.classList.add('show');
    summaryDesc.classList.add('show');
  } 
}
window.addEventListener('scroll', showScroll);


// toggle btn
var menuIcon = document.querySelector('.toggle-btn');

menuIcon.addEventListener('click', function () {
  var navbar = document.querySelector('.header');
  var navWrap = document.querySelector('.nav');
  navWrap.classList.toggle('active');
  navbar.classList.toggle('active');
});


// back to top
var btt = document.getElementById('back-to-top'),
  docElem = document.documentElement,
  offset,
  scrollPos,
  docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
if (docHeight !== 0) {
  offset = docHeight / 4;
}

window.addEventListener('scroll', function () {
  scrollPos = docElem.scrollTop;

  btt.className = (scrollPos > offset) ? 'visible' : '';
});

btt.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToTop();
});
function scrollToTop() {
  var scrollInterval = setInterval(function () {
    if (scrollPos !== 0) {
      window.scrollBy(0, -150);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
