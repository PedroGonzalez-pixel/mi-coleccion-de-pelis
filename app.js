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
//  DURÉE — tranches de filtre
// ─────────────────────────────────────────
const DURATION_FILTERS = [
  { value: "all",  fr: "Toutes durées",  es: "Todas",         en: "All durations", min: 0,   max: Infinity },
  { value: "60",   fr: "< 1h00",         es: "< 1h00",        en: "< 1h00",        min: 0,   max: 60       },
  { value: "90",   fr: "< 1h30",         es: "< 1h30",        en: "< 1h30",        min: 0,   max: 90       },
  { value: "120",  fr: "< 2h00",         es: "< 2h00",        en: "< 2h00",        min: 0,   max: 120      },
  { value: "150",  fr: "< 2h30",         es: "< 2h30",        en: "< 2h30",        min: 0,   max: 150      },
  { value: "180",  fr: "< 3h00",         es: "< 3h00",        en: "< 3h00",        min: 0,   max: 180      },
  { value: "180+", fr: "> 3h00",         es: "> 3h00",        en: "> 3h00",        min: 180, max: Infinity },
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
    ratingPopupSkip:"Passer",
    yourRating:"Note :",
    duration:"Durée", durationFilter:"Durée :",
    episodeDuration:(n)=>`~${n} min/ép.`,
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
    ratingPopupSkip:"Omitir",
    yourRating:"Nota :",
    duration:"Duración", durationFilter:"Duración :",
    episodeDuration:(n)=>`~${n} min/ep.`,
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
    ratingPopupSkip:"Skip",
    yourRating:"Rating :",
    duration:"Duration", durationFilter:"Duration:",
    episodeDuration:(n)=>`~${n} min/ep.`,
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
let currentLang    = localStorage.getItem("lang")     || "fr";
let viewMode       = localStorage.getItem("view")     || "gallery";
let sortMode       = localStorage.getItem("sort")     || "date_desc";
let genreFilter    = "all";
let mediaFilter    = "all";
let durationFilter = "all";
let unsubscribe    = null;
let currentUser    = null;

// ─────────────────────────────────────────
//  UTILS DURÉE
// ─────────────────────────────────────────
function formatRuntime(minutes) {
  if (!minutes || minutes <= 0) return null;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h${m > 0 ? String(m).padStart(2,"0") : ""}` : `${m}min`;
}

function runtimeMatchesDurationFilter(runtime, mediaType) {
  if (durationFilter === "all") return true;
  // Pour les séries on n'applique le filtre que si on a une durée d'épisode
  if (!runtime || mediaType === "tv") return true;
  const df = DURATION_FILTERS.find(d => d.value === durationFilter);
  if (!df) return true;
  if (durationFilter === "180+") return runtime > 180;
  return runtime < df.max;
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
  document.documentElement.lang = currentLang;
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === currentLang));
  buildSortSelect();
  buildMediaFilter();
  buildDurationFilter();
  renderLists();
}
function setLang(lang) { currentLang = lang; localStorage.setItem("lang", lang); applyTranslations(); }
document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ─────────────────────────────────────────
//  SORT
// ─────────────────────────────────────────
function buildSortSelect() {
  const sel = document.getElementById("sort-select");
  const opts = [
    ["date_desc",   t("sortDateDesc")],
    ["date_asc",    t("sortDateAsc")],
    ["alpha_az",    t("sortAlphaAZ")],
    ["alpha_za",    t("sortAlphaZA")],
    ["smiley_desc", t("sortSmileyDesc")],
    ["smiley_asc",  t("sortSmileyAsc")],
  ];
  sel.innerHTML = opts.map(([v,l]) =>
    `<option value="${v}" ${sortMode===v?"selected":""}>${l}</option>`).join("");
}
document.getElementById("sort-select").addEventListener("change", e => {
  sortMode = e.target.value; localStorage.setItem("sort", sortMode); renderLists();
});

// ─────────────────────────────────────────
//  MEDIA FILTER
// ─────────────────────────────────────────
function buildMediaFilter() {
  const toolbarLeft = document.querySelector(".toolbar-left");
  let mf = document.getElementById("media-filter");
  if (!mf) {
    mf = document.createElement("div");
    mf.id = "media-filter";
    mf.className = "media-filter";
    toolbarLeft.insertBefore(mf, toolbarLeft.firstChild);
  }
  mf.innerHTML = [
    ["all",   t("filterAll")],
    ["movie", t("filterMovies")],
    ["tv",    t("filterSeries")],
  ].map(([v,l]) =>
    `<button class="mf-btn ${mediaFilter===v?"active":""}" data-mf="${v}">${l}</button>`
  ).join("");
  mf.querySelectorAll(".mf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      mediaFilter = btn.dataset.mf;
      mf.querySelectorAll(".mf-btn").forEach(b => b.classList.toggle("active", b.dataset.mf===mediaFilter));
      renderLists();
    });
  });
}

// ─────────────────────────────────────────
//  DURATION FILTER
// ─────────────────────────────────────────
function buildDurationFilter() {
  let df = document.getElementById("duration-filter-select");
  if (!df) {
    df = document.createElement("select");
    df.id = "duration-filter-select";
    df.className = "tb-select";
    document.querySelector(".toolbar-left").appendChild(df);
    df.addEventListener("change", e => { durationFilter = e.target.value; renderLists(); });
  }
  df.innerHTML = DURATION_FILTERS.map(d =>
    `<option value="${d.value}" ${durationFilter===d.value?"selected":""}>${d[currentLang]}</option>`
  ).join("");
}

// ─────────────────────────────────────────
//  GENRE FILTER
// ─────────────────────────────────────────
function buildGenreSelect() {
  const allGenres = new Set();
  Object.values(movies).forEach(m => (m.genres||[]).forEach(g => allGenres.add(g)));
  const sel  = document.getElementById("genre-select");
  const prev = genreFilter;
  sel.innerHTML = `<option value="all">${t("allGenres")}</option>` +
    [...allGenres].sort().map(g =>
      `<option value="${g}" ${prev===g?"selected":""}>${g}</option>`).join("");
  genreFilter = prev;
}
document.getElementById("genre-select").addEventListener("change", e => {
  genreFilter = e.target.value; renderLists();
});

// ─────────────────────────────────────────
//  VIEW TOGGLE
// ─────────────────────────────────────────
function applyViewMode() {
  const g = viewMode === "gallery";
  document.getElementById("btn-gallery").classList.toggle("active", g);
  document.getElementById("btn-list").classList.toggle("active", !g);
  document.querySelectorAll(".movie-grid").forEach(el => el.classList.toggle("list-mode", !g));
}
document.getElementById("btn-gallery").addEventListener("click", () => {
  viewMode = "gallery"; localStorage.setItem("view", viewMode); applyViewMode();
});
document.getElementById("btn-list").addEventListener("click", () => {
  viewMode = "list"; localStorage.setItem("view", viewMode); applyViewMode();
});

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
  const key = docKey(item.mediaType, item.tmdbId);
  await setDoc(doc(db, "movies", key), {
    ...item, status: "to_watch",
    addedBy: currentUser.email, addedAt: serverTimestamp(),
    watchedAt: null, rating: null,
  });
}

async function markWatched(key, title) {
  await updateDoc(doc(db,"movies",key), { status:"watched", watchedAt: serverTimestamp() });
  closeModal();
  showRatingPopup(key, title);
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
//  SMILEY RATING POPUP
// ─────────────────────────────────────────
function showRatingPopup(key, title) {
  const existing = document.getElementById("rating-popup");
  if (existing) existing.remove();
  const popup = document.createElement("div");
  popup.id = "rating-popup";
  popup.innerHTML = `
    <div class="rating-popup-backdrop"></div>
    <div class="rating-popup-box">
      <h3>${t("ratingPopupTitle")}</h3>
      <p>${t("ratingPopupSub", title)}</p>
      <div class="rating-popup-smileys">
        ${SMILEYS.map(s => `
          <button class="smiley-btn" data-val="${s.value}">
            <span class="smiley-icon">${s.emoji}</span>
            <span class="smiley-label">${s[currentLang]}</span>
          </button>`).join("")}
      </div>
      <button class="rating-popup-skip">${t("ratingPopupSkip")}</button>
    </div>`;
  document.body.appendChild(popup);
  popup.querySelectorAll(".smiley-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      await saveRating(key, Number(btn.dataset.val));
      popup.remove();
    });
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
const TMDB_BASE_URL = "https://www.themoviedb.org"; // lien vers la fiche TMDB

function tmdbPageUrl(mediaType, tmdbId) {
  return `${TMDB_BASE_URL}/${mediaType === "tv" ? "tv" : "movie"}/${tmdbId}`;
}

async function searchBoth(q) {
  const lang = t("tmdbLang");
  const [movRes, tvRes] = await Promise.all([
    fetch(`${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(q)}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(q)}&language=${lang}`).then(r=>r.json()),
  ]);
  const movs  = (movRes.results||[]).map(m => ({...m, _type:"movie"}));
  const shows = (tvRes.results||[]).map(s  => ({...s, _type:"tv"}));
  return [...movs, ...shows].sort((a,b) => (b.popularity||0)-(a.popularity||0));
}

async function getDetails(mediaType, tmdbId) {
  const lang = t("tmdbLang");
  const base = mediaType === "tv" ? "tv" : "movie";
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
  const results = await searchBoth(q);
  if (!results.length) {
    searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("noResults")}</div>`;
    return;
  }
  searchResults.innerHTML = results.slice(0,10).map(m => {
    const mtype  = m._type;
    const key    = docKey(mtype, m.id);
    const already= !!movies[key];
    const title  = mtype === "tv" ? m.name  : m.title;
    const year   = mtype === "tv" ? m.first_air_date?.slice(0,4) : m.release_date?.slice(0,4);
    const badge  = mtype === "tv"
      ? `<span class="type-badge tv">📺 ${t("badgeSerie")}</span>`
      : `<span class="type-badge movie">🎬 ${t("badgeMovie")}</span>`;
    const poster = m.poster_path
      ? `<img src="${TMDB_IMG_SM}${m.poster_path}" alt="${escHtml(title)}">`
      : `<div class="sr-poster-placeholder">${mtype==="tv"?"📺":"🎬"}</div>`;
    return `<div class="search-result-item"
        data-id="${m.id}" data-type="${mtype}"
        data-title="${encodeURIComponent(title||"")}"
        data-poster="${m.poster_path||""}"
        data-year="${year||""}"
        data-overview="${encodeURIComponent(m.overview||"")}">
      ${poster}
      <div class="sr-info">
        <div class="sr-title">${escHtml(title)}</div>
        <div class="sr-year">${badge} ${year||"—"}</div>
      </div>
      <button class="sr-add ${already?"added":""}" ${already?"disabled":""}>
        ${already ? t("addedBtn") : t("addBtn")}
      </button>
    </div>`;
  }).join("");

  searchResults.querySelectorAll(".sr-add:not(.added)").forEach(btn => {
    btn.addEventListener("click", async e => {
      e.stopPropagation();
      const row  = btn.closest(".search-result-item");
      const { id, type, title, poster, year, overview } = row.dataset;
      const lang = t("tmdbLang");
      const base = type === "tv" ? "tv" : "movie";
      const d    = await fetch(`${TMDB_BASE}/${base}/${id}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
      // Récupère runtime selon le type
      const runtime = type === "tv"
        ? ((d.episode_run_time||[])[0] || null)   // durée moy. d'un épisode
        : (d.runtime || null);
      await addItem({
        tmdbId: Number(id), mediaType: type,
        title: decodeURIComponent(title),
        posterPath: poster, releaseYear: Number(year)||null,
        overview: decodeURIComponent(overview),
        genres: (d.genres||[]).map(g=>g.name),
        runtime,
      });
      btn.textContent = t("addedBtn"); btn.classList.add("added"); btn.disabled = true;
    });
  });

  searchResults.querySelectorAll(".search-result-item").forEach(row => {
    row.addEventListener("click", e => {
      if (e.target.closest(".sr-add")) return;
      openModal(row.dataset.type, Number(row.dataset.id));
    });
  });
}

// ─────────────────────────────────────────
//  SORT + FILTER
// ─────────────────────────────────────────
function sortAndFilter(list) {
  let out = [...list];
  if (mediaFilter !== "all")  out = out.filter(m => m.mediaType === mediaFilter);
  if (genreFilter !== "all")  out = out.filter(m => (m.genres||[]).includes(genreFilter));
  // Filtre durée (films uniquement — pour les séries on passe)
  if (durationFilter !== "all") {
    out = out.filter(m => runtimeMatchesDurationFilter(m.runtime, m.mediaType));
  }
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
    const key    = docKey(m.mediaType, m.tmdbId);
    const poster = m.posterPath
      ? `<img src="${TMDB_IMG}${m.posterPath}" alt="${escHtml(m.title)}" loading="lazy">`
      : `<div class="no-poster">${m.mediaType==="tv"?"📺":"🎬"}</div>`;
    const smiley = m.rating ? SMILEYS.find(s=>s.value===m.rating) : null;
    const emojiHtml = smiley ? `<span class="card-emoji" title="${smiley[currentLang]}">${smiley.emoji}</span>` : "";
    const typeDot   = m.mediaType==="tv"
      ? `<span class="card-type-dot">📺</span>`
      : `<span class="card-type-dot">🎬</span>`;
    // Durée sur la carte
    let runtimeHtml = "";
    if (m.runtime) {
      runtimeHtml = m.mediaType === "tv"
        ? `<span class="card-runtime">${t("episodeDuration", m.runtime)}</span>`
        : `<span class="card-runtime">⏱ ${formatRuntime(m.runtime)}</span>`;
    }
    return `<div class="movie-card" data-key="${key}" data-type="${m.mediaType}" data-id="${m.tmdbId}">
      ${poster}
      <div class="card-body">
        <div class="card-title">${escHtml(m.title)}</div>
        <div class="card-meta">
          <span class="card-meta-left">${m.releaseYear||"—"} ${typeDot}</span>
          <span class="card-meta-right">${runtimeHtml}${emojiHtml}</span>
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

  const title   = mediaType === "tv" ? details.name  : details.title;
  const year    = mediaType === "tv" ? details.first_air_date?.slice(0,4) : details.release_date?.slice(0,4);
  const genres  = (details.genres||[]).map(g=>g.name).join(", ");
  const cast    = (credits.cast||[]).slice(0,5).map(a=>a.name).join(", ");
  const trailer = videoResults.find(v=>v.site==="YouTube"&&v.type==="Trailer");

  // Durée / saisons
  let metaExtra = "";
  if (mediaType === "tv") {
    const seasons = details.number_of_seasons;
    const epRuntime = (details.episode_run_time||[])[0];
    if (seasons) metaExtra += t("seasons", seasons);
    if (epRuntime) metaExtra += (metaExtra ? " · " : "") + t("episodeDuration", epRuntime);
  } else {
    if (details.runtime) metaExtra = `⏱ ${formatRuntime(details.runtime)}`;
  }

  // Créateur / réalisateur
  let creatorHtml = "";
  if (mediaType === "tv") {
    const creators = (details.created_by||[]).map(c=>c.name).join(", ");
    if (creators) creatorHtml = `<div class="modal-cast"><strong>${t("creator")} :</strong> ${escHtml(creators)}</div>`;
  } else {
    const director = (credits.crew||[]).find(c=>c.job==="Director");
    if (director) creatorHtml = `<div class="modal-cast"><strong>${t("director")} :</strong> ${escHtml(director.name)}</div>`;
  }

  const posterHtml = details.poster_path
    ? `<img src="${TMDB_IMG}${details.poster_path}" alt="${escHtml(title)}">`
    : `<div class="no-poster">${mediaType==="tv"?"📺":"🎬"}</div>`;

  const typeBadge = mediaType === "tv"
    ? `<span class="type-badge tv" style="display:inline-block;margin-bottom:8px">📺 ${t("badgeSerie")}</span>`
    : `<span class="type-badge movie" style="display:inline-block;margin-bottom:8px">🎬 ${t("badgeMovie")}</span>`;

  // Lien TMDB
  const tmdbLink = `<a class="tmdb-link" href="${tmdbPageUrl(mediaType, tmdbId)}" target="_blank" rel="noopener" title="Voir sur TMDB">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    TMDB
  </a>`;

  // Note smiley
  let ratingHtml = "";
  if (inCollection?.status === "watched") {
    ratingHtml = `
      <div class="modal-section-title">${t("yourRating")}</div>
      <div class="smiley-rating" id="modal-smiley-rating">
        ${SMILEYS.map(s => `
          <button class="smiley-btn ${s.value===(inCollection.rating||0)?"active":""}" data-val="${s.value}">
            <span class="smiley-icon">${s.emoji}</span>
            <span class="smiley-label">${s[currentLang]}</span>
          </button>`).join("")}
      </div>`;
  }

  // Boutons
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
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">
          ${typeBadge}
          ${tmdbLink}
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

  // Smileys interactifs
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
    const base = mediaType === "tv" ? "tv" : "movie";
    const d = await fetch(`${TMDB_BASE}/${base}/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
    const runtime = mediaType === "tv"
      ? ((d.episode_run_time||[])[0] || null)
      : (d.runtime || null);
    await addItem({
      tmdbId, mediaType, title,
      posterPath: details.poster_path||"", releaseYear: Number(year)||null,
      overview: details.overview||"", genres: (d.genres||[]).map(g=>g.name),
      runtime,
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
//  UTILS
// ─────────────────────────────────────────
function escHtml(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
buildSortSelect();
applyTranslations();
applyViewMode();
