// ─────────────────────────────────────────
//  CONFIGURATION
// ─────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBDdJ82azr6aemBVd3wCi2QBUU_2K4ljco",
  authDomain: "mi-coleccion-de-pelis.firebaseapp.com",
  projectId: "mi-coleccion-de-pelis",
  storageBucket: "mi-coleccion-de-pelis.firebasestorage.app",
  messagingSenderId: "1053898593883",
  appId: "1:1053898593883:web:9eb152c29af0d4f075d17e"
};
const TMDB_API_KEY   = "dd27e4c668d68859a2383ff890147522";
const ALLOWED_EMAILS = [
  "jean.pierre.gonzalez@gmail.com",
  "celya31@gmail.com"
];

// ─────────────────────────────────────────
//  ÉTOILES — 4 niveaux (compatibles avec les anciennes notes smiley 1-4)
// ─────────────────────────────────────────
const STAR_LABELS = {
  fr: ["", "Décevant", "Pas mal", "Bien", "Excellent"],
  es: ["", "Decepcionante", "Regular", "Bien", "Excelente"],
  en: ["", "Disappointing", "Not bad", "Good", "Excellent"],
};

// ─────────────────────────────────────────
//  DURÉE
// ─────────────────────────────────────────
const DURATION_OPTIONS = [
  { value: 10,   label: { fr:"10 min", es:"10 min", en:"10 min" } },
  { value: 30,   label: { fr:"30 min", es:"30 min", en:"30 min" } },
  { value: 45,   label: { fr:"45 min", es:"45 min", en:"45 min" } },
  { value: 50,   label: { fr:"50 min", es:"50 min", en:"50 min" } },
  { value: 60,   label: { fr:"1h00",   es:"1h00",   en:"1h00"   } },
  { value: 75,   label: { fr:"1h15",   es:"1h15",   en:"1h15"   } },
  { value: 90,   label: { fr:"1h30",   es:"1h30",   en:"1h30"   } },
  { value: 105,  label: { fr:"1h45",   es:"1h45",   en:"1h45"   } },
  { value: 120,  label: { fr:"2h00",   es:"2h00",   en:"2h00"   } },
  { value: 9999, label: { fr:"+ de 2h",es:"+ de 2h",en:"Over 2h"} },
];

// ─────────────────────────────────────────
//  TRADUCTIONS
// ─────────────────────────────────────────
const I18N = {
  fr: {
    loginSubtitle:"Votre liste partagée", loginBtn:"Connexion avec Google",
    logout:"Déconnexion", searchPlaceholder:"Rechercher un film ou une série…", searchBtn:"Rechercher",
    tabToWatch:"À voir", tabWatched:"Vus / Vues", loading:"Chargement…",
    noResults:"Aucun résultat", searching:"Recherche…",
    addBtn:"+ Ajouter", addedBtn:"✓ Ajouté",
    markWatched:"✓ Marquer comme vu", markToWatch:"↩ Remettre à voir", removeBtn:"Supprimer",
    trailerBtn:"▶ Bande-annonce", addToList:"+ Ajouter à la liste",
    director:"Réalisateur·rice", cast:"Avec", creator:"Créé par",
    seasons:(n)=> n > 1 ? `${n} saisons` : `${n} saison`,
    emptyToWatch:"Aucun titre à voir pour l'instant", emptyWatched:"Aucun titre vu pour l'instant",
    confirmRemove:(title)=>`Supprimer "${title}" de la liste ?`,
    unauthorizedAlert:"Accès non autorisé pour ce compte Gmail.",
    sortDateDesc:"Date ajout ↓", sortDateAsc:"Date ajout ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortStarDesc:"Note ↓", sortStarAsc:"Note ↑",
    allGenres:"Tous les genres",
    filterAll:"Tout", filterMovies:"🎬 Films", filterSeries:"📺 Séries",
    badgeMovie:"Film", badgeSerie:"Série",
    ratingPopupTitle:"Votre note ?",
    ratingPopupSub:(title)=>`Que pensez-vous de "${title}" ?`,
    ratingPopupSkip:"Passer",
    yourRating:"Votre note :",
    durationMin:"Durée min :", durationMax:"Durée max :",
    durationNoMin:"Pas de min", durationNoMax:"Pas de max",
    episodeDuration:(n)=>`~${n} min/ép.`,
    listSearchPlaceholder:"Filtrer par titre, réalisateur, acteur…",
    showMore:(n)=>`Voir plus (${n} restants)`,
    resetFilters:"↺ Réinitialiser les filtres",
    notifTitle:(n) => n === 1 ? "1 nouveau titre ajouté" : `${n} nouveaux titres ajoutés`,
    notifBy:(email) => `par ${email.split("@")[0]}`,
    notifSee:"Voir →",
    notifDismiss:"✕",
    historyTitle:"Historique",
    histActionAdd:(who, title) => `${who} a ajouté`,
    histActionWatch:(who, title) => `${who} a marqué comme vu`,
    histActionRate:(who, stars) => `${who} a noté`,
    histEmpty:"Aucune activité récente",
    histStars:(n) => "★".repeat(n) + "☆".repeat(4-n),
    tmdbLang:"fr-FR",
  },
  es: {
    loginSubtitle:"Tu lista compartida", loginBtn:"Iniciar sesión con Google",
    logout:"Cerrar sesión", searchPlaceholder:"Buscar una película o serie…", searchBtn:"Buscar",
    tabToWatch:"Por ver", tabWatched:"Vistas", loading:"Cargando…",
    noResults:"Sin resultados", searching:"Buscando…",
    addBtn:"+ Añadir", addedBtn:"✓ Añadida",
    markWatched:"✓ Marcar como vista", markToWatch:"↩ Mover a por ver", removeBtn:"Eliminar",
    trailerBtn:"▶ Tráiler", addToList:"+ Añadir a la lista",
    director:"Director/a", cast:"Con", creator:"Creado por",
    seasons:(n)=> n > 1 ? `${n} temporadas` : `${n} temporada`,
    emptyToWatch:"No hay títulos por ver", emptyWatched:"No hay títulos vistos",
    confirmRemove:(title)=>`¿Eliminar "${title}" de la lista?`,
    unauthorizedAlert:"Acceso no autorizado para esta cuenta de Gmail.",
    sortDateDesc:"Fecha añadido ↓", sortDateAsc:"Fecha añadido ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortStarDesc:"Nota ↓", sortStarAsc:"Nota ↑",
    allGenres:"Todos los géneros",
    filterAll:"Todo", filterMovies:"🎬 Películas", filterSeries:"📺 Series",
    badgeMovie:"Película", badgeSerie:"Serie",
    ratingPopupTitle:"¿Tu nota?",
    ratingPopupSub:(title)=>`¿Qué opinas de "${title}"?`,
    ratingPopupSkip:"Omitir",
    yourRating:"Tu nota :",
    durationMin:"Duración mín :", durationMax:"Duración máx :",
    durationNoMin:"Sin mín", durationNoMax:"Sin máx",
    episodeDuration:(n)=>`~${n} min/ep.`,
    listSearchPlaceholder:"Filtrar por título, director, actor…",
    showMore:(n)=>`Ver más (${n} restantes)`,
    resetFilters:"↺ Restablecer filtros",
    notifTitle:(n) => n === 1 ? "1 nuevo título añadido" : `${n} nuevos títulos añadidos`,
    notifBy:(email) => `por ${email.split("@")[0]}`,
    notifSee:"Ver →",
    notifDismiss:"✕",
    historyTitle:"Historial",
    histActionAdd:(who) => `${who} añadió`,
    histActionWatch:(who) => `${who} marcó como vista`,
    histActionRate:(who) => `${who} valoró`,
    histEmpty:"Sin actividad reciente",
    histStars:(n) => "★".repeat(n) + "☆".repeat(4-n),
    tmdbLang:"es-ES",
  },
  en: {
    loginSubtitle:"Your shared watchlist", loginBtn:"Sign in with Google",
    logout:"Sign out", searchPlaceholder:"Search movies or TV shows…", searchBtn:"Search",
    tabToWatch:"To Watch", tabWatched:"Watched", loading:"Loading…",
    noResults:"No results found", searching:"Searching…",
    addBtn:"+ Add", addedBtn:"✓ Added",
    markWatched:"✓ Mark as watched", markToWatch:"↩ Move to watchlist", removeBtn:"Remove",
    trailerBtn:"▶ Trailer", addToList:"+ Add to list",
    director:"Director", cast:"With", creator:"Created by",
    seasons:(n)=> n > 1 ? `${n} seasons` : `${n} season`,
    emptyToWatch:"Nothing in your watchlist yet", emptyWatched:"Nothing watched yet",
    confirmRemove:(title)=>`Remove "${title}" from the list?`,
    unauthorizedAlert:"Access not allowed for this Gmail account.",
    sortDateDesc:"Date added ↓", sortDateAsc:"Date added ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortStarDesc:"Rating ↓", sortStarAsc:"Rating ↑",
    allGenres:"All genres",
    filterAll:"All", filterMovies:"🎬 Movies", filterSeries:"📺 Series",
    badgeMovie:"Movie", badgeSerie:"Series",
    ratingPopupTitle:"Your rating?",
    ratingPopupSub:(title)=>`What did you think of "${title}"?`,
    ratingPopupSkip:"Skip",
    yourRating:"Your rating:",
    durationMin:"Min duration:", durationMax:"Max duration:",
    durationNoMin:"No min", durationNoMax:"No max",
    episodeDuration:(n)=>`~${n} min/ep.`,
    listSearchPlaceholder:"Filter by title, director, actor…",
    showMore:(n)=>`Show more (${n} remaining)`,
    resetFilters:"↺ Reset filters",
    notifTitle:(n) => n === 1 ? "1 new title added" : `${n} new titles added`,
    notifBy:(email) => `by ${email.split("@")[0]}`,
    notifSee:"See →",
    notifDismiss:"✕",
    historyTitle:"History",
    histActionAdd:(who) => `${who} added`,
    histActionWatch:(who) => `${who} marked as watched`,
    histActionRate:(who) => `${who} rated`,
    histEmpty:"No recent activity",
    histStars:(n) => "★".repeat(n) + "☆".repeat(4-n),
    tmdbLang:"en-US",
  },
};

// ─────────────────────────────────────────
//  FIREBASE
// ─────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, deleteDoc,
         onSnapshot, query, orderBy, updateDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const fbApp     = initializeApp(FIREBASE_CONFIG);
const auth      = getAuth(fbApp);
const db        = getFirestore(fbApp);
const gProvider = new GoogleAuthProvider();

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
let movies         = {};
let currentTab     = "to_watch";
let currentLang    = localStorage.getItem("lang") || "fr";
let viewMode       = localStorage.getItem("view") || "gallery";
let sortMode       = localStorage.getItem("sort") || "date_desc";
let genreFilter    = "all";
let mediaFilter    = "all";
let durationMin    = null;
let durationMax    = null;
let listSearchQuery= "";
let unsubscribe    = null;
let currentUser    = null;

let _searchBuffer  = [];
let _searchShown   = 0;
const PAGE_SIZE    = 10;

// ─────────────────────────────────────────
//  NOTIFICATIONS — dernière visite
// ─────────────────────────────────────────
// Clé localStorage : stocke le timestamp (ms) de la dernière connexion
const LAST_SEEN_KEY = "lastSeen";

// Appelé une seule fois après connexion : lit lastSeen, puis le met à jour
let _lastSeenTs = 0;
function initLastSeen() {
  const stored = localStorage.getItem(LAST_SEEN_KEY);
  _lastSeenTs = stored ? Number(stored) : 0;
  // On met à jour lastSeen MAINTENANT pour la prochaine session
  localStorage.setItem(LAST_SEEN_KEY, Date.now().toString());
}

// Appelé après le premier chargement de Firestore
// Cherche les titres ajoutés par l'AUTRE utilisateur depuis lastSeen
function checkNewItems() {
  if (!currentUser || !_lastSeenTs) return;
  const myEmail = currentUser.email;

  const newItems = Object.values(movies).filter(m => {
    if (!m.addedAt?.seconds) return false;               // pas encore persisté
    if (m.addedBy === myEmail) return false;              // ajouté par moi
    return m.addedAt.seconds * 1000 > _lastSeenTs;       // plus récent que ma dernière visite
  });

  if (newItems.length === 0) return;

  showNotifBanner(newItems);
}

function showNotifBanner(items) {
  document.getElementById("notif-banner")?.remove();

  const otherEmail = items[0].addedBy || "";
  const banner = document.createElement("div");
  banner.id = "notif-banner";
  banner.className = "notif-banner";

  // Détail des titres (max 3 affichés)
  const preview = items.slice(0, 3).map(m =>
    `<span class="notif-item">${escHtml(m.title)}</span>`
  ).join("");
  const more = items.length > 3
    ? `<span class="notif-more">+${items.length - 3}</span>`
    : "";

  banner.innerHTML = `
    <div class="notif-content">
      <span class="notif-icon">🔔</span>
      <div class="notif-text">
        <strong>${t("notifTitle", items.length)}</strong>
        <span class="notif-by">${t("notifBy", otherEmail)}</span>
        <div class="notif-items">${preview}${more}</div>
      </div>
    </div>
    <div class="notif-actions">
      <button class="notif-see">${t("notifSee")}</button>
      <button class="notif-dismiss">${t("notifDismiss")}</button>
    </div>`;

  // Insérer sous le header
  document.querySelector("header").after(banner);

  // "Voir →" : bascule sur l'onglet "à voir" et ferme
  banner.querySelector(".notif-see").addEventListener("click", () => {
    // Active l'onglet "to_watch"
    document.querySelectorAll(".tab").forEach(tab => {
      const isToWatch = tab.dataset.tab === "to_watch";
      tab.classList.toggle("active", isToWatch);
    });
    document.getElementById("list-to_watch").classList.remove("hidden");
    document.getElementById("list-watched").classList.add("hidden");
    currentTab = "to_watch";
    banner.remove();
  });

  // Fermer
  banner.querySelector(".notif-dismiss").addEventListener("click", () => banner.remove());
  // PAS d'auto-disparition — le bandeau reste jusqu'au clic utilisateur
}

// ─────────────────────────────────────────
//  HISTORIQUE — panneau latéral
// ─────────────────────────────────────────
let _historyOpen = false;
let _unreadCount = 0;

// Construit la liste des actions à partir des données Firestore existantes
function buildHistoryEvents() {
  const events = [];
  const allMovies = Object.values(movies);

  allMovies.forEach(m => {
    const addedWho   = (m.addedBy   || "").split("@")[0];
    const watchedWho = (m.watchedBy || "").split("@")[0]; // "" si ancien film sans ce champ

    // Ajout — toujours attribué à addedBy (fiable)
    if (m.addedAt?.seconds) {
      events.push({
        type:      "add",
        ts:        m.addedAt.seconds * 1000,
        who:       addedWho,
        title:     m.title,
        poster:    m.posterPath,
        mediaType: m.mediaType,
        tmdbId:    m.tmdbId,
      });
    }

    // Visionnage — attribué à watchedBy si disponible, sinon anonyme
    if (m.watchedAt?.seconds) {
      events.push({
        type:      "watch",
        ts:        m.watchedAt.seconds * 1000,
        who:       watchedWho,   // "" pour les anciens films → affiché sans nom
        title:     m.title,
        poster:    m.posterPath,
        mediaType: m.mediaType,
        tmdbId:    m.tmdbId,
      });
    }

    // Note — même attribution que le visionnage (c'est la même personne)
    if (m.rating && m.watchedAt?.seconds) {
      events.push({
        type:      "rate",
        ts:        m.watchedAt.seconds * 1000 + 1,
        who:       watchedWho,   // "" pour les anciens films
        title:     m.title,
        poster:    m.posterPath,
        rating:    m.rating,
        mediaType: m.mediaType,
        tmdbId:    m.tmdbId,
      });
    }
  });

  events.sort((a, b) => b.ts - a.ts);
  return events.slice(0, 50);
}

function formatRelativeTime(ts) {
  const diff = Date.now() - ts;
  const min  = Math.floor(diff / 60000);
  const h    = Math.floor(diff / 3600000);
  const d    = Math.floor(diff / 86400000);
  if (min < 1)  return currentLang === "fr" ? "à l'instant" : currentLang === "es" ? "ahora mismo" : "just now";
  if (min < 60) return currentLang === "fr" ? `il y a ${min} min` : currentLang === "es" ? `hace ${min} min` : `${min} min ago`;
  if (h < 24)   return currentLang === "fr" ? `il y a ${h}h` : currentLang === "es" ? `hace ${h}h` : `${h}h ago`;
  return currentLang === "fr" ? `il y a ${d}j` : currentLang === "es" ? `hace ${d}d` : `${d}d ago`;
}

function renderHistoryPanel() {
  const list   = document.getElementById("history-list");
  const title  = document.getElementById("history-title");
  if (!list || !title) return;
  title.textContent = t("historyTitle");

  const events = buildHistoryEvents();

  if (!events.length) {
    list.innerHTML = `<div class="hist-empty">${t("histEmpty")}</div>`;
    return;
  }

  const TMDB_IMG_TINY = "https://image.tmdb.org/t/p/w92";

  list.innerHTML = events.map(ev => {
    const poster = ev.poster
      ? `<img class="hist-poster" src="${TMDB_IMG_TINY}${ev.poster}" alt="">`
      : `<div class="hist-poster hist-poster-placeholder">${ev.mediaType==="tv"?"📺":"🎬"}</div>`;

    let action = "", detail = "";
    const whoLabel = ev.who || (currentLang === "fr" ? "Inconnu" : currentLang === "es" ? "Desconocido" : "Unknown");
    if (ev.type === "add") {
      action = t("histActionAdd", whoLabel);
      detail = `<span class="hist-badge hist-badge-add">+</span>`;
    } else if (ev.type === "watch") {
      action = t("histActionWatch", whoLabel);
      detail = `<span class="hist-badge hist-badge-watch">✓</span>`;
    } else if (ev.type === "rate") {
      action = t("histActionRate", whoLabel);
      detail = `<span class="hist-stars">${t("histStars", ev.rating)}</span>`;
    }

    const isNew = ev.ts > _lastSeenTs;

    return `<div class="hist-item${isNew?" hist-item-new":""}"
        data-type="${ev.mediaType}" data-id="${ev.tmdbId}">
      <div class="hist-poster-wrap">${poster}${detail}</div>
      <div class="hist-info">
        <div class="hist-action">${action}</div>
        <div class="hist-title">${escHtml(ev.title)}</div>
        <div class="hist-time">${formatRelativeTime(ev.ts)}</div>
      </div>
    </div>`;
  }).join("");

  // Clic sur un item → ouvre la modal du film
  list.querySelectorAll(".hist-item").forEach(item => {
    item.addEventListener("click", () => {
      closeHistoryPanel();
      openModal(item.dataset.type, Number(item.dataset.id));
    });
  });
}

function updateHistoryBadge() {
  if (!currentUser) return;
  const myEmail  = currentUser.email;
  const newCount = Object.values(movies).filter(m =>
    m.addedBy !== myEmail &&
    m.addedAt?.seconds &&
    m.addedAt.seconds * 1000 > _lastSeenTs
  ).length;

  _unreadCount = newCount;
  const badge = document.getElementById("history-badge");
  if (!badge) return;
  if (newCount > 0) {
    badge.textContent = newCount > 9 ? "9+" : String(newCount);
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function openHistoryPanel() {
  _historyOpen = true;
  renderHistoryPanel();
  document.getElementById("history-panel").classList.remove("hidden");
  document.getElementById("history-backdrop").classList.remove("hidden");
  // Masque le badge une fois le panneau ouvert
  document.getElementById("history-badge")?.classList.add("hidden");
}

function closeHistoryPanel() {
  _historyOpen = false;
  document.getElementById("history-panel").classList.add("hidden");
  document.getElementById("history-backdrop").classList.add("hidden");
}

// Listeners cloche / fermeture
document.getElementById("btn-history").addEventListener("click", () => {
  _historyOpen ? closeHistoryPanel() : openHistoryPanel();
});
document.getElementById("btn-history-close").addEventListener("click", closeHistoryPanel);
document.getElementById("history-backdrop").addEventListener("click", closeHistoryPanel);

// ─────────────────────────────────────────
//  UTILS
// ─────────────────────────────────────────
function formatRuntime(min) {
  if (!min || min <= 0) return null;
  const h = Math.floor(min / 60), m = min % 60;
  return h > 0 ? `${h}h${m > 0 ? String(m).padStart(2,"0") : ""}` : `${m}min`;
}
function matchesDuration(m) {
  if (m.mediaType === "tv") return true;
  const rt = m.runtime;
  if (!rt) return true;
  if (durationMin !== null && rt < durationMin) return false;
  if (durationMax !== null && rt > durationMax) return false;
  return true;
}
function matchesListSearch(m) {
  if (!listSearchQuery) return true;
  const q = listSearchQuery.toLowerCase();
  return [
    m.title || "", m.overview || "", m.director || "", m.creators || "",
    ...(m.cast || []), ...(m.genres || []),
  ].some(f => f.toLowerCase().includes(q));
}
function escHtml(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ─────────────────────────────────────────
//  STAR HELPERS
// ─────────────────────────────────────────
// Génère le HTML des 4 étoiles (toujours 4, pleines ou vides)
function starsHtml(rating, size = "card") {
  const filled = rating || 0;
  return Array.from({length: 4}, (_, i) =>
    `<span class="s${i < filled ? " on" : ""}">★</span>`
  ).join("");
}

// Crée les boutons étoiles interactifs et retourne l'élément DOM
function buildStarRating({ containerId, labelId, initialValue, onSelect }) {
  const container = document.getElementById(containerId);
  const labelEl   = labelId ? document.getElementById(labelId) : null;
  if (!container) return;

  let current = initialValue || 0;

  container.querySelectorAll(".star-btn").forEach(btn => {
    const val = Number(btn.dataset.val);

    btn.classList.toggle("on", val <= current);

    btn.addEventListener("mouseenter", () => {
      container.querySelectorAll(".star-btn").forEach(b =>
        b.classList.toggle("hover-on", Number(b.dataset.val) <= val));
      if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][val] || "";
    });
    btn.addEventListener("mouseleave", () => {
      container.querySelectorAll(".star-btn").forEach(b => b.classList.remove("hover-on"));
      if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][current] || "";
    });
    btn.addEventListener("click", async () => {
      current = val;
      container.querySelectorAll(".star-btn").forEach(b =>
        b.classList.toggle("on", Number(b.dataset.val) <= val));
      if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][val] || "";
      if (onSelect) await onSelect(val);
    });
  });

  if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][current] || "";
}

function starButtonsHtml(size = "modal") {
  return Array.from({length: 4}, (_, i) =>
    `<button class="star-btn" data-val="${i+1}">★</button>`
  ).join("");
}

// ─────────────────────────────────────────
//  I18N
// ─────────────────────────────────────────
const t = (key, ...args) => {
  const val = I18N[currentLang][key];
  return typeof val === "function" ? val(...args) : (val ?? key);
};

function applyTranslations() {
  document.getElementById("login-subtitle").textContent     = t("loginSubtitle");
  document.getElementById("login-btn-text").textContent     = t("loginBtn");
  document.getElementById("btn-logout").textContent         = t("logout");
  document.getElementById("search-input").placeholder       = t("searchPlaceholder");
  document.getElementById("btn-search").textContent         = t("searchBtn");
  document.getElementById("tab-to-watch-label").textContent = t("tabToWatch");
  document.getElementById("tab-watched-label").textContent  = t("tabWatched");
  const lsi = document.getElementById("list-search-input");
  if (lsi) lsi.placeholder = t("listSearchPlaceholder");
  document.documentElement.lang = currentLang;
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === currentLang));
  buildToolbar();
  renderLists();
}
function setLang(lang) { currentLang = lang; localStorage.setItem("lang", lang); applyTranslations(); }
document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ─────────────────────────────────────────
//  RESET FILTERS
// ─────────────────────────────────────────
function resetFilters() {
  mediaFilter = "all"; genreFilter = "all";
  durationMin = null;  durationMax = null;
  listSearchQuery = ""; sortMode = "date_desc";
  localStorage.setItem("sort", sortMode);
  const lsi = document.getElementById("list-search-input");
  if (lsi) lsi.value = "";
  buildToolbar(); renderLists();
}

// ─────────────────────────────────────────
//  TOOLBAR
// ─────────────────────────────────────────
function buildToolbar() {
  const toolbar = document.querySelector(".toolbar");
  toolbar.innerHTML = `
    <div class="toolbar-row">
      <div class="media-filter" id="media-filter"></div>
      <select id="genre-select" class="tb-select"></select>
      <select id="sort-select" class="tb-select"></select>
      <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
        <button id="btn-reset-filters" class="btn-reset" title="${t("resetFilters")}">↺</button>
        <button class="view-btn" id="btn-gallery" title="Galerie">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>
        </button>
        <button class="view-btn" id="btn-list" title="Liste">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="20" height="2.5" rx="1.25"/><rect x="2" y="10.75" width="20" height="2.5" rx="1.25"/><rect x="2" y="17.5" width="20" height="2.5" rx="1.25"/></svg>
        </button>
      </div>
    </div>
    <div class="toolbar-row">
      <span class="tb-label">${t("durationMin")}</span>
      <select id="dur-min" class="tb-select"></select>
      <span class="tb-label">${t("durationMax")}</span>
      <select id="dur-max" class="tb-select"></select>
    </div>`;

  buildMediaFilter();
  buildGenreSelect();
  buildSortSelect();
  buildDurationSelects();
  applyViewMode();

  document.getElementById("sort-select").addEventListener("change", e => {
    sortMode = e.target.value; localStorage.setItem("sort", sortMode); renderLists();
  });
  document.getElementById("btn-gallery").addEventListener("click", () => {
    viewMode = "gallery"; localStorage.setItem("view", viewMode); applyViewMode();
  });
  document.getElementById("btn-list").addEventListener("click", () => {
    viewMode = "list"; localStorage.setItem("view", viewMode); applyViewMode();
  });
  document.getElementById("btn-reset-filters").addEventListener("click", resetFilters);
}

function buildSortSelect() {
  const sel = document.getElementById("sort-select");
  if (!sel) return;
  sel.innerHTML = [
    ["date_desc", t("sortDateDesc")], ["date_asc",  t("sortDateAsc")],
    ["alpha_az",  t("sortAlphaAZ")],  ["alpha_za",  t("sortAlphaZA")],
    ["star_desc", t("sortStarDesc")], ["star_asc",  t("sortStarAsc")],
  ].map(([v,l]) => `<option value="${v}" ${sortMode===v?"selected":""}>${l}</option>`).join("");
}

function buildDurationSelects() {
  const selMin = document.getElementById("dur-min");
  const selMax = document.getElementById("dur-max");
  if (!selMin || !selMax) return;
  const fillMin = () => {
    selMin.innerHTML = `<option value="">${t("durationNoMin")}</option>` +
      DURATION_OPTIONS.map(d =>
        `<option value="${d.value}" ${durationMin===d.value?"selected":""}>${d.label[currentLang]}</option>`
      ).join("");
  };
  const fillMax = () => {
    selMax.innerHTML = `<option value="">${t("durationNoMax")}</option>` +
      DURATION_OPTIONS.filter(d => durationMin===null||d.value>durationMin)
        .map(d =>
          `<option value="${d.value}" ${durationMax===d.value?"selected":""}>${d.label[currentLang]}</option>`
        ).join("");
  };
  fillMin(); fillMax();
  selMin.addEventListener("change", () => {
    durationMin = selMin.value===""?null:Number(selMin.value);
    if (durationMax!==null&&durationMin!==null&&durationMax<=durationMin) durationMax=null;
    fillMax(); renderLists();
  });
  selMax.addEventListener("change", () => {
    durationMax = selMax.value===""?null:Number(selMax.value); renderLists();
  });
}

function buildMediaFilter() {
  const mf = document.getElementById("media-filter");
  if (!mf) return;
  mf.innerHTML = [["all",t("filterAll")],["movie",t("filterMovies")],["tv",t("filterSeries")]]
    .map(([v,l]) => `<button class="mf-btn ${mediaFilter===v?"active":""}" data-mf="${v}">${l}</button>`)
    .join("");
  mf.querySelectorAll(".mf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      mediaFilter = btn.dataset.mf;
      mf.querySelectorAll(".mf-btn").forEach(b => b.classList.toggle("active", b.dataset.mf===mediaFilter));
      renderLists();
    });
  });
}

function buildGenreSelect() {
  const sel = document.getElementById("genre-select");
  if (!sel) return;
  const allGenres = new Set();
  Object.values(movies).forEach(m => (m.genres||[]).forEach(g => allGenres.add(g)));
  sel.innerHTML = `<option value="all">${t("allGenres")}</option>` +
    [...allGenres].sort().map(g =>
      `<option value="${g}" ${genreFilter===g?"selected":""}>${g}</option>`).join("");
  sel.addEventListener("change", e => { genreFilter = e.target.value; renderLists(); });
}

function applyViewMode() {
  const g = viewMode==="gallery";
  document.getElementById("btn-gallery")?.classList.toggle("active", g);
  document.getElementById("btn-list")?.classList.toggle("active", !g);
  document.querySelectorAll(".movie-grid").forEach(el => el.classList.toggle("list-mode", !g));
}

function buildListSearchBar() {
  if (document.getElementById("list-search-bar")) return;
  const bar = document.createElement("div");
  bar.id = "list-search-bar"; bar.className = "list-search-bar";
  bar.innerHTML = `<input id="list-search-input" type="text" placeholder="${t("listSearchPlaceholder")}">`;
  document.querySelector(".toolbar").after(bar);
  document.getElementById("list-search-input").addEventListener("input", e => {
    listSearchQuery = e.target.value.toLowerCase().trim(); renderLists();
  });
}

// ─────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────
document.getElementById("btn-login").addEventListener("click", () =>
  signInWithPopup(auth, gProvider).catch(console.error));
document.getElementById("btn-logout").addEventListener("click", () => signOut(auth));

onAuthStateChanged(auth, user => {
  if (user && ALLOWED_EMAILS.includes(user.email)) {
    currentUser = user;
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("user-email").textContent = user.email;
    initLastSeen();  // ← mémorise la date de visite précédente
    startListening();
  } else {
    currentUser = null;
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
    if (unsubscribe) { unsubscribe(); unsubscribe = null; }
    if (user && !ALLOWED_EMAILS.includes(user.email)) { signOut(auth); alert(t("unauthorizedAlert")); }
  }
});

// ─────────────────────────────────────────
//  FIRESTORE
// ─────────────────────────────────────────
let _firstLoad = true;  // détecte le premier chargement Firestore

function startListening() {
  const q = query(collection(db, "movies"), orderBy("addedAt", "desc"));
  unsubscribe = onSnapshot(q, snap => {
    movies = {};
    snap.forEach(d => { movies[d.id] = d.data(); });
    buildGenreSelect();
    renderLists();
    updateHistoryBadge();  // ← met à jour le badge cloche
    // Re-render le panneau si ouvert
    if (_historyOpen) renderHistoryPanel();
    // Vérification des nouveautés uniquement au premier chargement
    if (_firstLoad) {
      _firstLoad = false;
      checkNewItems();
    }
  });
}

function docKey(mediaType, tmdbId) { return `${mediaType}_${tmdbId}`; }

async function addItem(item) {
  await setDoc(doc(db, "movies", docKey(item.mediaType, item.tmdbId)), {
    ...item, status: "to_watch",
    addedBy: currentUser.email, addedAt: serverTimestamp(),
    watchedAt: null, rating: null,
  });
}
async function markWatched(key, title) {
  await updateDoc(doc(db,"movies",key), {
    status:"watched",
    watchedAt: serverTimestamp(),
    watchedBy: currentUser.email,   // ← stocke qui a marqué comme vu
  });
  closeModal(); showRatingPopup(key, title);
}
async function markToWatch(key) {
  await updateDoc(doc(db,"movies",key), { status:"to_watch", watchedAt: null, rating: null });
}
async function saveRating(key, value) {
  await updateDoc(doc(db,"movies",key), { rating: value });
}
async function removeItem(key) {
  await deleteDoc(doc(db,"movies",key));
}

// ─────────────────────────────────────────
//  STAR RATING POPUP (remplace le popup smiley)
// ─────────────────────────────────────────
function showRatingPopup(key, title) {
  document.getElementById("rating-popup")?.remove();
  const popup = document.createElement("div");
  popup.id = "rating-popup";
  popup.innerHTML = `
    <div class="rating-popup-backdrop"></div>
    <div class="rating-popup-box">
      <h3>${t("ratingPopupTitle")}</h3>
      <p>${t("ratingPopupSub", title)}</p>
      <div class="popup-stars" id="popup-stars">${starButtonsHtml()}</div>
      <div class="popup-star-label" id="popup-star-label"></div>
      <button class="rating-popup-skip">${t("ratingPopupSkip")}</button>
    </div>`;
  document.body.appendChild(popup);

  buildStarRating({
    containerId: "popup-stars",
    labelId:     "popup-star-label",
    initialValue: 0,
    onSelect: async (val) => {
      await saveRating(key, val);
      setTimeout(() => popup.remove(), 300);
    },
  });

  popup.querySelector(".rating-popup-skip").addEventListener("click", () => popup.remove());
  popup.querySelector(".rating-popup-backdrop").addEventListener("click", () => popup.remove());
}

// ─────────────────────────────────────────
//  TMDB
// ─────────────────────────────────────────
const TMDB_BASE     = "https://api.themoviedb.org/3";
const TMDB_IMG      = "https://image.tmdb.org/t/p/w500";
const TMDB_IMG_SM   = "https://image.tmdb.org/t/p/w185";
const TMDB_PAGE_URL = "https://www.themoviedb.org";

function tmdbPageUrl(mediaType, tmdbId) {
  return `${TMDB_PAGE_URL}/${mediaType==="tv"?"tv":"movie"}/${tmdbId}`;
}

async function fetchAllPages(endpoint, queryStr, lang, maxPages=5) {
  let results=[], page=1, totalPages=1;
  while (page<=totalPages && page<=maxPages) {
    const r = await fetch(`${TMDB_BASE}/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(queryStr)}&language=${lang}&page=${page}`).then(r=>r.json());
    results = results.concat(r.results||[]);
    totalPages = r.total_pages||1; page++;
  }
  return results;
}

async function searchBoth(q) {
  const lang = t("tmdbLang");
  const [movs, shows] = await Promise.all([
    fetchAllPages("search/movie", q, lang),
    fetchAllPages("search/tv",    q, lang),
  ]);
  const qLow = q.toLowerCase();
  return [...movs.map(m=>({...m,_type:"movie"})), ...shows.map(s=>({...s,_type:"tv"}))]
    .map(item => {
      const title = (item._type==="tv"?item.name:item.title)||"";
      return { ...item, _score: (title.toLowerCase().startsWith(qLow)?1000:0)+(item.popularity||0) };
    })
    .sort((a,b)=>b._score-a._score);
}

async function getDetails(mediaType, tmdbId) {
  const lang = t("tmdbLang"), base = mediaType==="tv"?"tv":"movie";
  const [details, credits, videos, providers] = await Promise.all([
    fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/watch/providers?api_key=${TMDB_API_KEY}`).then(r=>r.json()),
  ]);
  let vids = videos.results||[];
  if (!vids.length) {
    const fb = await fetch(`${TMDB_BASE}/${base}/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=en-US`).then(r=>r.json());
    vids = fb.results||[];
  }
  // Extrait les plateformes pour la France (FR)
  const frProviders = (providers.results||{}).FR || null;
  return { details, credits, videoResults: vids, frProviders };
}

// ─────────────────────────────────────────
//  SEARCH UI
// ─────────────────────────────────────────
const searchInput   = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

document.getElementById("btn-search").addEventListener("click", doSearch);
searchInput.addEventListener("keydown", e => { if (e.key==="Enter") doSearch(); });
document.addEventListener("click", e => {
  if (!e.target.closest(".search-section")) searchResults.classList.add("hidden");
});

async function doSearch() {
  const q = searchInput.value.trim(); if (!q) return;
  searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("searching")}</div>`;
  searchResults.classList.remove("hidden");
  _searchBuffer = await searchBoth(q);
  _searchShown  = 0;
  appendSearchResults();
}

function appendSearchResults() {
  searchResults.querySelector(".sr-load-more")?.remove();
  if (_searchShown === 0) searchResults.innerHTML = "";
  if (!_searchBuffer.length) {
    searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("noResults")}</div>`;
    return;
  }
  const slice = _searchBuffer.slice(_searchShown, _searchShown + PAGE_SIZE);
  _searchShown += slice.length;

  slice.forEach(m => {
    const mtype  = m._type, key = docKey(mtype, m.id);
    const already= !!movies[key];
    const title  = mtype==="tv" ? m.name : m.title;
    const year   = mtype==="tv" ? m.first_air_date?.slice(0,4) : m.release_date?.slice(0,4);
    const badge  = mtype==="tv"
      ? `<span class="type-badge tv">📺 ${t("badgeSerie")}</span>`
      : `<span class="type-badge movie">🎬 ${t("badgeMovie")}</span>`;
    const poster = m.poster_path
      ? `<img src="${TMDB_IMG_SM}${m.poster_path}" alt="${escHtml(title)}">`
      : `<div class="sr-poster-placeholder">${mtype==="tv"?"📺":"🎬"}</div>`;

    const div = document.createElement("div");
    div.className = "search-result-item";
    Object.assign(div.dataset, {
      id: m.id, type: mtype,
      title: encodeURIComponent(title||""), poster: m.poster_path||"",
      year: year||"", overview: encodeURIComponent(m.overview||""),
    });
    div.innerHTML = `${poster}
      <div class="sr-info">
        <div class="sr-title">${escHtml(title)}</div>
        <div class="sr-year">${badge} ${year||"—"}</div>
      </div>
      <button class="sr-add ${already?"added":""}" ${already?"disabled":""}>
        ${already?t("addedBtn"):t("addBtn")}
      </button>`;

    div.querySelector(".sr-add:not(.added)")?.addEventListener("click", async e => {
      e.stopPropagation();
      const btn = div.querySelector(".sr-add");
      const {id, type, title: rawTitle, poster, year, overview} = div.dataset;
      const lang = t("tmdbLang"), base = type==="tv"?"tv":"movie";
      const [d, cr] = await Promise.all([
        fetch(`${TMDB_BASE}/${base}/${id}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
        fetch(`${TMDB_BASE}/${base}/${id}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
      ]);
      const runtime  = type==="tv"?((d.episode_run_time||[])[0]||null):(d.runtime||null);
      const director = type==="tv"?(d.created_by||[]).map(c=>c.name).join(", "):((cr.crew||[]).find(c=>c.job==="Director")?.name||"");
      const castList = (cr.cast||[]).slice(0,10).map(a=>a.name);
      await addItem({
        tmdbId:Number(id), mediaType:type, title:decodeURIComponent(rawTitle),
        posterPath:poster, releaseYear:Number(year)||null, overview:decodeURIComponent(overview),
        genres:(d.genres||[]).map(g=>g.name), runtime, director, cast:castList,
      });
      btn.textContent=t("addedBtn"); btn.classList.add("added"); btn.disabled=true;
    });

    div.addEventListener("click", e => {
      if (e.target.closest(".sr-add")) return;
      openModal(div.dataset.type, Number(div.dataset.id));
    });
    searchResults.appendChild(div);
  });

  const remaining = _searchBuffer.length - _searchShown;
  if (remaining > 0) {
    const btn = document.createElement("button");
    btn.className = "sr-load-more";
    btn.textContent = t("showMore", remaining);
    btn.addEventListener("click", e => { e.stopPropagation(); appendSearchResults(); });
    searchResults.appendChild(btn);
  }
}

// ─────────────────────────────────────────
//  SORT + FILTER
// ─────────────────────────────────────────
function sortAndFilter(list) {
  let out = [...list];
  if (mediaFilter!=="all") out=out.filter(m=>m.mediaType===mediaFilter);
  if (genreFilter!=="all") out=out.filter(m=>(m.genres||[]).includes(genreFilter));
  out=out.filter(matchesDuration).filter(matchesListSearch);
  switch (sortMode) {
    case "date_asc":  out.sort((a,b)=>(a.addedAt?.seconds||0)-(b.addedAt?.seconds||0)); break;
    case "date_desc": out.sort((a,b)=>(b.addedAt?.seconds||0)-(a.addedAt?.seconds||0)); break;
    case "alpha_az":  out.sort((a,b)=>a.title.localeCompare(b.title)); break;
    case "alpha_za":  out.sort((a,b)=>b.title.localeCompare(a.title)); break;
    case "star_desc": out.sort((a,b)=>(b.rating||0)-(a.rating||0)); break;
    case "star_asc":  out.sort((a,b)=>(a.rating||0)-(b.rating||0)); break;
  }
  return out;
}

// ─────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────
function renderLists() {
  const toWatch = Object.values(movies).filter(m=>m.status==="to_watch");
  const watched = Object.values(movies).filter(m=>m.status==="watched");
  document.getElementById("count-to-watch").textContent = toWatch.length;
  document.getElementById("count-watched").textContent  = watched.length;
  renderGrid("to_watch", sortAndFilter(toWatch));
  renderGrid("watched",  sortAndFilter(watched));
  applyViewMode();
}

function renderGrid(status, list) {
  const grid = document.getElementById(`list-${status}`);
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">${status==="to_watch"?"🍿":"🎬"}</div>
      <div>${status==="to_watch"?t("emptyToWatch"):t("emptyWatched")}</div>
    </div>`; return;
  }
  grid.innerHTML = list.map(m => {
    const key    = docKey(m.mediaType, m.tmdbId);
    const poster = m.posterPath
      ? `<img src="${TMDB_IMG}${m.posterPath}" alt="${escHtml(m.title)}" loading="lazy">`
      : `<div class="no-poster">${m.mediaType==="tv"?"📺":"🎬"}</div>`;
    const typeDot  = m.mediaType==="tv"?"📺":"🎬";
    const runtime  = m.runtime
      ? (m.mediaType==="tv"
          ? t("episodeDuration", m.runtime)
          : `⏱ ${formatRuntime(m.runtime)}`)
      : "";
    // Étoiles — toujours présentes, vides si pas de note (alignement garanti)
    const stars = `<span class="card-stars">${starsHtml(m.rating)}</span>`;
    return `<div class="movie-card" data-key="${key}" data-type="${m.mediaType}" data-id="${m.tmdbId}">
      ${poster}
      <div class="card-body">
        <div class="card-title">${escHtml(m.title)}</div>
        <div class="card-bottom">
          <span class="card-year-type">${m.releaseYear||"—"} ${typeDot}</span>
          ${stars}
        </div>
        ${runtime?`<div class="card-runtime">${runtime}</div>`:""}
      </div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".movie-card").forEach(card =>
    card.addEventListener("click", () => openModal(card.dataset.type, Number(card.dataset.id))));
}

// ─────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────
async function openModal(mediaType, tmdbId) {
  const modal   = document.getElementById("modal");
  const content = document.getElementById("modal-content");
  modal.classList.remove("hidden");
  content.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text2)">${t("loading")}</div>`;

  const key          = docKey(mediaType, tmdbId);
  const inCollection = movies[key];
  const { details, credits, videoResults, frProviders } = await getDetails(mediaType, tmdbId);

  const title   = mediaType==="tv" ? details.name : details.title;
  const year    = mediaType==="tv" ? details.first_air_date?.slice(0,4) : details.release_date?.slice(0,4);
  const genres  = (details.genres||[]).map(g=>g.name).join(", ");
  const cast    = (credits.cast||[]).slice(0,5).map(a=>a.name).join(", ");
  const trailer = videoResults.find(v=>v.site==="YouTube"&&v.type==="Trailer");

  let metaExtra = "";
  if (mediaType==="tv") {
    const s=details.number_of_seasons, ep=(details.episode_run_time||[])[0];
    if (s)  metaExtra+=t("seasons",s);
    if (ep) metaExtra+=(metaExtra?" · ":"")+t("episodeDuration",ep);
  } else if (details.runtime) {
    metaExtra=`⏱ ${formatRuntime(details.runtime)}`;
  }

  let creatorHtml="";
  if (mediaType==="tv") {
    const creators=(details.created_by||[]).map(c=>c.name).join(", ");
    if (creators) creatorHtml=`<div class="modal-cast"><strong>${t("creator")} :</strong> ${escHtml(creators)}</div>`;
  } else {
    const director=(credits.crew||[]).find(c=>c.job==="Director");
    if (director) creatorHtml=`<div class="modal-cast"><strong>${t("director")} :</strong> ${escHtml(director.name)}</div>`;
  }

  const posterHtml = details.poster_path
    ? `<img src="${TMDB_IMG}${details.poster_path}" alt="${escHtml(title)}">`
    : `<div class="no-poster">${mediaType==="tv"?"📺":"🎬"}</div>`;

  const typeBadge = mediaType==="tv"
    ? `<span class="type-badge tv">📺 ${t("badgeSerie")}</span>`
    : `<span class="type-badge movie">🎬 ${t("badgeMovie")}</span>`;

  const tmdbLink = `<a class="tmdb-link" href="${tmdbPageUrl(mediaType,tmdbId)}" target="_blank" rel="noopener">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>TMDB
  </a>`;

  // ── Plateformes de streaming (JustWatch via TMDB) ──
  let providersHtml = "";
  if (frProviders) {
    const jwLink = frProviders.link || "https://www.justwatch.com";
    const sections = [];

    // Inclus : abonnement (flatrate), location (rent), achat (buy)
    const types = [
      { key: "flatrate", label: { fr:"Inclus", es:"Incluido", en:"Streaming" } },
      { key: "rent",     label: { fr:"Location", es:"Alquiler", en:"Rent" } },
      { key: "buy",      label: { fr:"Achat", es:"Compra", en:"Buy" } },
    ];

    for (const { key: pKey, label } of types) {
      const list = frProviders[pKey];
      if (!list?.length) continue;
      const logos = list.map(p =>
        `<img class="provider-logo" src="https://image.tmdb.org/t/p/original${p.logo_path}"
          alt="${escHtml(p.provider_name)}" title="${escHtml(p.provider_name)}">`
      ).join("");
      sections.push(`
        <div class="providers-group">
          <span class="providers-type">${label[currentLang]}</span>
          <div class="providers-logos">${logos}</div>
        </div>`);
    }

    if (sections.length) {
      providersHtml = `
        <div class="modal-section-title">🇫🇷 Où regarder</div>
        <a class="providers-wrap" href="${escHtml(jwLink)}" target="_blank" rel="noopener">
          ${sections.join("")}
          <span class="providers-powered">Données JustWatch</span>
        </a>`;
    }
  }

  // Note étoiles dans la modal (uniquement si film vu)
  let ratingHtml = "";
  if (inCollection?.status==="watched") {
    ratingHtml = `
      <div class="modal-section-title">${t("yourRating")}</div>
      <div class="star-rating-row">
        <div id="modal-stars">${starButtonsHtml()}</div>
        <span class="star-label" id="modal-star-label"></span>
      </div>`;
  }

  let actions="";
  if (inCollection) {
    actions += inCollection.status==="to_watch"
      ? `<button class="btn-primary" id="modal-watched">${t("markWatched")}</button>`
      : `<button class="btn-secondary" id="modal-to-watch">${t("markToWatch")}</button>`;
    actions += `<button class="btn-danger" id="modal-remove">${t("removeBtn")}</button>`;
  } else {
    actions += `<button class="btn-primary" id="modal-add">${t("addToList")}</button>`;
  }
  if (trailer) {
    actions += `<a class="trailer-btn" href="https://www.youtube.com/watch?v=${trailer.key}" target="_blank" rel="noopener">${t("trailerBtn")}</a>`;
  }

  content.innerHTML = `
    <div class="modal-inner">
      <div class="modal-poster">${posterHtml}</div>
      <div class="modal-info">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">
          ${typeBadge} ${tmdbLink}
        </div>
        <div class="modal-title">${escHtml(title)}</div>
        <div class="modal-meta">${year||"—"}${metaExtra?" · "+metaExtra:""}${genres?" · "+genres:""}</div>
        ${creatorHtml}
        ${cast?`<div class="modal-cast"><strong>${t("cast")} :</strong> ${escHtml(cast)}</div>`:""}
        ${details.overview?`<div class="modal-overview">${escHtml(details.overview)}</div>`:""}
        ${providersHtml}
        ${ratingHtml}
        <div class="modal-actions">${actions}</div>
      </div>
    </div>`;

  // Active les étoiles interactives si film vu
  if (inCollection?.status==="watched") {
    buildStarRating({
      containerId:  "modal-stars",
      labelId:      "modal-star-label",
      initialValue: inCollection.rating || 0,
      onSelect: async (val) => { await saveRating(key, val); },
    });
  }

  document.getElementById("modal-add")?.addEventListener("click", async () => {
    const lang=t("tmdbLang"), base=mediaType==="tv"?"tv":"movie";
    const [d,cr]=await Promise.all([
      fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
      fetch(`${TMDB_BASE}/${base}/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    ]);
    const runtime=mediaType==="tv"?((d.episode_run_time||[])[0]||null):(d.runtime||null);
    const director=mediaType==="tv"?(d.created_by||[]).map(c=>c.name).join(", "):((cr.crew||[]).find(c=>c.job==="Director")?.name||"");
    const castList=(cr.cast||[]).slice(0,10).map(a=>a.name);
    await addItem({
      tmdbId, mediaType, title, posterPath:details.poster_path||"",
      releaseYear:Number(year)||null, overview:details.overview||"",
      genres:(d.genres||[]).map(g=>g.name), runtime, director, cast:castList,
    });
    closeModal();
  });
  document.getElementById("modal-watched")?.addEventListener("click", ()=>markWatched(key,title));
  document.getElementById("modal-to-watch")?.addEventListener("click", async()=>{await markToWatch(key);closeModal();});
  document.getElementById("modal-remove")?.addEventListener("click", async()=>{
    if (confirm(t("confirmRemove",title))){await removeItem(key);closeModal();}
  });
}

function closeModal() { document.getElementById("modal").classList.add("hidden"); }
document.getElementById("modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e=>{if(e.key==="Escape")closeModal();});

// ─────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    currentTab = tab.dataset.tab;
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("list-to_watch").classList.toggle("hidden", currentTab!=="to_watch");
    document.getElementById("list-watched").classList.toggle("hidden",  currentTab!=="watched");
  });
});

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
buildToolbar();
buildListSearchBar();
applyTranslations();
