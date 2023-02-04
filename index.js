const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");


// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
       burgerMenu.classList.toggle("is-active");
       navbarMenu.classList.toggle("is-active");
    });
 }
 

 // Close Navbar Menu on Click Menu Links
 document.querySelectorAll(".header__menu-link").forEach((link) => {
    link.addEventListener("click", () => {
       burgerMenu.classList.remove("is-active");
       navbarMenu.classList.remove("is-active");
    });
 });
 

 // Change Header Background on Scrolling
 window.addEventListener("scroll", () => {
    if (this.scrollY >= 95) {
       headerMenu.classList.add("on-scroll");
    } else {
       headerMenu.classList.remove("on-scroll");
    }
 });
 

 // Сокращение текста

function changeText(selector, maxlength) {
   for (let el of document.querySelectorAll(selector)) {
     let txt = el.textContent; 
     if (txt.length > maxlength) {
       el.innerHTML = `<span title="${txt}">${txt.slice(0, maxlength)}...</span>`;
     }
   }
 }


 changeText('.blog__card-title', 55);

 changeText('.slider__card-text', 290);

 changeText('.blog__card-text', 120);


//  var slideIndex = 1;
//  showSlides(slideIndex);
 
//  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
//  function plusSlide() {
//      showSlides(slideIndex += 1);
//  }
 
//  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
//  function minusSlide() {
//      showSlides(slideIndex -= 1);  
//  }
 
//  /* Устанавливает текущий слайд */
//  function currentSlide(n) {
//      showSlides(slideIndex = n);
//  }
 
//  /* Основная функция слайдера */
//  function showSlides(n) {
//      let i;
//      let slides = document.getElementsByClassName(" slider__card");
//    //   let dots = document.getElementsByClassName("slider-dots_item");
//      if (n > slides.length) {
//        slideIndex = 1
//      }
//      if (n < 1) {
//          slideIndex = slides.length
//      }
//      for (i = 0; i < slides.length; i++) {
//          slides[i].style.display = "none";
//      }
//    //   for (i = 0; i < dots.length; i++) {
//    //       dots[i].className = dots[i].className.replace(" active", "");
//    //   }
//      slides[slideIndex - 1].style.display = "block";
//    //   dots[slideIndex - 1].className += " active";
//  }
 

 
const helpBtn = document.querySelector('.help')
const whatsapp = document.getElementById('whatsapp')
const telegram = document.getElementById('telegram')
const messageAll = document.getElementById('help-open')
const messageClose = document.getElementById('help-close')



helpBtn.addEventListener('click', () => {
  whatsapp.classList.toggle('whatsapp-active');
  telegram.classList.toggle('telegram-active');
  messageClose.classList.toggle('help-close__active');
  messageAll.classList.toggle('message-all__active');
})

