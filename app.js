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
//  TRADUCTIONS
// ─────────────────────────────────────────
const I18N = {
  fr: {
    loginSubtitle:    "Votre liste de films partagée",
    loginBtn:         "Connexion avec Google",
    logout:           "Déconnexion",
    searchPlaceholder:"Rechercher un film…",
    searchBtn:        "Rechercher",
    tabToWatch:       "À voir",
    tabWatched:       "Vus",
    loading:          "Chargement…",
    noResults:        "Aucun résultat",
    searching:        "Recherche…",
    addBtn:           "+ Ajouter",
    addedBtn:         "✓ Ajouté",
    markWatched:      "✓ Marquer comme vu",
    markToWatch:      "↩ Remettre à voir",
    removeBtn:        "Supprimer",
    trailerBtn:       "▶ Bande-annonce",
    addToList:        "+ Ajouter à la liste",
    director:         "Réalisateur·rice",
    cast:             "Avec",
    emptyToWatch:     "Aucun film à voir pour l'instant",
    emptyWatched:     "Aucun film vu pour l'instant",
    confirmRemove:    (title) => `Supprimer "${title}" de la liste ?`,
    unauthorizedAlert:"Accès non autorisé pour ce compte Gmail.",
    tmdbLang:         "fr-FR",
  },
  es: {
    loginSubtitle:    "Tu lista de películas compartida",
    loginBtn:         "Iniciar sesión con Google",
    logout:           "Cerrar sesión",
    searchPlaceholder:"Buscar una película…",
    searchBtn:        "Buscar",
    tabToWatch:       "Por ver",
    tabWatched:       "Vistas",
    loading:          "Cargando…",
    noResults:        "Sin resultados",
    searching:        "Buscando…",
    addBtn:           "+ Añadir",
    addedBtn:         "✓ Añadida",
    markWatched:      "✓ Marcar como vista",
    markToWatch:      "↩ Mover a por ver",
    removeBtn:        "Eliminar",
    trailerBtn:       "▶ Tráiler",
    addToList:        "+ Añadir a la lista",
    director:         "Director/a",
    cast:             "Con",
    emptyToWatch:     "No hay películas por ver",
    emptyWatched:     "No hay películas vistas",
    confirmRemove:    (title) => `¿Eliminar "${title}" de la lista?`,
    unauthorizedAlert:"Acceso no autorizado para esta cuenta de Gmail.",
    tmdbLang:         "es-ES",
  },
  en: {
    loginSubtitle:    "Your shared movie list",
    loginBtn:         "Sign in with Google",
    logout:           "Sign out",
    searchPlaceholder:"Search for a movie…",
    searchBtn:        "Search",
    tabToWatch:       "To Watch",
    tabWatched:       "Watched",
    loading:          "Loading…",
    noResults:        "No results found",
    searching:        "Searching…",
    addBtn:           "+ Add",
    addedBtn:         "✓ Added",
    markWatched:      "✓ Mark as watched",
    markToWatch:      "↩ Move to watchlist",
    removeBtn:        "Remove",
    trailerBtn:       "▶ Trailer",
    addToList:        "+ Add to list",
    director:         "Director",
    cast:             "With",
    emptyToWatch:     "No movies in your watchlist yet",
    emptyWatched:     "No watched movies yet",
    confirmRemove:    (title) => `Remove "${title}" from the list?`,
    unauthorizedAlert:"Access not allowed for this Gmail account.",
    tmdbLang:         "en-US",
  },
};

// ─────────────────────────────────────────
//  FIREBASE INIT
// ─────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore, collection, doc, setDoc, deleteDoc,
  onSnapshot, query, orderBy, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseApp = initializeApp(FIREBASE_CONFIG);
const auth        = getAuth(firebaseApp);
const db          = getFirestore(firebaseApp);
const provider    = new GoogleAuthProvider();

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
let movies      = {};
let currentTab  = "to_watch";
let currentLang = localStorage.getItem("lang") || "fr";
let unsubscribe = null;

// ─────────────────────────────────────────
//  I18N HELPERS
// ─────────────────────────────────────────
const t = (key, ...args) => {
  const val = I18N[currentLang][key];
  return typeof val === "function" ? val(...args) : val;
};

function applyTranslations() {
  document.getElementById("login-subtitle").textContent   = t("loginSubtitle");
  document.getElementById("login-btn-text").textContent   = t("loginBtn");
  document.getElementById("btn-logout").textContent       = t("logout");
  document.getElementById("search-input").placeholder     = t("searchPlaceholder");
  document.getElementById("btn-search").textContent       = t("searchBtn");
  document.getElementById("tab-to-watch-label").textContent = t("tabToWatch");
  document.getElementById("tab-watched-label").textContent  = t("tabWatched");

  // Met à jour l'attribut lang sur <html>
  document.documentElement.lang = currentLang;

  // Marque le bon bouton actif sur tous les sélecteurs de langue
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  // Re-render les listes avec les nouvelles traductions
  renderLists();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

// Listeners sur tous les sélecteurs de langue (login + app)
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// ─────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────
document.getElementById("btn-login").addEventListener("click", () => {
  signInWithPopup(auth, provider).catch(console.error);
});

document.getElementById("btn-logout").addEventListener("click", () => {
  signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user && ALLOWED_EMAILS.includes(user.email)) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("user-email").textContent = user.email;
    startListening();
  } else {
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
    if (unsubscribe) { unsubscribe(); unsubscribe = null; }
    if (user && !ALLOWED_EMAILS.includes(user.email)) {
      signOut(auth);
      alert(t("unauthorizedAlert"));
    }
  }
});

// ─────────────────────────────────────────
//  FIRESTORE — écoute en temps réel
// ─────────────────────────────────────────
function startListening() {
  const q = query(collection(db, "movies"), orderBy("addedAt", "desc"));
  unsubscribe = onSnapshot(q, (snapshot) => {
    movies = {};
    snapshot.forEach(d => { movies[d.id] = d.data(); });
    renderLists();
  });
}

// ─────────────────────────────────────────
//  TMDB API
// ─────────────────────────────────────────
const TMDB_BASE     = "https://api.themoviedb.org/3";
const TMDB_IMG      = "https://image.tmdb.org/t/p/w500";
const TMDB_IMG_SM   = "https://image.tmdb.org/t/p/w185";

async function searchTMDB(queryStr) {
  const lang = t("tmdbLang");
  const res = await fetch(
    `${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(queryStr)}&language=${lang}`
  );
  const data = await res.json();
  return data.results || [];
}

async function getMovieDetails(tmdbId) {
  const lang = t("tmdbLang");
  const [details, credits, videos] = await Promise.all([
    fetch(`${TMDB_BASE}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=${lang}`).then(r => r.json()),
    fetch(`${TMDB_BASE}/movie/${tmdbId}/credits?api_key=${TMDB_API_KEY}&language=${lang}`).then(r => r.json()),
    // Les vidéos : on essaie d'abord dans la langue choisie, sinon fallback en-US
    fetch(`${TMDB_BASE}/movie/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=${lang}`).then(r => r.json()),
  ]);
  // Fallback trailer en anglais si aucune vidéo dans la langue choisie
  let videoResults = videos.results || [];
  if (!videoResults.length) {
    const fallback = await fetch(
      `${TMDB_BASE}/movie/${tmdbId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    ).then(r => r.json());
    videoResults = fallback.results || [];
  }
  return { details, credits, videoResults };
}

// ─────────────────────────────────────────
//  SEARCH UI
// ─────────────────────────────────────────
const searchInput   = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

document.getElementById("btn-search").addEventListener("click", doSearch);
searchInput.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });

document.addEventListener("click", e => {
  if (!e.target.closest(".search-section")) {
    searchResults.classList.add("hidden");
  }
});

async function doSearch() {
  const q = searchInput.value.trim();
  if (!q) return;
  searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("searching")}</div>`;
  searchResults.classList.remove("hidden");

  const results = await searchTMDB(q);
  if (!results.length) {
    searchResults.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text2)">${t("noResults")}</div>`;
    return;
  }

  searchResults.innerHTML = results.slice(0, 8).map(m => {
    const alreadyAdded = !!movies[String(m.id)];
    const year = m.release_date ? m.release_date.slice(0, 4) : "—";
    const posterHtml = m.poster_path
      ? `<img src="${TMDB_IMG_SM}${m.poster_path}" alt="${escHtml(m.title)}">`
      : `<div class="sr-poster-placeholder">🎬</div>`;
    return `
      <div class="search-result-item">
        ${posterHtml}
        <div class="sr-info">
          <div class="sr-title">${escHtml(m.title)}</div>
          <div class="sr-year">${year}</div>
        </div>
        <button class="sr-add ${alreadyAdded ? "added" : ""}"
          data-id="${m.id}"
          data-title="${encodeURIComponent(m.title)}"
          data-poster="${m.poster_path || ""}"
          data-year="${year}"
          data-overview="${encodeURIComponent(m.overview || "")}"
          ${alreadyAdded ? "disabled" : ""}>
          ${alreadyAdded ? t("addedBtn") : t("addBtn")}
        </button>
      </div>`;
  }).join("");

  // Ajouter un film depuis la liste de résultats
  searchResults.querySelectorAll(".sr-add:not(.added)").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const { id, title, poster, year, overview } = btn.dataset;
      await addMovie({
        tmdbId: Number(id),
        title: decodeURIComponent(title),
        posterPath: poster,
        releaseYear: Number(year) || null,
        overview: decodeURIComponent(overview),
      });
      btn.textContent = t("addedBtn");
      btn.classList.add("added");
      btn.disabled = true;
    });
  });

  // Clic sur une ligne → ouvre la modal
  searchResults.querySelectorAll(".search-result-item").forEach(item => {
    item.addEventListener("click", async (e) => {
      if (e.target.closest(".sr-add")) return;
      const btn = item.querySelector(".sr-add");
      openModal(Number(btn.dataset.id));
    });
  });
}

// ─────────────────────────────────────────
//  FIRESTORE CRUD
// ─────────────────────────────────────────
async function addMovie(movie) {
  const user = auth.currentUser;
  await setDoc(doc(db, "movies", String(movie.tmdbId)), {
    ...movie,
    status:    "to_watch",
    addedBy:   user.email,
    addedAt:   serverTimestamp(),
    watchedAt: null,
    rating:    null,
    note:      null,
  });
}

async function markWatched(tmdbId) {
  await updateDoc(doc(db, "movies", String(tmdbId)), {
    status:    "watched",
    watchedAt: serverTimestamp(),
  });
}

async function markToWatch(tmdbId) {
  await updateDoc(doc(db, "movies", String(tmdbId)), {
    status:    "to_watch",
    watchedAt: null,
  });
}

async function removeMovie(tmdbId) {
  await deleteDoc(doc(db, "movies", String(tmdbId)));
}

// ─────────────────────────────────────────
//  RENDER LISTS
// ─────────────────────────────────────────
function renderLists() {
  const toWatch = Object.values(movies).filter(m => m.status === "to_watch");
  const watched = Object.values(movies).filter(m => m.status === "watched");

  document.getElementById("count-to-watch").textContent = toWatch.length;
  document.getElementById("count-watched").textContent  = watched.length;

  renderGrid("to_watch", toWatch);
  renderGrid("watched",  watched);
}

function renderGrid(status, list) {
  const grid = document.getElementById(`list-${status}`);
  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${status === "to_watch" ? "🍿" : "🎬"}</div>
        <div>${status === "to_watch" ? t("emptyToWatch") : t("emptyWatched")}</div>
      </div>`;
    return;
  }
  grid.innerHTML = list.map(m => {
    const posterHtml = m.posterPath
      ? `<img src="${TMDB_IMG}${m.posterPath}" alt="${escHtml(m.title)}" loading="lazy">`
      : `<div class="no-poster">🎬</div>`;
    return `
      <div class="movie-card" data-id="${m.tmdbId}">
        ${posterHtml}
        <div class="card-body">
          <div class="card-title">${escHtml(m.title)}</div>
          <div class="card-year">${m.releaseYear || "—"}</div>
        </div>
      </div>`;
  }).join("");

  grid.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.id)));
  });
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

  const cast     = (credits.cast  || []).slice(0, 5).map(a => a.name).join(", ");
  const director = (credits.crew  || []).find(c => c.job === "Director");
  const trailer  = videoResults.find(v => v.site === "YouTube" && v.type === "Trailer");
  const year     = details.release_date ? details.release_date.slice(0, 4) : "—";
  const runtime  = details.runtime ? `${details.runtime} min` : "";
  const genres   = (details.genres || []).map(g => g.name).join(", ");

  const posterHtml = details.poster_path
    ? `<img src="${TMDB_IMG}${details.poster_path}" alt="${escHtml(details.title)}">`
    : `<div class="no-poster">🎬</div>`;

  // Boutons d'action selon l'état
  let actions = "";
  if (inCollection) {
    if (inCollection.status === "to_watch") {
      actions += `<button class="btn-primary" id="modal-watched">${t("markWatched")}</button>`;
    } else {
      actions += `<button class="btn-secondary" id="modal-to-watch">${t("markToWatch")}</button>`;
    }
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
        <div class="modal-meta">
          ${year}${runtime ? " · " + runtime : ""}${genres ? " · " + genres : ""}
        </div>
        ${director ? `<div class="modal-cast"><strong>${t("director")} :</strong> ${escHtml(director.name)}</div>` : ""}
        ${cast     ? `<div class="modal-cast"><strong>${t("cast")} :</strong> ${escHtml(cast)}</div>` : ""}
        ${details.overview ? `<div class="modal-overview">${escHtml(details.overview)}</div>` : ""}
        <div class="modal-actions">${actions}</div>
      </div>
    </div>`;

  document.getElementById("modal-add")?.addEventListener("click", async () => {
    await addMovie({
      tmdbId:      details.id,
      title:       details.title,
      posterPath:  details.poster_path || "",
      releaseYear: Number(year) || null,
      overview:    details.overview || "",
    });
    closeModal();
  });
  document.getElementById("modal-watched")?.addEventListener("click", async () => {
    await markWatched(tmdbId); closeModal();
  });
  document.getElementById("modal-to-watch")?.addEventListener("click", async () => {
    await markToWatch(tmdbId); closeModal();
  });
  document.getElementById("modal-remove")?.addEventListener("click", async () => {
    if (confirm(t("confirmRemove", details.title))) {
      await removeMovie(tmdbId); closeModal();
    }
  });
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
document.getElementById("modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ─────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    currentTab = tab.dataset.tab;
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("list-to_watch").classList.toggle("hidden", currentTab !== "to_watch");
    document.getElementById("list-watched").classList.toggle("hidden",  currentTab !== "watched");
  });
});

// ─────────────────────────────────────────
//  UTILS
// ─────────────────────────────────────────
function escHtml(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ─────────────────────────────────────────
//  INIT — applique les traductions au démarrage
// ─────────────────────────────────────────
applyTranslations();
