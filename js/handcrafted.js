let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll(".handcrafted__wrap");
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = n;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function prevSlide() {
    showSlides(slideIndex - 1);
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

const testing = 5;
console.log(testing);