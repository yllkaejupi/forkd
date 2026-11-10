import { recipes } from './data/recipes.js';
import { getGroceryList, saveGroceryList, getCollections, addRecipeToCollection, removeRecipeFromCollection } from './storage.js';

const recipeDetails = document.querySelector('#recipe-details');

const params = new URLSearchParams(window.location.search);
const recipeId = Number(params.get('id'));

const recipe = recipes.find(recipe => recipe.id === recipeId);

function renderRecipe() {
    if (!recipe) {
        recipeDetails.innerHTML = `
            <div class="recipe-not-found">
                <h2>Recipe not found</h2>
                <a href="../index.html">Back to Discover</a>
            </div>
        `;
        return;
    }

    const totalTime = recipe.prepTime + recipe.cookTime;

    recipeDetails.innerHTML = `
        <div class="recipe-hero">

            <div class="recipe-hero-content">
                <p class="recipe-category">
                    ${recipe.category.toUpperCase()}
                </p>

                <h1>${recipe.title}</h1>

                <p class="recipe-description">
                    ${recipe.description}
                </p>

                <div class="recipe-meta">
                    <span>
                        <i data-lucide="clock"></i>
                        ${totalTime} min
                    </span>

                    <span>
                        <i data-lucide="users"></i>
                        ${recipe.servings} servings
                    </span>

                    <span>
                        <i data-lucide="chef-hat"></i>
                        ${recipe.difficulty}
                    </span>
                </div>

                <div class="recipe-actions">
                    <button class="start-cooking-btn" id="start-cooking">
                        <i data-lucide="chef-hat"></i>
                        Start Cooking
                    </button>

                    <button class="save-collection-btn" id="save-to-collection">
                        <i data-lucide="bookmark-plus"></i>
                        Save to Collection
                    </button>
                </div>
            </div>

            <div class="recipe-hero-image">
                <img src="../${recipe.image}" alt="${recipe.title}">
            </div>

        </div>

        <div class="recipe-content">

            <section class="ingredients-section">
                <h2>Ingredients</h2>

                <ul class="ingredients-list">
                    ${recipe.ingredients.map((ingredient, index) => `
                        <li>
                            <div class="ingredient-info">
                                <span>${ingredient.name}</span>
                                <span>
                                    ${ingredient.quantity} ${ingredient.unit}
                                </span>
                            </div>

                            <button
                                class="add-ingredient-btn"
                                data-index="${index}"
                                type="button"
                                aria-label="Add ${ingredient.name} to Grocery List"
                            >
                                <i data-lucide="plus"></i>
                            </button>
                        </li>
                    `).join('')}
                </ul>

                <!-- Add All Ingredients -->
                <button class="add-all-grocery-btn" id="add-all-grocery" type="button">
                    <i data-lucide="shopping-basket"></i>
                    Add All to Grocery List
                </button>
            </section>

            <section class="instructions-section">
                <h2>Instructions</h2>

                <div class="instructions-list">
                    ${recipe.steps.map((step, index) => `
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

                <button class="close-modal-btn" id="close-save-modal" type="button">
                    <i data-lucide="x"></i>
                </button>

                <p class="section-label">YOUR PERSONAL COOKBOOK</p>
                <h3>Save to Collection</h3>

                <p class="modal-description">
                    Choose where you want to save this recipe.
                </p>

                <div class="collection-options" id="collection-options">
                    <!-- Collections will be displayed here -->
                </div>

                <button class="submit-collection-btn" id="confirm-save-collection" type="button">
                    Save Recipe
                </button>

            </div>
        </div>
    `;

    lucide.createIcons();
}

renderRecipe();

// Save Recipe to Collection
const saveCollectionButton = document.querySelector('#save-to-collection');
const saveCollectionModal = document.querySelector('#save-collection-modal');
const closeSaveModalButton = document.querySelector('#close-save-modal');
const collectionOptions = document.querySelector('#collection-options');
const confirmSaveButton = document.querySelector('#confirm-save-collection');

function renderCollectionOptions() {
    const collections = getCollections();

    if (collections.length === 0) {
        collectionOptions.innerHTML = `
            <p class="no-collections-message">
                You haven't created any collections yet.
                <a href="../index.html#collections">Create a collection</a>
                first.
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

                <span>${collection.name}</span>
            </label>
        `;
    }).join('');
}

// Open modal
if (saveCollectionButton && recipe) {
    saveCollectionButton.addEventListener('click', () => {
        renderCollectionOptions();
        saveCollectionModal.classList.add('active');
        lucide.createIcons();
    });
}

// Close modal
closeSaveModalButton.addEventListener('click', () => {
    saveCollectionModal.classList.remove('active');
});

// Close when clicking outside
saveCollectionModal.addEventListener('click', event => {
    if (event.target === saveCollectionModal) {
        saveCollectionModal.classList.remove('active');
    }
});

// Save selected collections
confirmSaveButton.addEventListener('click', () => {
    const collections = getCollections();

    const selectedIds = [
        ...collectionOptions.querySelectorAll('input:checked')
    ].map(input => input.value);

    collections.forEach(collection => {
        if (selectedIds.includes(String(collection.id))) {
            addRecipeToCollection(collection.id, recipe.id);
        } else {
            removeRecipeFromCollection(collection.id, recipe.id);
        }
    });

    saveCollectionModal.classList.remove('active');
});

function addIngredientsToGroceryList(ingredients) {
    const groceryList = getGroceryList();

    const newIngredients = ingredients
        .filter(ingredient => {
            return !groceryList.some(item =>
                item.recipeId === recipe.id &&
                item.name.toLowerCase() === ingredient.name.toLowerCase()
            );
        })
        .map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            recipeId: recipe.id,
            recipeTitle: recipe.title,
            completed: false
        }));

    if (newIngredients.length === 0) {
        return false;
    }

    saveGroceryList([...groceryList, ...newIngredients]);

    return true;
}

// Add Individual Ingredient
const ingredientButtons = document.querySelectorAll('.add-ingredient-btn');

ingredientButtons.forEach(button => {
    button.addEventListener('click', () => {
        const index = Number(button.dataset.index);
        const ingredient = recipe.ingredients[index];

        addIngredientsToGroceryList([ingredient]);

        button.innerHTML = '<i data-lucide="check"></i>';
        button.disabled = true;
        button.setAttribute('aria-label', 'Already added');

        lucide.createIcons();
    });
});

// Add All Ingredients
const addAllButton = document.querySelector('#add-all-grocery');

if (addAllButton && recipe) {
    addAllButton.addEventListener('click', () => {
        const wasAdded = addIngredientsToGroceryList(recipe.ingredients);

        addAllButton.innerHTML = wasAdded
            ? '<i data-lucide="check"></i> Added to Grocery List'
            : '<i data-lucide="check"></i> Already Added';

        lucide.createIcons();
    });
}

// Cooking Mode
const startCookingButton = document.querySelector('#start-cooking');

function openCookingMode() {
    let currentStep = 0;

    const totalSteps = recipe.steps.length;

    const cookingMode = document.createElement('div');
    cookingMode.classList.add('cooking-mode');

    document.body.appendChild(cookingMode);

    function renderStep() {
        const progress = ((currentStep + 1) / totalSteps) * 100;

        cookingMode.innerHTML = `
            <div class="cooking-container">

                <button class="close-cooking" aria-label="Close cooking mode">
                    <i data-lucide="x"></i>
                </button>

                <p class="cooking-label">COOKING MODE</p>

                <h2>${recipe.title}</h2>

                <div class="cooking-progress">
                    <div class="progress-info">
                        <span>Step ${currentStep + 1} of ${totalSteps}</span>
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

                    <p>${recipe.steps[currentStep]}</p>
                </div>

                <div class="cooking-navigation">
                    <button
                        class="previous-step"
                        ${currentStep === 0 ? 'disabled' : ''}
                    >
                        Previous
                    </button>

                    <button class="next-step">
                        ${currentStep === totalSteps - 1
                            ? 'Finish Cooking'
                            : 'Next Step'}
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

                <i data-lucide="check-circle"></i>

                <h2>You're all done!</h2>

                <p>You've completed all the steps. Enjoy your meal!</p>

                <button class="finish-button">
                    Back to Recipe
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

if (startCookingButton && recipe) {
    startCookingButton.addEventListener('click', openCookingMode);
}