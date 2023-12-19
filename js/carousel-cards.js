function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-item');
    const currentSlide = carousel.querySelector(".carousel-item.active");

    // Obtiene el siguiente o anterior slide
    let nextSlide;
    if (direction === "next") {
        nextSlide = currentSlide.nextElementSibling;
        if (nextSlide === null) {
            nextSlide = slides[0];
        }
    } else if (direction === "prev") {
        nextSlide = currentSlide.previousElementSibling;
        if (nextSlide === null) {
            nextSlide = slides[slides.length - 1];
        }
    }

    if (nextSlide) {
        currentSlide.classList.remove("active");

        nextSlide.classList.add("active");
    }
}

const nextButton = document.querySelector(".arrow-next");
nextButton.addEventListener("click", () => moveCarousel("next"));

const prevButton = document.querySelector(".arrow-prev");
prevButton.addEventListener("click", () => moveCarousel("prev"));