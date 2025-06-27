/*Typewriter Segment*/
const h1El = document.getElementById("h1-el");
const h1Type = "Welcome to Meskotte Culinary Restaurant Experience";
let charIndex = 0;
const typingSpeed = 100;

function typeWriter() {
    if (charIndex < h1Type.length) {
        h1El.textContent += h1Type.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed)
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

/* Carousel Segment */
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 4000);

/* Form Confirmation Message */
const form = document.querySelector("form");
const message = document.getElementById("confirmation-message");

form.addEventListener("submit", function(){
    message.style.display = "block";
    form.reset();
    setTimeout(() => {
        message.style.display = "none"
    }, 5000);
});