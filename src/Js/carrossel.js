const carrossel = document.querySelector('.carrossel');
const noticias = document.querySelectorAll('.Noticias');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function nextNews() {
    noticias[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % noticias.length;
    noticias[currentIndex].style.transform = 'translateX(0)';
}

function prevNews() {
    noticias[currentIndex].style.transform = 'translateX(100%)';
    currentIndex = (currentIndex - 1 + noticias.length) % noticias.length;
    noticias[currentIndex].style.transform = 'translateX(0)';
}

nextButton.addEventListener('click', nextNews);
prevButton.addEventListener('click', prevNews);

setInterval(nextNews, 4000);
