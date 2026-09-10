function renderTestimonial(index) {
  const quoteEl = document.getElementById("testimonial-quote");
  const nameEl = document.getElementById("testimonial-name");
  const roleEl = document.getElementById("testimonial-role");
  if (!quoteEl || !nameEl || !roleEl) return;

  const item = TESTIMONIALS[index];

  quoteEl.classList.add("opacity-0");
  setTimeout(() => {
    quoteEl.textContent = `"${item.quote}"`;
    nameEl.textContent = item.name;
    roleEl.textContent = item.role;
    quoteEl.classList.remove("opacity-0");
  }, 200);
}

function initTestimonialsCarousel() {
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  if (!prevBtn || !nextBtn || typeof TESTIMONIALS === "undefined" || TESTIMONIALS.length === 0) return;

  let currentIndex = 0;
  renderTestimonial(currentIndex);

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    renderTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % TESTIMONIALS.length;
    renderTestimonial(currentIndex);
  });
}

document.addEventListener("DOMContentLoaded", initTestimonialsCarousel);
