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
//  ÉTOILES
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
//  DÉCENNIES (filtre année)
// ─────────────────────────────────────────
const DECADES = [1960,1970,1980,1990,2000,2010,2020];

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
    allGenres:"Tous les genres", allPlatforms:"Toutes plateformes",
    filterAll:"Tout", filterMovies:"🎬 Films", filterSeries:"📺 Séries",
    badgeMovie:"Film", badgeSerie:"Série",
    ratingPopupTitle:"Votre note ?",
    ratingPopupSub:(title)=>`Que pensez-vous de "${title}" ?`,
    ratingPopupSkip:"Passer", yourRating:"Votre note :",
    durationMin:"Durée min :", durationMax:"Durée max :",
    durationNoMin:"Pas de min", durationNoMax:"Pas de max",
    episodeDuration:(n)=>`~${n} min/ép.`,
    listSearchPlaceholder:"Filtrer par titre, réalisateur, acteur…",
    showMore:(n)=>`Voir plus (${n} restants)`,
    resetFilters:"↺ Réinitialiser les filtres",
    notifTitle:(n) => n === 1 ? "1 nouveau titre ajouté" : `${n} nouveaux titres ajoutés`,
    notifBy:(email) => `par ${email.split("@")[0]}`,
    notifSee:"Voir →", notifDismiss:"✕",
    historyTitle:"Historique",
    histActionAdd:(who) => `${who} a ajouté`,
    histActionWatch:(who) => `${who} a marqué comme vu`,
    histActionRate:(who) => `${who} a noté`,
    histActionNote:(who) => `${who} a laissé une note`,
    histActionComment:(who) => `${who} a commenté`,
    histEmpty:"Aucune activité récente",
    histStars:(n) => "★".repeat(n) + "☆".repeat(4-n),
    notePlaceholder:"Note personnelle… (ex: voir en VO, recommandé par…)",
    noteSave:"Enregistrer", noteSaved:"✓ Enregistré",
    commentsTitle:"Commentaires",
    commentPlaceholder:"Ajouter un commentaire…",
    commentSend:"Envoyer",
    commentEmpty:"Aucun commentaire pour l'instant",
    filterStars:"Étoiles :", filterStarAll:"Toutes",
    filterStarUnrated:"Non noté",
    filterYear:"Année :", filterDecade:"Décennie :",
    filterYearFrom:"De", filterYearTo:"À",
    filterPlatform:"Plateforme :",
    actorFilterActive:(name)=>`Acteur : ${name}`,
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
    allGenres:"Todos los géneros", allPlatforms:"Todas las plataformas",
    filterAll:"Todo", filterMovies:"🎬 Películas", filterSeries:"📺 Series",
    badgeMovie:"Película", badgeSerie:"Serie",
    ratingPopupTitle:"¿Tu nota?",
    ratingPopupSub:(title)=>`¿Qué opinas de "${title}"?`,
    ratingPopupSkip:"Omitir", yourRating:"Tu nota :",
    durationMin:"Duración mín :", durationMax:"Duración máx :",
    durationNoMin:"Sin mín", durationNoMax:"Sin máx",
    episodeDuration:(n)=>`~${n} min/ep.`,
    listSearchPlaceholder:"Filtrar por título, director, actor…",
    showMore:(n)=>`Ver más (${n} restantes)`,
    resetFilters:"↺ Restablecer filtros",
    notifTitle:(n) => n === 1 ? "1 nuevo título añadido" : `${n} nuevos títulos añadidos`,
    notifBy:(email) => `por ${email.split("@")[0]}`,
    notifSee:"Ver →", notifDismiss:"✕",
    historyTitle:"Historial",
    histActionAdd:(who) => `${who} añadió`,
    histActionWatch:(who) => `${who} marcó como vista`,
    histActionRate:(who) => `${who} valoró`,
    histActionNote:(who) => `${who} dejó una nota`,
    histActionComment:(who) => `${who} comentó`,
    histEmpty:"Sin actividad reciente",
    histStars:(n) => "★".repeat(n) + "☆".repeat(4-n),
    notePlaceholder:"Nota personal… (ej: ver en VO, recomendado por…)",
    noteSave:"Guardar", noteSaved:"✓ Guardado",
    commentsTitle:"Comentarios",
    commentPlaceholder:"Añadir un comentario…",
    commentSend:"Enviar",
    commentEmpty:"Sin comentarios por el momento",
    filterStars:"Estrellas :", filterStarAll:"Todas",
    filterStarUnrated:"Sin nota",
    filterYear:"Año :", filterDecade:"Década :",
    filterYearFrom:"De", filterYearTo:"A",
    filterPlatform:"Plataforma :",
    actorFilterActive:(name)=>`Actor: ${name}`,
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
    allGenres:"All genres", allPlatforms:"All platforms",
    filterAll:"All", filterMovies:"🎬 Movies", filterSeries:"📺 Series",
    badgeMovie:"Movie", badgeSerie:"Series",
    ratingPopupTitle:"Your rating?",
    ratingPopupSub:(title)=>`What did you think of "${title}"?`,
    ratingPopupSkip:"Skip", yourRating:"Your rating:",
    durationMin:"Min duration:", durationMax:"Max duration:",
    durationNoMin:"No min", durationNoMax:"No max",
    episodeDuration:(n)=>`~${n} min/ep.`,
    listSearchPlaceholder:"Filter by title, director, actor…",
    showMore:(n)=>`Show more (${n} remaining)`,
    resetFilters:"↺ Reset filters",
    notifTitle:(n) => n === 1 ? "1 new title added" : `${n} new titles added`,
    notifBy:(email) => `by ${email.split("@")[0]}`,
    notifSee:"See →", notifDismiss:"✕",
    historyTitle:"History",
    histActionAdd:(who) => `${who} added`,
    histActionWatch:(who) => `${who} marked as watched`,
    histActionRate:(who) => `${who} rated`,
    histActionNote:(who) => `${who} left a note`,
    histActionComment:(who) => `${who} commented`,
    histEmpty:"No recent activity",
    histStars:(n) => "★".repeat(n) + "☆".repeat(4-n),
    notePlaceholder:"Personal note… (e.g. watch in VO, recommended by…)",
    noteSave:"Save", noteSaved:"✓ Saved",
    commentsTitle:"Comments",
    commentPlaceholder:"Add a comment…",
    commentSend:"Send",
    commentEmpty:"No comments yet",
    filterStars:"Stars:", filterStarAll:"All",
    filterStarUnrated:"Unrated",
    filterYear:"Year:", filterDecade:"Decade:",
    filterYearFrom:"From", filterYearTo:"To",
    filterPlatform:"Platform:",
    actorFilterActive:(name)=>`Actor: ${name}`,
    tmdbLang:"en-US",
  },
};

// ─────────────────────────────────────────
//  FIREBASE
// ─────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, addDoc, deleteDoc,
         onSnapshot, query, orderBy, updateDoc, serverTimestamp, getDocs }
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
let platformFilter = "all";
let starFilter     = "all";   // "all" | "unrated" | 1 | 2 | 3 | 4
let decadeFilter   = "all";   // "all" | 1980 | 1990 | …
let yearFrom       = null;
let yearTo         = null;
let actorFilter    = null;    // nom d'acteur cliqué dans la modal
let durationMin    = null;
let durationMax    = null;
let listSearchQuery= "";
let unsubscribe    = null;
let currentUser    = null;

let _searchBuffer  = [];
let _searchShown   = 0;
const PAGE_SIZE    = 10;

// Cache des plateformes disponibles (extrait des données JustWatch)
let _platformCache = {}; // tmdbKey → frProviders

// ─────────────────────────────────────────
//  UTILS
// ─────────────────────────────────────────
function formatRuntime(min) {
  if (!min || min <= 0) return null;
  const h = Math.floor(min / 60), m = min % 60;
  return h > 0 ? `${h}h${m > 0 ? String(m).padStart(2,"0") : ""}` : `${m}min`;
}
function escHtml(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function starsHtml(rating) {
  const f = rating || 0;
  return Array.from({length:4},(_,i)=>`<span class="s${i<f?" on":""}">★</span>`).join("");
}
function starButtonsHtml() {
  return Array.from({length:4},(_,i)=>`<button class="star-btn" data-val="${i+1}">★</button>`).join("");
}
function buildStarRating({ containerId, labelId, initialValue, onSelect }) {
  const container = document.getElementById(containerId);
  const labelEl   = labelId ? document.getElementById(labelId) : null;
  if (!container) return;
  let current = initialValue || 0;
  container.querySelectorAll(".star-btn").forEach(btn => {
    const val = Number(btn.dataset.val);
    btn.classList.toggle("on", val <= current);
    btn.addEventListener("mouseenter", () => {
      container.querySelectorAll(".star-btn").forEach(b => b.classList.toggle("hover-on", Number(b.dataset.val) <= val));
      if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][val] || "";
    });
    btn.addEventListener("mouseleave", () => {
      container.querySelectorAll(".star-btn").forEach(b => b.classList.remove("hover-on"));
      if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][current] || "";
    });
    btn.addEventListener("click", async () => {
      current = val;
      container.querySelectorAll(".star-btn").forEach(b => b.classList.toggle("on", Number(b.dataset.val) <= val));
      if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][val] || "";
      if (onSelect) await onSelect(val);
    });
  });
  if (labelEl) labelEl.textContent = STAR_LABELS[currentLang][current] || "";
}
function docKey(mediaType, tmdbId) { return `${mediaType}_${tmdbId}`; }
function formatRelativeTime(ts) {
  const diff = Date.now() - ts, min = Math.floor(diff/60000), h = Math.floor(diff/3600000), d = Math.floor(diff/86400000);
  if (min < 1)  return currentLang==="fr"?"à l'instant":currentLang==="es"?"ahora mismo":"just now";
  if (min < 60) return currentLang==="fr"?`il y a ${min} min`:currentLang==="es"?`hace ${min} min`:`${min} min ago`;
  if (h < 24)   return currentLang==="fr"?`il y a ${h}h`:currentLang==="es"?`hace ${h}h`:`${h}h ago`;
  return currentLang==="fr"?`il y a ${d}j`:currentLang==="es"?`hace ${d}d`:`${d}d ago`;
}

// ─────────────────────────────────────────
//  NOTIFICATIONS — lastSeen
// ─────────────────────────────────────────
const LAST_SEEN_KEY = "lastSeen";
let _lastSeenTs = 0;
function initLastSeen() {
  const stored = localStorage.getItem(LAST_SEEN_KEY);
  _lastSeenTs = stored ? Number(stored) : 0;
  localStorage.setItem(LAST_SEEN_KEY, Date.now().toString());
}
function checkNewItems() {
  if (!currentUser || !_lastSeenTs) return;
  const myEmail = currentUser.email;
  const newItems = Object.values(movies).filter(m =>
    m.addedAt?.seconds && m.addedBy !== myEmail && m.addedAt.seconds*1000 > _lastSeenTs
  );
  if (newItems.length) showNotifBanner(newItems);
}
function showNotifBanner(items) {
  document.getElementById("notif-banner")?.remove();
  const otherEmail = items[0].addedBy || "";
  const banner = document.createElement("div");
  banner.id = "notif-banner"; banner.className = "notif-banner";
  const preview = items.slice(0,3).map(m=>`<span class="notif-item">${escHtml(m.title)}</span>`).join("");
  const more = items.length>3 ? `<span class="notif-more">+${items.length-3}</span>` : "";
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
  document.querySelector("header").after(banner);
  banner.querySelector(".notif-see").addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab==="to_watch"));
    document.getElementById("list-to_watch").classList.remove("hidden");
    document.getElementById("list-watched").classList.add("hidden");
    currentTab = "to_watch"; banner.remove();
  });
  banner.querySelector(".notif-dismiss").addEventListener("click", () => banner.remove());
}

// ─────────────────────────────────────────
//  HISTORIQUE
// ─────────────────────────────────────────
let _historyOpen = false;
function buildHistoryEvents() {
  const events = [];
  Object.values(movies).forEach(m => {
    const addedWho   = (m.addedBy   || "").split("@")[0];
    const watchedWho = (m.watchedBy || "").split("@")[0];
    if (m.addedAt?.seconds)   events.push({ type:"add",   ts:m.addedAt.seconds*1000,   who:addedWho,   title:m.title, poster:m.posterPath, mediaType:m.mediaType, tmdbId:m.tmdbId });
    if (m.watchedAt?.seconds) events.push({ type:"watch", ts:m.watchedAt.seconds*1000, who:watchedWho, title:m.title, poster:m.posterPath, mediaType:m.mediaType, tmdbId:m.tmdbId });
    if (m.rating && m.watchedAt?.seconds) events.push({ type:"rate", ts:m.watchedAt.seconds*1000+1, who:watchedWho, title:m.title, poster:m.posterPath, rating:m.rating, mediaType:m.mediaType, tmdbId:m.tmdbId });
    if (m.note && m.noteAt?.seconds && m.noteBy) events.push({ type:"note", ts:m.noteAt.seconds*1000, who:(m.noteBy||"").split("@")[0], title:m.title, poster:m.posterPath, note:m.note, mediaType:m.mediaType, tmdbId:m.tmdbId });
  });
  return events.sort((a,b)=>b.ts-a.ts).slice(0,60);
}
function updateHistoryBadge() {
  if (!currentUser) return;
  const myEmail = currentUser.email;
  const n = Object.values(movies).filter(m => m.addedBy!==myEmail && m.addedAt?.seconds && m.addedAt.seconds*1000>_lastSeenTs).length;
  const badge = document.getElementById("history-badge");
  if (!badge) return;
  badge.textContent = n > 9 ? "9+" : String(n);
  badge.classList.toggle("hidden", n === 0);
}
function renderHistoryPanel() {
  const list  = document.getElementById("history-list");
  const title = document.getElementById("history-title");
  if (!list || !title) return;
  title.textContent = t("historyTitle");
  const events = buildHistoryEvents();
  if (!events.length) { list.innerHTML = `<div class="hist-empty">${t("histEmpty")}</div>`; return; }
  const TINY = "https://image.tmdb.org/t/p/w92";
  list.innerHTML = events.map(ev => {
    const poster = ev.poster
      ? `<img class="hist-poster" src="${TINY}${ev.poster}" alt="">`
      : `<div class="hist-poster hist-poster-placeholder">${ev.mediaType==="tv"?"📺":"🎬"}</div>`;
    const whoLabel = ev.who || (currentLang==="fr"?"Inconnu":currentLang==="es"?"Desconocido":"Unknown");
    let action="", detail="";
    if      (ev.type==="add")     { action=t("histActionAdd",whoLabel);     detail=`<span class="hist-badge hist-badge-add">+</span>`; }
    else if (ev.type==="watch")   { action=t("histActionWatch",whoLabel);   detail=`<span class="hist-badge hist-badge-watch">✓</span>`; }
    else if (ev.type==="rate")    { action=t("histActionRate",whoLabel);    detail=`<span class="hist-stars">${t("histStars",ev.rating)}</span>`; }
    else if (ev.type==="note")    { action=t("histActionNote",whoLabel);    detail=`<span class="hist-badge hist-badge-note">📝</span>`; }
    else if (ev.type==="comment") { action=t("histActionComment",whoLabel); detail=`<span class="hist-badge hist-badge-comment">💬</span>`; }
    const isNew = ev.ts > _lastSeenTs;
    return `<div class="hist-item${isNew?" hist-item-new":""}" data-type="${ev.mediaType}" data-id="${ev.tmdbId}">
      <div class="hist-poster-wrap">${poster}${detail}</div>
      <div class="hist-info">
        <div class="hist-action">${action}</div>
        <div class="hist-title">${escHtml(ev.title)}</div>
        ${ev.type==="note"||ev.type==="comment"?`<div class="hist-note-excerpt">${escHtml((ev.note||ev.text||"").slice(0,60))}${(ev.note||ev.text||"").length>60?"…":""}</div>`:""}
        <div class="hist-time">${formatRelativeTime(ev.ts)}</div>
      </div>
    </div>`;
  }).join("");
  list.querySelectorAll(".hist-item").forEach(item =>
    item.addEventListener("click", () => { closeHistoryPanel(); openModal(item.dataset.type, Number(item.dataset.id)); }));
}
function openHistoryPanel() {
  _historyOpen = true; renderHistoryPanel();
  document.getElementById("history-panel").classList.remove("hidden");
  document.getElementById("history-backdrop").classList.remove("hidden");
  document.getElementById("history-badge")?.classList.add("hidden");
}
function closeHistoryPanel() {
  _historyOpen = false;
  document.getElementById("history-panel").classList.add("hidden");
  document.getElementById("history-backdrop").classList.add("hidden");
}
document.getElementById("btn-history").addEventListener("click", () => _historyOpen ? closeHistoryPanel() : openHistoryPanel());
document.getElementById("btn-history-close").addEventListener("click", closeHistoryPanel);
document.getElementById("history-backdrop").addEventListener("click", closeHistoryPanel);

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
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang===currentLang));
  buildToolbar(); renderLists();
}
function setLang(lang) { currentLang = lang; localStorage.setItem("lang", lang); applyTranslations(); }
document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ─────────────────────────────────────────
//  RESET FILTERS
// ─────────────────────────────────────────
function resetFilters() {
  mediaFilter="all"; genreFilter="all"; platformFilter="all";
  starFilter="all"; decadeFilter="all"; yearFrom=null; yearTo=null;
  durationMin=null; durationMax=null; listSearchQuery=""; sortMode="date_desc";
  actorFilter=null;
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
    <!-- Ligne 1: type · genre · plateforme · tri · vues · reset -->
    <div class="toolbar-row">
      <div class="media-filter" id="media-filter"></div>
      <select id="genre-select" class="tb-select"></select>
      <select id="platform-select" class="tb-select"></select>
      <select id="sort-select" class="tb-select"></select>
      <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
        <button id="btn-reset-filters" class="btn-reset" title="${t("resetFilters")}">↺</button>
        <button class="view-btn" id="btn-gallery">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>
        </button>
        <button class="view-btn" id="btn-list">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="20" height="2.5" rx="1.25"/><rect x="2" y="10.75" width="20" height="2.5" rx="1.25"/><rect x="2" y="17.5" width="20" height="2.5" rx="1.25"/></svg>
        </button>
      </div>
    </div>
    <!-- Ligne 2: durée min/max -->
    <div class="toolbar-row">
      <span class="tb-label">${t("durationMin")}</span>
      <select id="dur-min" class="tb-select"></select>
      <span class="tb-label">${t("durationMax")}</span>
      <select id="dur-max" class="tb-select"></select>
    </div>
    <!-- Ligne 3: étoiles + filtre acteur actif -->
    <div class="toolbar-row" id="star-filter-row">
      <span class="tb-label">${t("filterStars")}</span>
      <div id="star-filter-btns" class="star-filter-wrap"></div>
      <div id="actor-filter-tag" class="actor-tag hidden"></div>
    </div>
    <!-- Ligne 4: année (décennie + plage) -->
    <div class="toolbar-row">
      <span class="tb-label">${t("filterDecade")}</span>
      <div id="decade-btns" class="decade-wrap"></div>
      <span class="tb-label" style="margin-left:12px">${t("filterYearFrom")}</span>
      <select id="year-from" class="tb-select tb-select-sm"></select>
      <span class="tb-label">${t("filterYearTo")}</span>
      <select id="year-to" class="tb-select tb-select-sm"></select>
    </div>`;

  buildMediaFilter();
  buildGenreSelect();
  buildPlatformSelect();
  buildSortSelect();
  buildDurationSelects();
  buildStarFilter();
  buildDecadeFilter();
  buildYearSelects();
  applyViewMode();

  document.getElementById("sort-select").addEventListener("change", e => { sortMode=e.target.value; localStorage.setItem("sort",sortMode); renderLists(); });
  document.getElementById("btn-gallery").addEventListener("click", () => { viewMode="gallery"; localStorage.setItem("view",viewMode); applyViewMode(); });
  document.getElementById("btn-list").addEventListener("click",    () => { viewMode="list";    localStorage.setItem("view",viewMode); applyViewMode(); });
  document.getElementById("btn-reset-filters").addEventListener("click", resetFilters);
}

function buildSortSelect() {
  const sel = document.getElementById("sort-select"); if (!sel) return;
  sel.innerHTML = [
    ["date_desc",t("sortDateDesc")],["date_asc",t("sortDateAsc")],
    ["alpha_az",t("sortAlphaAZ")],["alpha_za",t("sortAlphaZA")],
    ["star_desc",t("sortStarDesc")],["star_asc",t("sortStarAsc")],
  ].map(([v,l])=>`<option value="${v}" ${sortMode===v?"selected":""}>${l}</option>`).join("");
}

// ── Filtre étoiles ───────────────────────
function buildStarFilter() {
  const wrap = document.getElementById("star-filter-btns"); if (!wrap) return;
  const opts = [
    { val:"all",      label: t("filterStarAll") },
    { val:"unrated",  label: t("filterStarUnrated") },
    { val:1, label:"★☆☆☆" }, { val:2, label:"★★☆☆" },
    { val:3, label:"★★★☆" }, { val:4, label:"★★★★" },
  ];
  wrap.innerHTML = opts.map(o =>
    `<button class="sf-btn${starFilter===o.val?" active":""}" data-val="${o.val}">${o.label}</button>`
  ).join("");
  wrap.querySelectorAll(".sf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.val;
      starFilter = v === "all" ? "all" : v === "unrated" ? "unrated" : Number(v);
      wrap.querySelectorAll(".sf-btn").forEach(b => b.classList.toggle("active", b.dataset.val===btn.dataset.val));
      renderLists();
    });
  });
}

// ── Filtre décennie ──────────────────────
function buildDecadeFilter() {
  const wrap = document.getElementById("decade-btns"); if (!wrap) return;
  wrap.innerHTML = `<button class="decade-btn${decadeFilter==="all"?" active":""}" data-decade="all">Tout</button>` +
    DECADES.map(d => `<button class="decade-btn${decadeFilter===d?" active":""}" data-decade="${d}">${d}s</button>`).join("");
  wrap.querySelectorAll(".decade-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      decadeFilter = btn.dataset.decade === "all" ? "all" : Number(btn.dataset.decade);
      yearFrom = null; yearTo = null;
      wrap.querySelectorAll(".decade-btn").forEach(b => b.classList.toggle("active", b.dataset.decade===btn.dataset.decade));
      buildYearSelects(); renderLists();
    });
  });
}

// ── Filtre plage d'années ────────────────
function buildYearSelects() {
  const selFrom = document.getElementById("year-from");
  const selTo   = document.getElementById("year-to");
  if (!selFrom || !selTo) return;
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: currentYear - 1950 + 1}, (_,i) => currentYear - i);
  selFrom.innerHTML = `<option value="">${t("filterYearFrom")}</option>` +
    years.map(y => `<option value="${y}" ${yearFrom===y?"selected":""}>${y}</option>`).join("");
  selTo.innerHTML = `<option value="">${t("filterYearTo")}</option>` +
    years.map(y => `<option value="${y}" ${yearTo===y?"selected":""}>${y}</option>`).join("");
  selFrom.addEventListener("change", () => {
    yearFrom = selFrom.value ? Number(selFrom.value) : null;
    decadeFilter = "all";
    document.querySelectorAll(".decade-btn").forEach(b => b.classList.toggle("active", b.dataset.decade==="all"));
    renderLists();
  });
  selTo.addEventListener("change", () => {
    yearTo = selTo.value ? Number(selTo.value) : null;
    decadeFilter = "all";
    document.querySelectorAll(".decade-btn").forEach(b => b.classList.toggle("active", b.dataset.decade==="all"));
    renderLists();
  });
}

// ── Filtre plateforme ────────────────────
let _allPlatforms = new Map(); // name → logo_path
function buildPlatformSelect() {
  const sel = document.getElementById("platform-select"); if (!sel) return;
  const opts = [[`"all"`, t("allPlatforms")], ...Array.from(_allPlatforms.entries()).map(([name]) => [`"${name}"`, name])];
  sel.innerHTML = opts.map(([v,l]) => `<option value=${v} ${JSON.stringify(platformFilter)===v?"selected":""}>${l}</option>`).join("");
  sel.addEventListener("change", () => {
    platformFilter = sel.value === '"all"' ? "all" : sel.value.replace(/"/g,"");
    renderLists();
  });
}

// ── Filtre acteur (tag cliquable) ────────
function setActorFilter(name) {
  actorFilter = name;
  const tag = document.getElementById("actor-filter-tag");
  if (!tag) return;
  if (name) {
    tag.textContent = `${t("actorFilterActive", name)} ✕`;
    tag.classList.remove("hidden");
    tag.onclick = () => { actorFilter = null; tag.classList.add("hidden"); renderLists(); };
  } else {
    tag.classList.add("hidden");
  }
  renderLists();
}

function buildMediaFilter() {
  const mf = document.getElementById("media-filter"); if (!mf) return;
  mf.innerHTML = [["all",t("filterAll")],["movie",t("filterMovies")],["tv",t("filterSeries")]]
    .map(([v,l])=>`<button class="mf-btn ${mediaFilter===v?"active":""}" data-mf="${v}">${l}</button>`).join("");
  mf.querySelectorAll(".mf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      mediaFilter = btn.dataset.mf;
      mf.querySelectorAll(".mf-btn").forEach(b => b.classList.toggle("active", b.dataset.mf===mediaFilter));
      renderLists();
    });
  });
}

function buildGenreSelect() {
  const sel = document.getElementById("genre-select"); if (!sel) return;
  const allGenres = new Set();
  Object.values(movies).forEach(m => (m.genres||[]).forEach(g => allGenres.add(g)));
  sel.innerHTML = `<option value="all">${t("allGenres")}</option>` +
    [...allGenres].sort().map(g => `<option value="${g}" ${genreFilter===g?"selected":""}>${g}</option>`).join("");
  sel.addEventListener("change", e => { genreFilter = e.target.value; renderLists(); });
}

function buildDurationSelects() {
  const selMin=document.getElementById("dur-min"), selMax=document.getElementById("dur-max");
  if (!selMin||!selMax) return;
  const fillMin = () => {
    selMin.innerHTML = `<option value="">${t("durationNoMin")}</option>` +
      DURATION_OPTIONS.map(d=>`<option value="${d.value}" ${durationMin===d.value?"selected":""}>${d.label[currentLang]}</option>`).join("");
  };
  const fillMax = () => {
    selMax.innerHTML = `<option value="">${t("durationNoMax")}</option>` +
      DURATION_OPTIONS.filter(d=>durationMin===null||d.value>durationMin)
        .map(d=>`<option value="${d.value}" ${durationMax===d.value?"selected":""}>${d.label[currentLang]}</option>`).join("");
  };
  fillMin(); fillMax();
  selMin.addEventListener("change", () => { durationMin=selMin.value===""?null:Number(selMin.value); if(durationMax!==null&&durationMin!==null&&durationMax<=durationMin)durationMax=null; fillMax(); renderLists(); });
  selMax.addEventListener("change", () => { durationMax=selMax.value===""?null:Number(selMax.value); renderLists(); });
}

function applyViewMode() {
  const g = viewMode==="gallery";
  document.getElementById("btn-gallery")?.classList.toggle("active", g);
  document.getElementById("btn-list")?.classList.toggle("active", !g);
  document.querySelectorAll(".movie-grid").forEach(el => el.classList.toggle("list-mode", !g));
}

// ─────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────
document.getElementById("btn-login").addEventListener("click", () => signInWithPopup(auth, gProvider).catch(console.error));
document.getElementById("btn-logout").addEventListener("click", () => signOut(auth));
onAuthStateChanged(auth, user => {
  if (user && ALLOWED_EMAILS.includes(user.email)) {
    currentUser = user;
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("user-email").textContent = user.email;
    initLastSeen(); startListening();
  } else {
    currentUser = null;
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
    if (unsubscribe) { unsubscribe(); unsubscribe = null; }
    if (user && !ALLOWED_EMAILS.includes(user.email)) { signOut(auth); alert(t("unauthorizedAlert")); }
  }
});

// ─────────────────────────────────────────
//  FIRESTORE CRUD
// ─────────────────────────────────────────
let _firstLoad = true;
function startListening() {
  const q = query(collection(db,"movies"), orderBy("addedAt","desc"));
  unsubscribe = onSnapshot(q, snap => {
    movies = {};
    snap.forEach(d => { movies[d.id] = d.data(); });
    buildGenreSelect();
    renderLists();
    updateHistoryBadge();
    if (_historyOpen) renderHistoryPanel();
    if (_firstLoad) { _firstLoad=false; checkNewItems(); }
  });
}

async function addItem(item) {
  await setDoc(doc(db,"movies",docKey(item.mediaType,item.tmdbId)), {
    ...item, status:"to_watch", addedBy:currentUser.email,
    addedAt:serverTimestamp(), watchedAt:null, rating:null,
  });
}
async function markWatched(key, title) {
  await updateDoc(doc(db,"movies",key), { status:"watched", watchedAt:serverTimestamp(), watchedBy:currentUser.email });
  closeModal(); showRatingPopup(key, title);
}
async function markToWatch(key) {
  await updateDoc(doc(db,"movies",key), { status:"to_watch", watchedAt:null, rating:null });
}
async function saveRating(key, value) {
  await updateDoc(doc(db,"movies",key), { rating:value });
}
async function saveNote(key, note) {
  await updateDoc(doc(db,"movies",key), {
    note: note.trim()||null, noteBy: note.trim()?currentUser.email:null,
    noteAt: note.trim()?serverTimestamp():null,
  });
}
async function removeItem(key) { await deleteDoc(doc(db,"movies",key)); }

// ─── COMMENTAIRES ───────────────────────
async function loadComments(movieKey) {
  const q = query(collection(db,"movies",movieKey,"comments"), orderBy("createdAt","asc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id:d.id, ...d.data() }));
}
async function addComment(movieKey, text) {
  await addDoc(collection(db,"movies",movieKey,"comments"), {
    text: text.trim(), author: currentUser.email,
    authorName: currentUser.email.split("@")[0],
    createdAt: serverTimestamp(),
  });
}
async function deleteComment(movieKey, commentId) {
  await deleteDoc(doc(db,"movies",movieKey,"comments",commentId));
}

// ─────────────────────────────────────────
//  STAR RATING POPUP
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
  buildStarRating({ containerId:"popup-stars", labelId:"popup-star-label", initialValue:0,
    onSelect: async (val) => { await saveRating(key,val); setTimeout(()=>popup.remove(),300); },
  });
  popup.querySelector(".rating-popup-skip").addEventListener("click", ()=>popup.remove());
  popup.querySelector(".rating-popup-backdrop").addEventListener("click", ()=>popup.remove());
}

// ─────────────────────────────────────────
//  TMDB
// ─────────────────────────────────────────
const TMDB_BASE     = "https://api.themoviedb.org/3";
const TMDB_IMG      = "https://image.tmdb.org/t/p/w500";
const TMDB_IMG_SM   = "https://image.tmdb.org/t/p/w185";
const TMDB_PAGE_URL = "https://www.themoviedb.org";
function tmdbPageUrl(mediaType, tmdbId) { return `${TMDB_PAGE_URL}/${mediaType==="tv"?"tv":"movie"}/${tmdbId}`; }

async function fetchAllPages(endpoint, queryStr, lang, maxPages=5) {
  let results=[], page=1, totalPages=1;
  while (page<=totalPages && page<=maxPages) {
    const r = await fetch(`${TMDB_BASE}/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(queryStr)}&language=${lang}&page=${page}`).then(r=>r.json());
    results=results.concat(r.results||[]); totalPages=r.total_pages||1; page++;
  }
  return results;
}
async function searchBoth(q) {
  const lang=t("tmdbLang");
  const [movs,shows]=await Promise.all([fetchAllPages("search/movie",q,lang),fetchAllPages("search/tv",q,lang)]);
  const qLow=q.toLowerCase();
  return [...movs.map(m=>({...m,_type:"movie"}),...shows.map(s=>({...s,_type:"tv"})))]
    .map(item=>({ ...item, _score:(((item._type==="tv"?item.name:item.title)||"").toLowerCase().startsWith(qLow)?1000:0)+(item.popularity||0) }))
    .sort((a,b)=>b._score-a._score);
}
async function getDetails(mediaType, tmdbId) {
  const lang=t("tmdbLang"), base=mediaType==="tv"?"tv":"movie";
  const [details,credits,videos,providers]=await Promise.all([
    fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/watch/providers?api_key=${TMDB_API_KEY}`).then(r=>r.json()),
  ]);
  let vids=videos.results||[];
  if (!vids.length) { const fb=await fetch(`${TMDB_BASE}/${base}/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=en-US`).then(r=>r.json()); vids=fb.results||[]; }
  const frProviders=(providers.results||{}).FR||null;
  // Met à jour le cache plateformes
  const key=docKey(mediaType,tmdbId);
  _platformCache[key]=frProviders;
  // Extrait les noms de plateformes pour le sélecteur
  if (frProviders) {
    ["flatrate","rent","buy"].forEach(cat=>{
      (frProviders[cat]||[]).forEach(p=>{ if (!_allPlatforms.has(p.provider_name)) _allPlatforms.set(p.provider_name,p.logo_path); });
    });
    buildPlatformSelect();
  }
  return { details, credits, videoResults:vids, frProviders };
}

// ─────────────────────────────────────────
//  SEARCH UI
// ─────────────────────────────────────────
const searchInput   = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
document.getElementById("btn-search").addEventListener("click", doSearch);
searchInput.addEventListener("keydown", e=>{ if(e.key==="Enter") doSearch(); });
document.addEventListener("click", e=>{ if(!e.target.closest(".search-section")) searchResults.classList.add("hidden"); });

async function doSearch() {
  const q=searchInput.value.trim(); if(!q) return;
  searchResults.innerHTML=`<div style="padding:16px;text-align:center;color:var(--text2)">${t("searching")}</div>`;
  searchResults.classList.remove("hidden");
  _searchBuffer=await searchBoth(q); _searchShown=0; appendSearchResults();
}
function appendSearchResults() {
  searchResults.querySelector(".sr-load-more")?.remove();
  if(_searchShown===0) searchResults.innerHTML="";
  if(!_searchBuffer.length){ searchResults.innerHTML=`<div style="padding:16px;text-align:center;color:var(--text2)">${t("noResults")}</div>`; return; }
  const slice=_searchBuffer.slice(_searchShown,_searchShown+PAGE_SIZE);
  _searchShown+=slice.length;
  slice.forEach(m=>{
    const mtype=m._type, key=docKey(mtype,m.id), already=!!movies[key];
    const title=mtype==="tv"?m.name:m.title, year=mtype==="tv"?m.first_air_date?.slice(0,4):m.release_date?.slice(0,4);
    const badge=mtype==="tv"?`<span class="type-badge tv">📺 ${t("badgeSerie")}</span>`:`<span class="type-badge movie">🎬 ${t("badgeMovie")}</span>`;
    const poster=m.poster_path?`<img src="${TMDB_IMG_SM}${m.poster_path}" alt="${escHtml(title)}">`:`<div class="sr-poster-placeholder">${mtype==="tv"?"📺":"🎬"}</div>`;
    const div=document.createElement("div");
    div.className="search-result-item";
    Object.assign(div.dataset,{id:m.id,type:mtype,title:encodeURIComponent(title||""),poster:m.poster_path||"",year:year||"",overview:encodeURIComponent(m.overview||"")});
    div.innerHTML=`${poster}<div class="sr-info"><div class="sr-title">${escHtml(title)}</div><div class="sr-year">${badge} ${year||"—"}</div></div><button class="sr-add ${already?"added":""}" ${already?"disabled":""}>${already?t("addedBtn"):t("addBtn")}</button>`;
    div.querySelector(".sr-add:not(.added)")?.addEventListener("click", async e=>{
      e.stopPropagation();
      const btn=div.querySelector(".sr-add");
      const {id,type,title:rawTitle,poster,year,overview}=div.dataset;
      const lang=t("tmdbLang"), base=type==="tv"?"tv":"movie";
      const [d,cr]=await Promise.all([
        fetch(`${TMDB_BASE}/${base}/${id}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
        fetch(`${TMDB_BASE}/${base}/${id}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
      ]);
      const runtime=type==="tv"?((d.episode_run_time||[])[0]||null):(d.runtime||null);
      const director=type==="tv"?(d.created_by||[]).map(c=>c.name).join(", "):((cr.crew||[]).find(c=>c.job==="Director")?.name||"");
      const castList=(cr.cast||[]).slice(0,10).map(a=>a.name);
      await addItem({ tmdbId:Number(id), mediaType:type, title:decodeURIComponent(rawTitle), posterPath:poster, releaseYear:Number(year)||null, overview:decodeURIComponent(overview), genres:(d.genres||[]).map(g=>g.name), runtime, director, cast:castList });
      btn.textContent=t("addedBtn"); btn.classList.add("added"); btn.disabled=true;
    });
    div.addEventListener("click", e=>{ if(e.target.closest(".sr-add")) return; openModal(div.dataset.type,Number(div.dataset.id)); });
    searchResults.appendChild(div);
  });
  const remaining=_searchBuffer.length-_searchShown;
  if(remaining>0){
    const btn=document.createElement("button");
    btn.className="sr-load-more"; btn.textContent=t("showMore",remaining);
    btn.addEventListener("click", e=>{ e.stopPropagation(); appendSearchResults(); });
    searchResults.appendChild(btn);
  }
}

// ─────────────────────────────────────────
//  LIST SEARCH BAR
// ─────────────────────────────────────────
document.getElementById("list-search-input").placeholder = t("listSearchPlaceholder");
document.getElementById("list-search-input").addEventListener("input", e => {
  listSearchQuery = e.target.value.toLowerCase().trim(); renderLists();
});

// ─────────────────────────────────────────
//  SORT + FILTER
// ─────────────────────────────────────────
function matchesDuration(m) {
  if (m.mediaType==="tv") return true;
  const rt=m.runtime; if(!rt) return true;
  if(durationMin!==null&&rt<durationMin) return false;
  if(durationMax!==null&&rt>durationMax) return false;
  return true;
}
function matchesListSearch(m) {
  if (!listSearchQuery) return true;
  const q=listSearchQuery.toLowerCase();
  return [m.title||"",m.overview||"",m.director||"",m.creators||"",m.note||"",...(m.cast||[]),...(m.genres||[])].some(f=>f.toLowerCase().includes(q));
}
function matchesPlatform(m) {
  if (platformFilter==="all") return true;
  const cached=_platformCache[docKey(m.mediaType,m.tmdbId)];
  if (!cached) return true; // pas encore chargé → on inclut
  const names=new Set();
  ["flatrate","rent","buy"].forEach(cat=>(cached[cat]||[]).forEach(p=>names.add(p.provider_name)));
  return names.has(platformFilter);
}
function matchesStar(m) {
  if (starFilter==="all") return true;
  if (starFilter==="unrated") return !m.rating;
  return m.rating===starFilter;
}
function matchesYear(m) {
  const y = m.releaseYear;
  if (!y) return true;
  if (decadeFilter!=="all") return y>=decadeFilter && y<decadeFilter+10;
  if (yearFrom!==null && y<yearFrom) return false;
  if (yearTo!==null   && y>yearTo)   return false;
  return true;
}
function matchesActor(m) {
  if (!actorFilter) return true;
  return (m.cast||[]).some(a => a.toLowerCase().includes(actorFilter.toLowerCase()));
}

function sortAndFilter(list) {
  let out=[...list];
  if(mediaFilter!=="all") out=out.filter(m=>m.mediaType===mediaFilter);
  if(genreFilter!=="all") out=out.filter(m=>(m.genres||[]).includes(genreFilter));
  out=out.filter(matchesDuration).filter(matchesListSearch).filter(matchesPlatform).filter(matchesStar).filter(matchesYear).filter(matchesActor);
  switch(sortMode){
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
  const toWatch=Object.values(movies).filter(m=>m.status==="to_watch");
  const watched=Object.values(movies).filter(m=>m.status==="watched");
  document.getElementById("count-to-watch").textContent=toWatch.length;
  document.getElementById("count-watched").textContent=watched.length;
  renderGrid("to_watch",sortAndFilter(toWatch));
  renderGrid("watched",sortAndFilter(watched));
  applyViewMode();
}
function renderGrid(status, list) {
  const grid=document.getElementById(`list-${status}`);
  if(!list.length){
    grid.innerHTML=`<div class="empty-state"><div class="empty-icon">${status==="to_watch"?"🍿":"🎬"}</div><div>${status==="to_watch"?t("emptyToWatch"):t("emptyWatched")}</div></div>`;
    return;
  }
  grid.innerHTML=list.map(m=>{
    const key=docKey(m.mediaType,m.tmdbId);
    const poster=m.posterPath?`<img src="${TMDB_IMG}${m.posterPath}" alt="${escHtml(m.title)}" loading="lazy">`:`<div class="no-poster">${m.mediaType==="tv"?"📺":"🎬"}</div>`;
    const stars=`<span class="card-stars">${starsHtml(m.rating)}</span>`;
    const noteDot=m.note?`<span class="card-has-note" title="${escHtml(m.note)}"></span>`:"";
    const typeDot=m.mediaType==="tv"?"📺":"🎬";
    const runtime=m.runtime?(m.mediaType==="tv"?t("episodeDuration",m.runtime):`⏱ ${formatRuntime(m.runtime)}`):"";
    return `<div class="movie-card" data-key="${key}" data-type="${m.mediaType}" data-id="${m.tmdbId}">
      ${poster}
      <div class="card-body">
        <div class="card-title">${escHtml(m.title)}</div>
        <div class="card-bottom">
          <span class="card-year-type">${m.releaseYear||"—"} ${typeDot} ${noteDot}</span>
          ${stars}
        </div>
        ${runtime?`<div class="card-runtime">${runtime}</div>`:""}
      </div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".movie-card").forEach(card=>card.addEventListener("click",()=>openModal(card.dataset.type,Number(card.dataset.id))));
}

// ─────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────
async function openModal(mediaType, tmdbId) {
  const modal=document.getElementById("modal"), content=document.getElementById("modal-content");
  modal.classList.remove("hidden");
  content.innerHTML=`<div style="padding:40px;text-align:center;color:var(--text2)">${t("loading")}</div>`;

  const key=docKey(mediaType,tmdbId), inCollection=movies[key];
  const {details,credits,videoResults,frProviders}=await getDetails(mediaType,tmdbId);

  const title  =mediaType==="tv"?details.name:details.title;
  const year   =mediaType==="tv"?details.first_air_date?.slice(0,4):details.release_date?.slice(0,4);
  const genres =(details.genres||[]).map(g=>g.name).join(", ");
  // Cast — cliquable pour filtrer
  const castItems=(credits.cast||[]).slice(0,5);
  const castHtml=castItems.map(a=>`<span class="cast-link" data-actor="${escHtml(a.name)}">${escHtml(a.name)}</span>`).join(", ");
  const trailer=videoResults.find(v=>v.site==="YouTube"&&v.type==="Trailer");

  let metaExtra="";
  if(mediaType==="tv"){ const s=details.number_of_seasons,ep=(details.episode_run_time||[])[0]; if(s) metaExtra+=t("seasons",s); if(ep) metaExtra+=(metaExtra?" · ":"")+t("episodeDuration",ep); }
  else if(details.runtime) metaExtra=`⏱ ${formatRuntime(details.runtime)}`;

  let creatorHtml="";
  if(mediaType==="tv"){ const creators=(details.created_by||[]).map(c=>c.name).join(", "); if(creators) creatorHtml=`<div class="modal-cast"><strong>${t("creator")} :</strong> ${escHtml(creators)}</div>`; }
  else{ const director=(credits.crew||[]).find(c=>c.job==="Director"); if(director) creatorHtml=`<div class="modal-cast"><strong>${t("director")} :</strong> ${escHtml(director.name)}</div>`; }

  const posterHtml=details.poster_path?`<img src="${TMDB_IMG}${details.poster_path}" alt="${escHtml(title)}">`:`<div class="no-poster">${mediaType==="tv"?"📺":"🎬"}</div>`;
  const typeBadge=mediaType==="tv"?`<span class="type-badge tv">📺 ${t("badgeSerie")}</span>`:`<span class="type-badge movie">🎬 ${t("badgeMovie")}</span>`;
  const tmdbLink=`<a class="tmdb-link" href="${tmdbPageUrl(mediaType,tmdbId)}" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>TMDB</a>`;

  // JustWatch
  let providersHtml="";
  if(frProviders){
    const jwLink=frProviders.link||"https://www.justwatch.com";
    const sections=[];
    for(const {key:pKey,label} of [{key:"flatrate",label:{fr:"Inclus",es:"Incluido",en:"Streaming"}},{key:"rent",label:{fr:"Location",es:"Alquiler",en:"Rent"}},{key:"buy",label:{fr:"Achat",es:"Compra",en:"Buy"}}]){
      const list=frProviders[pKey]; if(!list?.length) continue;
      sections.push(`<div class="providers-group"><span class="providers-type">${label[currentLang]}</span><div class="providers-logos">${list.map(p=>`<img class="provider-logo" src="https://image.tmdb.org/t/p/original${p.logo_path}" alt="${escHtml(p.provider_name)}" title="${escHtml(p.provider_name)}">`).join("")}</div></div>`);
    }
    if(sections.length) providersHtml=`<div class="modal-section-title">🇫🇷 Où regarder</div><a class="providers-wrap" href="${escHtml(jwLink)}" target="_blank" rel="noopener">${sections.join("")}<span class="providers-powered">Données JustWatch</span></a>`;
  }

  // Note étoiles
  let ratingHtml="";
  if(inCollection?.status==="watched") ratingHtml=`<div class="modal-section-title">${t("yourRating")}</div><div class="star-rating-row"><div id="modal-stars">${starButtonsHtml()}</div><span class="star-label" id="modal-star-label"></span></div>`;

  // Note personnelle
  const existingNote=inCollection?.note||"";
  const noteHtml=`<div class="modal-section-title" style="margin-top:16px">📝 ${currentLang==="fr"?"Note personnelle":currentLang==="es"?"Nota personal":"Personal note"}</div><div class="modal-note-wrap"><textarea id="modal-note-input" class="modal-note-input" placeholder="${t("notePlaceholder")}" maxlength="300">${escHtml(existingNote)}</textarea><div class="modal-note-footer"><span id="modal-note-count" class="modal-note-count">${existingNote.length}/300</span><button id="modal-note-save" class="btn-note-save">${t("noteSave")}</button></div></div>`;

  // Boutons
  let actions="";
  if(inCollection){ actions+=inCollection.status==="to_watch"?`<button class="btn-primary" id="modal-watched">${t("markWatched")}</button>`:`<button class="btn-secondary" id="modal-to-watch">${t("markToWatch")}</button>`; actions+=`<button class="btn-danger" id="modal-remove">${t("removeBtn")}</button>`; }
  else actions+=`<button class="btn-primary" id="modal-add">${t("addToList")}</button>`;
  if(trailer) actions+=`<a class="trailer-btn" href="https://www.youtube.com/watch?v=${trailer.key}" target="_blank" rel="noopener">${t("trailerBtn")}</a>`;

  // Commentaires
  const commentsHtml=`
    <div class="modal-section-title" style="margin-top:20px">💬 ${t("commentsTitle")}</div>
    <div id="modal-comments-list" class="comments-list"><div class="comments-loading">…</div></div>
    <div class="comment-input-row">
      <input type="text" id="comment-input" class="comment-input" placeholder="${t("commentPlaceholder")}" maxlength="500"/>
      <button id="comment-send" class="btn-comment-send">${t("commentSend")}</button>
    </div>`;

  content.innerHTML=`
    <div class="modal-inner">
      <div class="modal-poster">${posterHtml}</div>
      <div class="modal-info">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">${typeBadge} ${tmdbLink}</div>
        <div class="modal-title">${escHtml(title)}</div>
        <div class="modal-meta">${year||"—"}${metaExtra?" · "+metaExtra:""}${genres?" · "+genres:""}</div>
        ${creatorHtml}
        ${castHtml?`<div class="modal-cast"><strong>${t("cast")} :</strong> ${castHtml}</div>`:""}
        ${details.overview?`<div class="modal-overview">${escHtml(details.overview)}</div>`:""}
        ${providersHtml}
        ${ratingHtml}
        ${inCollection?noteHtml:""}
        <div class="modal-actions">${actions}</div>
      </div>
    </div>
    ${inCollection?commentsHtml:""}`;

  // ── Clic acteur → filtre ──
  content.querySelectorAll(".cast-link").forEach(span => {
    span.addEventListener("click", () => {
      setActorFilter(span.dataset.actor);
      closeModal();
    });
  });

  // ── Étoiles ──
  if(inCollection?.status==="watched") buildStarRating({ containerId:"modal-stars", labelId:"modal-star-label", initialValue:inCollection.rating||0, onSelect:async(val)=>await saveRating(key,val) });

  // ── Note personnelle ──
  const noteInput=document.getElementById("modal-note-input"), noteSaveBtn=document.getElementById("modal-note-save"), noteCount=document.getElementById("modal-note-count");
  if(noteInput&&noteSaveBtn){
    noteInput.addEventListener("input",()=>noteCount.textContent=`${noteInput.value.length}/300`);
    noteSaveBtn.addEventListener("click",async()=>{ await saveNote(key,noteInput.value); noteSaveBtn.textContent=t("noteSaved"); noteSaveBtn.disabled=true; setTimeout(()=>{ noteSaveBtn.textContent=t("noteSave"); noteSaveBtn.disabled=false; },2000); });
    noteInput.addEventListener("keydown",e=>{ if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)) noteSaveBtn.click(); });
  }

  // ── Commentaires ──
  if(inCollection){
    const commentsList=document.getElementById("modal-comments-list");
    const commentInput=document.getElementById("comment-input");
    const commentSendBtn=document.getElementById("comment-send");

    // Charge et affiche les commentaires
    async function refreshComments() {
      const comments=await loadComments(key);
      if(!comments.length){ commentsList.innerHTML=`<div class="comment-empty">${t("commentEmpty")}</div>`; return; }
      commentsList.innerHTML=comments.map(c=>{
        const isMe = c.author===currentUser.email;
        const ts = c.createdAt?.seconds ? formatRelativeTime(c.createdAt.seconds*1000) : "";
        return `<div class="comment-item${isMe?" comment-mine":""}">
          <div class="comment-header">
            <span class="comment-author">${escHtml(c.authorName)}</span>
            <span class="comment-time">${ts}</span>
            ${isMe?`<button class="comment-delete" data-id="${c.id}">✕</button>`:""}
          </div>
          <div class="comment-text">${escHtml(c.text)}</div>
        </div>`;
      }).join("");
      // Scroll vers le bas
      commentsList.scrollTop=commentsList.scrollHeight;
      // Supprimer
      commentsList.querySelectorAll(".comment-delete").forEach(btn=>{
        btn.addEventListener("click",async()=>{ await deleteComment(key,btn.dataset.id); refreshComments(); });
      });
    }
    refreshComments();

    // Envoyer
    async function sendComment() {
      const text=commentInput.value.trim(); if(!text) return;
      commentSendBtn.disabled=true;
      await addComment(key,text);
      commentInput.value="";
      await refreshComments();
      commentSendBtn.disabled=false;
    }
    commentSendBtn.addEventListener("click",sendComment);
    commentInput.addEventListener("keydown",e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); sendComment(); } });
  }

  // ── Autres boutons ──
  document.getElementById("modal-add")?.addEventListener("click",async()=>{
    const lang=t("tmdbLang"),base=mediaType==="tv"?"tv":"movie";
    const [d,cr]=await Promise.all([fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),fetch(`${TMDB_BASE}/${base}/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json())]);
    const runtime=mediaType==="tv"?((d.episode_run_time||[])[0]||null):(d.runtime||null);
    const director=mediaType==="tv"?(d.created_by||[]).map(c=>c.name).join(", "):((cr.crew||[]).find(c=>c.job==="Director")?.name||"");
    const castList=(cr.cast||[]).slice(0,10).map(a=>a.name);
    await addItem({ tmdbId, mediaType, title, posterPath:details.poster_path||"", releaseYear:Number(year)||null, overview:details.overview||"", genres:(d.genres||[]).map(g=>g.name), runtime, director, cast:castList });
    closeModal();
  });
  document.getElementById("modal-watched")?.addEventListener("click",()=>markWatched(key,title));
  document.getElementById("modal-to-watch")?.addEventListener("click",async()=>{ await markToWatch(key); closeModal(); });
  document.getElementById("modal-remove")?.addEventListener("click",async()=>{ if(confirm(t("confirmRemove",title))){ await removeItem(key); closeModal(); } });
}

function closeModal() { document.getElementById("modal").classList.add("hidden"); }
document.getElementById("modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal(); });

// ─────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────
document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>{
    currentTab=tab.dataset.tab;
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("list-to_watch").classList.toggle("hidden",currentTab!=="to_watch");
    document.getElementById("list-watched").classList.toggle("hidden",currentTab!=="watched");
  });
});

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
buildToolbar();
document.getElementById("list-search-input").placeholder = t("listSearchPlaceholder");
applyTranslations();
