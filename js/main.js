import { recipes } from './data/recipes.js';
import { seasons, getCurrentSeason } from './data/seasons.js';
import { getFavorites, getCollections, createCollection } from './storage.js';
import { onPageRestore, renderRecipeCard, initFavoriteButtons, syncFavoriteButtons, initMobileNav, escapeHTML } from './ui.js';
import { initLanguage, onLanguageChange, t } from './i18n/language.js';

const recipeGrid = document.querySelector('#recipe-grid');
const collectionsGrid = document.querySelector('#collections-grid');
const popularRecipes = recipes.filter(recipe => recipe.popular).slice(0, 8);

// Collections
function renderCollections() {
    const collections = getCollections();
    const favorites = getFavorites();

    const favoritesCollection = `
        <a href="pages/collection.html?id=favorites" class="collection-card">
            <div class="collection-icon">
                <i data-lucide="heart"></i>
            </div>

            <h3>${t('collections.myFavorites')}</h3>
            <p>${t('collections.savedCount', { count: favorites.length })}</p>
        </a>
    `;

    const customCollections = collections.map(collection => `
        <a href="pages/collection.html?id=${collection.id}" class="collection-card">
            <div class="collection-icon">
                <i data-lucide="book-heart"></i>
            </div>

            <h3>${escapeHTML(collection.name)}</h3>
            <p>${t('common.recipeCount', { count: collection.recipeIds.length })}</p>
        </a>
    `).join('');

    collectionsGrid.innerHTML = favoritesCollection + customCollections;

    lucide.createIcons();
}

renderCollections();

// Create Collection Modal
const createCollectionBtn = document.querySelector('#create-collection-btn');
const collectionModal = document.querySelector('#collection-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');
const collectionForm = document.querySelector('#collection-form');
const collectionNameInput = document.querySelector('#collection-name');

// Open modal
createCollectionBtn.addEventListener('click', () => {
    collectionModal.classList.add('active');
    collectionNameInput.focus();
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    collectionModal.classList.remove('active');
    collectionForm.reset();
});

// Close modal when clicking outside
collectionModal.addEventListener('click', event => {
    if (event.target === collectionModal) {
        collectionModal.classList.remove('active');
        collectionForm.reset();
    }
});

// Create collection
collectionForm.addEventListener('submit', event => {
    event.preventDefault();

    const collectionName = collectionNameInput.value.trim();

    if (!collectionName) return;

    createCollection(collectionName);

    renderCollections();
    collectionModal.classList.remove('active');
    collectionForm.reset();
});

// Popular Recipes
function renderRecipes() {
    const favorites = getFavorites();

    recipeGrid.innerHTML = popularRecipes
        .map(recipe => renderRecipeCard(recipe, {
            isFavorite: favorites.includes(recipe.id)
        }))
        .join('');

    lucide.createIcons();
}

renderRecipes();

// Search
const searchInput = document.querySelector('#recipe-search');
const searchButton = document.querySelector('#search-button');

function goToSearchResults() {
    const searchTerm = searchInput.value.trim();

    // encodeURIComponent makes the text safe for a URL:
    // "mac & cheese" becomes "mac%20%26%20cheese"
    window.location.href = searchTerm
        ? `pages/all-recipes.html?search=${encodeURIComponent(searchTerm)}`
        : 'pages/all-recipes.html';
}

searchButton.addEventListener('click', goToSearchResults);

searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        goToSearchResults();
    }
});

// Seasonal section
// Picks the season from today's date.
// For testing, force one with a URL parameter: index.html?season=summer

const seasonOverride = new URLSearchParams(window.location.search).get('season');
const currentSeason = getCurrentSeason(seasonOverride);

function renderSeasonal() {
    const seasonImage = document.querySelector('#seasonal-image');

    seasonImage.src = seasons[currentSeason].image;
    seasonImage.alt = t(`seasons.${currentSeason}.imageAlt`);

    document.querySelector('#seasonal-title').textContent = t(`seasons.${currentSeason}.title`);
    document.querySelector('#seasonal-description').textContent = t(`seasons.${currentSeason}.description`);
    document.querySelector('#seasonal-link').href = `pages/all-recipes.html?tag=${currentSeason}`;
}

renderSeasonal();

// Favorites (heart buttons) + keep the "My Favorites" count in sync
initFavoriteButtons(recipeGrid, renderCollections);

// Keeping the page up to date
onPageRestore(() => {
    renderCollections();
    syncFavoriteButtons();
});

onLanguageChange(() => {
    renderCollections();
    renderRecipes();
    renderSeasonal();
});

initMobileNav();
initLanguage();