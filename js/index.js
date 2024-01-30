$(document).ready(function(){
  $('.restaurant-slider__wrap').slick({
      centerMode: true,
      slidesToShow: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});
$(".burger-wrap").click(function () {
$(".header-wrap__navigation").toggleClass("header-wrap__navigation--open");
$(".burger").toggleClass('burger--close');
});

const headers = document.querySelectorAll("[data-name='m-category']")

headers.forEach(function (item){
  item.addEventListener('click', function(){
    this.nextElementSibling.classList.toggle('wrapper-left__description--open')
  })
})

const sideLeftB = document.querySelector('.wrapper-left-burger');
const sideLeft = document.querySelector('.wrapper-left');
const overlay = document.querySelector('.overlay');


// Повісьте обробник події на весь документ
document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.wrapper-left'); // Замініть 'yourSidebarId' на реальний ідентифікатор вашого сайдбару
  const sideLeftB = document.querySelector('.wrapper-left-burger'); // Замініть 'sideLeftB' на реальний ідентифікатор вашого елементу sideLeftB
  const overlay = document.querySelector('.overlay');
  // Перевірте, чи клік відбувся поза сайдбаром та кнопкою sideLeftB
  if (event.target !== sidebar && !sidebar.contains(event.target) && event.target !== sideLeftB) {
    // Клік відбувся поза сайдбаром та кнопкою sideLeftB, тому закриваємо сайдбар
    sidebar.classList.remove('wrapper-left--open');
    sideLeftB.classList.remove('wrapper-left-burger--open');
    overlay.style.display = 'none';
    // Додайте інші необхідні дії, якщо є
  }
});

// Повісьте обробник події на кнопку sideLeftB для перешкодження розповсюдженню події
sideLeftB.addEventListener('click', function(event) {
  event.stopPropagation(); // Зупиніть подальше розповсюдження події, щоб вона не доходила до document
  // Ваш поточний код тут...
  OpenSide(); 
});

function OpenSide(){
  sideLeft.classList.toggle('wrapper-left--open');
  sideLeftB.classList.toggle('wrapper-left-burger--open');
  overlay.style.display = sideLeft.classList.contains('wrapper-left--open') ? 'block' : 'none';
}










const sideRightB = document.querySelector('.wrapper-right-burger');
const right = document.querySelector('.wrapper-right');
const overlayR = document.querySelector('.overlayR');


// Повісьте обробник події на весь документ
document.addEventListener('click', function(event) {
  const sidebarR = document.querySelector('.wrapper-right'); // Замініть 'yourSidebarId' на реальний ідентифікатор вашого сайдбару
  const sideRightB = document.querySelector('.wrapper-right-burger'); // Замініть 'sideLeftB' на реальний ідентифікатор вашого елементу sideLeftB
  const overlays= document.querySelector('.overlayR');
  // Перевірте, чи клік відбувся поза сайдбаром та кнопкою sideLeftB
  if (event.target !== sidebarR && !sidebarR.contains(event.target) && event.target !== sideRightB) {
    // Клік відбувся поза сайдбаром та кнопкою sideLeftB, тому закриваємо сайдбар
    sidebarR.classList.remove('wrapper-right--open');
    sideRightB.classList.remove('wrapper-right-burger--open');
    overlayR.style.display = 'none';
    // Додайте інші необхідні дії, якщо є
  }
});

// Повісьте обробник події на кнопку sideLeftB для перешкодження розповсюдженню події
sideRightB.addEventListener('click', function(event) {
  event.stopPropagation(); // Зупиніть подальше розповсюдження події, щоб вона не доходила до document
  // Ваш поточний код тут...
  OpenSideR(); 
});

function OpenSideR(){
  right.classList.toggle('wrapper-right--open');
  sideRightB.classList.toggle('wrapper-right-burger--open');
  overlayR.style.display = right.classList.contains('wrapper-right--open') ? 'block' : 'none';
}





















