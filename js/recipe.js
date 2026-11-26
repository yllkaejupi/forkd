import { recipes } from './data/recipes.js';
import { getGroceryList, saveGroceryList, getCollections, addRecipeToCollection, removeRecipeFromCollection } from './storage.js';
import { onPageRestore, escapeHTML, initMobileNav, formatAmount } from './ui.js';
import { initLanguage, onLanguageChange, t, localize } from './i18n/language.js';

const recipeDetails = document.querySelector('#recipe-details');

const params = new URLSearchParams(window.location.search);
const recipeId = Number(params.get('id'));

const recipe = recipes.find(recipe => recipe.id === recipeId);

// =====================================================
// Render
// Draws the whole recipe page. Called on load, when the
// language changes and when the page is restored.
// Because this replaces all the HTML inside #recipe-details,
// clicks are handled with ONE delegated listener further down
// (listeners attached to individual buttons would be lost).
// =====================================================

function renderRecipe() {
    if (!recipe) {
        document.title = `${t('recipe.notFoundTitle')} | forkd`;

        recipeDetails.innerHTML = `
            <div class="recipe-not-found">
                <h2>${t('recipe.notFoundTitle')}</h2>
                <p>${t('recipe.notFoundText')}</p>
                <a href="all-recipes.html" class="view-all">${t('recipe.browseAll')}</a>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    const totalTime = recipe.prepTime + recipe.cookTime;
    const title = localize(recipe.title);

    // Browser tab shows the recipe name, e.g. "Pasta Bolognese | forkd"
    document.title = `${title} | forkd`;

    recipeDetails.innerHTML = `
        <div class="recipe-hero">

            <div class="recipe-hero-content">
                <p class="recipe-category">
                    ${t(`categories.${recipe.category}`).toUpperCase()}
                </p>

                <h1>${title}</h1>

                <p class="recipe-description">
                    ${localize(recipe.description)}
                </p>

                <div class="recipe-meta">
                    <span>
                        <i data-lucide="clock"></i>
                        ${t('common.minutes', { count: totalTime })}
                    </span>

                    <span>
                        <i data-lucide="users"></i>
                        ${t('recipe.servings', { count: recipe.servings })}
                    </span>

                    <span>
                        <i data-lucide="chef-hat"></i>
                        ${t(`difficulty.${recipe.difficulty}`)}
                    </span>
                </div>

                <div class="recipe-actions">
                    <button class="start-cooking-btn" id="start-cooking" type="button">
                        <i data-lucide="chef-hat"></i>
                        ${t('recipe.startCooking')}
                    </button>

                    <button class="save-collection-btn" id="save-to-collection" type="button">
                        <i data-lucide="bookmark-plus"></i>
                        ${t('recipe.saveToCollection')}
                    </button>
                </div>
            </div>

            <div class="recipe-hero-image">
                <img src="../${recipe.image}" alt="${title}">
            </div>

        </div>

        <div class="recipe-content">

            <section class="ingredients-section">
                <h2>${t('recipe.ingredients')}</h2>

                <ul class="ingredients-list">
                    ${recipe.ingredients.map((ingredient, index) => `
                        <li>
                            <div class="ingredient-info">
                                <span>${localize(ingredient.name)}</span>
                                <span>
                                    ${formatAmount(ingredient.quantity, ingredient.unit)}
                                </span>
                            </div>

                            <!-- Icon + label are filled in by setButtonState() -->
                            <button
                                class="add-ingredient-btn"
                                data-index="${index}"
                                type="button"
                            ></button>
                        </li>
                    `).join('')}
                </ul>

                <!-- Label is filled in by updateAddAllButton() -->
                <button class="add-all-grocery-btn" id="add-all-grocery" type="button"></button>
            </section>

            <section class="instructions-section">
                <h2>${t('recipe.instructions')}</h2>

                <div class="instructions-list">
                    ${localize(recipe.steps).map((step, index) => `
                        <div class="instruction-step">
                            <span class="step-number">
                                ${String(index + 1).padStart(2, '0')}
                            </span>

                            <p>${step}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

        </div>

        <div class="collection-modal" id="save-collection-modal">
            <div class="collection-modal-content">

                <button class="close-modal-btn" id="close-save-modal" type="button" aria-label="${t('common.close')}">
                    <i data-lucide="x"></i>
                </button>

                <p class="section-label">${t('collections.label')}</p>
                <h3>${t('recipe.saveToCollection')}</h3>

                <p class="modal-description">
                    ${t('recipe.saveDescription')}
                </p>

                <div class="collection-options" id="collection-options">
                    <!-- Collections will be displayed here -->
                </div>

                <button class="submit-collection-btn" id="confirm-save-collection" type="button">
                    ${t('recipe.saveButton')}
                </button>

            </div>
        </div>
    `;

    // Draws the + / ✓ buttons, "Add All", and all icons
    refreshGroceryButtons();
}

// =====================================================
// Grocery List
// =====================================================

// Grocery items only store WHICH ingredient they are:
//   { recipeId: 7, ingredientIndex: 2, completed: false }
// The name, amount and unit are looked up from recipes.js when the
// list is displayed, so they always appear in the current language.

// Positions of every ingredient in this recipe: [0, 1, 2, ...]
function getAllIngredientIndexes() {
    return recipe.ingredients.map((ingredient, index) => index);
}

// One place that answers "is this ingredient from THIS recipe
// already on the list?"
function isInGroceryList(groceryList, ingredientIndex) {
    return groceryList.some(item =>
        item.recipeId === recipe.id &&
        item.ingredientIndex === ingredientIndex
    );
}

function addIngredientsToGroceryList(ingredientIndexes) {
    const groceryList = getGroceryList();

    const newItems = ingredientIndexes
        .filter(index => !isInGroceryList(groceryList, index))
        .map(index => ({
            recipeId: recipe.id,
            ingredientIndex: index,
            completed: false
        }));

    if (newItems.length === 0) {
        return false;
    }

    saveGroceryList([...groceryList, ...newItems]);

    return true;
}

// The opposite of adding: keep every item EXCEPT the one
// that matches this ingredient from this recipe.
function removeIngredientFromGroceryList(ingredientIndex) {
    const groceryList = getGroceryList();

    const updatedList = groceryList.filter(item =>
        !(item.recipeId === recipe.id && item.ingredientIndex === ingredientIndex)
    );

    saveGroceryList(updatedList);
}

// The ONE function that decides how an ingredient button looks.
// isAdded = true  → ✓ (click to remove)
// isAdded = false → + (click to add)
function setButtonState(button, isAdded) {
    const ingredient = recipe.ingredients[Number(button.dataset.index)];
    const name = localize(ingredient.name);

    button.innerHTML = `<i data-lucide="${isAdded ? 'check' : 'plus'}"></i>`;
    button.classList.toggle('added', isAdded);
    button.setAttribute('aria-pressed', isAdded);
    button.setAttribute(
        'aria-label',
        t(isAdded ? 'recipe.removeIngredient' : 'recipe.addIngredient', { name })
    );
}

// "Add All" shows whether everything is already on the list
function updateAddAllButton(groceryList) {
    const addAllButton = document.querySelector('#add-all-grocery');

    const allAdded = getAllIngredientIndexes().every(index =>
        isInGroceryList(groceryList, index)
    );

    addAllButton.innerHTML = allAdded
        ? `<i data-lucide="check"></i> ${t('recipe.allAdded')}`
        : `<i data-lucide="shopping-basket"></i> ${t('recipe.addAll')}`;
}

// Draw every ingredient button (and Add All) from what's saved right now.
// The buttons are looked up fresh each time, because renderRecipe()
// may have replaced them since the last call.
function refreshGroceryButtons() {
    const groceryList = getGroceryList();

    document.querySelectorAll('.add-ingredient-btn').forEach(button => {
        const index = Number(button.dataset.index);
        setButtonState(button, isInGroceryList(groceryList, index));
    });

    updateAddAllButton(groceryList);
    lucide.createIcons();
}

function toggleIngredient(index) {
    // Ask storage, not the button, what the current state is
    if (isInGroceryList(getGroceryList(), index)) {
        removeIngredientFromGroceryList(index);
    } else {
        addIngredientsToGroceryList([index]);
    }

    refreshGroceryButtons();
}

// Save Recipe to Collection

function renderCollectionOptions() {
    const collectionOptions = document.querySelector('#collection-options');
    const confirmSaveButton = document.querySelector('#confirm-save-collection');
    const collections = getCollections();

    if (collections.length === 0) {
        collectionOptions.innerHTML = `
            <p class="no-collections-message">
                ${t('recipe.noCollections')}
                <a href="../index.html#collections">${t('recipe.createFirst')}</a>
            </p>
        `;

        confirmSaveButton.disabled = true;
        return;
    }

    confirmSaveButton.disabled = false;

    collectionOptions.innerHTML = collections.map(collection => {
        const isSaved = collection.recipeIds.includes(recipe.id);

        return `
            <label class="collection-option">
                <input
                    type="checkbox"
                    value="${collection.id}"
                    ${isSaved ? 'checked' : ''}
                >

                <span>${escapeHTML(collection.name)}</span>
            </label>
        `;
    }).join('');
}

function openSaveModal() {
    renderCollectionOptions();
    document.querySelector('#save-collection-modal').classList.add('active');
}

function closeSaveModal() {
    document.querySelector('#save-collection-modal').classList.remove('active');
}

function saveSelectedCollections() {
    const collections = getCollections();

    const selectedIds = [
        ...document.querySelectorAll('#collection-options input:checked')
    ].map(input => input.value);

    collections.forEach(collection => {
        if (selectedIds.includes(String(collection.id))) {
            addRecipeToCollection(collection.id, recipe.id);
        } else {
            removeRecipeFromCollection(collection.id, recipe.id);
        }
    });

    closeSaveModal();
}

// Cooking Mode

function openCookingMode() {
    let currentStep = 0;

    const steps = localize(recipe.steps);
    const totalSteps = steps.length;

    const cookingMode = document.createElement('div');
    cookingMode.classList.add('cooking-mode');

    document.body.appendChild(cookingMode);

    function renderStep() {
        const progress = ((currentStep + 1) / totalSteps) * 100;

        cookingMode.innerHTML = `
            <div class="cooking-container">

                <button class="close-cooking" type="button" aria-label="${t('cooking.close')}">
                    <i data-lucide="x"></i>
                </button>

                <p class="cooking-label">${t('cooking.label')}</p>

                <h2>${localize(recipe.title)}</h2>

                <div class="cooking-progress">
                    <div class="progress-info">
                        <span>${t('cooking.step', { current: currentStep + 1, total: totalSteps })}</span>
                        <span>${Math.round(progress)}%</span>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>

                <div class="cooking-step">
                    <span class="step-number">
                        ${String(currentStep + 1).padStart(2, '0')}
                    </span>

                    <p>${steps[currentStep]}</p>
                </div>

                <div class="cooking-navigation">
                    <button
                        class="previous-step"
                        type="button"
                        ${currentStep === 0 ? 'disabled' : ''}
                    >
                        ${t('cooking.previous')}
                    </button>

                    <button class="next-step" type="button">
                        ${currentStep === totalSteps - 1
                            ? t('cooking.finish')
                            : t('cooking.next')}
                    </button>
                </div>

            </div>
        `;

        lucide.createIcons();

        cookingMode.querySelector('.close-cooking')
            .addEventListener('click', closeCookingMode);

        cookingMode.querySelector('.previous-step')
            .addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    renderStep();
                }
            });

        cookingMode.querySelector('.next-step')
            .addEventListener('click', () => {
                if (currentStep < totalSteps - 1) {
                    currentStep++;
                    renderStep();
                } else {
                    showFinishedMessage();
                }
            });
    }

    function showFinishedMessage() {
        cookingMode.innerHTML = `
            <div class="cooking-container cooking-finished">

                <i data-lucide="circle-check"></i>

                <h2>${t('cooking.doneTitle')}</h2>

                <p>${t('cooking.doneText')}</p>

                <button class="finish-button" type="button">
                    ${t('cooking.backToRecipe')}
                </button>

            </div>
        `;

        lucide.createIcons();

        cookingMode.querySelector('.finish-button')
            .addEventListener('click', closeCookingMode);
    }

    function closeCookingMode() {
        cookingMode.remove();
    }

    renderStep();
}

// =====================================================
// One click listener for the whole recipe area.
// It survives renderRecipe() because #recipe-details itself
// is never replaced, only what's inside it.
// =====================================================

recipeDetails.addEventListener('click', event => {
    if (!recipe) return;

    const target = event.target;

    const ingredientButton = target.closest('.add-ingredient-btn');

    if (ingredientButton) {
        toggleIngredient(Number(ingredientButton.dataset.index));
        return;
    }

    if (target.closest('#add-all-grocery')) {
        addIngredientsToGroceryList(getAllIngredientIndexes());
        refreshGroceryButtons();
        return;
    }

    if (target.closest('#start-cooking')) {
        openCookingMode();
        return;
    }

    if (target.closest('#save-to-collection')) {
        openSaveModal();
        return;
    }

    // The X button, or a click on the dark overlay around the modal
    if (target.closest('#close-save-modal') || target.id === 'save-collection-modal') {
        closeSaveModal();
        return;
    }

    if (target.closest('#confirm-save-collection')) {
        saveSelectedCollections();
    }
});

// Page start

renderRecipe();

onPageRestore(renderRecipe);
onLanguageChange(renderRecipe);

initMobileNav();
initLanguage();