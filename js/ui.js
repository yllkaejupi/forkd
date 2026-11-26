import { getFavorites, toggleFavorite } from './storage.js';
import { t, localize, getCurrentLanguage } from './i18n/language.js';

// Runs `callback` whenever the page might be showing old data:
// 1. the page was restored from the back/forward cache (Back button)
// 2. another tab changed localStorage
export function onPageRestore(callback) {
    window.addEventListener('pageshow', event => {
        if (event.persisted) {
            callback();
        }
    });

    window.addEventListener('storage', callback);
}

// Builds the HTML for one recipe card.
//   basePath:   ''    on index.html
//               '../' on pages inside the /pages folder
//   button:     'favorite' (heart) or 'remove' (x, used in collections)
//   isFavorite: whether the heart starts filled
export function renderRecipeCard(recipe, { basePath = '', button = 'favorite', isFavorite = false } = {}) {
    const totalTime = recipe.prepTime + recipe.cookTime;
    const title = localize(recipe.title);

    const actionButton = button === 'remove'
        ? `
            <button
                class="remove-collection-recipe-btn"
                data-recipe-id="${recipe.id}"
                type="button"
                aria-label="${t('collectionPage.removeRecipe', { title })}"
            >
                <i data-lucide="x"></i>
            </button>
        `
        : `
            <button
                class="favorite-btn ${isFavorite ? 'active' : ''}"
                data-recipe-id="${recipe.id}"
                type="button"
                aria-label="${t(isFavorite ? 'favorites.remove' : 'favorites.add')}"
                aria-pressed="${isFavorite}"
            >
                <i data-lucide="heart"></i>
            </button>
        `;

    return `
        <article class="recipe-card">
            <div class="recipe-image">
                <img src="${basePath}${recipe.image}" alt="${title}">
                ${actionButton}
            </div>

            <div class="recipe-info">
                <a href="${basePath}pages/recipe.html?id=${recipe.id}" class="recipe-card-link">
                    <p class="recipe-category">${t(`categories.${recipe.category}`).toUpperCase()}</p>
                    <h3>${title}</h3>

                    <div class="recipe-meta">
                        <span>
                            <i data-lucide="clock"></i>
                            ${t('common.minutes', { count: totalTime })}
                        </span>
                        <span>
                            <i data-lucide="chef-hat"></i>
                            ${t(`difficulty.${recipe.difficulty}`)}
                        </span>
                    </div>
                </a>
            </div>
        </article>
    `;
}

// Turns a quantity + unit key into display text in the current language:
//   formatAmount(0.5, 'tsp')  → "0.5 tsp"       / "0,5 lugë çaji"
//   formatAmount(2, 'clove')  → "2 cloves"      / "2 thelpinj"
export function formatAmount(quantity, unit) {
    const number = new Intl.NumberFormat(getCurrentLanguage(), {
        maximumFractionDigits: 2
    }).format(quantity);

    return `${number} ${t(`units.${unit}`, { count: quantity })}`;
}

// The ONE place that decides how a heart button looks
function setFavoriteButtonState(button, isFavorite) {
    button.classList.toggle('active', isFavorite);
    button.setAttribute('aria-pressed', isFavorite);
    button.setAttribute(
        'aria-label',
        t(isFavorite ? 'favorites.remove' : 'favorites.add')
    );
}

// Makes every heart inside `grid` clickable.
// onChange (optional): runs after a favorite is toggled,
// e.g. to update the "My Favorites" count on the home page
export function initFavoriteButtons(grid, onChange) {
    grid.addEventListener('click', event => {
        const favoriteButton = event.target.closest('.favorite-btn');

        if (!favoriteButton) return;

        const recipeId = Number(favoriteButton.dataset.recipeId);
        const isFavorite = toggleFavorite(recipeId).includes(recipeId);

        setFavoriteButtonState(favoriteButton, isFavorite);

        onChange?.();
    });
}

// Updates every heart on the page to match storage
export function syncFavoriteButtons() {
    const favorites = getFavorites();

    document.querySelectorAll('.favorite-btn').forEach(button => {
        const recipeId = Number(button.dataset.recipeId);
        setFavoriteButtonState(button, favorites.includes(recipeId));
    });
}

// Hamburger menu: opens/closes the mobile menu,
// and closes it again when a link inside is tapped
export function initMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        });
    });
}

// Lowercase + remove accents, so "djathe" finds "djathë"
// and "cokollate" finds "çokollate".
// normalize('NFD') splits "ë" into "e" + a separate accent mark,
// then the regex deletes the accent marks.
export function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// Does this recipe match what the user typed?
// Searches both languages, so "cheese" and "djathë" both work.
// Splits what the user typed into words and drops the last letter
// of longer words, so different word endings still match:
//   "ëmbëlsirë" → "embelsir"  (finds "ëmbëlsira")
//   "djathi"    → "djath"     (finds "djathë", "djathin")
// Short words stay whole, because "pasta" → "past" would also
// match "pastry" (filo pastry) and show burek for a pasta search.
function toSearchWords(searchTerm) {
    return normalizeText(searchTerm)
        .split(/\s+/)
        .filter(word => word !== '')
        .map(word => (word.length >= 6 ? word.slice(0, -1) : word));
}

// Does this recipe match what the user typed?
// Searches both languages, and every word must appear somewhere.
export function matchesSearch(recipe, searchTerm) {
    const words = toSearchWords(searchTerm);

    if (words.length === 0) return true;

    const searchableText = normalizeText([
        recipe.title.en,
        recipe.title.sq,
        recipe.description.en,
        recipe.description.sq,
        recipe.category,
        t(`categories.${recipe.category}`),
        ...recipe.ingredients.flatMap(ingredient => [ingredient.name.en, ingredient.name.sq]),
        ...recipe.tags
    ].join(' '));

    return words.every(word => searchableText.includes(word));
}

// Makes user-typed text safe to put inside an HTML string.
// "<b>" becomes "&lt;b&gt;", which the browser shows as the
// literal text <b> instead of treating it as a tag.
export function escapeHTML(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}