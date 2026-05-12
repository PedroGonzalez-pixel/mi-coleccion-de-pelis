// ─────────────────────────────────────────
//  CONFIGURATION — remplace les valeurs ici
// ─────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBDdJ82azr6aemBVd3wCi2QBUU_2K4ljco",
  authDomain: "mi-coleccion-de-pelis.firebaseapp.com",
  projectId: "mi-coleccion-de-pelis",
  storageBucket: "mi-coleccion-de-pelis.firebasestorage.app",
  messagingSenderId: "1053898593883",
  appId: "1:1053898593883:web:9eb152c29af0d4f075d17e"
};

const TMDB_API_KEY = "dd27e4c668d68859a2383ff890147522"; // ← colle ta clé TMDB ici

// Seuls ces 2 emails peuvent accéder à l'app
const ALLOWED_EMAILS = [
  "jean.pierre.gonzalez@gmail.com",   // ← remplace
  "celya31@gmail.com"    // ← remplace
];



// ─────────────────────────────────────────
//  SMILEYS — 4 niveaux partagés
// ─────────────────────────────────────────
const SMILEYS = [
  { value: 1, emoji: "😞", fr: "Pas aimé",  es: "No me gustó", en: "Didn't like it" },
  { value: 2, emoji: "😐", fr: "Sans plus", es: "Regular",      en: "It was ok"      },
  { value: 3, emoji: "😊", fr: "Aimé",      es: "Me gustó",    en: "Liked it"       },
  { value: 4, emoji: "🤩", fr: "Adoré",     es: "¡Me encantó!", en: "Loved it!"     },
];

// ─────────────────────────────────────────
//  TRADUCTIONS
// ─────────────────────────────────────────
const I18N = {
  fr: {
    loginSubtitle:"Votre liste de films partagée", loginBtn:"Connexion avec Google",
    logout:"Déconnexion", searchPlaceholder:"Rechercher un film…", searchBtn:"Rechercher",
    tabToWatch:"À voir", tabWatched:"Vus", loading:"Chargement…",
    noResults:"Aucun résultat", searching:"Recherche…",
    addBtn:"+ Ajouter", addedBtn:"✓ Ajouté",
    markWatched:"✓ Marquer comme vu", markToWatch:"↩ Remettre à voir", removeBtn:"Supprimer",
    trailerBtn:"▶ Bande-annonce", addToList:"+ Ajouter à la liste",
    director:"Réalisateur·rice", cast:"Avec",
    emptyToWatch:"Aucun film à voir pour l'instant", emptyWatched:"Aucun film vu pour l'instant",
    confirmRemove:(t)=>`Supprimer "${t}" de la liste ?`,
    unauthorizedAlert:"Accès non autorisé pour ce compte Gmail.",
    sortDateDesc:"Date ajout ↓", sortDateAsc:"Date ajout ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortSmileyDesc:"Note ↓", sortSmileyAsc:"Note ↑",
    allGenres:"Tous les genres",
    ratingPopupTitle:"Vous avez aimé ?",
    ratingPopupSub:(title)=>`Que pensez-vous de "${title}" ?`,
    ratingPopupSkip:"Passer",
    yourRating:"Note :", changeRating:"Modifier",
    tmdbLang:"fr-FR",
  },
  es: {
    loginSubtitle:"Tu lista de películas compartida", loginBtn:"Iniciar sesión con Google",
    logout:"Cerrar sesión", searchPlaceholder:"Buscar una película…", searchBtn:"Buscar",
    tabToWatch:"Por ver", tabWatched:"Vistas", loading:"Cargando…",
    noResults:"Sin resultados", searching:"Buscando…",
    addBtn:"+ Añadir", addedBtn:"✓ Añadida",
    markWatched:"✓ Marcar como vista", markToWatch:"↩ Mover a por ver", removeBtn:"Eliminar",
    trailerBtn:"▶ Tráiler", addToList:"+ Añadir a la lista",
    director:"Director/a", cast:"Con",
    emptyToWatch:"No hay películas por ver", emptyWatched:"No hay películas vistas",
    confirmRemove:(t)=>`¿Eliminar "${t}" de la lista?`,
    unauthorizedAlert:"Acceso no autorizado para esta cuenta de Gmail.",
    sortDateDesc:"Fecha añadido ↓", sortDateAsc:"Fecha añadido ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortSmileyDesc:"Nota ↓", sortSmileyAsc:"Nota ↑",
    allGenres:"Todos los géneros",
    ratingPopupTitle:"¿Te gustó?",
    ratingPopupSub:(title)=>`¿Qué opinas de "${title}"?`,
    ratingPopupSkip:"Omitir",
    yourRating:"Nota :", changeRating:"Cambiar",
    tmdbLang:"es-ES",
  },
  en: {
    loginSubtitle:"Your shared movie list", loginBtn:"Sign in with Google",
    logout:"Sign out", searchPlaceholder:"Search for a movie…", searchBtn:"Search",
    tabToWatch:"To Watch", tabWatched:"Watched", loading:"Loading…",
    noResults:"No results found", searching:"Searching…",
    addBtn:"+ Add", addedBtn:"✓ Added",
    markWatched:"✓ Mark as watched", markToWatch:"↩ Move to watchlist", removeBtn:"Remove",
    trailerBtn:"▶ Trailer", addToList:"+ Add to list",
    director:"Director", cast:"With",
    emptyToWatch:"No movies in your watchlist yet", emptyWatched:"No watched movies yet",
    confirmRemove:(t)=>`Remove "${t}" from the list?`,
    unauthorizedAlert:"Access not allowed for this Gmail account.",
    sortDateDesc:"Date added ↓", sortDateAsc:"Date added ↑",
    sortAlphaAZ:"A → Z", sortAlphaZA:"Z → A",
    sortSmileyDesc:"Rating ↓", sortSmileyAsc:"Rating ↑",
    allGenres:"All genres",
    ratingPopupTitle:"Did you enjoy it?",
    ratingPopupSub:(title)=>`What did you think of "${title}"?`,
    ratingPopupSkip:"Skip",
    yourRating:"Rating :", changeRating:"Change",
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
let movies      = {};
let currentTab  = "to_watch";
let currentLang = localStorage.getItem("lang") || "fr";
let viewMode    = localStorage.getItem("view") || "gallery";
let sortMode    = localStorage.getItem("sort") || "date_desc";
let genreFilter = "all";
let unsubscribe = null;
let currentUser = null;

// ─────────────────────────────────────────
//  I18N
// ─────────────────────────────────────────
const t = (key, ...args) => {
  const val = I18N[currentLang][key];
  return typeof val === "function" ? val(...args) : (val ?? key);
};
const smileyLabel = (value) => {
  const s = SMILEYS.find(s => s.value === value);
  return s ? s[currentLang] : "";
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
    ["date_desc",    t("sortDateDesc")],
    ["date_asc",     t("sortDateAsc")],
    ["alpha_az",     t("sortAlphaAZ")],
    ["alpha_za",     t("sortAlphaZA")],
    ["smiley_desc",  t("sortSmileyDesc")],
    ["smiley_asc",   t("sortSmileyAsc")],
  ];
  sel.innerHTML = opts.map(([v,l]) =>
    `<option value="${v}" ${sortMode===v?"selected":""}>${l}</option>`).join("");
}
document.getElementById("sort-select").addEventListener("change", e => {
  sortMode = e.target.value; localStorage.setItem("sort", sortMode); renderLists();
});

// ─────────────────────────────────────────
//  GENRE FILTER
// ─────────────────────────────────────────
function buildGenreSelect() {
  const allGenres = new Set();
  Object.values(movies).forEach(m => (m.genres||[]).forEach(g => allGenres.add(g)));
  const sel = document.getElementById("genre-select");
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

async function addMovie(movie) {
  await setDoc(doc(db, "movies", String(movie.tmdbId)), {
    ...movie, status: "to_watch",
    addedBy: currentUser.email, addedAt: serverTimestamp(),
    watchedAt: null, rating: null,
  });
}

// Marque comme vu ET ouvre le popup de note
async function markWatched(tmdbId, movieTitle) {
  await updateDoc(doc(db,"movies",String(tmdbId)), {
    status: "watched", watchedAt: serverTimestamp()
  });
  closeModal();
  showRatingPopup(tmdbId, movieTitle);
}

async function markToWatch(tmdbId) {
  await updateDoc(doc(db,"movies",String(tmdbId)), {
    status: "to_watch", watchedAt: null, rating: null
  });
}

// Note partagée — un seul champ `rating` pour tout le monde
async function saveRating(tmdbId, value) {
  await updateDoc(doc(db,"movies",String(tmdbId)), { rating: value });
}

async function removeMovie(id) {
  await deleteDoc(doc(db,"movies",String(id)));
}

// ─────────────────────────────────────────
//  SMILEY RATING POPUP
// ─────────────────────────────────────────
function showRatingPopup(tmdbId, movieTitle) {
  // Crée le popup dynamiquement
  const existing = document.getElementById("rating-popup");
  if (existing) existing.remove();

  const popup = document.createElement("div");
  popup.id = "rating-popup";
  popup.innerHTML = `
    <div class="rating-popup-backdrop"></div>
    <div class="rating-popup-box">
      <h3>${t("ratingPopupTitle")}</h3>
      <p>${t("ratingPopupSub", movieTitle)}</p>
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

  // Clic sur un smiley → sauvegarde et ferme
  popup.querySelectorAll(".smiley-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      await saveRating(tmdbId, Number(btn.dataset.val));
      popup.remove();
    });
  });

  // Passer
  popup.querySelector(".rating-popup-skip").addEventListener("click", () => popup.remove());
  popup.querySelector(".rating-popup-backdrop").addEventListener("click", () => popup.remove());
}

// ─────────────────────────────────────────
//  TMDB
// ─────────────────────────────────────────
const TMDB_BASE   = "https://api.themoviedb.org/3";
const TMDB_IMG    = "https://image.tmdb.org/t/p/w500";
const TMDB_IMG_SM = "https://image.tmdb.org/t/p/w185";

async function searchTMDB(q) {
  const r = await fetch(`${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(q)}&language=${t("tmdbLang")}`);
  return (await r.json()).results || [];
}
async function getMovieDetails(id) {
  const lang = t("tmdbLang");
  const [details, credits, videos] = await Promise.all([
    fetch(`${TMDB_BASE}/movie/${id}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/movie/${id}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
    fetch(`${TMDB_BASE}/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json()),
  ]);
  let vids = videos.results || [];
  if (!vids.length) {
    const fb = await fetch(`${TMDB_BASE}/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`).then(r=>r.json());
    vids = fb.results || [];
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
  const results = await searchTMDB(q);
  if (!results.length) {
    searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("noResults")}</div>`;
    return;
  }
  searchResults.innerHTML = results.slice(0,8).map(m => {
    const already = !!movies[String(m.id)];
    const year    = m.release_date?.slice(0,4) || "—";
    const poster  = m.poster_path
      ? `<img src="${TMDB_IMG_SM}${m.poster_path}" alt="${escHtml(m.title)}">`
      : `<div class="sr-poster-placeholder">🎬</div>`;
    return `<div class="search-result-item">
      ${poster}
      <div class="sr-info">
        <div class="sr-title">${escHtml(m.title)}</div>
        <div class="sr-year">${year}</div>
      </div>
      <button class="sr-add ${already?"added":""}"
        data-id="${m.id}" data-title="${encodeURIComponent(m.title)}"
        data-poster="${m.poster_path||""}" data-year="${year}"
        data-overview="${encodeURIComponent(m.overview||"")}"
        ${already?"disabled":""}>
        ${already ? t("addedBtn") : t("addBtn")}
      </button>
    </div>`;
  }).join("");

  searchResults.querySelectorAll(".sr-add:not(.added)").forEach(btn => {
    btn.addEventListener("click", async e => {
      e.stopPropagation();
      const {id, title, poster, year, overview} = btn.dataset;
      const lang    = t("tmdbLang");
      const details = await fetch(`${TMDB_BASE}/movie/${id}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
      await addMovie({
        tmdbId: Number(id), title: decodeURIComponent(title),
        posterPath: poster, releaseYear: Number(year)||null,
        overview: decodeURIComponent(overview),
        genres: (details.genres||[]).map(g=>g.name),
      });
      btn.textContent = t("addedBtn"); btn.classList.add("added"); btn.disabled = true;
    });
  });
  searchResults.querySelectorAll(".search-result-item").forEach(item => {
    item.addEventListener("click", e => {
      if (e.target.closest(".sr-add")) return;
      openModal(Number(item.querySelector(".sr-add").dataset.id));
    });
  });
}

// ─────────────────────────────────────────
//  SORT + FILTER
// ─────────────────────────────────────────
function sortAndFilter(list) {
  let out = [...list];
  if (genreFilter !== "all") out = out.filter(m => (m.genres||[]).includes(genreFilter));
  switch (sortMode) {
    case "date_asc":   out.sort((a,b) => (a.addedAt?.seconds||0)-(b.addedAt?.seconds||0)); break;
    case "date_desc":  out.sort((a,b) => (b.addedAt?.seconds||0)-(a.addedAt?.seconds||0)); break;
    case "alpha_az":   out.sort((a,b) => a.title.localeCompare(b.title)); break;
    case "alpha_za":   out.sort((a,b) => b.title.localeCompare(a.title)); break;
    case "smiley_desc":out.sort((a,b) => (b.rating||0)-(a.rating||0)); break;
    case "smiley_asc": out.sort((a,b) => (a.rating||0)-(b.rating||0)); break;
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
    const poster = m.posterPath
      ? `<img src="${TMDB_IMG}${m.posterPath}" alt="${escHtml(m.title)}" loading="lazy">`
      : `<div class="no-poster">🎬</div>`;
    const smiley = m.rating ? SMILEYS.find(s=>s.value===m.rating) : null;
    const emojiHtml = smiley ? `<span class="card-emoji" title="${smiley[currentLang]}">${smiley.emoji}</span>` : "";
    return `<div class="movie-card" data-id="${m.tmdbId}">
      ${poster}
      <div class="card-body">
        <div class="card-title">${escHtml(m.title)}</div>
        <div class="card-meta"><span>${m.releaseYear||"—"}</span>${emojiHtml}</div>
      </div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".movie-card").forEach(card =>
    card.addEventListener("click", () => openModal(Number(card.dataset.id))));
}

// ─────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────
async function openModal(tmdbId) {
  const modal   = document.getElementById("modal");
  const content = document.getElementById("modal-content");
  modal.classList.remove("hidden");
  content.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text2)">${t("loading")}</div>`;

  const inCollection = movies[String(tmdbId)];
  const { details, credits, videoResults } = await getMovieDetails(tmdbId);

  const cast     = (credits.cast||[]).slice(0,5).map(a=>a.name).join(", ");
  const director = (credits.crew||[]).find(c=>c.job==="Director");
  const trailer  = videoResults.find(v=>v.site==="YouTube"&&v.type==="Trailer");
  const year     = details.release_date?.slice(0,4)||"—";
  const runtime  = details.runtime ? `${details.runtime} min` : "";
  const genres   = (details.genres||[]).map(g=>g.name).join(", ");

  const posterHtml = details.poster_path
    ? `<img src="${TMDB_IMG}${details.poster_path}" alt="${escHtml(details.title)}">`
    : `<div class="no-poster">🎬</div>`;

  // ── Note actuelle (film vu) ──
  let ratingHtml = "";
  if (inCollection?.status === "watched") {
    const curSmiley = inCollection.rating ? SMILEYS.find(s=>s.value===inCollection.rating) : null;
    if (curSmiley) {
      // Affiche la note + bouton modifier
      ratingHtml = `
        <div class="modal-section-title">${t("yourRating")}</div>
        <div class="smiley-rating" id="modal-smiley-rating">
          ${SMILEYS.map(s => `
            <button class="smiley-btn ${s.value===inCollection.rating?"active":""}" data-val="${s.value}">
              <span class="smiley-icon">${s.emoji}</span>
              <span class="smiley-label">${s[currentLang]}</span>
            </button>`).join("")}
        </div>`;
    } else {
      // Pas encore noté → affiche les smileys directement
      ratingHtml = `
        <div class="modal-section-title">${t("yourRating")}</div>
        <div class="smiley-rating" id="modal-smiley-rating">
          ${SMILEYS.map(s => `
            <button class="smiley-btn" data-val="${s.value}">
              <span class="smiley-icon">${s.emoji}</span>
              <span class="smiley-label">${s[currentLang]}</span>
            </button>`).join("")}
        </div>`;
    }
  }

  // ── Boutons d'action ──
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
        <div class="modal-title">${escHtml(details.title)}</div>
        <div class="modal-meta">${year}${runtime?" · "+runtime:""}${genres?" · "+genres:""}</div>
        ${director?`<div class="modal-cast"><strong>${t("director")} :</strong> ${escHtml(director.name)}</div>`:""}
        ${cast?`<div class="modal-cast"><strong>${t("cast")} :</strong> ${escHtml(cast)}</div>`:""}
        ${details.overview?`<div class="modal-overview">${escHtml(details.overview)}</div>`:""}
        ${ratingHtml}
        <div class="modal-actions">${actions}</div>
      </div>
    </div>`;

  // Smileys cliquables dans la modal (modifier la note)
  document.querySelectorAll("#modal-smiley-rating .smiley-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const val = Number(btn.dataset.val);
      document.querySelectorAll("#modal-smiley-rating .smiley-btn").forEach(b =>
        b.classList.toggle("active", Number(b.dataset.val) === val));
      await saveRating(tmdbId, val);
    });
  });

  document.getElementById("modal-add")?.addEventListener("click", async () => {
    const lang = t("tmdbLang");
    const d = await fetch(`${TMDB_BASE}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r=>r.json());
    await addMovie({
      tmdbId: details.id, title: details.title,
      posterPath: details.poster_path||"", releaseYear: Number(year)||null,
      overview: details.overview||"", genres: (d.genres||[]).map(g=>g.name),
    });
    closeModal();
  });
  document.getElementById("modal-watched")?.addEventListener("click", () => {
    markWatched(tmdbId, details.title);
  });
  document.getElementById("modal-to-watch")?.addEventListener("click", async () => {
    await markToWatch(tmdbId); closeModal();
  });
  document.getElementById("modal-remove")?.addEventListener("click", async () => {
    if (confirm(t("confirmRemove", details.title))) { await removeMovie(tmdbId); closeModal(); }
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
