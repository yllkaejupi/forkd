import { recipes } from './data/recipes.js';
import { seasons } from './data/seasons.js';
import { getFavorites } from './storage.js';
import { onPageRestore, renderRecipeCard, initFavoriteButtons, initMobileNav, matchesSearch } from './ui.js';
import { initLanguage, onLanguageChange, t } from './i18n/language.js';

// Page elements
const pageTitle = document.querySelector('#all-recipes-title');
const pageCount = document.querySelector('#all-recipes-count');
const recipeGrid = document.querySelector('#all-recipes-grid');
const filterSection = document.querySelector('#recipe-filters');
const searchInput = document.querySelector('#filter-search');
const clearButton = document.querySelector('#clear-filters');
const filterChips = document.querySelectorAll('.filter-chip');

// =====================================================
// Filter state
// All filters live in the URL, so a filtered view can be
// bookmarked, shared, refreshed, and survives the Back button:
//   all-recipes.html?category=dinner&difficulty=easy&maxTime=30
// `tag` has no chip: it comes from links like ?tag=winter (the seasonal section)
// =====================================================

const FILTER_KEYS = ['search', 'category', 'difficulty', 'maxTime', 'diet', 'tag'];

// Turns the URL into an object: { search: '', category: 'dinner', ... }
function readFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);

    return Object.fromEntries(
        FILTER_KEYS.map(key => [key, params.get(key) || ''])
    );
}

// Writes the current filters back into the URL (empty ones are left out).
// replaceState changes the address bar without adding a history entry,
// so pressing Back leaves the page instead of undoing one chip at a time.
function writeFiltersToURL() {
    const params = new URLSearchParams();

    FILTER_KEYS.forEach(key => {
        if (filters[key]) {
            params.set(key, filters[key]);
        }
    });

    const query = params.toString();

    history.replaceState(null, '', query ? `?${query}` : window.location.pathname);
}

let filters = readFiltersFromURL();

function hasActiveFilters() {
    return FILTER_KEYS.some(key => filters[key]);
}

// A recipe is shown only if it passes EVERY active filter
function matchesFilters(recipe) {
    const totalTime = recipe.prepTime + recipe.cookTime;

    if (filters.category && recipe.category !== filters.category) return false;
    if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
    if (filters.maxTime && totalTime > Number(filters.maxTime)) return false;
    if (filters.diet && !recipe.tags.includes(filters.diet)) return false;
    if (filters.tag && !recipe.tags.includes(filters.tag)) return false;
    if (filters.search && !matchesSearch(recipe, filters.search)) return false;

    return true;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getPageTitle() {
    if (filters.category) return t(`categories.${filters.category}`);
    if (seasons[filters.tag]) return t(`seasons.${filters.tag}.recipesTitle`);
    if (filters.tag) return capitalize(filters.tag);

    return t('allRecipes.title');
}

// Render

// Highlights the active chips and shows/hides "Clear filters"
function updateFilterControls() {
    filterChips.forEach(chip => {
        const isActive = filters[chip.dataset.filter] === chip.dataset.value;

        chip.classList.toggle('active', isActive);
        chip.setAttribute('aria-pressed', isActive);
    });

    clearButton.hidden = !hasActiveFilters();
}

function renderRecipes() {
    const visibleRecipes = recipes.filter(matchesFilters);

    pageTitle.textContent = getPageTitle();
    document.title = `${getPageTitle()} | forkd`;
    pageCount.textContent = t('common.recipeCount', { count: visibleRecipes.length });

    updateFilterControls();

    if (visibleRecipes.length === 0) {
        recipeGrid.innerHTML = `
            <div class="no-results">
                <p>${t('filters.noResults')}</p>
                <button type="button" class="clear-filters-btn" data-clear-filters>
                    ${t('filters.clear')}
                </button>
            </div>
        `;
        return;
    }

    const favorites = getFavorites();

    recipeGrid.innerHTML = visibleRecipes
        .map(recipe => renderRecipeCard(recipe, {
            basePath: '../',
            isFavorite: favorites.includes(recipe.id)
        }))
        .join('');

    lucide.createIcons();
}

// Changing filters

function applyFilters() {
    writeFiltersToURL();
    renderRecipes();
}

function clearFilters() {
    FILTER_KEYS.forEach(key => {
        filters[key] = '';
    });

    searchInput.value = '';
    applyFilters();
}

// One listener for all chips + the Clear button (event delegation).
// Clicking an active chip turns it off again.
filterSection.addEventListener('click', event => {
    const chip = event.target.closest('.filter-chip');

    if (chip) {
        const { filter, value } = chip.dataset;

        filters[filter] = filters[filter] === value ? '' : value;
        applyFilters();
        return;
    }

    if (event.target.closest('#clear-filters')) {
        clearFilters();
    }
});

// Search updates the results as you type.
searchInput.addEventListener('input', () => {
    filters.search = searchInput.value;
    applyFilters();
});

// The "Clear filters" button inside the empty state
recipeGrid.addEventListener('click', event => {
    if (event.target.closest('[data-clear-filters]')) {
        clearFilters();
    }
});

// Page start

searchInput.value = filters.search;

renderRecipes();

initFavoriteButtons(recipeGrid);

onPageRestore(renderRecipes);
onLanguageChange(renderRecipes);

lucide.createIcons();

initMobileNav();
initLanguage();