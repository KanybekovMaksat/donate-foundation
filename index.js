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

changeText('.category__bottom-subtitle', 200);

changeText('.category__bottom-subtitle', 240);

changeText('.intro__subtitle', 129)


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



var input = document.getElementById("phone");

input.addEventListener("input", function() {
  var val = this.value.replace(/\D/g, '');
  if (val.length >= 3) {
    val = '(' + val.substring(0, 3) + ') ' + val.substring(3);
  }
  if (val.length >= 6) {
    val = val.substring(0, 6) + '-' + val.substring(6);
  }
  if (val.length >= 10) {
    val = '+' + val.substring(0, 10) + ' ' + val.substring(10);
  }
  this.value = val;
});


