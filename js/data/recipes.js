export const recipes = [
    {
        id: 1,
        title: "Creamy Bolognese Pasta",
        description: "A rich, creamy bolognese with tender beef, tomato and parmesan, ready in 30 minutes.",
        category: "dinner",
        image: "assets/images/recipe-pasta.jpg",
        popular: true,

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
        popular: true,

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
        popular: true,

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
    },

    {
        id: 5,
        title: "Burek me Djathë",
        description: "Golden, flaky Albanian cheese pie made with crisp filo layers and a creamy white cheese filling.",
        category: "lunch",
        image: "assets/images/recipe-burek.jpg",

        prepTime: 30,
        cookTime: 40,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: "Filo pastry sheets", quantity: 8, unit: "pieces" },
            { name: "White cheese (feta style), crumbled", quantity: 300, unit: "g" },
            { name: "Cottage cheese", quantity: 200, unit: "g" },
            { name: "Eggs", quantity: 3, unit: "pieces" },
            { name: "Plain yogurt", quantity: 150, unit: "g" },
            { name: "Sunflower oil", quantity: 80, unit: "ml" },
            { name: "Sparkling water", quantity: 100, unit: "ml" },
            { name: "Black pepper", quantity: 0.5, unit: "tsp" }
        ],

        steps: [
            "Preheat the oven to 190°C and grease a large round baking tray.",
            "In a bowl, mix the crumbled white cheese, cottage cheese, 1 egg and the black pepper into a smooth filling.",
            "In a second bowl, whisk the remaining 2 eggs with the yogurt, oil and sparkling water to make the brushing mixture.",
            "Lay one filo sheet on the counter, brush it with the mixture and spread a thin line of filling along the long edge.",
            "Roll the sheet into a long tube, then coil it into the center of the tray.",
            "Repeat with the remaining sheets, coiling each one around the previous roll to form a spiral.",
            "Pour any leftover brushing mixture over the top of the burek.",
            "Bake for 35-40 minutes until deep golden, then let it rest for 10 minutes before cutting."
        ],

        tags: ["albanian", "burek", "cheese", "pie", "traditional", "vegetarian"]
    },

    {
        id: 6,
        title: "Flija",
        description: "A traditional Albanian dish of many thin, creamy layers baked one at a time until golden and soft.",
        category: "dinner",
        image: "assets/images/recipe-flija.jpg",

        prepTime: 30,
        cookTime: 90,
        servings: 6,
        difficulty: "hard",

        ingredients: [
            { name: "All-purpose flour", quantity: 500, unit: "g" },
            { name: "Water", quantity: 600, unit: "ml" },
            { name: "Salt", quantity: 1, unit: "tsp" },
            { name: "Sour cream", quantity: 250, unit: "g" },
            { name: "Plain yogurt", quantity: 200, unit: "g" },
            { name: "Butter, melted", quantity: 100, unit: "g" }
        ],

        steps: [
            "Preheat the oven to 220°C. Place a round, deep baking pan inside to heat up.",
            "Whisk the flour, water and salt into a smooth, thin batter, similar to crepe batter.",
            "In another bowl, mix the sour cream, yogurt and melted butter into a spreadable cream.",
            "Carefully take the hot pan out and brush it with butter. Pour in a thin layer of batter, just enough to cover the base.",
            "Bake for 3-4 minutes until the layer is set and lightly golden.",
            "Brush the baked layer generously with the cream mixture, then pour another thin layer of batter on top.",
            "Repeat baking, brushing and layering until the batter is used up, about 8-10 layers.",
            "Finish with a layer of cream on top and bake for 5 more minutes.",
            "Let the flija rest for 10 minutes, then cut into wedges and serve warm with yogurt or fresh cheese."
        ],

        tags: ["albanian", "flija", "traditional", "layered", "vegetarian", "kosovo"]
    },

    {
        id: 7,
        title: "Pite me Spinaq",
        description: "A homemade Albanian pie with layers of thin pastry, fresh spinach and white cheese.",
        category: "lunch",
        image: "assets/images/recipe-pite.jpg",

        prepTime: 25,
        cookTime: 40,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: "Filo pastry sheets", quantity: 8, unit: "pieces" },
            { name: "Fresh spinach, chopped", quantity: 500, unit: "g" },
            { name: "Onion, finely chopped", quantity: 1, unit: "piece" },
            { name: "White cheese (feta style), crumbled", quantity: 200, unit: "g" },
            { name: "Eggs", quantity: 3, unit: "pieces" },
            { name: "Plain yogurt", quantity: 150, unit: "g" },
            { name: "Sunflower oil", quantity: 100, unit: "ml" },
            { name: "Salt", quantity: 0.5, unit: "tsp" },
            { name: "Black pepper", quantity: 0.5, unit: "tsp" }
        ],

        steps: [
            "Preheat the oven to 190°C and grease a rectangular baking tray.",
            "Heat a little oil in a pan, cook the onion for 3 minutes, then add the spinach and cook until it wilts. Let it cool and squeeze out any extra liquid.",
            "Mix the spinach with the crumbled cheese, 1 egg, salt and pepper.",
            "Whisk the remaining 2 eggs with the yogurt and the rest of the oil.",
            "Place 3 filo sheets in the tray, brushing each one with the egg and yogurt mixture.",
            "Spread the spinach filling evenly over the top.",
            "Cover with the remaining filo sheets, brushing each layer, and pour any leftover mixture over the top.",
            "Bake for 35-40 minutes until golden and crisp. Rest for 10 minutes, then cut into squares."
        ],

        tags: ["albanian", "pite", "spinach", "pie", "traditional", "vegetarian"]
    },

   {
        id: 8,
        title: "Baklava",
        description: "Crispy layers of filo pastry filled with finely chopped pistachios and soaked in a traditional sweet sugar syrup.",
        category: "desserts",
        image: "assets/images/recipe-baklava.jpg",

        prepTime: 40,
        cookTime: 50,
        servings: 12,
        difficulty: "medium",

        ingredients: [
            { name: "Filo pastry sheets", quantity: 20, unit: "pieces" },
            { name: "Walnuts, finely chopped", quantity: 200, unit: "g" },
            { name: "Pistachios, finely chopped", quantity: 200, unit: "g" },
            { name: "Butter, melted", quantity: 200, unit: "g" },
            { name: "Sugar", quantity: 400, unit: "g" },
            { name: "Water", quantity: 300, unit: "ml" }
        ],

        steps: [
            "Preheat the oven to 175°C and brush a rectangular baking tray with melted butter.",
            "Finely chop the walnuts and pistachios, then mix them together.",
            "Place 8 filo sheets in the tray, brushing each with melted butter.",
            "Spread half of the nut mixture evenly over the filo.",
            "Add 4 more filo sheets, brushing each with butter, then spread the remaining nut mixture.",
            "Finish with the remaining filo sheets, brushing each with melted butter, including the top.",
            "Cut the baklava into diamonds or squares before baking.",
            "Bake for 45-50 minutes until deep golden and crispy.",
            "Combine the sugar and water in a saucepan and simmer for 10-12 minutes until slightly thickened.",
            "Let the syrup cool completely.",
            "Pour the cooled syrup evenly over the hot baklava and let it soak for at least 4 hours before serving."
        ],

        tags: ["albanian", "baklava", "dessert", "pistachios", "traditional", "sweet"]
    },

    {
        id: 9,
        title: "Creamy Pumpkin Soup",
        description: "A smooth, warming pumpkin soup with a hint of nutmeg and a swirl of cream.",
        category: "lunch",
        image: "assets/images/seasonal-autumn.jpg",

        prepTime: 15,
        cookTime: 30,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: "Pumpkin, peeled and cubed", quantity: 800, unit: "g" },
            { name: "Onion, chopped", quantity: 1, unit: "piece" },
            { name: "Garlic", quantity: 2, unit: "cloves" },
            { name: "Potato, peeled and cubed", quantity: 1, unit: "piece" },
            { name: "Olive oil", quantity: 2, unit: "tbsp" },
            { name: "Vegetable stock", quantity: 750, unit: "ml" },
            { name: "Heavy cream", quantity: 100, unit: "ml" },
            { name: "Ground nutmeg", quantity: 0.25, unit: "tsp" },
            { name: "Salt", quantity: 1, unit: "tsp" },
            { name: "Black pepper", quantity: 0.5, unit: "tsp" }
        ],

        steps: [
            "Heat the olive oil in a large pot over medium heat.",
            "Add the onion and cook for 4-5 minutes until soft, then add the garlic and cook for 30 seconds.",
            "Add the pumpkin and potato and stir for 2 minutes.",
            "Pour in the vegetable stock, add the salt and pepper, and bring to a boil.",
            "Lower the heat, cover, and simmer for 20 minutes until the pumpkin is very tender.",
            "Blend the soup until completely smooth using an immersion blender.",
            "Stir in the cream and nutmeg, and heat gently for 2 minutes.",
            "Serve hot with a swirl of cream and toasted bread."
        ],

        tags: ["soup", "pumpkin", "seasonal", "creamy", "vegetarian", "autumn", "comfort food"]
    },

    {
        id: 10,
        title: "Cheesy Mushroom Omelette",
        description: "A fluffy, golden omelette filled with melted cheese and sautéed mushrooms.",
        category: "breakfast",
        image: "assets/images/recipe-omelette.jpg",

        prepTime: 5,
        cookTime: 7,
        servings: 1,
        difficulty: "easy",

        ingredients: [
            { name: "Eggs", quantity: 3, unit: "pieces" },
            { name: "Milk", quantity: 1, unit: "tbsp" },
            { name: "Butter", quantity: 1, unit: "tbsp" },
            { name: "Mushrooms, sliced", quantity: 50, unit: "g" },
            { name: "Cheddar cheese, grated", quantity: 40, unit: "g" },
            { name: "Salt", quantity: 0.25, unit: "tsp" },
            { name: "Black pepper", quantity: 0.25, unit: "tsp" }
        ],

        steps: [
            "Crack the eggs into a bowl, add the milk, salt and pepper, and whisk until fully combined.",
            "Melt half of the butter in a non-stick pan over medium heat and cook the mushrooms for 3 minutes until golden. Move them to a plate.",
            "Add the remaining butter to the pan and pour in the egg mixture.",
            "Let the eggs set for 1-2 minutes, gently pushing the edges toward the center so the liquid runs underneath.",
            "When the top is almost set, sprinkle the cheese and mushrooms over one half.",
            "Fold the other half over the filling and cook for 1 more minute.",
            "Slide onto a plate and serve right away, with chives or parsley on top."
        ],

        tags: ["omelette", "eggs", "breakfast", "cheese", "quick", "vegetarian"]
    },

    {
        id: 11,
        title: "Chicken Curry",
        description: "Tender chicken simmered in a creamy curry sauce, served with fluffy rice.",
        category: "dinner",
        image: "assets/images/recipe-curry.jpg",
        popular: true,

        prepTime: 15,
        cookTime: 30,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: "Chicken breast, cubed", quantity: 500, unit: "g" },
            { name: "Onion, finely chopped", quantity: 1, unit: "piece" },
            { name: "Garlic", quantity: 3, unit: "cloves" },
            { name: "Fresh ginger, grated", quantity: 1, unit: "tbsp" },
            { name: "Curry powder", quantity: 2, unit: "tbsp" },
            { name: "Coconut milk", quantity: 400, unit: "ml" },
            { name: "Crushed tomatoes", quantity: 200, unit: "g" },
            { name: "Vegetable oil", quantity: 1, unit: "tbsp" },
            { name: "Rice", quantity: 200, unit: "g" },
            { name: "Salt", quantity: 1, unit: "tsp" }
        ],

        steps: [
            "Cook the rice according to the package instructions and keep it warm.",
            "Heat the oil in a large pan over medium heat and cook the onion for 5 minutes until soft.",
            "Add the garlic, ginger and curry powder and stir for 1 minute until fragrant.",
            "Add the chicken and cook for 5 minutes, stirring, until it turns white on the outside.",
            "Pour in the crushed tomatoes and coconut milk, add the salt, and stir well.",
            "Simmer on low heat for 15-20 minutes until the chicken is cooked through and the sauce has thickened.",
            "Serve hot over the rice with fresh coriander or parsley."
        ],

        tags: ["curry", "chicken", "coconut", "rice", "dinner", "comfort food"]
    },

    {
        id: 12,
        title: "Chocolate Chip Cookies",
        description: "Soft and chewy cookies with crisp golden edges and melty chocolate chips.",
        category: "desserts",
        image: "assets/images/recipe-cookies.jpeg",

        prepTime: 15,
        cookTime: 12,
        servings: 16,
        difficulty: "easy",

        ingredients: [
            { name: "Butter, softened", quantity: 115, unit: "g" },
            { name: "Brown sugar", quantity: 100, unit: "g" },
            { name: "Sugar", quantity: 50, unit: "g" },
            { name: "Egg", quantity: 1, unit: "piece" },
            { name: "Vanilla extract", quantity: 1, unit: "tsp" },
            { name: "All-purpose flour", quantity: 190, unit: "g" },
            { name: "Baking soda", quantity: 0.5, unit: "tsp" },
            { name: "Salt", quantity: 0.5, unit: "tsp" },
            { name: "Chocolate chips", quantity: 150, unit: "g" }
        ],

        steps: [
            "Preheat the oven to 175°C and line a baking tray with parchment paper.",
            "Beat the butter, brown sugar and sugar together until light and creamy.",
            "Add the egg and vanilla and mix until combined.",
            "In another bowl, mix the flour, baking soda and salt, then stir into the butter mixture.",
            "Fold in the chocolate chips.",
            "Scoop tablespoon-sized balls of dough onto the tray, leaving space between them.",
            "Bake for 10-12 minutes until the edges are golden but the centers are still soft.",
            "Let the cookies cool on the tray for 5 minutes before moving them to a rack."
        ],

        tags: ["cookies", "chocolate", "dessert", "baking", "sweet", "classic"]
    },

    {
        id: 13,
        title: "Cinnamon Rolls",
        description: "Soft, fluffy rolls swirled with cinnamon sugar and topped with a creamy cream cheese glaze.",
        category: "desserts",
        image: "assets/images/recipe-cinnamon-rolls.jpg",
        popular: true,

        prepTime: 120,
        cookTime: 25,
        servings: 9,
        difficulty: "medium",

        ingredients: [
            { name: "All-purpose flour", quantity: 400, unit: "g" },
            { name: "Warm milk", quantity: 200, unit: "ml" },
            { name: "Sugar", quantity: 50, unit: "g" },
            { name: "Instant yeast", quantity: 7, unit: "g" },
            { name: "Butter, melted", quantity: 60, unit: "g" },
            { name: "Egg", quantity: 1, unit: "piece" },
            { name: "Salt", quantity: 0.5, unit: "tsp" },
            { name: "Butter, softened (for filling)", quantity: 60, unit: "g" },
            { name: "Brown sugar", quantity: 100, unit: "g" },
            { name: "Ground cinnamon", quantity: 2, unit: "tbsp" },
            { name: "Cream cheese", quantity: 100, unit: "g" },
            { name: "Powdered sugar", quantity: 100, unit: "g" }
        ],

        steps: [
            "Mix the warm milk, sugar and yeast in a bowl and let it sit for 10 minutes until foamy.",
            "Add the melted butter, egg, salt and flour, then knead for 8-10 minutes until the dough is soft and smooth.",
            "Cover the dough and let it rise in a warm place for about 1 hour, until doubled in size.",
            "Mix the brown sugar and cinnamon for the filling.",
            "Roll the dough into a large rectangle, spread it with the softened butter and sprinkle over the cinnamon sugar.",
            "Roll the dough up tightly from the long side and cut it into 8 equal rolls.",
            "Place the rolls in a greased baking dish, cover, and let them rise for 30 more minutes. Preheat the oven to 180°C.",
            "Bake for 22-25 minutes until golden brown.",
            "Beat the cream cheese with the powdered sugar until smooth, then spread it over the warm rolls."
        ],

        tags: ["cinnamon rolls", "desserts", "baking", "sweet", "cream cheese", "comfort food"]
    },

    {
        id: 14,
        title: "Breakfast Quesadillas",
        description: "Crispy tortillas filled with fluffy scrambled eggs, melted cheese and peppers.",
        category: "breakfast",
        image: "assets/images/recipe-quesadillas.jpeg",

        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: "Large flour tortillas", quantity: 2, unit: "pieces" },
            { name: "Eggs", quantity: 4, unit: "pieces" },
            { name: "Cheddar or mozzarella, grated", quantity: 100, unit: "g" },
            { name: "Red bell pepper, diced", quantity: 0.5, unit: "piece" },
            { name: "Spring onions, sliced", quantity: 2, unit: "pieces" },
            { name: "Butter", quantity: 1, unit: "tbsp" },
            { name: "Salt", quantity: 0.25, unit: "tsp" },
            { name: "Black pepper", quantity: 0.25, unit: "tsp" }
        ],

        steps: [
            "Whisk the eggs with the salt and pepper.",
            "Melt half of the butter in a pan over medium heat and cook the bell pepper for 2-3 minutes.",
            "Pour in the eggs and scramble gently until just set. Stir in the spring onions and move to a plate.",
            "Wipe the pan, then place one tortilla in it and sprinkle cheese over one half.",
            "Add half of the scrambled eggs on top of the cheese, then sprinkle with a little more cheese.",
            "Fold the tortilla in half and cook for 2 minutes on each side until golden and crispy.",
            "Repeat with the second tortilla, then cut into wedges and serve with salsa or sour cream."
        ],

        tags: ["quesadilla", "eggs", "breakfast", "cheese", "quick", "tex-mex"]
    },

    {
        id: 15,
        title: "Classic Lasagna",
        description: "Layers of pasta, rich beef, creamy béchamel and melted mozzarella baked until bubbling.",
        category: "dinner",
        image: "assets/images/category-dinner.jpg",
        popular: true,

        prepTime: 30,
        cookTime: 70,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: "Lasagna sheets", quantity: 250, unit: "g" },
            { name: "Ground beef", quantity: 500, unit: "g" },
            { name: "Onion, finely chopped", quantity: 1, unit: "piece" },
            { name: "Carrot, grated", quantity: 1, unit: "piece" },
            { name: "Garlic", quantity: 3, unit: "cloves" },
            { name: "Olive oil", quantity: 2, unit: "tbsp" },
            { name: "Tomato paste", quantity: 2, unit: "tbsp" },
            { name: "Crushed tomatoes", quantity: 400, unit: "g" },
            { name: "Dried oregano", quantity: 1, unit: "tsp" },
            { name: "Butter", quantity: 50, unit: "g" },
            { name: "All-purpose flour", quantity: 50, unit: "g" },
            { name: "Milk", quantity: 600, unit: "ml" },
            { name: "Ground nutmeg", quantity: 0.25, unit: "tsp" },
            { name: "Mozzarella, grated", quantity: 200, unit: "g" },
            { name: "Parmesan, grated", quantity: 50, unit: "g" },
            { name: "Salt", quantity: 1.5, unit: "tsp" },
            { name: "Black pepper", quantity: 0.5, unit: "tsp" }
        ],

        steps: [
            "Heat the olive oil in a large pan and cook the onion and carrot for 5 minutes until soft. Add the garlic and cook for 30 seconds.",
            "Add the ground beef and cook until browned, breaking it up as it cooks.",
            "Stir in the tomato paste, crushed tomatoes, oregano, 1 tsp salt and the pepper. Simmer for 25 minutes until thick.",
            "For the béchamel, melt the butter in a saucepan, stir in the flour and cook for 1 minute.",
            "Gradually whisk in the milk and cook, stirring, for 8-10 minutes until thickened. Add the nutmeg and remaining salt.",
            "Preheat the oven to 190°C. Spread a little meat sauce in a baking dish, then add a layer of lasagna sheets.",
            "Add a layer of meat sauce, a layer of béchamel and a sprinkle of mozzarella. Repeat the layers 3 times.",
            "Finish with béchamel, the remaining mozzarella and the parmesan.",
            "Bake for 35-40 minutes until golden and bubbling, then rest for 10 minutes before cutting."
        ],

        tags: ["lasagna", "pasta", "beef", "italian", "dinner", "comfort food"]
    },

    {
        id: 16,
        title: "Homemade Plum Jam",
        description: "A thick, glossy plum jam with a sweet-tart flavor, perfect on toast, pancakes or petulla.",
        category: "breakfast",
        image: "assets/images/recipe-plum-jam.jpg",

        prepTime: 20,
        cookTime: 45,
        servings: 20,
        difficulty: "easy",

        ingredients: [
            { name: "Ripe plums, pitted and chopped", quantity: 1000, unit: "g" },
            { name: "Sugar", quantity: 500, unit: "g" },
            { name: "Lemon juice", quantity: 2, unit: "tbsp" },
            { name: "Water", quantity: 50, unit: "ml" }
        ],

        steps: [
            "Wash and sterilize 3 to 4 small jars and their lids in boiling water, then let them dry.",
            "Put the plums, sugar, lemon juice and water in a wide, heavy pot and stir. Let it sit for 30 minutes so the plums release their juice.",
            "Bring to a boil over medium heat, stirring until the sugar dissolves.",
            "Reduce the heat and simmer for 35-40 minutes, stirring often and skimming off any foam.",
            "To test, drop a little jam on a cold plate. If it wrinkles when pushed with your finger, it's ready.",
            "Mash the plums with a spoon or potato masher for a smoother texture.",
            "Pour the hot jam into the sterilized jars, close the lids tightly and let them cool.",
            "Store in the fridge once opened."
        ],

        tags: ["jam", "plum", "seasonal", "autumn", "homemade", "preserves"]
    },

    {
        id: 17,
        title: "Apple Crumble Pie",
        description: "A buttery pie crust filled with cinnamon apples and topped with a golden crumble.",
        category: "desserts",
        image: "assets/images/recipe-apple-crumble-pie.png",

        prepTime: 40,
        cookTime: 50,
        servings: 8,
        difficulty: "medium",

        ingredients: [
            { name: "All-purpose flour", quantity: 200, unit: "g" },
            { name: "Cold butter, cubed", quantity: 100, unit: "g" },
            { name: "Sugar", quantity: 30, unit: "g" },
            { name: "Cold water", quantity: 3, unit: "tbsp" },
            { name: "Apples, peeled and sliced", quantity: 800, unit: "g" },
            { name: "Sugar", quantity: 80, unit: "g" },
            { name: "Ground cinnamon", quantity: 1, unit: "tsp" },
            { name: "Lemon juice", quantity: 1, unit: "tbsp" },
            { name: "Cornstarch", quantity: 1, unit: "tbsp" },
            { name: "All-purpose flour", quantity: 120, unit: "g" },
            { name: "Cold butter, cubed", quantity: 80, unit: "g" },
            { name: "Brown sugar", quantity: 80, unit: "g" }
        ],

        steps: [
            "Rub the crust flour, butter and sugar together until it looks like breadcrumbs. Add the cold water and bring it into a dough.",
            "Wrap the dough and chill it in the fridge for 30 minutes.",
            "Preheat the oven to 180°C. Roll out the dough and press it into a 24 cm pie dish. Prick the base with a fork.",
            "Toss the apples with the filling sugar, cinnamon, lemon juice and cornstarch.",
            "Spoon the apples into the crust.",
            "For the crumble, rub the flour, cold butter and brown sugar together until you have large crumbs.",
            "Scatter the crumble evenly over the apples.",
            "Bake for 45-50 minutes until the top is golden and the apples are tender.",
            "Let the pie cool for at least 30 minutes before slicing. Serve with vanilla ice cream."
        ],

        tags: ["apple", "pie", "crumble", "dessert", "seasonal", "autumn", "baking"]
    },

    {
        id: 18,
        title: "Creamy Mushroom Risotto",
        description: "A comforting and creamy mushroom risotto made with tender rice, fresh mushrooms and melted parmesan cheese.",
        category: "dinner",
        image: "assets/images/recipe-risotto.jpg",

        prepTime: 10,
        cookTime: 35,
        servings: 4,
        difficulty: "medium",

        ingredients: [
            { name: "Rice", quantity: 300, unit: "g" },
            { name: "Mushrooms, sliced", quantity: 250, unit: "g" },
            { name: "Onion, finely chopped", quantity: 1, unit: "piece" },
            { name: "Garlic", quantity: 2, unit: "cloves" },
            { name: "Butter", quantity: 40, unit: "g" },
            { name: "Olive oil", quantity: 1, unit: "tbsp" },
            { name: "White wine (optional)", quantity: 100, unit: "ml" },
            { name: "Hot vegetable or chicken stock", quantity: 1000, unit: "ml" },
            { name: "Parmesan, grated", quantity: 60, unit: "g" },
            { name: "Salt", quantity: 0.5, unit: "tsp" },
            { name: "Black pepper", quantity: 0.5, unit: "tsp" }
        ],

        steps: [
            "Keep the stock hot in a saucepan over low heat.",
            "Heat the olive oil and half of the butter in a wide pan and cook the mushrooms for 5-6 minutes until golden. Move them to a plate.",
            "In the same pan, cook the onion for 4 minutes until soft, then add the garlic for 30 seconds.",
            "Add the rice and stir for 1-2 minutes until the grains look slightly translucent at the edges.",
            "Pour in the wine, if using, and stir until it is absorbed.",
            "Add the hot stock one ladle at a time, stirring often and waiting until each ladle is absorbed before adding the next. This takes about 20 minutes.",
            "When the rice is creamy and tender but still slightly firm in the center, stir in the mushrooms, the remaining butter, the parmesan, salt and pepper.",
            "Rest for 2 minutes, then serve immediately with extra parmesan."
        ],

        tags: ["risotto", "mushroom", "rice", "italian", "creamy", "dinner", "vegetarian"]
    },

    {
        id: 19,
        title: "Petulla",
        description: "Traditional Albanian fried dough, crisp outside and fluffy inside, served with feta, jam or honey.",
        category: "breakfast",
        image: "assets/images/recipe-petulla.jpeg",

        prepTime: 75,
        cookTime: 15,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: "All-purpose flour", quantity: 500, unit: "g" },
            { name: "Warm milk", quantity: 150, unit: "ml" },
            { name: "Warm water", quantity: 200, unit: "ml" },
            { name: "Instant yeast", quantity: 7, unit: "g" },
            { name: "Sugar", quantity: 1, unit: "tsp" },
            { name: "Salt", quantity: 1, unit: "tsp" },
            { name: "Sunflower oil (for frying)", quantity: 500, unit: "ml" }
        ],

        steps: [
            "Mix the warm milk, warm water, yeast and sugar and let it sit for 10 minutes until foamy.",
            "Add the flour and salt and mix into a soft, sticky dough.",
            "Cover the bowl and let the dough rise in a warm place for about 1 hour, until doubled.",
            "Heat the oil in a deep pan over medium heat. It's ready when a small piece of dough sizzles and rises right away.",
            "Wet your hands or use two oiled spoons, take a piece of dough about the size of a small egg, and gently stretch it into an oval.",
            "Fry 3 to 4 pieces at a time for 2-3 minutes per side until puffed and deep golden.",
            "Drain on paper towels and serve warm with crumbled feta, plum jam, honey or powdered sugar."
        ],

        tags: ["albanian", "petulla", "fried dough", "traditional", "breakfast", "vegetarian"]
    },

    {
        id: 20,
        title: "Tiramisu",
        description: "Layers of soft coffee-dipped biscuits and creamy mascarpone filling, finished with a dusting of cocoa powder.",
        category: "desserts",
        image: "assets/images/category-desserts.jpg",
        popular: true,

        prepTime: 25,
        cookTime: 0,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: "Ladyfinger biscuits", quantity: 200, unit: "g" },
            { name: "Mascarpone cheese", quantity: 250, unit: "g" },
            { name: "Heavy whipping cream", quantity: 200, unit: "ml" },
            { name: "Sugar", quantity: 70, unit: "g" },
            { name: "Strong brewed coffee, cooled", quantity: 200, unit: "ml" },
            { name: "Vanilla extract", quantity: 1, unit: "tsp" },
            { name: "Cocoa powder", quantity: 2, unit: "tbsp" }
        ],

        steps: [
            "Prepare the coffee and let it cool completely.",
            "In a large bowl, whip the heavy cream with the sugar and vanilla extract until soft peaks form.",
            "In a separate bowl, gently mix the mascarpone until smooth.",
            "Fold the whipped cream into the mascarpone until combined and creamy.",
            "Quickly dip each ladyfinger into the cooled coffee and arrange a layer in the bottom of a baking dish.",
            "Spread half of the mascarpone mixture evenly over the biscuits.",
            "Add another layer of coffee-dipped ladyfingers, followed by the remaining mascarpone mixture.",
            "Smooth the top and cover the dish.",
            "Refrigerate for at least 6 hours, preferably overnight.",
            "Dust with cocoa powder just before serving."
        ],

        tags: ["tiramisu", "italian", "dessert", "coffee", "mascarpone", "no-bake", "sweet"]
    },

    {
        id: 21,
        title: "Scrambled Eggs with Avocado Toast",
        description: "Soft and fluffy scrambled eggs served with toasted bread and avocado for a simple breakfast.",
        category: "breakfast",
        image: "assets/images/recipe-avocado-toast.jpeg",

        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: "Eggs", quantity: 4, unit: "pieces" },
            { name: "Milk", quantity: 2, unit: "tbsp" },
            { name: "Butter", quantity: 15, unit: "g" },
            { name: "Bread slices", quantity: 2, unit: "pieces" },
            { name: "Ripe avocado", quantity: 1, unit: "piece" },
            { name: "Lemon juice", quantity: 1, unit: "tsp" },
            { name: "Salt", quantity: 0.25, unit: "tsp" },
            { name: "Black pepper", quantity: 0.25, unit: "tsp" },
            { name: "Chili flakes (optional)", quantity: 1, unit: "pinch" }
        ],

        steps: [
            "Cut the avocado in half, remove the pit and scoop the flesh into a small bowl.",
            "Mash the avocado with lemon juice, salt and black pepper until creamy.",
            "In a bowl, whisk the eggs with milk, salt and pepper.",
            "Melt the butter in a non-stick pan over low heat.",
            "Pour in the egg mixture and gently stir with a spatula until soft and fluffy. Remove from heat while still slightly creamy.",
            "Toast the bread slices until golden and crispy.",
            "Spread the mashed avocado over each slice of toast.",
            "Serve with the scrambled eggs on top or alongside.",
            "Finish with a pinch of chili flakes if desired."
        ],

        tags: ["breakfast", "eggs", "avocado", "toast", "quick", "easy", "vegetarian"]
    },

    {
        id: 22,
        title: "Chicken Caesar Wrap",
        description: "Tender chicken, crisp lettuce, parmesan cheese and creamy Caesar dressing wrapped in a soft tortilla for a quick and delicious meal.",
        category: "lunch",
        image: "assets/images/recipe-caesar-wrap.jpg",
        popular: true,

        prepTime: 15,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: "Chicken breast", quantity: 250, unit: "g" },
            { name: "Flour tortillas", quantity: 2, unit: "pieces" },
            { name: "Romaine lettuce, chopped", quantity: 100, unit: "g" },
            { name: "Parmesan cheese, grated", quantity: 40, unit: "g" },
            { name: "Caesar dressing", quantity: 4, unit: "tbsp" },
            { name: "Olive oil", quantity: 1, unit: "tbsp" },
            { name: "Garlic powder", quantity: 0.5, unit: "tsp" },
            { name: "Paprika", quantity: 0.5, unit: "tsp" },
            { name: "Salt", quantity: 0.5, unit: "tsp" },
            { name: "Black pepper", quantity: 0.25, unit: "tsp" }
        ],

        steps: [
            "Season the chicken breast with garlic powder, paprika, salt and black pepper.",
            "Heat olive oil in a pan over medium heat.",
            "Cook the chicken for 5-6 minutes on each side, until fully cooked. Let it rest briefly, then slice into strips.",
            "In a bowl, combine the chopped lettuce, parmesan cheese and Caesar dressing.",
            "Warm the tortillas in a dry pan for a few seconds until soft and flexible.",
            "Divide the lettuce mixture between the tortillas and add the sliced chicken.",
            "Fold in the sides of each tortilla and roll tightly into a wrap.",
            "Place the wraps seam-side down in a pan and toast for 1-2 minutes on each side until lightly golden.",
            "Slice in half and serve immediately."
        ],

        tags: ["chicken", "caesar", "wrap", "lunch", "quick", "easy", "parmesan"]
    }
];