export const recipes = [
    {
        id: 1,
        title: "Creamy Bolognese Pasta",
        description: "A rich, creamy bolognese with tender beef, tomato and parmesan, ready in 30 minutes.",
        category: "dinner",
        image: "assets/images/recipe-pasta.jpg",

        prepTime: 10,
        cookTime: 20,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: "Pasta (tagliatelle or spaghetti)", quantity: 200, unit: "g"},
            { name: "Ground beef", quantity: 250, unit: "g"},
            { name: "Onion, finely chopped", quantity: 1, unit: "pcs"},
            { name: "Carrot, grated", quantity: 1, unit: "pcs"},
            { name: "Garlic", quantity: 2, unit: "cloves"},
            { name: "Olive oil", quantity: 1, unit: "tbsp"},
            { name: "Tomato paste", quantity: 1, unit: "tbsp"},
            { name: "Crushed tomatoes", quantity: 400, unit: "g"},
            { name: "Dried oregano", quantity: 1, unit: "tsp"},
            { name: "Heavy cream", quantity: 100, unit: "ml"},
            { name: "Parmesan, grated", quantity: 40, unit: "g"},
            { name: "Salt", quantity: 1, unit: "tsp"},
            { name: "Black pepper", quantity: 0.5, unit: "tsp"}
        ],

        steps: [
            "Cook the pasta in salted boiling water according to the package instructions. Save a cup of the pasta water, then drain.",
            "Heat the olive oil in a large pan over medium heat. Add the onion and carrot and cook for 4-5 minutes until soft.",
            "Add the minced garlic and cook for 30 seconds, then add the ground beef. Break it up and cook until browned, about 5 minutes.",
            "Stir in the tomato paste, then add the crushed tomatoes, oregano, salt and pepper. Simmer for 8-10 minutes.",
            "Lower the heat, pour in the cream and half of the parmesan, and stir until the sauce is smooth and creamy.",
            "Add the cooked pasta to the sauce and toss well, adding a splash of pasta water if it's too thick.",
            "Serve topped with the remaining parmesan and fresh basil or parsley."
        ],

        tags: ["pasta", "bolognese", "beef", "creamy", "dinner", "comfort food"]
    },

    {
        id: 2,
        title: "Berry Breakfast Pancakes",
        description: "Fluffy pancakes topped with fresh berries and a drizzle of honey.",
        category: "breakfast",
        image: "assets/images/recipe-pancakes.jpg",

        prepTime: 10,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: "Flour", quantity: 150, unit: "g" },
            { name: "Milk", quantity: 180, unit: "ml" },
            { name: "Egg", quantity: 1, unit: "piece" },
            { name: "Baking powder", quantity: 1, unit: "tsp" },
            { name: "Mixed berries", quantity: 100, unit: "g" },
            { name: "Honey", quantity: 2, unit: "tbsp" }
        ],

        steps: [
            "Mix the flour and baking powder in a bowl.",
            "Add the milk and egg, then whisk until smooth.",
            "Heat a non-stick pan over medium heat.",
            "Pour small portions of batter into the pan and cook until bubbles appear.",
            "Flip and cook the other side until golden.",
            "Serve with fresh berries and honey."
        ],

        tags: ["pancakes", "breakfast", "berries", "sweet", "quick"]
    },

    {
        id: 3,
        title: "Mediterranean Salad",
        description: "A fresh Mediterranean salad with crisp vegetables, olives and feta cheese.",
        category: "lunch",
        image: "assets/images/recipe-salad.jpg",

        prepTime: 15,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: "Cucumber", quantity: 1, unit: "piece" },
            { name: "Tomatoes", quantity: 2, unit: "pieces" },
            { name: "Red onion", quantity: 0.5, unit: "piece" },
            { name: "Feta cheese", quantity: 80, unit: "g" },
            { name: "Olives", quantity: 50, unit: "g" },
            { name: "Olive oil", quantity: 2, unit: "tbsp" }
        ],

        steps: [
            "Wash and chop the cucumber and tomatoes.",
            "Thinly slice the red onion.",
            "Combine the vegetables and olives in a bowl.",
            "Add crumbled feta cheese.",
            "Drizzle with olive oil and toss gently."
        ],

        tags: ["salad", "mediterranean", "fresh", "vegetarian", "quick"]
    },

    {
        id: 4,
        title: "Red Velvet Cake",
        description: "A soft red velvet cake layered with smooth and creamy cream cheese frosting.",
        category: "desserts",
        image: "assets/images/recipe-cake.jpg",

        prepTime: 25,
        cookTime: 40,
        servings: 8,
        difficulty: "medium",

        ingredients: [
            { name: "All-purpose flour", quantity: 250, unit: "g" },
            { name: "Sugar", quantity: 200, unit: "g" },
            { name: "Butter", quantity: 115, unit: "g" },
            { name: "Eggs", quantity: 2, unit: "pieces" },
            { name: "Buttermilk", quantity: 180, unit: "ml" },
            { name: "Cocoa powder", quantity: 15, unit: "g" },
            { name: "Red food coloring", quantity: 1, unit: "tbsp" },
            { name: "Cream cheese", quantity: 200, unit: "g" }
        ],

        steps: [
            "Preheat the oven to 175°C.",
            "Mix the flour and cocoa powder in a bowl.",
            "Cream the butter and sugar, then add the eggs.",
            "Gradually mix in the dry ingredients and buttermilk.",
            "Add the red food coloring and mix until evenly combined.",
            "Pour the batter into a prepared cake pan and bake for about 40 minutes.",
            "Allow the cake to cool completely.",
            "Prepare the cream cheese frosting and spread it between the cake layers."
        ],

        tags: ["red velvet", "cake", "dessert", "cream cheese", "baking"]
    }
];