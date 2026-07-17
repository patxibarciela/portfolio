/* ==========================================================================
   content-management.js — Repositorio de proyectos de esta categoría.

   Nota: a diferencia del resto de categorías, aquí no hay campo "role"
   ("Vad jag gjorde") — el rol general en todos estos proyectos se explica
   una sola vez en el párrafo introductorio de content-management.html.
   En su lugar, cada proyecto tiene "website" con la URL real del sitio,
   que se muestra como enlace clicable en la tarjeta.
   ========================================================================== */

const PROJECTS = [
  {
    image: "assets/content-management/jgpa.jpg",
    title: "Asturias Regionala Parlament",
    client: "Junta General del Principado de Asturias",
    type: "offentlig webbplats med kalenderfunktion, direktsända sammanträden, med mera",
    website: "https://www.jgpa.es"
  },
  {
    image: "assets/content-management/gijon-tourism.jpg",
    title: "Gijón Tourism",
    client: "Sociedad Mixta de Turismo de Gijón",
    type: "turism- och destinationswebbplats på sju språk med en stor mängd dynamiskt innehåll",
    website: "https://www.gijon.info"
  },
  {
    image: "assets/content-management/pozuelo-de-alarcon.jpg",
    title: "Pozuelo de Alarcón Kommun",
    client: "Ayuntamiento de Pozuelo de Alarcón",
    type: "kommunal webbplats med målgruppssegmentering och ett brett utbud av e-tjänster",
    website: "https://www.pozuelodealarcon.org"
  },
  {
    image: "assets/content-management/cofm.jpg",
    title: "Colegio Farmacéuticos de Madrid",
    client: "Colegio Oficial de Farmacéuticos de Madrid",
    type: "intranät och företagswebbplats, båda integrerade med system för verksamhetsstyrning",
    website: "https://www.cofm.es"
  },
  {
    image: "assets/content-management/ciemat.jpg",
    title: "CIEMAT Intranät & Webbplats",
    client: "CIEMAT",
    type: "intranät och webbplats för detta forskningscentrum under det spanska utbildnings- och vetenskapsdepartementet",
    website: "https://www.ciemat.es"
  },
  {
    image: "assets/content-management/diputacion-zamora.jpg",
    title: "Zamoras Landsting",
    client: "Diputación de Zamora",
    type: "offentlig webbplats med omfattande information, e-tjänster och målgruppssegmentering",
    website: "https://www.diputaciondezamora.es"
  },
  {
    image: "assets/content-management/cdti.jpg",
    title: "CDTI Innovación",
    client: "CDTI",
    type: "offentlig webbplats för Spaniens ledande organisation inom forsknings- och innovationsstöd",
    website: "https://www.cdti.es"
  },
  {
    image: "assets/content-management/duro-felguera.jpg",
    title: "Duro Felguera Webbplats",
    client: "Duro Felguera",
    type: "företagswebbplats för en av de ledande aktörerna inom den spanska och internationella industrisektorn",
    website: "https://www.durofelguera.com"
  },
  {
    image: "assets/content-management/fundacion-tripartita.jpg",
    title: "Fundación Tripartita",
    client: "Fundación Tripartita (idag Fundae)",
    type: "offentlig webbplats för den nationella organisationen som främjar yrkesutbildning",
    website: "https://www.fundae.es/"
  },
  {
    image: "assets/content-management/hc-energia.jpg",
    title: "HC Energía",
    client: "HC Energía (TotalEnergies / EDP España)",
    type: "företagswebbplats med målgruppssegmentering, e-tjänster samt tillhörande medarbetarportal",
    website: "https://www.totalenergies.es"
  },
  {
    image: "assets/content-management/proyecto-urban.jpg",
    title: "Proyecto Urban",
    client: "Ayuntamiento de Gijón",
    type: "offentlig webbportal och virtuellt resurscenter för entreprenörer, nyföretagande och lokalt näringsliv",
    website: "https://www.gijon.es"
  },
  {
    image: "assets/content-management/rgcc.jpg",
    title: "RGCC Webbplats",
    client: "Real Grupo de Cultura Covadonga",
    type: "extern föreningswebbplats med nyhetsflöden för olika idrottssektioner samt en integrerad medlemsportal",
    website: "https://www.rgcc.es"
  },
  {
    image: "assets/content-management/centros-sat.jpg",
    title: "Red de Centros SAT",
    client: "IDEPA",
    type: "webbportal med information och rådgivningsresurser för att främja digitalisering hos regionala företag",
    website: "https://www.idepa.es"
  },
  {
    image: "assets/content-management/telecable.jpg",
    title: "Telecable",
    client: "Telecable de Asturias",
    type: "extern företagswebbplats med integrerad e-handel, målgruppssegmentering och kundportal",
    website: "https://www.telecable.es"
  }
];
