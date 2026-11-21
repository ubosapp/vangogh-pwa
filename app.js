const works = [
  {
    id: "starry-night", title: { it: "Notte stellata", en: "The Starry Night" },
    subtitle: { it: "Saint-Rémy, giugno 1889", en: "Saint-Rémy, June 1889" }, year: "1889",
    image: "assets/starry-night.jpg", imageCredit: "Vincent van Gogh · pubblico dominio",
    imageSource: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    source: "https://www.moma.org/collection/works/79802?locale=en",
    sourceLabel: { it: "Scheda dell’opera · MoMA", en: "Artwork record · MoMA" },
    museum: "MoMA", city: "New York, USA", address: "11 West 53rd Street, New York, NY 10019",
    map: "https://www.google.com/maps/search/?api=1&query=MoMA%2C+11+West+53rd+Street%2C+New+York",
    booking: "https://visit.moma.org/select?locale=en",
    description: {
      it: "Un cielo blu attraversato da vortici e stelle luminose occupa quasi tutta la tela. In basso, il cipresso scuro unisce il paesaggio al firmamento; il villaggio silenzioso offre un contrappunto alla sua energia. Van Gogh dipinse l’opera a Saint-Rémy, ispirandosi anche alla vista dalla finestra della clinica.",
      en: "A blue sky of swirling strokes and bright stars fills most of the canvas. Below, a dark cypress links the landscape to the heavens, while the quiet village balances the sky’s energy. Van Gogh painted it in Saint-Rémy, drawing in part on the view from his room at the asylum."
    },
    details: [
      { title: { it: "Il cielo in movimento", en: "A moving sky" }, text: { it: "Le pennellate curve trasformano il cielo in una corrente continua di blu e azzurri.", en: "Curving brushstrokes turn the sky into a continuous current of blues." }, x: 55, y: 36 },
      { title: { it: "Luna e Venere", en: "Moon and Venus" }, text: { it: "La luna crescente brilla a destra; Venere è il punto luminoso vicino al centro sinistro.", en: "The crescent moon glows at right; Venus is the bright point just left of centre." }, x: 79, y: 21 },
      { title: { it: "Il cipresso", en: "The cypress" }, text: { it: "La sagoma scura sale dal primo piano e fa da ponte visivo tra la terra e le stelle.", en: "The dark silhouette rises from the foreground, creating a visual bridge between earth and stars." }, x: 23, y: 65 }
    ]
  },
  {
    id: "sunflowers", title: { it: "Girasoli", en: "Sunflowers" },
    subtitle: { it: "Arles, gennaio 1889", en: "Arles, January 1889" }, year: "1889",
    image: "assets/sunflowers.jpg", imageCredit: "Vincent van Gogh · pubblico dominio",
    imageSource: "https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_127.jpg",
    source: "https://www.vangoghmuseum.nl/en/collection/s0031V1962",
    sourceLabel: { it: "Scheda dell’opera · Van Gogh Museum", en: "Artwork record · Van Gogh Museum" },
    museum: "Van Gogh Museum", city: "Amsterdam, Paesi Bassi", address: "Museumplein 6, 1071 DJ Amsterdam",
    map: "https://www.google.com/maps/search/?api=1&query=Van+Gogh+Museum%2C+Museumplein+6%2C+Amsterdam",
    booking: "https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices",
    description: {
      it: "Il giallo diventa il vero protagonista: una gamma di toni dorati, verdi e ocra dà vita al mazzo e allo sfondo. Questa versione fu dipinta ad Arles nel 1889, come ripetizione di una composizione nata l’anno prima. I fiori, alcuni in piena fioritura e altri appassiti, suggeriscono insieme vitalità e fragilità.",
      en: "Yellow takes the lead: golds, greens and ochres animate both the bouquet and its background. This version was painted in Arles in 1889, repeating a composition first made the year before. The flowers, some in full bloom and others fading, hold vitality and fragility together."
    },
    details: [
      { title: { it: "I semi", en: "The seed heads" }, text: { it: "I centri bruni e dorati mostrano fasi diverse del fiore e una trama di piccoli tocchi.", en: "Brown and golden centres show different stages of the flower, built from small touches of paint." }, x: 55, y: 29 },
      { title: { it: "Il vaso", en: "The vase" }, text: { it: "La firma blu segue il bordo del vaso e si integra nella composizione.", en: "The blue signature follows the curve of the vase and becomes part of the composition." }, x: 53, y: 78 },
      { title: { it: "Gialli diversi", en: "Many yellows" }, text: { it: "Le variazioni di giallo fanno risaltare petali, fondo e piano d’appoggio senza perdere unità.", en: "Shifts in yellow distinguish petals, background and tabletop while keeping the scene unified." }, x: 25, y: 56 }
    ]
  },
  {
    id: "bedroom", title: { it: "La camera di Vincent ad Arles", en: "The Bedroom" },
    subtitle: { it: "Arles, ottobre 1888", en: "Arles, October 1888" }, year: "1888",
    image: "assets/bedroom.jpg", imageCredit: "Vincent van Gogh · pubblico dominio",
    imageSource: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    source: "https://www.vangoghmuseum.nl/en/collection/s0047V1962",
    sourceLabel: { it: "Scheda dell’opera · Van Gogh Museum", en: "Artwork record · Van Gogh Museum" },
    museum: "Van Gogh Museum", city: "Amsterdam, Paesi Bassi", address: "Museumplein 6, 1071 DJ Amsterdam",
    map: "https://www.google.com/maps/search/?api=1&query=Van+Gogh+Museum%2C+Museumplein+6%2C+Amsterdam",
    booking: "https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices",
    description: {
      it: "La stanza della Casa Gialla è resa con arredi essenziali, contorni marcati e colori accostati con decisione. Van Gogh cercò un senso di riposo e semplicità, appiattendo in parte la prospettiva, come nelle stampe giapponesi. Le tonalità oggi visibili sono cambiate nel tempo: pareti e porte, per esempio, erano in origine violacee.",
      en: "The room in the Yellow House is rendered with simple furniture, strong outlines and decisive blocks of colour. Van Gogh aimed for a feeling of rest and simplicity, flattening the perspective in a way that recalls Japanese prints. Some colours have changed over time: the walls and doors, for example, were originally violet."
    },
    details: [
      { title: { it: "Il letto", en: "The bed" }, text: { it: "Il letto in primo piano domina la stanza: la prospettiva volutamente inclinata rende lo spazio intimo.", en: "The bed dominates the foreground; its deliberately angled perspective makes the room feel intimate." }, x: 70, y: 55 },
      { title: { it: "I quadri alla parete", en: "Pictures on the wall" }, text: { it: "Piccoli dipinti incorniciati raccontano la vita e il lavoro dell’artista dentro la casa.", en: "Small framed pictures bring the artist’s life and work into the room itself." }, x: 66, y: 23 },
      { title: { it: "La sedia", en: "The chair" }, text: { it: "Le sedie vuote, come gli altri oggetti, suggeriscono una stanza preparata per accogliere qualcuno.", en: "The empty chairs, like the other objects, suggest a room prepared to welcome someone." }, x: 17, y: 60 }
    ]
  },
  {
    id: "potato-eaters", title: { it: "I mangiatori di patate", en: "The Potato Eaters" },
    subtitle: { it: "Nuenen, aprile 1885", en: "Nuenen, April 1885" }, year: "1885",
    image: "assets/potato-eaters.jpg", imageCredit: "Vincent van Gogh · pubblico dominio",
    imageSource: "https://commons.wikimedia.org/wiki/File:De_aardappeleters_-_s0005V1962_-_Van_Gogh_Museum.jpg",
    source: "https://www.vangoghmuseum.nl/en/collection/s0005V1962",
    sourceLabel: { it: "Scheda dell’opera · Van Gogh Museum", en: "Artwork record · Van Gogh Museum" },
    museum: "Van Gogh Museum", city: "Amsterdam, Paesi Bassi", address: "Museumplein 6, 1071 DJ Amsterdam",
    map: "https://www.google.com/maps/search/?api=1&query=Van+Gogh+Museum%2C+Museumplein+6%2C+Amsterdam",
    booking: "https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices",
    description: {
      it: "Una famiglia di contadini si riunisce attorno a un piatto di patate, illuminata da una lampada appesa al centro. La tavolozza scura e i volti segnati danno peso alla fatica quotidiana. Van Gogh voleva rappresentare persone che avevano guadagnato il proprio pasto lavorando la terra.",
      en: "A farming family gathers around a dish of potatoes beneath a hanging lamp. The dark palette and weathered faces give weight to everyday labour. Van Gogh wanted to portray people who had earned their meal by working the land."
    },
    details: [
      { title: { it: "La lampada", en: "The lamp" }, text: { it: "La luce calda concentra la scena sul tavolo e sulle mani che condividono il pasto.", en: "Warm light draws attention to the table and the hands sharing the meal." }, x: 53, y: 32 },
      { title: { it: "I volti", en: "The faces" }, text: { it: "Tratti ruvidi e ombre profonde fanno sentire la fatica e la concretezza della vita contadina.", en: "Rough features and deep shadows convey the strain and solidity of rural life." }, x: 76, y: 49 },
      { title: { it: "Il piatto", en: "The dish" }, text: { it: "Le patate al centro sono un pasto semplice, al tempo stesso soggetto e simbolo della scena.", en: "The potatoes at the centre are a simple meal, both the subject and a symbol of the scene." }, x: 52, y: 71 }
    ]
  },
  {
    id: "almond-blossom", title: { it: "Ramo di mandorlo in fiore", en: "Almond Blossom" },
    subtitle: { it: "Saint-Rémy, febbraio 1890", en: "Saint-Rémy, February 1890" }, year: "1890",
    image: "assets/almond-blossom.jpg", imageCredit: "Vincent van Gogh · pubblico dominio",
    imageSource: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
    source: "https://www.vangoghmuseum.nl/en/collection/s0176V1962",
    sourceLabel: { it: "Scheda dell’opera · Van Gogh Museum", en: "Artwork record · Van Gogh Museum" },
    museum: "Van Gogh Museum", city: "Amsterdam, Paesi Bassi", address: "Museumplein 6, 1071 DJ Amsterdam",
    map: "https://www.google.com/maps/search/?api=1&query=Van+Gogh+Museum%2C+Museumplein+6%2C+Amsterdam",
    booking: "https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices",
    description: {
      it: "Rami di mandorlo fioriti si distendono su un cielo azzurro chiaro. Il quadro fu dipinto per celebrare la nascita del nipote di Van Gogh, Vincent Willem. La fioritura precoce dell’albero suggerisce un nuovo inizio; le forme ritagliate e i contorni marcati richiamano le stampe giapponesi amate dall’artista.",
      en: "Blossoming almond branches spread across a pale blue sky. Van Gogh painted the work to celebrate the birth of his nephew, Vincent Willem. The tree’s early flowering suggests new life; the cropped forms and bold outlines recall the Japanese prints the artist admired."
    },
    details: [
      { title: { it: "I fiori", en: "The blossoms" }, text: { it: "Piccoli tocchi chiari fanno risaltare i fiori contro il cielo e i rami scuri.", en: "Small, light marks set the blossoms against the sky and dark branches." }, x: 72, y: 25 },
      { title: { it: "Il cielo", en: "The sky" }, text: { it: "L’azzurro uniforme dà respiro ai rami e rende la scena luminosa e serena.", en: "The even blue gives the branches room and keeps the scene bright and calm." }, x: 53, y: 54 },
      { title: { it: "La linea del ramo", en: "The branch line" }, text: { it: "I rami attraversano il quadro come un disegno: una composizione ispirata anche alle stampe giapponesi.", en: "The branches cross the canvas like a drawing, in a composition also inspired by Japanese prints." }, x: 31, y: 76 }
    ]
  }
];

const text = {
  it: {
    eyebrow: "Un piccolo museo da portare con te", headingA: "Van Gogh,", headingB: "da vicino.",
    intro: "Cinque opere celebri, dettagli da esplorare e i musei dove incontrarle.",
    index: "Indice delle opere", indexHint: "Scegli un quadro per iniziare", artwork: "Opera",
    details: "Dettagli da osservare", detailPrompt: "Seleziona un numero sull’immagine oppure un dettaglio qui sopra per ingrandirlo.",
    location: "Dove si trova", map: "Apri la mappa", booking: "Prenota il biglietto",
    visitNote: "Controlla la scheda del museo per confermare che l’opera sia esposta il giorno della visita.",
    zoom: "Ingrandimento", closing: "Le immagini sono salvate in questa app. Una volta caricata, la galleria resta consultabile anche offline.",
    sources: "Fonti e crediti", sourceIntro: "Schede ufficiali dei musei e immagini delle opere da Wikimedia Commons. Le opere di Van Gogh sono di pubblico dominio.",
    image: "Immagine", install: "Installa app", footer: "PWA bilingue · Italiano / English · Le disponibilità e gli orari possono cambiare."
  },
  en: {
    eyebrow: "A small museum to take with you", headingA: "Van Gogh,", headingB: "up close.",
    intro: "Five celebrated works, details to explore and the museums where you can see them.",
    index: "Artwork index", indexHint: "Choose a painting to begin", artwork: "Artwork",
    details: "Details to look for", detailPrompt: "Choose a number on the image or a detail above to zoom in.",
    location: "Where to find it", map: "Open map", booking: "Book tickets",
    visitNote: "Check the museum’s artwork page to confirm it is on view on the day of your visit.",
    zoom: "Zoom", closing: "The images are saved in this app. Once loaded, the gallery remains available offline.",
    sources: "Sources and credits", sourceIntro: "Official museum records and artwork images from Wikimedia Commons. Van Gogh’s works are in the public domain.",
    image: "Image", install: "Install app", footer: "Bilingual PWA · Italiano / English · Opening times and availability may change."
  }
};

const root = document.getElementById("app");
let language = localStorage.getItem("vangogh-language") || "it";
let activeId = "starry-night";
let activeDetail = -1;
let zoomLevel = 1;
let deferredInstall = null;

function currentWork() {
  return works.find(function (work) { return work.id === activeId; });
}

function render() {
  const ui = text[language];
  const work = currentWork();
  const selectedDetail = activeDetail >= 0 ? work.details[activeDetail] : null;
  const focusX = selectedDetail ? selectedDetail.x : 50;
  const focusY = selectedDetail ? selectedDetail.y : 50;
  const nav = works.map(function (item, index) {
    return '<button class="index-button" type="button" data-work="' + item.id + '" aria-current="' + (item.id === activeId) + '">' +
      '<span class="index-number">0' + (index + 1) + '</span><span class="index-title">' + item.title[language] + '</span></button>';
  }).join("");
  const chips = work.details.map(function (item, index) {
    return '<button class="detail-chip" type="button" data-detail="' + index + '" aria-pressed="' + (index === activeDetail) + '">' + item.title[language] + '</button>';
  }).join("");
  const dots = work.details.map(function (item, index) {
    const label = (language === "it" ? "Ingrandisci: " : "Zoom in on: ") + item.title[language];
    return '<button class="hotspot" type="button" data-detail="' + index + '" aria-label="' + label + '" aria-pressed="' + (index === activeDetail) + '" style="left:' + item.x + '%;top:' + item.y + '%">' + (index + 1) + '</button>';
  }).join("");
  const sourceRows = works.map(function (item) {
    return '<div class="source-item"><span>' + item.title[language] + '</span><span><a href="' + item.source + '" target="_blank" rel="noopener noreferrer">' + item.sourceLabel[language] + '</a> · <a href="' + item.imageSource + '" target="_blank" rel="noopener noreferrer">' + ui.image + '</a></span></div>';
  }).join("");
  const detailPanel = selectedDetail
    ? '<div class="detail-copy" aria-live="polite"><h3>' + selectedDetail.title[language] + '</h3><p>' + selectedDetail.text[language] + '</p></div>'
    : '<p class="detail-prompt">' + ui.detailPrompt + '</p>';

  root.innerHTML =
    '<a class="skip-link" href="#opera">' + (language === "it" ? "Vai al quadro" : "Skip to artwork") + '</a>' +
    '<div class="page-shell">' +
      '<header class="topbar"><a class="brand" href="#" aria-label="Van Gogh, da vicino">' +
        '<span class="brand-mark" aria-hidden="true">V</span><span class="brand-copy"><strong>Vincent</strong><span>Una galleria tascabile</span></span></a>' +
        '<div class="top-actions"><button class="quiet-button" id="install-button" type="button" hidden>' + ui.install + '</button>' +
        '<button class="language-button" id="language-button" type="button" aria-label="' + (language === "it" ? "Switch to English" : "Passa all’italiano") + '">' + (language === "it" ? "EN" : "IT") + '</button></div></header>' +
      '<main><section class="intro" aria-labelledby="page-title"><div><p class="eyebrow">' + ui.eyebrow + '</p><h1 id="page-title">' + ui.headingA + '<br><em>' + ui.headingB + '</em></h1></div><p class="intro-note">' + ui.intro + '</p></section>' +
        '<section class="catalogue" aria-labelledby="index-title"><div class="catalogue-heading"><h2 id="index-title">' + ui.index + '</h2><p>' + ui.indexHint + '</p></div><nav class="work-index" aria-label="' + ui.index + '">' + nav + '</nav></section>' +
        '<section class="feature" id="opera" aria-label="' + ui.artwork + '">' +
          '<div class="art-side"><div class="art-frame" style="aspect-ratio:' + (work.id === "sunflowers" ? "0.81" : work.id === "potato-eaters" ? "1.43" : "1.25") + '">' +
            '<img src="./' + work.image + '" alt="' + work.title[language] + ' — Vincent van Gogh, ' + work.year + '" style="transform:scale(' + zoomLevel + ');transform-origin:' + focusX + '% ' + focusY + '%">' + dots + '</div>' +
            '<div class="image-credit"><span>' + work.imageCredit + '</span><a href="' + work.imageSource + '" target="_blank" rel="noopener noreferrer">' + (language === "it" ? "Fonte immagine" : "Image source") + ' ↗</a></div>' +
            '<div class="zoom-bar"><label class="zoom-label" for="zoom-control">' + ui.zoom + '</label><input id="zoom-control" type="range" min="1" max="2.5" step="0.1" value="' + zoomLevel + '" aria-label="' + ui.zoom + '"><span class="zoom-value">' + Number(zoomLevel).toFixed(1) + '×</span></div></div>' +
          '<article class="work-info"><div class="work-meta"><span class="work-no">0' + (works.indexOf(work) + 1) + '</span><span class="meta-rule"></span><span class="work-year">' + work.year + '</span></div>' +
            '<h2>' + work.title[language] + '</h2><p class="work-subtitle">' + work.subtitle[language] + '</p><p class="description">' + work.description[language] + '</p>' +
            '<h3 class="detail-heading">' + ui.details + '</h3><div class="detail-list">' + chips + '</div>' + detailPanel +
            '<section class="location-card" aria-labelledby="location-label"><div class="location-title" id="location-label"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" stroke-width="1.7"/></svg>' + ui.location + '</div>' +
              '<p class="museum-name">' + work.museum + '</p><p class="museum-address">' + work.address + '<br>' + work.city + '</p>' +
              '<div class="location-links"><a class="action-link" href="' + work.booking + '" target="_blank" rel="noopener noreferrer">' + ui.booking + ' <span aria-hidden="true">↗</span></a><a class="map-link" href="' + work.map + '" target="_blank" rel="noopener noreferrer">' + ui.map + ' ↗</a></div>' +
              '<p class="visit-note">' + ui.visitNote + '</p></section></article></section>' +
        '<section class="closing-row"><p>' + ui.closing + '</p><a class="map-link" href="' + work.source + '" target="_blank" rel="noopener noreferrer">' + work.sourceLabel[language] + ' ↗</a></section>' +
        '<details class="sources"><summary>' + ui.sources + '</summary><p class="footnote">' + ui.sourceIntro + '</p><div class="source-list">' + sourceRows + '</div></details></main>' +
      '<footer class="footnote">' + ui.footer + '</footer></div>';

  root.querySelector("#language-button").addEventListener("click", function () {
    language = language === "it" ? "en" : "it";
    localStorage.setItem("vangogh-language", language);
    render();
  });
  root.querySelectorAll("[data-work]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeId = button.getAttribute("data-work");
      activeDetail = -1;
      zoomLevel = 1;
      render();
      root.querySelector("#opera").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  root.querySelectorAll("[data-detail]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeDetail = Number(button.getAttribute("data-detail"));
      zoomLevel = 2.1;
      render();
    });
  });
  root.querySelector("#zoom-control").addEventListener("input", function (event) {
    zoomLevel = Number(event.target.value);
    const img = root.querySelector(".art-frame img");
    const current = activeDetail >= 0 ? work.details[activeDetail] : null;
    img.style.transform = "scale(" + zoomLevel + ")";
    img.style.transformOrigin = (current ? current.x : 50) + "% " + (current ? current.y : 50) + "%";
    root.querySelector(".zoom-value").textContent = zoomLevel.toFixed(1) + "×";
  });
  if (deferredInstall) {
    const installButton = root.querySelector("#install-button");
    installButton.hidden = false;
    installButton.addEventListener("click", async function () {
      deferredInstall.prompt();
      await deferredInstall.userChoice;
      deferredInstall = null;
      installButton.hidden = true;
    });
  }
}

window.addEventListener("beforeinstallprompt", function (event) {
  event.preventDefault();
  deferredInstall = event;
  render();
});
window.addEventListener("appinstalled", function () { deferredInstall = null; });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  });
}
render();
