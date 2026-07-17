/* ==========================================================================
   hero-carousel.js — Carrusel de la portada.
   Recorre HERO_IMAGES (definido en hero-images.js) en orden aleatorio,
   cambiando de foto cada pocos segundos con un fundido suave (CSS opacity).
   ========================================================================== */

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function initHeroCarousel() {
  const imgEl = document.getElementById("hero-carousel-img");
  if (!imgEl || typeof HERO_IMAGES === "undefined" || HERO_IMAGES.length === 0) return;

  const order = shuffle(HERO_IMAGES);
  let index = 0;
  const intervalMs = 4500;

  const showImage = (src) => {
    imgEl.classList.remove("opacity-100");
    imgEl.classList.add("opacity-0");
    // Esperamos a que termine el fundido de salida antes de cambiar el src
    setTimeout(() => {
      imgEl.src = src;
      imgEl.onload = () => {
        imgEl.classList.remove("opacity-0");
        imgEl.classList.add("opacity-100");
      };
    }, 300);
  };

  showImage(order[index]);

  if (order.length > 1) {
    setInterval(() => {
      index = (index + 1) % order.length;
      showImage(order[index]);
    }, intervalMs);
  }
}

document.addEventListener("DOMContentLoaded", initHeroCarousel);
