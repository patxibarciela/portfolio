function renderTestimonial(index) {
  const quoteEl = document.getElementById("testimonial-quote");
  const nameEl = document.getElementById("testimonial-name");
  const roleEl = document.getElementById("testimonial-role");
  if (!quoteEl || !nameEl || !roleEl) return;

  const item = TESTIMONIALS[index];

  quoteEl.classList.add("opacity-0");
  setTimeout(() => {
    quoteEl.textContent = `${item.quote}"`;
    nameEl.textContent = item.name;
    roleEl.textContent = item.role;
    quoteEl.classList.remove("opacity-0");
  }, 200);
}

function initTestimonialsCarousel() {
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  if (
    !prevBtn ||
    !nextBtn ||
    typeof TESTIMONIALS === "undefined" ||
    TESTIMONIALS.length === 0
  )
    return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const intervalMs = 10000;

  const goTo = (index) => {
    currentIndex = index;
    renderTestimonial(currentIndex);
  };

  const startAutoplay = () => {
    if (TESTIMONIALS.length <= 1) return; // Nada que rotar con un solo testimonio
    autoplayTimer = setInterval(() => {
      goTo((currentIndex + 1) % TESTIMONIALS.length);
    }, intervalMs);
  };

  const resetAutoplay = () => {
    clearInterval(autoplayTimer);
    startAutoplay();
  };

  renderTestimonial(currentIndex);
  startAutoplay();

  prevBtn.addEventListener("click", () => {
    goTo((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    goTo((currentIndex + 1) % TESTIMONIALS.length);
    resetAutoplay();
  });
}

document.addEventListener("DOMContentLoaded", initTestimonialsCarousel);
