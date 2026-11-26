import { recipes } from './data/recipes.js';
import { getCollections, getFavorites, toggleFavorite, removeRecipeFromCollection, renameCollection, deleteCollection } from './storage.js';
import { renderRecipeCard, initMobileNav, onPageRestore } from './ui.js';
import { initLanguage, onLanguageChange, t } from './i18n/language.js';

// Get collection ID from URL
const params = new URLSearchParams(window.location.search);
const collectionId = params.get('id');
const isFavorites = collectionId === 'favorites';

// Page elements
const collectionTitle = document.querySelector('#collection-title');
const collectionCount = document.querySelector('#collection-count');
const collectionRecipesGrid = document.querySelector('#collection-recipes-grid');
const collectionManagement = document.querySelector('#collection-management');

// =====================================================
// Load & render
// =====================================================

// Reads the current collection from storage.
// Favorites is shaped like a normal collection ({ name, recipeIds })
// so the rest of the code doesn't need to treat it differently.
// Returns null if the collection doesn't exist (e.g. it was deleted).
function getCurrentCollection() {
    if (isFavorites) {
        return { name: t('collections.myFavorites'), recipeIds: getFavorites() };
    }

    return getCollections().find(
        collection => String(collection.id) === collectionId
    ) || null;
}

// Draws the whole page from storage. Safe to call any time:
// on load, after removing a recipe, after renaming,
// and when the page is restored with onPageRestore.
function renderCollection() {
    const collection = getCurrentCollection();

    // Not found: show a message and hide everything else
    if (!collection) {
        collectionTitle.textContent = t('collectionPage.notFound');
        document.title = `${t('collectionPage.notFound')} | forkd`;
        collectionCount.textContent = '';
        collectionRecipesGrid.innerHTML = '';
        collectionManagement.style.display = 'none';
        return;
    }

    const collectionRecipes = recipes.filter(recipe =>
        collection.recipeIds.includes(recipe.id)
    );

    collectionTitle.textContent = collection.name;
    document.title = `${collection.name} | forkd`;

    collectionCount.textContent = t('common.recipeCount', { count: collectionRecipes.length });

    // Favorites can't be renamed or deleted.
    // '' removes the inline style, so the CSS (display: flex) applies again.
    collectionManagement.style.display = isFavorites ? 'none' : '';

    if (collectionRecipes.length === 0) {
        collectionRecipesGrid.innerHTML = `
            <p class="no-results">
                ${t('collectionPage.empty')}
            </p>
        `;
        return;
    }

    collectionRecipesGrid.innerHTML = collectionRecipes
        .map(recipe => renderRecipeCard(recipe, {
            basePath: '../',
            button: 'remove'
        }))
        .join('');

    lucide.createIcons();
}

renderCollection();
onPageRestore(renderCollection);
onLanguageChange(renderCollection);

// Remove Recipe from Collection

collectionRecipesGrid.addEventListener('click', event => {
    const removeButton = event.target.closest('.remove-collection-recipe-btn');

    if (!removeButton) return;

    const recipeId = Number(removeButton.dataset.recipeId);

    if (isFavorites) {
        toggleFavorite(recipeId);
    } else {
        removeRecipeFromCollection(Number(collectionId), recipeId);
    }

    // Change the data, then redraw from the data
    renderCollection();
});

// Collection Management (Rename / Delete)

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

// Open Rename Modal
renameCollectionButton.addEventListener('click', () => {
    const collection = getCurrentCollection();

    if (!collection) return;

    newCollectionNameInput.value = collection.name;
    renameModal.classList.add('active');
});

// Save New Collection Name
renameForm.addEventListener('submit', event => {
    event.preventDefault();

    const newName = newCollectionNameInput.value.trim();

    if (!newName) {
        newCollectionNameInput.focus();
        return;
    }

    renameCollection(Number(collectionId), newName);
    renderCollection();

    renameModal.classList.remove('active');
});

// Open Delete Modal
deleteCollectionButton.addEventListener('click', () => {
    deleteModal.classList.add('active');
});

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
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});

lucide.createIcons();

initMobileNav();
initLanguage();