/* ==========================================================================
   main.js — Interacciones vanilla JS: menú móvil + lightbox
   Compartido por todas las páginas del sitio.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initLightbox();
  initContactForm();
});

/* --------------------------------------------------------------------- */
/* Menú móvil                                                             */
/* --------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* --------------------------------------------------------------------- */
/* Lightbox — soporta imágenes ampliadas y vídeos de YouTube incrustados  */
/* --------------------------------------------------------------------- */
function initLightbox() {
  const overlay = document.getElementById("lightbox-overlay");
  if (!overlay) return; // Página sin galería (ej. index.html)

  const imageEl = document.getElementById("lightbox-image");
  const videoWrapper = document.getElementById("lightbox-video-wrapper");
  const videoEl = document.getElementById("lightbox-video");
  const captionEl = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const triggers = document.querySelectorAll("[data-lightbox-src]");

  const openLightbox = (src, caption, type) => {
    const isVideo = type === "video" && videoWrapper && videoEl;

    if (isVideo) {
      videoEl.src = src;
      videoWrapper.classList.remove("hidden");
      imageEl.classList.add("hidden");
      imageEl.src = "";
    } else {
      imageEl.src = src;
      imageEl.alt = caption || "";
      imageEl.classList.remove("hidden");
      if (videoWrapper) videoWrapper.classList.add("hidden");
      if (videoEl) videoEl.src = "";
    }

    captionEl.textContent = caption || "";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    // Pequeño retraso para que no se vea el "salto" durante el fade-out,
    // y para detener la reproducción del vídeo al cerrar.
    setTimeout(() => {
      if (!overlay.classList.contains("is-open")) {
        imageEl.src = "";
        if (videoEl) videoEl.src = "";
      }
    }, 250);
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-lightbox-src");
      const caption = trigger.getAttribute("data-lightbox-caption");
      const type = trigger.getAttribute("data-lightbox-type") || "image";
      openLightbox(src, caption, type);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  // Cerrar al hacer clic fuera del contenido (en el overlay)
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------- */
/* Kontaktformulär — envío por AJAX con mensaje de agradecimiento propio, */
/* sin depender del redirect de pago de Formspree (kontakt.html).        */
/* --------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return; // Página sin formulario de contacto

  const submitBtn = document.getElementById("contact-submit");
  const errorEl = document.getElementById("contact-error");
  const successEl = document.getElementById("contact-success");
  const wrapper = document.getElementById("contact-form-wrapper");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorEl.classList.add("hidden");
    submitBtn.disabled = true;
    submitBtn.textContent = "Skickar…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.classList.add("hidden");
        successEl.classList.remove("hidden");
        if (wrapper) wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        throw new Error("Formspree response not ok");
      }
    } catch (err) {
      errorEl.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Skicka";
    }
  });
}
