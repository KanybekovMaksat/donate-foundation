const selectSingle = document.querySelectorAll('.__select');
const selectSingle_title = document.querySelectorAll('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');

selectSingle.forEach((item, index) => {
  selectSingle_title[index].addEventListener('click', () => {
    if ('active' === item.getAttribute('data-state')) {
      item.setAttribute('data-state', '');
    } else {
      item.setAttribute('data-state', 'active');
    }
  });
});


// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}





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




//youtube script
var tag = document.createElement('script');
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

window.onYouTubeIframeAPIReady = function () {
player = new YT.Player('moreaus__video-player', {
    height: '244',
    width: '434',
    videoId: 'iogcY_4xGjo',  // youtube video id
    playerVars: {
        'autoplay': 0,
        'rel': 0,
        'showinfo': 0
    },
    events: {
        'onStateChange': onPlayerStateChange
    }
});
};

var p = document.getElementById("moreaus__video-player");
p.style.display = "none";

var t = document.querySelector(".thumbnail");
console.log(t);
t.src = "../../images/youtube-video.png";

function onPlayerStateChange(event) {
if (event.data === YT.PlayerState.ENDED) {
    document.querySelector('.moreaus__video-play').style.display = "block";
}
}

document.querySelector('.moreaus__video-play').addEventListener('click', function () {
 this.style.display = "none";
document.getElementById("moreaus__video-player").style.display = "block";
document.getElementById("moreaus__video-thumbnail_container").style.display = "none";
player.playVideo();
});

