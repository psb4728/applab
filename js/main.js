'use strict';

$(function() {

  // side dropdown submenu
  $('.submenu_btn').click(function() {
    $('.menu_wrap > ul .sub_down1').toggle('show');
    $('.menu_wrap ul li a .first_down_icon').toggleClass('rotate');
  });

  $('.menu_wrap > ul > li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });


  // all check box
  $('.all_check').click(function() {
    $('.checkbox').prop('checked', this.checked);
  });

  $('.checkbox').click(function() {
    if( $('.checkbox').length === $('.checkbox:checked').length ) {
      $('.all_check').prop('checked', true);
    } else {
      $('.all_check').prop('checked', false);
    }
  });


  // 답변서/이의접수 내용 클릭시 팝업창
  $('[data-menu-trigger]').click(function() {
    $('#' + $(this).attr('data-modal')).slideToggle(300);
  });

});


// toggle button click event
const hamBtn = document.querySelector('.ham_btn');
const submenuBtn = document.querySelector('.submenu_btn');

hamBtn.addEventListener('click', function() {
  const menuBar = document.querySelector('.side_menu');
  const popupBackground = document.querySelector('.popup_bg');
  
  menuBar.classList.toggle('show');
  popupBackground.classList.toggle('show');
});










