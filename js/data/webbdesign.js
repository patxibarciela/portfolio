/* ==========================================================================
   webbdesign.js — Repositorio de proyectos de esta categoría.

   Como las capturas de estos proyectos son verticales (screenshots de
   sitios web completos) pero la tarjeta del grid es horizontal, cada
   proyecto usa dos imágenes distintas:
   - thumbnail: recorte horizontal, encuadrado a mano, que se ve en la
     tarjeta del grid. Va dentro de assets/webbdesign/thumbnails/
   - image: la captura vertical completa, que se amplía al hacer clic
     (lightbox). Va dentro de assets/webbdesign/
   ========================================================================== */

const PROJECTS = [
  {
    thumbnail: "assets/webbdesign/thumbnails/aktivgruppen.jpg",
    image: "assets/webbdesign/aktivgruppen.jpg",
    title: "Aktivgruppen för Vuxna",
    client: "Aktivgruppen",
    type: "företagswebbplats",
    role: "konceptuell struktur och design av webbplatsen, inklusive samtliga undersidor"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/aktivgruppen-barn.jpg",
    image: "assets/webbdesign/aktivgruppen-barn.jpg",
    title: "Aktivgruppen för Barn",
    client: "Aktivgruppen",
    type: "företagswebbplats",
    role: "konceptuell struktur och design av webbplatsen anpassad för målgruppen"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/entremattan.jpg",
    image: "assets/webbdesign/entremattan.jpg",
    title: "Entremattan Webbplats",
    client: "Entremattan",
    type: "företagswebbplats",
    role: "design av konceptutkast för webbplatsens huvudsidor"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/ltb-kompetens.jpg",
    image: "assets/webbdesign/ltb-kompetens.jpg",
    title: "LTB Kompetens Webbplats",
    client: "LTB Kompetens",
    type: "företagswebbplats",
    role: "redesign av webbplatsens visuella uttryck och dess tillhörande undersidor"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/pag.jpg",
    image: "assets/webbdesign/pag.jpg",
    title: "Proactive Gaming Webbplats",
    client: "Proactive Gaming",
    type: "företagswebbplats",
    role: "framtagning av designförslag för webbplatsens huvudsidorr"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/cosmics.jpg",
    image: "assets/webbdesign/cosmics.jpg",
    title: "Cosmics Webbplats",
    client: "Cosmics Unified Communications",
    type: "företagswebbplats",
    role: "helhetsansvar för sajten, vilket innefattade struktur, textproduktion, gränssnittsdesign och utveckling"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/sweetch.jpg",
    image: "assets/webbdesign/sweetch.jpg",
    title: "Sweetch Webbplats",
    client: "Cosmics Unified Communications",
    type: "produktsajt",
    role: "informationsarkitektur, copywriting och design av hela webbplatsen"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/mobilenti.jpg",
    image: "assets/webbdesign/mobilenti.jpg",
    title: "Mobilenti Webbplats",
    client: "Cosmics Unified Communications",
    type: "produktsajt",
    role: "informationsstruktur, copy och visuell form för hela webbplatsen"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/cheaphomecalls.jpg",
    image: "assets/webbdesign/cheaphomecalls.jpg",
    title: "Cheaphomecalls Webbplats",
    client: "Cosmics Unified Communications",
    type: "produktsajt",
    role: "informationsarkitektur, copywriting och design av hela webbplatsen"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/sweetch-app.jpg",
    image: "assets/webbdesign/sweetch-app.jpg",
    title: "Applikation Sweetch",
    client: "Cosmics Unified Communications",
    type: "webbapplikation",
    role: "informationsarkitektur, copywriting och design av hela back-end-applikationen"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/sweetch-hotel.jpg",
    image: "assets/webbdesign/sweetch-hotel.jpg",
    title: "Applikation Sweetch Hotel",
    client: "Cosmics Unified Communications",
    type: "webbapplikation",
    role: "informationsarkitektur, copywriting och design av back-end-applikationen anpassad för hotellbranschen"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/emp.jpg",
    image: "assets/webbdesign/emp.jpg",
    title: "EMP Webbplats",
    client: "EMP Estudio Musical Principado",
    type: "företagswebbplats",
    role: "ansvarade för hela processen – från informationsarkitektur och copy till visuell design och frontend-utveckling"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/e3.jpg",
    image: "assets/webbdesign/e3.jpg",
    title: "E3 Webbplats",
    client: "E3 Consultoría de Gestión",
    type: "företagswebbplats",
    role: "helhetsansvar för sajten, vilket innefattade struktur, textproduktion, gränssnittsdesign och utveckling"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/redline.jpg",
    image: "assets/webbdesign/redline.jpg",
    title: "Redline Webbplats",
    client: "Redline Asesores Tecnológicos",
    type: "företagswebbplats",
    role: "helhetsansvar för sajten, vilket innefattade textproduktion, gränssnittsdesign och frontend-utveckling"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/bizitegi.jpg",
    image: "assets/webbdesign/bizitegi.jpg",
    title: "Bizitegi Interaktiv Årsberättelse",
    client: "Bizitegi",
    type: "interaktiv CD-ROM",
    role: "gränssnittsdesign och strukturering av innehåll för en interaktiv verksamhetsberättelse distribuerad på CD-ROM"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/palacio-del-mar.jpg",
    image: "assets/webbdesign/palacio-del-mar.jpg",
    title: "El Palacio del Mar Webbplats",
    client: "Sidrería Marisquería El Palacio del Mar",
    type: "företagswebbplats",
    role: "helhetsansvar för sajten, inklusive text- och bildproduktion, gränssnittsdesign samt utveckling"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/anandadoe.jpg",
    image: "assets/webbdesign/anandadoe.jpg",
    title: "Anandadoe Onlinebutik",
    client: "Anandadoe",
    type: "e-handelswebbplats",
    role: "design och utveckling av hela webbplatsen med en integrerad butikslösning i WordPress"
  },
  {
    thumbnail: "assets/webbdesign/thumbnails/leticia-garrido.jpg",
    image: "assets/webbdesign/leticia-garrido.jpg",
    title: "Leticia Garrido Webbplats",
    client: "Leticia Garrido, Socialarbetare",
    type: "personlig webbplats",
    role: "design och utveckling i enlighet med W3C-standarder och WAI \"AA\"-riktlinjer"
  }
];
