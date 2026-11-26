import { en } from './en.js';
import { sq } from './sq.js';

const translations = {
    en,
    sq
};

const LANGUAGE_KEY = 'forkd-language';

// Our own event name. The "forkd:" prefix avoids clashing with the
// browser's built-in "languagechange" event (which is about the
// browser's language, not ours).
const LANGUAGE_EVENT = 'forkd:languagechange';

export function getCurrentLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) || 'en';
}

// Follows a dotted key like "nav.discover" through a dictionary:
// dictionary["nav"]["discover"]. Returns undefined if any part is missing.
function lookUp(dictionary, key) {
    return key.split('.').reduce((current, part) => current?.[part], dictionary);
}

// Translates a key into the current language.
//
//   t('nav.discover')                         → "Discover"
//   t('recipe.addIngredient', { name: 'Salt' }) → "Add Salt to Grocery List"
//   t('common.recipeCount', { count: 1 })     → "1 recipe"
//   t('common.recipeCount', { count: 3 })     → "3 recipes"
//
// Falls back to English if the key is missing in the current language,
// and to the key itself if it's missing everywhere.
export function t(key, params = {}) {
    const language = getCurrentLanguage();

    let value = lookUp(translations[language], key) ?? lookUp(en, key);

    if (value === undefined) return key;

    // Plurals: the dictionary holds { one: "...", other: "..." }
    // and Intl.PluralRules picks the right form for the number
    if (typeof value === 'object' && 'count' in params) {
        const form = new Intl.PluralRules(language).select(params.count);
        value = value[form] ?? value.other;
    }

    if (typeof value !== 'string') return key;

    // Replace {name}, {count}, ... with the values from params
    return value.replace(/\{(\w+)\}/g, (match, name) => params[name] ?? match);
}

// Picks the current language out of a { en, sq } field from the data,
// e.g. localize(recipe.title). Falls back to English if a translation
// is missing. Works for strings and arrays (like recipe steps).
export function localize(field) {
    if (field === null || typeof field !== 'object' || Array.isArray(field)) {
        return field;
    }

    return field[getCurrentLanguage()] ?? field.en;
}

// Fills every element marked with data-i18n / data-i18n-placeholder
export function applyTranslations() {
    const language = getCurrentLanguage();

    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
    });

    document.documentElement.lang = language;

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.classList.toggle('active', button.dataset.lang === language);
    });
}

// Pages call this to redraw their JS-built text when the language changes
export function onLanguageChange(callback) {
    window.addEventListener(LANGUAGE_EVENT, callback);
}

// Re-translate the static HTML and tell every page to redraw
function refreshLanguage() {
    applyTranslations();
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
}

export function setLanguage(language) {
    if (!translations[language]) return;

    localStorage.setItem(LANGUAGE_KEY, language);

    refreshLanguage();
}

export function initLanguage() {
    applyTranslations();

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Language switched in another tab
    window.addEventListener('storage', event => {
        if (event.key === LANGUAGE_KEY) {
            refreshLanguage();
        }
    });

    // Page restored with the Back button: it may still show the old language
    window.addEventListener('pageshow', event => {
        if (event.persisted) {
            refreshLanguage();
        }
    });
}