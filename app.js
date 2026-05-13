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
//  SMILEYS
// ─────────────────────────────────────────
const SMILEYS = [
  { value: 1, emoji: "😞", fr: "Pas aimé",   es: "No me gustó",  en: "Didn't like it" },
  { value: 2, emoji: "😐", fr: "Sans plus",  es: "Regular",       en: "It was ok"      },
  { value: 3, emoji: "😊", fr: "Aimé",       es: "Me gustó",     en: "Liked it"       },
  { value: 4, emoji: "🤩", fr: "Adoré",      es: "¡Me encantó!", en: "Loved it!"      },
];

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
    confirmRemove:(t)=>`Supprimer "${t}" de la liste ?`,
    unauthorizedAlert:"Accès non autorisé pour ce compte Gmail.",
    sortDateDesc:"Date ajout ↓", sortDateAsc:"Date ajout ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortSmileyDesc:"Note ↓", sortSmileyAsc:"Note ↑",
    allGenres:"Tous les genres",
    filterAll:"Tout", filterMovies:"🎬 Films", filterSeries:"📺 Séries",
    badgeMovie:"Film", badgeSerie:"Série",
    ratingPopupTitle:"Vous avez aimé ?",
    ratingPopupSub:(title)=>`Que pensez-vous de "${title}" ?`,
    ratingPopupSkip:"Passer", yourRating:"Note :",
    durationMin:"Durée min :", durationMax:"Durée max :",
    durationNoMin:"Pas de min", durationNoMax:"Pas de max",
    episodeDuration:(n)=>`~${n} min/ép.`,
    listSearchPlaceholder:"Filtrer par titre, réalisateur, acteur…",
    showMore:(n)=>`Voir plus (${n} restants)`,
    resetFilters:"↺ Réinitialiser les filtres",
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
    confirmRemove:(t)=>`¿Eliminar "${t}" de la lista?`,
    unauthorizedAlert:"Acceso no autorizado para esta cuenta de Gmail.",
    sortDateDesc:"Fecha añadido ↓", sortDateAsc:"Fecha añadido ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortSmileyDesc:"Nota ↓", sortSmileyAsc:"Nota ↑",
    allGenres:"Todos los géneros",
    filterAll:"Todo", filterMovies:"🎬 Películas", filterSeries:"📺 Series",
    badgeMovie:"Película", badgeSerie:"Serie",
    ratingPopupTitle:"¿Te gustó?",
    ratingPopupSub:(title)=>`¿Qué opinas de "${title}"?`,
    ratingPopupSkip:"Omitir", yourRating:"Nota :",
    durationMin:"Duración mín :", durationMax:"Duración máx :",
    durationNoMin:"Sin mín", durationNoMax:"Sin máx",
    episodeDuration:(n)=>`~${n} min/ep.`,
    listSearchPlaceholder:"Filtrar por título, director, actor…",
    showMore:(n)=>`Ver más (${n} restantes)`,
    resetFilters:"↺ Restablecer filtros",
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
    confirmRemove:(t)=>`Remove "${t}" from the list?`,
    unauthorizedAlert:"Access not allowed for this Gmail account.",
    sortDateDesc:"Date added ↓", sortDateAsc:"Date added ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortSmileyDesc:"Rating ↓", sortSmileyAsc:"Rating ↑",
    allGenres:"All genres",
    filterAll:"All", filterMovies:"🎬 Movies", filterSeries:"📺 Series",
    badgeMovie:"Movie", badgeSerie:"Series",
    ratingPopupTitle:"Did you enjoy it?",
    ratingPopupSub:(title)=>`What did you think of "${title}"?`,
    ratingPopupSkip:"Skip", yourRating:"Rating :",
    durationMin:"Min duration:", durationMax:"Max duration:",
    durationNoMin:"No min", durationNoMax:"No max",
    episodeDuration:(n)=>`~${n} min/ep.`,
    listSearchPlaceholder:"Filter by title, director, actor…",
    showMore:(n)=>`Show more (${n} remaining)`,
    resetFilters:"↺ Reset filters",
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

// Search buffer
let _searchBuffer  = [];
let _searchShown   = 0;
const PAGE_SIZE    = 10;

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
  const fields = [
    m.title        || "",
    m.overview     || "",
    m.director     || "",   // ← maintenant stocké en Firestore
    m.creators     || "",   // ← créateurs de séries
    ...(m.cast     || []),  // ← tableau d'acteurs stocké en Firestore
    ...(m.genres   || []),
  ];
  return fields.some(f => f.toLowerCase().includes(q));
}
function escHtml(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
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
  mediaFilter     = "all";
  genreFilter     = "all";
  durationMin     = null;
  durationMax     = null;
  listSearchQuery = "";
  sortMode        = "date_desc";
  localStorage.setItem("sort", sortMode);
  const lsi = document.getElementById("list-search-input");
  if (lsi) lsi.value = "";
  buildToolbar();
  renderLists();
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
        <button id="btn-reset-filters" class="btn-reset" title="${t("resetFilters")}">
          ↺
        </button>
        <button class="view-btn" id="btn-gallery" title="Galerie">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>
        </button>
        <button class="view-btn" id="btn-list" title="Liste">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="20" height="2.5" rx="1.25"/><rect x="2" y="10.75" width="20" height="2.5" rx="1.25"/><rect x="2" y="17.5" width="20" height="2.5" rx="1.25"/></svg>
        </button>
      </div>
    </div>
    <div class="toolbar-row" id="duration-row">
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

// ─────────────────────────────────────────
//  SORT
// ─────────────────────────────────────────
function buildSortSelect() {
  const sel = document.getElementById("sort-select");
  if (!sel) return;
  sel.innerHTML = [
    ["date_desc",   t("sortDateDesc")],
    ["date_asc",    t("sortDateAsc")],
    ["alpha_az",    t("sortAlphaAZ")],
    ["alpha_za",    t("sortAlphaZA")],
    ["smiley_desc", t("sortSmileyDesc")],
    ["smiley_asc",  t("sortSmileyAsc")],
  ].map(([v,l]) => `<option value="${v}" ${sortMode===v?"selected":""}>${l}</option>`).join("");
}

// ─────────────────────────────────────────
//  DURATION SELECTS
// ─────────────────────────────────────────
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
      DURATION_OPTIONS
        .filter(d => durationMin === null || d.value > durationMin)
        .map(d =>
          `<option value="${d.value}" ${durationMax===d.value?"selected":""}>${d.label[currentLang]}</option>`
        ).join("");
  };

  fillMin(); fillMax();

  selMin.addEventListener("change", () => {
    durationMin = selMin.value === "" ? null : Number(selMin.value);
    if (durationMax !== null && durationMin !== null && durationMax <= durationMin) durationMax = null;
    fillMax(); renderLists();
  });
  selMax.addEventListener("change", () => {
    durationMax = selMax.value === "" ? null : Number(selMax.value);
    renderLists();
  });
}

// ─────────────────────────────────────────
//  MEDIA FILTER
// ─────────────────────────────────────────
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

// ─────────────────────────────────────────
//  GENRE FILTER
// ─────────────────────────────────────────
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

// ─────────────────────────────────────────
//  VIEW TOGGLE
// ─────────────────────────────────────────
function applyViewMode() {
  const g = viewMode === "gallery";
  document.getElementById("btn-gallery")?.classList.toggle("active", g);
  document.getElementById("btn-list")?.classList.toggle("active", !g);
  document.querySelectorAll(".movie-grid").forEach(el => el.classList.toggle("list-mode", !g));
}

// ─────────────────────────────────────────
//  LIST SEARCH BAR
// ─────────────────────────────────────────
function buildListSearchBar() {
  if (document.getElementById("list-search-bar")) return;
  const bar = document.createElement("div");
  bar.id = "list-search-bar";
  bar.className = "list-search-bar";
  bar.innerHTML = `<input id="list-search-input" type="text" placeholder="${t("listSearchPlaceholder")}">`;
  document.querySelector(".toolbar").after(bar);
  document.getElementById("list-search-input").addEventListener("input", e => {
    listSearchQuery = e.target.value.toLowerCase().trim();
    renderLists();
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
    startListening();
  } else {
    currentUser = null;
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
    if (unsubscribe) { unsubscribe(); unsubscribe = null; }
    if (user && !ALLOWED_EMAILS.includes(user.email)) {
      signOut(auth); alert(t("unauthorizedAlert"));
    }
  }
});

// ─────────────────────────────────────────
//  FIRESTORE
// ─────────────────────────────────────────
function startListening() {
  const q = query(collection(db, "movies"), orderBy("addedAt", "desc"));
  unsubscribe = onSnapshot(q, snap => {
    movies = {};
    snap.forEach(d => { movies[d.id] = d.data(); });
    buildGenreSelect();
    renderLists();
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
  await updateDoc(doc(db,"movies",key), { status:"watched", watchedAt: serverTimestamp() });
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
//  SMILEY POPUP
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
      <div class="rating-popup-smileys">
        ${SMILEYS.map(s=>`
          <button class="smiley-btn" data-val="${s.value}">
            <span class="smiley-icon">${s.emoji}</span>
            <span class="smiley-label">${s[currentLang]}</span>
          </button>`).join("")}
      </div>
      <button class="rating-popup-skip">${t("ratingPopupSkip")}</button>
    </div>`;
  document.body.appendChild(popup);
  popup.querySelectorAll(".smiley-btn").forEach(btn =>
    btn.addEventListener("click", async () => { await saveRating(key, Number(btn.dataset.val)); popup.remove(); }));
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
  let results = [], page = 1, totalPages = 1;
  while (page <= totalPages && page <= maxPages) {
    const r = await fetch(
      `${TMDB_BASE}/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(queryStr)}&language=${lang}&page=${page}`
    ).then(r=>r.json());
    results = results.concat(r.results || []);
    totalPages = r.total_pages || 1;
    page++;
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
  const all = [
    ...movs.map(m  => ({...m,  _type:"movie"})),
    ...shows.map(s => ({...s,  _type:"tv"})),
  ].map(item => {
    const title = (item._type==="tv" ? item.name : item.title)||"";
    const starts = title.toLowerCase().startsWith(qLow) ? 1000 : 0;
    return { ...item, _score: starts + (item.popularity||0) };
  });
  all.sort((a,b) => b._score - a._score);
  return all;
}

async function getDetails(mediaType, tmdbId) {
  const lang = t("tmdbLang");
  const base = mediaType==="tv" ? "tv" : "movie";
  const [details, credits, videos] = await Promise.all([
    fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/${base}/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
  ]);
  let vids = videos.results||[];
  if (!vids.length) {
    const fb = await fetch(`${TMDB_BASE}/${base}/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=en-US`).then(r=>r.json());
    vids = fb.results||[];
  }
  return { details, credits, videoResults: vids };
}

// ─────────────────────────────────────────
//  SEARCH UI  (FIX : "voir plus" fonctionnel)
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

// FIX : on appende les résultats au lieu de recréer le conteneur
function appendSearchResults() {
  // Supprime l'ancien bouton "voir plus" s'il existe
  searchResults.querySelector(".sr-load-more")?.remove();

  // Premier appel : vide le conteneur
  if (_searchShown === 0) searchResults.innerHTML = "";

  if (_searchBuffer.length === 0) {
    searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("noResults")}</div>`;
    return;
  }

  const slice = _searchBuffer.slice(_searchShown, _searchShown + PAGE_SIZE);
  _searchShown += slice.length;

  slice.forEach(m => {
    const mtype  = m._type;
    const key    = docKey(mtype, m.id);
    const already= !!movies[key];
    const title  = mtype==="tv" ? m.name  : m.title;
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
      title:    encodeURIComponent(title||""),
      poster:   m.poster_path||"",
      year:     year||"",
      overview: encodeURIComponent(m.overview||""),
    });
    div.innerHTML = `
      ${poster}
      <div class="sr-info">
        <div class="sr-title">${escHtml(title)}</div>
        <div class="sr-year">${badge} ${year||"—"}</div>
      </div>
      <button class="sr-add ${already?"added":""}" ${already?"disabled":""}>
        ${already ? t("addedBtn") : t("addBtn")}
      </button>`;

    const addBtn = div.querySelector(".sr-add");
    if (!already) {
      addBtn.addEventListener("click", async e => {
        e.stopPropagation();
        const { id, type, title: rawTitle, poster, year, overview } = div.dataset;
        const lang = t("tmdbLang");
        const base = type==="tv"?"tv":"movie";
        const d    = await fetch(`${TMDB_BASE}/${base}/${id}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
        const cr   = await fetch(`${TMDB_BASE}/${base}/${id}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
        const runtime  = type==="tv" ? ((d.episode_run_time||[])[0]||null) : (d.runtime||null);
        // ── Stocke réalisateur/créateur et casting pour la recherche locale ──
        const director = type==="tv"
          ? (d.created_by||[]).map(c=>c.name).join(", ")
          : ((cr.crew||[]).find(c=>c.job==="Director")?.name || "");
        const castList = (cr.cast||[]).slice(0,10).map(a=>a.name);
        await addItem({
          tmdbId: Number(id), mediaType: type,
          title: decodeURIComponent(rawTitle),
          posterPath: poster, releaseYear: Number(year)||null,
          overview: decodeURIComponent(overview),
          genres: (d.genres||[]).map(g=>g.name),
          runtime, director, cast: castList,
        });
        addBtn.textContent = t("addedBtn"); addBtn.classList.add("added"); addBtn.disabled = true;
      });
    }

    div.addEventListener("click", e => {
      if (e.target.closest(".sr-add")) return;
      openModal(div.dataset.type, Number(div.dataset.id));
    });

    searchResults.appendChild(div);
  });

  // Bouton "voir plus" si reste des résultats
  const remaining = _searchBuffer.length - _searchShown;
  if (remaining > 0) {
    const btn = document.createElement("button");
    btn.className = "sr-load-more";
    btn.textContent = t("showMore", remaining);
    // FIX : on bind la fonction directement sans problème de closure
    btn.addEventListener("click", e => {
      e.stopPropagation();
      appendSearchResults();
    });
    searchResults.appendChild(btn);
  }
}

// ─────────────────────────────────────────
//  SORT + FILTER
// ─────────────────────────────────────────
function sortAndFilter(list) {
  let out = [...list];
  if (mediaFilter !== "all") out = out.filter(m => m.mediaType === mediaFilter);
  if (genreFilter !== "all") out = out.filter(m => (m.genres||[]).includes(genreFilter));
  out = out.filter(matchesDuration);
  out = out.filter(matchesListSearch);
  switch (sortMode) {
    case "date_asc":   out.sort((a,b)=>(a.addedAt?.seconds||0)-(b.addedAt?.seconds||0)); break;
    case "date_desc":  out.sort((a,b)=>(b.addedAt?.seconds||0)-(a.addedAt?.seconds||0)); break;
    case "alpha_az":   out.sort((a,b)=>a.title.localeCompare(b.title)); break;
    case "alpha_za":   out.sort((a,b)=>b.title.localeCompare(a.title)); break;
    case "smiley_desc":out.sort((a,b)=>(b.rating||0)-(a.rating||0)); break;
    case "smiley_asc": out.sort((a,b)=>(a.rating||0)-(b.rating||0)); break;
  }
  return out;
}

// ─────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────
function renderLists() {
  const toWatch = Object.values(movies).filter(m => m.status==="to_watch");
  const watched = Object.values(movies).filter(m => m.status==="watched");
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
    const key   = docKey(m.mediaType, m.tmdbId);
    const poster= m.posterPath
      ? `<img src="${TMDB_IMG}${m.posterPath}" alt="${escHtml(m.title)}" loading="lazy">`
      : `<div class="no-poster">${m.mediaType==="tv"?"📺":"🎬"}</div>`;
    const smiley = m.rating ? SMILEYS.find(s=>s.value===m.rating) : null;
    const emoji  = smiley ? `<span class="card-emoji" title="${smiley[currentLang]}">${smiley.emoji}</span>` : "";
    const typeDot= m.mediaType==="tv" ? "📺" : "🎬";
    const runtime= m.runtime
      ? (m.mediaType==="tv"
          ? `<span class="card-runtime">${t("episodeDuration", m.runtime)}</span>`
          : `<span class="card-runtime">⏱ ${formatRuntime(m.runtime)}</span>`)
      : "";
    return `<div class="movie-card" data-key="${key}" data-type="${m.mediaType}" data-id="${m.tmdbId}">
      ${poster}
      <div class="card-body">
        <div class="card-title">${escHtml(m.title)}</div>
        <div class="card-meta">
          <span class="card-meta-left">${m.releaseYear||"—"} ${typeDot}</span>
          <span class="card-meta-right">${runtime}${emoji}</span>
        </div>
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
  const { details, credits, videoResults } = await getDetails(mediaType, tmdbId);

  const title  = mediaType==="tv" ? details.name  : details.title;
  const year   = mediaType==="tv" ? details.first_air_date?.slice(0,4) : details.release_date?.slice(0,4);
  const genres = (details.genres||[]).map(g=>g.name).join(", ");
  const cast   = (credits.cast||[]).slice(0,5).map(a=>a.name).join(", ");
  const trailer= videoResults.find(v=>v.site==="YouTube"&&v.type==="Trailer");

  let metaExtra = "";
  if (mediaType==="tv") {
    const s  = details.number_of_seasons;
    const ep = (details.episode_run_time||[])[0];
    if (s)  metaExtra += t("seasons", s);
    if (ep) metaExtra += (metaExtra?" · ":"") + t("episodeDuration", ep);
  } else if (details.runtime) {
    metaExtra = `⏱ ${formatRuntime(details.runtime)}`;
  }

  let creatorHtml = "";
  if (mediaType==="tv") {
    const creators = (details.created_by||[]).map(c=>c.name).join(", ");
    if (creators) creatorHtml = `<div class="modal-cast"><strong>${t("creator")} :</strong> ${escHtml(creators)}</div>`;
  } else {
    const director = (credits.crew||[]).find(c=>c.job==="Director");
    if (director) creatorHtml = `<div class="modal-cast"><strong>${t("director")} :</strong> ${escHtml(director.name)}</div>`;
  }

  const posterHtml = details.poster_path
    ? `<img src="${TMDB_IMG}${details.poster_path}" alt="${escHtml(title)}">`
    : `<div class="no-poster">${mediaType==="tv"?"📺":"🎬"}</div>`;

  const typeBadge = mediaType==="tv"
    ? `<span class="type-badge tv">📺 ${t("badgeSerie")}</span>`
    : `<span class="type-badge movie">🎬 ${t("badgeMovie")}</span>`;

  const tmdbLink = `<a class="tmdb-link" href="${tmdbPageUrl(mediaType, tmdbId)}" target="_blank" rel="noopener">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>TMDB
  </a>`;

  let ratingHtml = "";
  if (inCollection?.status==="watched") {
    ratingHtml = `
      <div class="modal-section-title">${t("yourRating")}</div>
      <div class="smiley-rating" id="modal-smiley-rating">
        ${SMILEYS.map(s=>`
          <button class="smiley-btn ${s.value===(inCollection.rating||0)?"active":""}" data-val="${s.value}">
            <span class="smiley-icon">${s.emoji}</span>
            <span class="smiley-label">${s[currentLang]}</span>
          </button>`).join("")}
      </div>`;
  }

  let actions = "";
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
        ${ratingHtml}
        <div class="modal-actions">${actions}</div>
      </div>
    </div>`;

  document.querySelectorAll("#modal-smiley-rating .smiley-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const val = Number(btn.dataset.val);
      document.querySelectorAll("#modal-smiley-rating .smiley-btn").forEach(b =>
        b.classList.toggle("active", Number(b.dataset.val)===val));
      await saveRating(key, val);
    });
  });

  document.getElementById("modal-add")?.addEventListener("click", async () => {
    const lang = t("tmdbLang");
    const base = mediaType==="tv"?"tv":"movie";
    const d  = await fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
    const cr = await fetch(`${TMDB_BASE}/${base}/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
    const runtime  = mediaType==="tv" ? ((d.episode_run_time||[])[0]||null) : (d.runtime||null);
    const director = mediaType==="tv"
      ? (d.created_by||[]).map(c=>c.name).join(", ")
      : ((cr.crew||[]).find(c=>c.job==="Director")?.name || "");
    const castList = (cr.cast||[]).slice(0,10).map(a=>a.name);
    await addItem({
      tmdbId, mediaType, title,
      posterPath: details.poster_path||"", releaseYear: Number(year)||null,
      overview: details.overview||"", genres: (d.genres||[]).map(g=>g.name),
      runtime, director, cast: castList,
    });
    closeModal();
  });
  document.getElementById("modal-watched")?.addEventListener("click", () => markWatched(key, title));
  document.getElementById("modal-to-watch")?.addEventListener("click", async () => { await markToWatch(key); closeModal(); });
  document.getElementById("modal-remove")?.addEventListener("click", async () => {
    if (confirm(t("confirmRemove", title))) { await removeItem(key); closeModal(); }
  });
}

function closeModal() { document.getElementById("modal").classList.add("hidden"); }
document.getElementById("modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key==="Escape") closeModal(); });

// ─────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    currentTab = tab.dataset.tab;
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
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
