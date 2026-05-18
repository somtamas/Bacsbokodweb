
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
// kereső//

const pages = [
  { keys: ["ovoda", "gyermek", "iskola", "óvoda", "gyermekotthon", "gyerekek"], url: "../intezmenyek/Ovoda.html" },
  { keys: ["history", "története", "hatályos rendeletek", "adatvédelem", "telepules", "adat", "adatkezelés"], url: "../Bácsbokod adatai/telepulesunk.html" },
  { keys: ["tájház", "falu", "érdekesség", "múzeum"], url: "../intezmenyek/Falumuzeum.html" },
  { keys: ["levél", "posta"], url: "../intezmenyek/Posta.html" },
  { keys: ["templom", "vallás", "egyházi", "templomok"], url: "../intezmenyek/Templom.html" },
  { keys: ["háziorvos", "orvosi rendelő", "orvos", "rendelő"], url: "../intezmenyek/OrvosiRendelo.html" },
  { keys: ["kultúrközpont", "községház", "kultúrház", "kulturális"], url: "../intezmenyek/kulturhaz.html" },
];
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function kereso() {
  const value = normalize(document.getElementById("input").value);

  for (let page of pages) {
    if (page.keys.some(k => value.includes(normalize(k)))) {
      window.location.href = page.url;
      return;
    }
  }

  alert("Nincs találat!");
}












