/* ==========================================================================
   portfolio-grid.js — Genera las tarjetas de proyecto en el DOM a partir
   del array PROJECTS (definido en js/data/<categoria>.js).
   Debe cargarse DESPUÉS del archivo de datos y ANTES de main.js
   (para que el lightbox pueda enganchar los elementos ya creados).

   Soporta dos formatos de proyecto:
   - Con imagen (Print): { image, type, role, ... }
     → la miniatura y la imagen ampliada del lightbox son la misma.
   - Con vídeo (Audiovisuellt): { thumbnail, video, length, ... }
     → el lightbox incrusta el vídeo de YouTube.
     Si "video" está vacío, se usa la miniatura ampliada como alternativa.
   - Con miniatura propia (Webbdesign): { thumbnail, image, type, ... }
     → la tarjeta muestra "thumbnail" (recorte horizontal a tu gusto) y el
     lightbox amplía "image" (la captura vertical completa de la web).
   - Sin "role" (Content Management): { image, type, website, ... }
     → no se muestra la línea "Vad jag gjorde" (el rol general ya se
     explica en la intro de la página); en su lugar se muestra un enlace
     "Besök webbplatsen" si el proyecto tiene campo "website".
   ========================================================================== */

function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function playButtonOverlay() {
  return `
    <div class="absolute inset-0 flex items-center justify-center bg-ink/10 group-hover:bg-ink/20 transition-colors">
      <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>`;
}

function renderProjectCard(project) {
  const cardImage = project.thumbnail || project.image;
  const fullImage = project.image || project.thumbnail;
  const youtubeId = extractYouTubeId(project.video);
  const isVideo = Boolean(youtubeId);

  const lightboxType = isVideo ? "video" : "image";
  const lightboxSrc = isVideo
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : fullImage;

  const secondaryLabel = project.length ? "Längd" : "Projekttyp";
  const secondaryValue = project.length || project.type;

  return `
    <article class="project-card border border-gray-100 group"
             data-lightbox-type="${lightboxType}"
             data-lightbox-src="${lightboxSrc}"
             data-lightbox-caption="${project.title} — ${project.client}">
      <div class="overflow-hidden relative">
        <img src="${cardImage}" alt="${project.title}" class="w-full h-56 object-cover" />
        ${isVideo ? playButtonOverlay() : ""}
      </div>
      <div class="p-5">
        <h3 class="font-semibold text-lg mb-1">${project.title}</h3>
        <p class="text-accent text-sm font-medium mb-3">${project.client}</p>
        <dl class="text-sm text-gray-500 space-y-1">
          <div><dt class="inline font-medium text-ink">${secondaryLabel}:</dt> <dd class="inline">${secondaryValue}</dd></div>
          ${project.role ? `<div><dt class="inline font-medium text-ink">Vad jag gjorde:</dt> <dd class="inline">${project.role}</dd></div>` : ""}
        </dl>
        ${project.website ? `<a href="${project.website}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="inline-block mt-3 text-sm text-accent hover:text-accent-dark font-medium">Besök webbplatsen ↗</a>` : ""}
      </div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("portfolio-grid");
  if (!container || typeof PROJECTS === "undefined") return;
  container.innerHTML = PROJECTS.map(renderProjectCard).join("");
});
