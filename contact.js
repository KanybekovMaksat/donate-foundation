
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
 