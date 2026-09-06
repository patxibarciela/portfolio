/* ==========================================================================
   layout.js — Header y footer compartidos.
   Se inyectan por JS (no por fetch) para que el sitio funcione también
   abriendo los archivos directamente con file:// (sin servidor local).
   ========================================================================== */

const PORTFOLIO_PAGES = {
  "print.html": "Print",
  "webbdesign.html": "Webbdesign",
  "content-management.html": "Content Management",
  "audiovisuellt.html": "Audiovisuellt"
};

const NAV_LINKS = [
  { href: "om-mig.html", label: "Om mig" },
  { href: "utbildning.html", label: "Utbildning" },
  { href: "yrkeserfarenhet.html", label: "Erfarenhet" }
];

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function buildHeader() {
  const current = currentPage();
  const isPortfolioActive = Object.keys(PORTFOLIO_PAGES).includes(current);

  const desktopLinks = NAV_LINKS.map(
    (link) =>
      `<a href="${link.href}" class="nav-link${current === link.href ? " is-active" : ""}">${link.label}</a>`
  ).join("");

  const desktopPortfolioItems = Object.entries(PORTFOLIO_PAGES)
    .map(
      ([href, label]) =>
        `<a href="${href}" class="block px-5 py-3 text-sm hover:bg-accent-light hover:text-accent-dark transition-colors${current === href ? " text-accent-dark font-semibold" : ""}">${label}</a>`
    )
    .join("");

  const mobileLinks = NAV_LINKS.map(
    (link) =>
      `<a href="${link.href}" class="nav-link${current === link.href ? " is-active" : ""}">${link.label}</a>`
  ).join("");

  const mobilePortfolioItems = Object.entries(PORTFOLIO_PAGES)
    .map(
      ([href, label]) =>
        `<a href="${href}" class="block py-2 pl-4 text-sm${current === href ? " text-accent-dark font-semibold" : " text-gray-500"}">${label}</a>`
    )
    .join("");

  return `
  <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
    <a href="index.html" class="flex items-center">
      <img src="assets/logo.png" alt="Patxi Barciela" class="h-12 w-auto" />
    </a>

    <nav class="hidden md:flex items-center gap-9 text-sm uppercase tracking-wide">
      ${desktopLinks}
      <div class="relative group">
        <button class="nav-link uppercase flex items-center gap-1${isPortfolioActive ? " is-active" : ""}" aria-haspopup="true">
          Portfolio
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 normal-case tracking-normal">
          <div class="bg-white border border-gray-100 shadow-lg">
            ${desktopPortfolioItems}
          </div>
        </div>
      </div>
      <a href="kontakt.html" class="nav-link${current === "kontakt.html" ? " is-active" : ""}">Kontakt</a>
    </nav>

    <button id="menu-toggle" aria-label="Öppna meny" aria-expanded="false" class="md:hidden p-2 text-ink">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      </svg>
    </button>
  </div>

  <nav id="mobile-menu" class="hidden md:hidden flex flex-col px-6 pb-6 gap-4 text-sm uppercase tracking-wide border-t border-gray-100 pt-4">
    ${mobileLinks}
    <div>
      <button id="portfolio-toggle" class="nav-link uppercase w-full flex items-center justify-between${isPortfolioActive ? " is-active" : ""}" aria-expanded="false">
        Portfolio
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="portfolio-submenu" class="hidden flex-col mt-2 gap-1 normal-case tracking-normal">
        ${mobilePortfolioItems}
      </div>
    </div>
    <a href="kontakt.html" class="nav-link${current === "kontakt.html" ? " is-active" : ""}">Kontakt</a>
  </nav>`;
}

function buildFooter() {
  return `
  <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
    <p>&copy; 2026 Patxi Barciela. Alla rättigheter förbehållna.</p>
    <div class="flex gap-6">
      <span class="js-email hover:text-accent transition-colors cursor-pointer" data-user="patxibarciela.portfolio" data-domain="gmail.com"></span>
      <a href="https://linkedin.com/in/patxibp" target="_blank" rel="noopener" class="hover:text-accent transition-colors">LinkedIn</a>
    </div>
  </div>`;
}

/* Construye el email en tiempo de ejecución para que no aparezca como texto
   plano "usuario@dominio" en el HTML fuente (dificulta el scraping básico
   de bots que solo leen el HTML sin ejecutar JS; no es una protección
   infalible frente a scrapers que sí renderizan JavaScript). */
function initObfuscatedEmails() {
  document.querySelectorAll(".js-email").forEach((el) => {
    const user = el.getAttribute("data-user");
    const domain = el.getAttribute("data-domain");
    el.textContent = `${user} (a) ${domain}`;
    el.addEventListener("click", () => {
      window.location.href = `mailto:${user}@${domain}`;
    });
  });
}

function initPortfolioDropdownMobile() {
  const toggle = document.getElementById("portfolio-toggle");
  const submenu = document.getElementById("portfolio-submenu");
  if (!toggle || !submenu) return;

  toggle.addEventListener("click", () => {
    const isHidden = submenu.classList.toggle("hidden");
    submenu.classList.toggle("flex", !isHidden);
    toggle.setAttribute("aria-expanded", String(!isHidden));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) headerEl.innerHTML = buildHeader();
  if (footerEl) footerEl.innerHTML = buildFooter();

  initPortfolioDropdownMobile();
  initObfuscatedEmails();
});
