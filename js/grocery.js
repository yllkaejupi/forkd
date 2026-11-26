import { recipes } from './data/recipes.js';
import { getGroceryList, saveGroceryList } from './storage.js';
import { onPageRestore, initMobileNav, escapeHTML, formatAmount } from './ui.js';
import { initLanguage, onLanguageChange, t, localize } from './i18n/language.js';

const groceryContent = document.querySelector('#grocery-content');

// A grocery item only stores { recipeId, ingredientIndex, completed }.
// This looks up the real ingredient and returns its name and amount in the current language.
function getItemDetails(item) {
    const recipe = recipes.find(recipe => recipe.id === item.recipeId);
    const ingredient = recipe?.ingredients[item.ingredientIndex];

    // Items saved before the translation update stored the text directly
    if (!ingredient) {
        return {
            name: item.name ?? '?',
            amount: `${item.quantity ?? ''} ${item.unit ?? ''}`.trim()
        };
    }

    return {
        name: localize(ingredient.name),
        amount: formatAmount(ingredient.quantity, ingredient.unit)
    };
}

function renderGroceryList() {
    const groceryList = getGroceryList();

    // Empty State
    if (groceryList.length === 0) {
        groceryContent.innerHTML = `
            <div class="grocery-empty">
                <i data-lucide="shopping-basket"></i>

                <h3>${t('grocery.emptyTitle')}</h3>

                <p>${t('grocery.emptyText')}</p>

                <a href="../index.html" class="explore-recipes-btn">
                    ${t('grocery.exploreButton')}
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
                ${t('grocery.ingredientCount', { count: totalIngredients })}
            </p>
        </div>

        ${allCompleted ? `
            <div class="grocery-completed-message">
                <i data-lucide="circle-check"></i>
                <span>${t('grocery.allChecked')}</span>
            </div>
        ` : ''}

        <div class="grocery-list">
            ${groceryList.map((item, index) => {
                const { name, amount } = getItemDetails(item);

                return `
                    <div class="grocery-item ${item.completed ? 'completed' : ''}">
                        <div class="ingredient-info">
                            <input
                                type="checkbox"
                                class="ingredient-checkbox"
                                data-index="${index}"
                                ${item.completed ? 'checked' : ''}
                            >

                            <span class="ingredient-name">
                                ${name}
                            </span>

                            <span class="ingredient-quantity">
                                ${amount}
                            </span>
                        </div>

                        <button
                            class="remove-ingredient"
                            data-index="${index}"
                            type="button"
                            aria-label="${escapeHTML(t('grocery.removeItem', { name }))}"
                        >
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                `;
            }).join('')}
        </div>

        <div class="grocery-actions">
            <span class="grocery-count">
                ${t('grocery.remaining', { count: remainingIngredients })}
            </span>

            <button class="clear-list" type="button">
                ${t('grocery.clearAll')}
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

onPageRestore(renderGroceryList);
onLanguageChange(renderGroceryList);

initMobileNav();
initLanguage();