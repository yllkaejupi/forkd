// Which months belong to each season, and the photo for the home page.
// Months are counted the way JavaScript's Date does: 0 = January ... 11 = December.
// The texts (title, description...) live in en.js / sq.js under "seasons".

export const seasons = {
    winter: {
        months: [11, 0, 1],
        image: 'assets/images/recipe-cinnamon-rolls.jpg' 
    },
    spring: {
        months: [2, 3, 4],
        image: 'assets/images/recipe-pite.jpg' 
    },
    summer: {
        months: [5, 6, 7],
        image: 'assets/images/recipe-salad.jpg' 
    },
    autumn: {
        months: [8, 9, 10],
        image: 'assets/images/seasonal-autumn.jpg'
    }
};

// Returns 'winter', 'spring', 'summer' or 'autumn' for today.
// `override` lets you force a season for testing: index.html?season=summer
export function getCurrentSeason(override) {
    if (override && seasons[override]) {
        return override;
    }

    const month = new Date().getMonth();

    return Object.keys(seasons).find(season =>
        seasons[season].months.includes(month)
    );
}