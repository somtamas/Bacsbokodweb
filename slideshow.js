let slideIndex = 0;
let slideTimer;
showSlides();

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (typeof n === "number") {
    slideIndex = n;
  } else {
    slideIndex += 1;
  }

  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots.length) {
    dots[slideIndex - 1].className += " active";
  }

  slideTimer = setTimeout(showSlides, 5000);
}