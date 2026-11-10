import { recipes } from './data/recipes.js';
import { getCollections, getFavorites, toggleFavorite, removeRecipeFromCollection, renameCollection, deleteCollection } from './storage.js';

// Get collection ID from URL
const params = new URLSearchParams(window.location.search);
const collectionId = params.get('id');

// Page elements
const collectionTitle = document.querySelector('#collection-title');
const collectionCount = document.querySelector('#collection-count');
const collectionRecipesGrid = document.querySelector('#collection-recipes-grid');

// Find the selected collection
let collectionRecipes = [];

if (collectionId === 'favorites') {
    collectionTitle.textContent = 'My Favorites';

    const favoriteIds = getFavorites();

    collectionRecipes = recipes.filter(recipe =>
        favoriteIds.includes(recipe.id)
    );
} else {
    const collections = getCollections();

    const selectedCollection = collections.find(
        collection => String(collection.id) === collectionId
    );

    if (selectedCollection) {
        collectionTitle.textContent = selectedCollection.name;

        collectionRecipes = recipes.filter(recipe =>
            selectedCollection.recipeIds.includes(recipe.id)
        );
    } else {
        collectionTitle.textContent = 'Collection Not Found';
    }
}

// Update recipe count
collectionCount.textContent = `${collectionRecipes.length} ${
    collectionRecipes.length === 1 ? 'recipe' : 'recipes'
}`;

// Render collection recipes
function renderCollectionRecipes() {
    if (collectionRecipes.length === 0) {
        collectionRecipesGrid.innerHTML = `
            <p class="no-results">
                No recipes in this collection yet.
            </p>
        `;
        return;
    }

    collectionRecipesGrid.innerHTML = collectionRecipes.map(recipe => {
        const totalTime = recipe.prepTime + recipe.cookTime;

        return `
            <article class="recipe-card">
                <div class="recipe-image">
                    <img src="../${recipe.image}" alt="${recipe.title}">

                    <button
                        class="remove-collection-recipe-btn"
                        data-recipe-id="${recipe.id}"
                        type="button"
                        aria-label="Remove ${recipe.title} from collection"
                    >
                        <i data-lucide="x"></i>
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

renderCollectionRecipes();

// Remove Recipe from Collection
collectionRecipesGrid.addEventListener('click', event => {
    const removeButton = event.target.closest(
        '.remove-collection-recipe-btn'
    );

    if (!removeButton) return;

    const recipeId = Number(removeButton.dataset.recipeId);

    if (collectionId === 'favorites') {
        toggleFavorite(recipeId);
    } else {
        removeRecipeFromCollection(Number(collectionId), recipeId);
    }

    collectionRecipes = collectionRecipes.filter(
        recipe => recipe.id !== recipeId
    );

    collectionCount.textContent = `${collectionRecipes.length} ${
        collectionRecipes.length === 1 ? 'recipe' : 'recipes'
    }`;

    renderCollectionRecipes();
});

// Collection Management

const collectionManagement = document.querySelector('#collection-management');

const renameModal = document.querySelector('#rename-modal');
const deleteModal = document.querySelector('#delete-modal');

const renameCollectionButton = document.querySelector('#rename-collection-btn');
const deleteCollectionButton = document.querySelector('#delete-collection-btn');

const renameForm = document.querySelector('#rename-form');
const newCollectionNameInput = document.querySelector('#new-collection-name');

const closeRenameModal = document.querySelector('#close-rename-modal');
const closeDeleteModal = document.querySelector('#close-delete-modal');

const cancelDeleteButton = document.querySelector('#cancel-delete');
const confirmDeleteButton = document.querySelector('#confirm-delete');

// Hide management options for My Favorites
if (collectionId === 'favorites') {
    collectionManagement.style.display = 'none';
}

// Open Rename Modal
if (renameCollectionButton && collectionId !== 'favorites') {
    renameCollectionButton.addEventListener('click', () => {
        const collections = getCollections();

        const selectedCollection = collections.find(
            collection => String(collection.id) === collectionId
        );

        if (!selectedCollection) return;

        newCollectionNameInput.value = selectedCollection.name;
        renameModal.classList.add('active');
    });
}

// Save New Collection Name
renameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newName = newCollectionNameInput.value.trim();

    if (!newName) {
        newCollectionNameInput.focus();
        return;
    }

    renameCollection(Number(collectionId), newName);
    collectionTitle.textContent = newName;

    renameModal.classList.remove('active');
});

// Open Delete Modal
if (deleteCollectionButton && collectionId !== 'favorites') {
    deleteCollectionButton.addEventListener('click', () => {
        deleteModal.classList.add('active');
    });
}

// Confirm Collection Deletion
confirmDeleteButton.addEventListener('click', () => {
    deleteCollection(Number(collectionId));
    window.location.href = '../index.html#collections';
});

// Close Modals
closeRenameModal.addEventListener('click', () => {
    renameModal.classList.remove('active');
});

closeDeleteModal.addEventListener('click', () => {
    deleteModal.classList.remove('active');
});

cancelDeleteButton.addEventListener('click', () => {
    deleteModal.classList.remove('active');
});

// Close Modal by Clicking Outside
[renameModal, deleteModal].forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
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