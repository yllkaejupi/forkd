
import { recipes } from './data/recipes.js';

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

                <button class="start-cooking-btn" id="start-cooking">
                    <i data-lucide="chef-hat"></i>
                    Start Cooking
                </button>
            </div>

            <div class="recipe-hero-image">
                <img src="../${recipe.image}" alt="${recipe.title}">
            </div>

        </div>

        <div class="recipe-content">

            <section class="ingredients-section">
                <h2>Ingredients</h2>

                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `
                        <li>
                            <span>${ingredient.name}</span>
                            <span>
                                ${ingredient.quantity} ${ingredient.unit}
                            </span>
                        </li>
                    `).join('')}
                </ul>
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
    `;

    lucide.createIcons();
}

renderRecipe();

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