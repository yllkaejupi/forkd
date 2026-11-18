import { getGroceryList, saveGroceryList } from './storage.js';

const groceryContent = document.querySelector('#grocery-content');

function renderGroceryList() {
    const groceryList = getGroceryList();

    // Empty State
    if (groceryList.length === 0) {
        groceryContent.innerHTML = `
            <div class="grocery-empty">
                <i data-lucide="shopping-basket"></i>

                <h3>Your grocery list is empty</h3>

                <p>
                    Start exploring recipes and add ingredients
                    to your grocery list.
                </p>

                <a href="../index.html" class="explore-recipes-btn">
                    Explore Recipes
                </a>
            </div>
        `;

        lucide.createIcons();
        return;
    }

    const totalIngredients = groceryList.length;

    const remainingIngredients = groceryList.filter(
        ingredient => !ingredient.completed
    ).length;

    const allCompleted = remainingIngredients === 0;

    groceryContent.innerHTML = `
        <div class="grocery-toolbar">
            <p class="grocery-count">
                ${totalIngredients} ingredients
            </p>
        </div>

        ${allCompleted ? `
            <div class="grocery-completed-message">
                <i data-lucide="check-circle"></i>
                <span>All ingredients have been checked off!</span>
            </div>
        ` : ''}

        <div class="grocery-list">
            ${groceryList.map((ingredient, index) => `
                <div class="grocery-item ${ingredient.completed ? 'completed' : ''}">
                    <div class="ingredient-info">
                        <input
                            type="checkbox"
                            class="ingredient-checkbox"
                            data-index="${index}"
                            ${ingredient.completed ? 'checked' : ''}
                        >

                        <span class="ingredient-name">
                            ${ingredient.name}
                        </span>

                        <span class="ingredient-quantity">
                            ${ingredient.quantity} ${ingredient.unit}
                        </span>
                    </div>

                    <button
                        class="remove-ingredient"
                        data-index="${index}"
                        type="button"
                        aria-label="Remove ${ingredient.name}"
                    >
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            `).join('')}
        </div>

        <div class="grocery-actions">
            <span class="grocery-count">
                ${remainingIngredients} items remaining
            </span>

            <button class="clear-list" type="button">
                Clear All
            </button>
        </div>
    `;

    lucide.createIcons();
    attachGroceryEvents();
}

// Toggle Ingredient Completion
function toggleIngredient(index) {
    const groceryList = getGroceryList();

    groceryList[index].completed = !groceryList[index].completed;

    saveGroceryList(groceryList);
    renderGroceryList();
}

// Remove Individual Ingredient
function removeIngredient(index) {
    const groceryList = getGroceryList();

    groceryList.splice(index, 1);

    saveGroceryList(groceryList);
    renderGroceryList();
}

// Clear Grocery List
function clearGroceryList() {
    saveGroceryList([]);
    renderGroceryList();
}

// Checkbox Events
function attachGroceryEvents() {
    const checkboxes = document.querySelectorAll('.ingredient-checkbox');
    const removeButtons = document.querySelectorAll('.remove-ingredient');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            toggleIngredient(Number(checkbox.dataset.index));
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            removeIngredient(Number(button.dataset.index));
        });
    });

    const clearButton = document.querySelector('.clear-list');

    if (clearButton) {
        clearButton.addEventListener('click', clearGroceryList);
    }
}

renderGroceryList();

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