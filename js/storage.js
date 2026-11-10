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

const GROCERY_LIST_KEY = 'forkd-grocery-list';

export function getGroceryList() {
    const storedList = localStorage.getItem(GROCERY_LIST_KEY);

    return storedList ? JSON.parse(storedList) : [];
}

export function saveGroceryList(groceryList) {
    localStorage.setItem(GROCERY_LIST_KEY, JSON.stringify(groceryList));
}

const COLLECTIONS_KEY = 'forkd-collections';

export function getCollections() {
    const storedCollections = localStorage.getItem(COLLECTIONS_KEY);

    return storedCollections ? JSON.parse(storedCollections) : [];
}

export function saveCollections(collections) {
    localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(collections));
}

export function createCollection(name) {
    const collections = getCollections();

    const newCollection = {
        id: Date.now(),
        name: name.trim(),
        recipeIds: []
    };

    collections.push(newCollection);
    saveCollections(collections);

    return collections;
}

export function addRecipeToCollection(collectionId, recipeId) {
    const collections = getCollections();

    const updatedCollections = collections.map(collection => {
        if (collection.id === collectionId && !collection.recipeIds.includes(recipeId)) {
            return {
                ...collection,
                recipeIds: [...collection.recipeIds, recipeId]
            };
        }

        return collection;
    });

    saveCollections(updatedCollections);
    return updatedCollections;
}

export function removeRecipeFromCollection(collectionId, recipeId) {
    const collections = getCollections();

    const updatedCollections = collections.map(collection => {
        if (collection.id === collectionId) {
            return {
                ...collection,
                recipeIds: collection.recipeIds.filter(id => id !== recipeId)
            };
        }

        return collection;
    });

    saveCollections(updatedCollections);
    return updatedCollections;
}

// Rename Collection
export function renameCollection(collectionId, newName) {
    const collections = getCollections();

    const updatedCollections = collections.map(collection => {
        if (collection.id === collectionId) {
            return {
                ...collection,
                name: newName.trim()
            };
        }

        return collection;
    });

    saveCollections(updatedCollections);
    return updatedCollections;
}

// Delete Collection
export function deleteCollection(collectionId) {
    const collections = getCollections();

    const updatedCollections = collections.filter(
        collection => collection.id !== collectionId
    );

    saveCollections(updatedCollections);
    return updatedCollections;
}