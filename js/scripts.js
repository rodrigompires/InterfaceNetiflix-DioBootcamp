'use strict'

const close = document.querySelector('.fa-circle-xmark');
let video = document.getElementById('video');
let iFrame = document.getElementById('caixa');
let configs = "?autoplay=1&mute=0&controls=1"
let nVideo

document.querySelectorAll('.box-filme').forEach((el) =>
  el.addEventListener('click', (event) => {

    
    
    let n = event.target.id;
    console.log(n)

    switch (n) {
      case 'um':
        nVideo = "PJza3ZaFeAU"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;
      
      case 'dois':
        nVideo =  "PqpnpPAaA48"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        
        break;

      case 'tres':
        nVideo = "52NWGJXJdb4"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'quatro':
        nVideo = "2KnZac176Hs"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'cinco':
        nVideo = "kYzz0FSgpSU"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'seis':
        nVideo = "4Aif1qEB_JU"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'sete':
        nVideo = "uQQDZkqJMP8"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'oito':
        nVideo = "EIc_wJtm6AU"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'nove':
        nVideo = "0v6MO0EB7UY"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1
        break;

      case 'dez':
        nVideo = "-aZPYxQGViQ"
        iFrame.src = "https://www.youtube.com/embed/" + nVideo + configs;
        video.style.opacity = 1;
        
    }
  })
);




close.addEventListener('click', closeVideo);

function closeVideo () {
  video.style.opacity = 0
  iFrame.setAttribute('src', iFrame.getAttribute('1'))
}




let time = 3000;
let currentIndex = 0;
const images = document.querySelectorAll('#slider img');
let maxIndex = images.length


function nextImage () {

  images[currentIndex].classList.remove('selected');

  currentIndex++
  if (currentIndex >= maxIndex ) {
    currentIndex = 0
  }
  images[currentIndex].classList.add('selected');
}

function start () {
  setInterval (() => {
    nextImage();
  }, time);
}

window.addEventListener('load', start);
