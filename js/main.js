
import { recipes } from './data/recipes.js';
import {
    getFavorites,
    toggleFavorite
} from './storage.js';

// Recipe grid
const recipeGrid = document.querySelector('#recipe-grid');

// Search elements
const searchInput = document.querySelector('#recipe-search');
const searchButton = document.querySelector('#search-button');

// Render recipes
function renderRecipes(filteredRecipes = recipes) {
    const favorites = getFavorites();

    if (filteredRecipes.length === 0) {
        recipeGrid.innerHTML = `
            <p class="no-results">
                No recipes found. Try another search!
            </p>
        `;
        return;
    }

    recipeGrid.innerHTML = filteredRecipes.map(recipe => {
        const totalTime = recipe.prepTime + recipe.cookTime;
        const isFavorite = favorites.includes(recipe.id);

        return `
            <article class="recipe-card">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.title}">

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
                    <a href="pages/recipe.html?id=${recipe.id}" class="recipe-card-link">
                        <div class="recipe-info">
                            <p class="recipe-category">${recipe.category.toUpperCase()}</p>
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
                        </div>
                    </a>
                </div>
            </article>
        `;
    }).join('');

    lucide.createIcons();
}

// Initial recipe rendering
renderRecipes();

// Search functionality
function searchRecipes() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredRecipes = recipes.filter(recipe => {
        const searchableContent = [
            recipe.title,
            recipe.description,
            recipe.category,
            ...recipe.ingredients.map(ingredient => ingredient.name),
            ...recipe.tags
        ].join(' ').toLowerCase();

        return searchableContent.includes(searchTerm);
    });

    renderRecipes(filteredRecipes);

    const recipesHeading = document.querySelector('#recipes-heading');

    recipesHeading.textContent = searchTerm
        ? 'Search Results'
        : 'Popular Recipes';

    if (searchTerm) {
        document.querySelector('#all-recipes').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Search button click
searchButton.addEventListener('click', searchRecipes);

// Search with Enter key
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        searchRecipes();
    }
});

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

// Mobile navigation
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
