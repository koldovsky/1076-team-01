const slides = [
    '<div class="wrapper"><img src="img/about-gallery-1.jpg" alt="1"></div>',
    '<div class="wrapper"><img src="img/about-gallery-2.jpg" alt="2"></div>',
    '<div class="wrapper"><img src="img/about-gallery-3.jpg" alt="3"></div>',
    '<div class="wrapper"><img src="img/about-gallery-4.jpg" alt="4"></div>',
    '<div class="wrapper"><img src="img/about-gallery-5.jpg" alt="5"></div>',
    '<div class="wrapper"><img src="img/about-gallery-6.jpg" alt="6"></div>',
    '<div class="wrapper"><img src="img/about-gallery-7.jpg" alt="7"></div>',
    '<div class="wrapper"><img src="img/about-gallery-8.jpg" alt="8"></div>'
]
const nxtButoon = document.querySelector(".nxt");
const prvButoon = document.querySelector(".prv");


let currentSlideIndex = 0;


function renderSlid() {
    const slideContainer = document.querySelector('.carousel__box');
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia("(min-width: 550px)").matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        slideContainer.innerHTML += slides[secondSlideIndex];
        if (window.matchMedia("(min-width: 900px)").matches) {
            const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
            slideContainer.innerHTML += slides[thirdSlideIndex];
        }
    }
}

function nextSlide() {
    currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    renderSlid();
}

function prevSlide() {
    currentSlideIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex -1;
    renderSlid();
}


renderSlid();
nxtButoon.addEventListener('click', nextSlide);
prvButoon.addEventListener('click', prevSlide);
window.addEventListener('resize', renderSlid);