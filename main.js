
let modalSlideIndex = 1;

function openModal(startIndex = 1) {
  document.getElementById("myModal").style.display = "block";
  modalSlideIndex = startIndex;
  showModalSlides(modalSlideIndex);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusModalSlides(n) {
  showModalSlides(modalSlideIndex += n);
}

function showModalSlides(n) {
  const slides = document.querySelectorAll("#myModal .modalSlide");
  if (slides.length === 0) {
    return;
  }
  if (n > slides.length) {
    modalSlideIndex = 1;
  } else if (n < 1) {
    modalSlideIndex = slides.length;
  } else {
    modalSlideIndex = n;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[modalSlideIndex - 1].style.display = "block";
}



