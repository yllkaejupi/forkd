const FAVORITES_KEY = 'forkd-favorites';

export function getFavorites() {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);

    return storedFavorites ? JSON.parse(storedFavorites) : [];
}

export function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function toggleFavorite(recipeId) {
    const favorites = getFavorites();

    const updatedFavorites = favorites.includes(recipeId)
        ? favorites.filter(id => id !== recipeId)
        : [...favorites, recipeId];

    saveFavorites(updatedFavorites);

    return updatedFavorites;
}