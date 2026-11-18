import { recipes } from './data/recipes.js';
import { getFavorites, toggleFavorite } from './storage.js';

// Optional filters from the URL:
//   all-recipes.html?category=dinner
//   all-recipes.html?tag=seasonal
const params = new URLSearchParams(window.location.search);
const categoryFilter = params.get('category');
const tagFilter = params.get('tag');

// Page elements
const pageTitle = document.querySelector('#all-recipes-title');
const pageCount = document.querySelector('#all-recipes-count');
const recipeGrid = document.querySelector('#all-recipes-grid');

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Decide which recipes to show
let visibleRecipes = recipes;

if (categoryFilter) {
    visibleRecipes = recipes.filter(recipe => recipe.category === categoryFilter);
    pageTitle.textContent = capitalize(categoryFilter);
} else if (tagFilter) {
    visibleRecipes = recipes.filter(recipe => recipe.tags.includes(tagFilter));
    pageTitle.textContent = `${capitalize(tagFilter)} Recipes`;
}

// Update recipe count
pageCount.textContent = `${visibleRecipes.length} ${
    visibleRecipes.length === 1 ? 'recipe' : 'recipes'
}`;

// Render recipes
function renderRecipes() {
    const favorites = getFavorites();

    if (visibleRecipes.length === 0) {
        recipeGrid.innerHTML = `
            <p class="no-results">
                No recipes found.
            </p>
        `;
        return;
    }

    recipeGrid.innerHTML = visibleRecipes.map(recipe => {
        const totalTime = recipe.prepTime + recipe.cookTime;
        const isFavorite = favorites.includes(recipe.id);

        return `
            <article class="recipe-card">
                <div class="recipe-image">
                    <img src="../${recipe.image}" alt="${recipe.title}">

                    <button
                        class="favorite-btn ${isFavorite ? 'active' : ''}"
                        type="button"
                        data-recipe-id="${recipe.id}"
                        aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}"
                        aria-pressed="${isFavorite}"
                    >
                        <i data-lucide="heart"></i>
                    </button>
                </div>

                <div class="recipe-info">
                    <a href="recipe.html?id=${recipe.id}" class="recipe-card-link">
                        <p class="recipe-category">
                            ${recipe.category.toUpperCase()}
                        </p>

                        <h3>${recipe.title}</h3>

                        <div class="recipe-meta">
                            <span>
                                <i data-lucide="clock"></i>
                                ${totalTime} min
                            </span>

                            <span>
                                <i data-lucide="chef-hat"></i>
                                ${recipe.difficulty}
                            </span>
                        </div>
                    </a>
                </div>
            </article>
        `;
    }).join('');

    lucide.createIcons();
}

renderRecipes();

// Favorites functionality
recipeGrid.addEventListener('click', event => {
    const favoriteButton = event.target.closest('.favorite-btn');

    if (!favoriteButton) return;

    const recipeId = Number(favoriteButton.dataset.recipeId);
    const updatedFavorites = toggleFavorite(recipeId);

    const isFavorite = updatedFavorites.includes(recipeId);

    favoriteButton.classList.toggle('active', isFavorite);

    favoriteButton.setAttribute(
        'aria-label',
        isFavorite ? 'Remove from favorites' : 'Add to favorites'
    );

    favoriteButton.setAttribute('aria-pressed', isFavorite);
});

lucide.createIcons();

// Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}