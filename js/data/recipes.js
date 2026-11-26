// Every piece of text that changes with the language is stored as { en, sq }.
// Everything else (numbers, units, images, tags) is shared.
// Units are keys ("g", "tbsp", "piece", "clove"...) that get translated
// and pluralized by formatAmount() in ui.js.

export const recipes = [
    {
        id: 1,
        title: { en: "Bolognese Pasta", sq: "Pasta Bolognese" },
        description: {
            en: "A rich, creamy bolognese with tender beef, tomato and parmesan, ready in 30 minutes.",
            sq: "Një bolognese e pasur dhe kremoze me mish viçi të butë, domate dhe parmixhan, gati për 30 minuta."
        },
        category: "dinner",
        image: "assets/images/recipe-pasta.jpg",
        popular: true,

        prepTime: 10,
        cookTime: 20,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Pasta (tagliatelle or spaghetti)", sq: "Pasta (taliatele ose shpageti)" }, quantity: 200, unit: "g" },
            { name: { en: "Ground beef", sq: "Mish viçi i grirë" }, quantity: 250, unit: "g" },
            { name: { en: "Onion, finely chopped", sq: "Qepë, e grirë imët" }, quantity: 1, unit: "piece" },
            { name: { en: "Carrot, grated", sq: "Karrotë, e grirë" }, quantity: 1, unit: "piece" },
            { name: { en: "Garlic", sq: "Hudhër" }, quantity: 2, unit: "clove" },
            { name: { en: "Olive oil", sq: "Vaj ulliri" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Tomato paste", sq: "Pastë domatesh" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Crushed tomatoes", sq: "Domate të shtypura" }, quantity: 400, unit: "g" },
            { name: { en: "Dried oregano", sq: "Rigon i thatë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Heavy cream", sq: "Pana gatimi" }, quantity: 100, unit: "ml" },
            { name: { en: "Parmesan, grated", sq: "Parmixhan, i grirë" }, quantity: 40, unit: "g" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
                "Cook the pasta in salted boiling water according to the package instructions. Save a cup of the pasta water, then drain.",
                "Heat the olive oil in a large pan over medium heat. Add the onion and carrot and cook for 4-5 minutes until soft.",
                "Add the minced garlic and cook for 30 seconds, then add the ground beef. Break it up and cook until browned, about 5 minutes.",
                "Stir in the tomato paste, then add the crushed tomatoes, oregano, salt and pepper. Simmer for 8-10 minutes.",
                "Lower the heat, pour in the cream and half of the parmesan, and stir until the sauce is smooth and creamy.",
                "Add the cooked pasta to the sauce and toss well, adding a splash of pasta water if it's too thick.",
                "Serve topped with the remaining parmesan and fresh basil or parsley."
            ],
            sq: [
                "Ziej pastën në ujë të vluar me kripë sipas udhëzimeve në paketim. Ruaj një filxhan me ujin e pastës, pastaj kulloje.",
                "Ngroh vajin e ullirit në një tigan të madh në zjarr mesatar. Shto qepën dhe karrotën dhe gatuaji për 4-5 minuta derisa të zbuten.",
                "Shto hudhrën e grirë dhe gatuaje për 30 sekonda, pastaj shto mishin e grirë. Shpërbeje dhe gatuaje derisa të skuqet, rreth 5 minuta.",
                "Përziej pastën e domates, pastaj shto domatet e shtypura, rigonin, kripën dhe piperin. Lëre të ziejë ngadalë për 8-10 minuta.",
                "Ule zjarrin, hidh panën dhe gjysmën e parmixhanit dhe përzieje derisa salca të bëhet e lëmuar dhe kremoze.",
                "Shto pastën e zier në salcë dhe përzieje mirë, duke shtuar pak ujë nga pasta nëse është shumë e trashë.",
                "Shërbeje me parmixhanin e mbetur dhe borzilok ose majdanoz të freskët sipër."
            ]
        },

        tags: ["pasta", "bolognese", "beef", "creamy", "dinner", "comfort food"]
    },

    {
        id: 2,
        title: { en: "Berry Breakfast Pancakes", sq: "Pancake me fruta pylli" },
        description: {
            en: "Fluffy pancakes topped with fresh berries and a drizzle of honey.",
            sq: "Pancake të butë me fruta pylli të freskëta dhe pak mjaltë sipër."
        },
        category: "breakfast",
        image: "assets/images/recipe-pancakes.jpg",
        popular: true,

        prepTime: 10,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Flour", sq: "Miell" }, quantity: 150, unit: "g" },
            { name: { en: "Milk", sq: "Qumësht" }, quantity: 180, unit: "ml" },
            { name: { en: "Egg", sq: "Vezë" }, quantity: 1, unit: "piece" },
            { name: { en: "Baking powder", sq: "Pluhur pjekjeje" }, quantity: 1, unit: "tsp" },
            { name: { en: "Mixed berries", sq: "Fruta pylli të përziera" }, quantity: 100, unit: "g" },
            { name: { en: "Honey", sq: "Mjaltë" }, quantity: 2, unit: "tbsp" }
        ],

        steps: {
            en: [
                "Mix the flour and baking powder in a bowl.",
                "Add the milk and egg, then whisk until smooth.",
                "Heat a non-stick pan over medium heat.",
                "Pour small portions of batter into the pan and cook until bubbles appear.",
                "Flip and cook the other side until golden.",
                "Serve with fresh berries and honey."
            ],
            sq: [
                "Përziej miellin dhe pluhurin e pjekjes në një tas.",
                "Shto qumështin dhe vezën, pastaj rrihi derisa brumi të bëhet i lëmuar.",
                "Ngroh një tigan që nuk ngjit në zjarr mesatar.",
                "Hidh sasi të vogla brumi në tigan dhe gatuaji derisa të shfaqen flluska.",
                "Ktheji nga ana tjetër dhe gatuaji derisa të marrin ngjyrë të artë.",
                "Shërbeji me fruta pylli të freskëta dhe mjaltë."
            ]
        },

        tags: ["pancakes", "breakfast", "berries", "sweet", "quick", "summer"]
    },

    {
        id: 3,
        title: { en: "Mediterranean Salad", sq: "Sallatë mesdhetare" },
        description: {
            en: "A fresh Mediterranean salad with crisp vegetables, olives and feta cheese.",
            sq: "Një sallatë e freskët mesdhetare me perime krokante, ullinj dhe djathë feta."
        },
        category: "lunch",
        image: "assets/images/recipe-salad.jpg",
        popular: true,

        prepTime: 15,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Cucumber", sq: "Trangull" }, quantity: 1, unit: "piece" },
            { name: { en: "Tomatoes", sq: "Domate" }, quantity: 2, unit: "piece" },
            { name: { en: "Red onion", sq: "Qepë e kuqe" }, quantity: 0.5, unit: "piece" },
            { name: { en: "Feta cheese", sq: "Djathë feta" }, quantity: 80, unit: "g" },
            { name: { en: "Olives", sq: "Ullinj" }, quantity: 50, unit: "g" },
            { name: { en: "Olive oil", sq: "Vaj ulliri" }, quantity: 2, unit: "tbsp" }
        ],

        steps: {
            en: [
                "Wash and chop the cucumber and tomatoes.",
                "Thinly slice the red onion.",
                "Combine the vegetables and olives in a bowl.",
                "Add crumbled feta cheese.",
                "Drizzle with olive oil and toss gently."
            ],
            sq: [
                "Laji dhe priji trangullin dhe domatet.",
                "Prije qepën e kuqe në feta të holla.",
                "Bashko perimet dhe ullinjtë në një tas.",
                "Shto djathin feta të thërrmuar.",
                "Hidh vaj ulliri sipër dhe përzieje lehtë."
            ]
        },

        tags: ["salad", "mediterranean", "fresh", "vegetarian", "quick", "summer"]
    },

    {
        id: 4,
        title: { en: "Red Velvet Cake", sq: "Tortë Red Velvet" },
        description: {
            en: "A soft red velvet cake layered with smooth and creamy cream cheese frosting.",
            sq: "Një tortë e butë red velvet me shtresa kremi të lëmuar me djathë krem."
        },
        category: "desserts",
        image: "assets/images/recipe-cake.jpg",

        prepTime: 25,
        cookTime: 40,
        servings: 8,
        difficulty: "medium",

        ingredients: [
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 250, unit: "g" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 200, unit: "g" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 115, unit: "g" },
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 2, unit: "piece" },
            { name: { en: "Buttermilk", sq: "Dhallë" }, quantity: 180, unit: "ml" },
            { name: { en: "Cocoa powder", sq: "Kakao pluhur" }, quantity: 15, unit: "g" },
            { name: { en: "Red food coloring", sq: "Ngjyrues ushqimor i kuq" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Cream cheese", sq: "Djathë krem" }, quantity: 200, unit: "g" }
        ],

        steps: {
            en: [
                "Preheat the oven to 175°C.",
                "Mix the flour and cocoa powder in a bowl.",
                "Cream the butter and sugar, then add the eggs.",
                "Gradually mix in the dry ingredients and buttermilk.",
                "Add the red food coloring and mix until evenly combined.",
                "Pour the batter into a prepared cake pan and bake for about 40 minutes.",
                "Allow the cake to cool completely.",
                "Prepare the cream cheese frosting and spread it between the cake layers."
            ],
            sq: [
                "Ngroh furrën në 175°C.",
                "Përziej miellin dhe kakaon në një tas.",
                "Rrihe gjalpin me sheqerin, pastaj shto vezët.",
                "Shto gradualisht përbërësit e thatë dhe dhallën.",
                "Shto ngjyruesin e kuq dhe përzieje derisa ngjyra të jetë e njëtrajtshme.",
                "Hidhe brumin në një tavë torte të përgatitur dhe piqe për rreth 40 minuta.",
                "Lëre tortën të ftohet plotësisht.",
                "Përgatit kremin me djathë krem dhe lyeje mes shtresave të tortës."
            ]
        },

        tags: ["red velvet", "cake", "dessert", "cream cheese", "baking"]
    },

    {
        id: 5,
        title: { en: "Burek me Djathë", sq: "Burek me djathë" },
        description: {
            en: "Golden, flaky Albanian cheese pie made with crisp filo layers and a creamy white cheese filling.",
            sq: "Byrek shqiptar i artë dhe i shkrifët me petë filo krokante dhe mbushje kremoze me djathë të bardhë."
        },
        category: "lunch",
        image: "assets/images/recipe-burek.jpg",

        prepTime: 30,
        cookTime: 40,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Filo pastry sheets", sq: "Petë filo" }, quantity: 8, unit: "piece" },
            { name: { en: "White cheese (feta style), crumbled", sq: "Djathë i bardhë, i thërrmuar" }, quantity: 300, unit: "g" },
            { name: { en: "Cottage cheese", sq: "Gjizë" }, quantity: 200, unit: "g" },
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 3, unit: "piece" },
            { name: { en: "Plain yogurt", sq: "Kos" }, quantity: 150, unit: "g" },
            { name: { en: "Sunflower oil", sq: "Vaj luledielli" }, quantity: 80, unit: "ml" },
            { name: { en: "Sparkling water", sq: "Ujë me gaz" }, quantity: 100, unit: "ml" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
                "Preheat the oven to 190°C and grease a large round baking tray.",
                "In a bowl, mix the crumbled white cheese, cottage cheese, 1 egg and the black pepper into a smooth filling.",
                "In a second bowl, whisk the remaining 2 eggs with the yogurt, oil and sparkling water to make the brushing mixture.",
                "Lay one filo sheet on the counter, brush it with the mixture and spread a thin line of filling along the long edge.",
                "Roll the sheet into a long tube, then coil it into the center of the tray.",
                "Repeat with the remaining sheets, coiling each one around the previous roll to form a spiral.",
                "Pour any leftover brushing mixture over the top of the burek.",
                "Bake for 35-40 minutes until deep golden, then let it rest for 10 minutes before cutting."
            ],
            sq: [
                "Ngroh furrën në 190°C dhe lyej me yndyrë një tepsi të madhe të rrumbullakët.",
                "Në një tas, përziej djathin e bardhë, gjizën, 1 vezë dhe piperin e zi derisa të bëhet një mbushje e lëmuar.",
                "Në një tas tjetër, rrih 2 vezët e mbetura me kosin, vajin dhe ujin me gaz për të bërë përzierjen për lyerje.",
                "Shtro një petë filo në tavolinë, lyeje me përzierjen dhe vendos një vijë të hollë mbushjeje përgjatë anës së gjatë.",
                "Mbështille petën si një tub të gjatë, pastaj rrotulloje në qendër të tepsisë.",
                "Përsërite me petët e tjera, duke e mbështjellë secilën rreth asaj të mëparshme për të formuar një spirale.",
                "Hidh pjesën e mbetur të përzierjes sipër burekut.",
                "Piqe për 35-40 minuta derisa të marrë ngjyrë të artë të thellë, pastaj lëre të pushojë 10 minuta para se ta presësh."
            ]
        },

        tags: ["albanian", "burek", "cheese", "pie", "traditional", "vegetarian"]
    },

    {
        id: 6,
        title: { en: "Flija", sq: "Flija" },
        description: {
            en: "A traditional Albanian dish of many thin, creamy layers baked one at a time until golden and soft.",
            sq: "Një gatim tradicional shqiptar me shumë shtresa të holla e kremoze, të pjekura një nga një derisa të marrin ngjyrë të artë."
        },
        category: "dinner",
        image: "assets/images/recipe-flija.jpg",

        prepTime: 30,
        cookTime: 90,
        servings: 6,
        difficulty: "hard",

        ingredients: [
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 500, unit: "g" },
            { name: { en: "Water", sq: "Ujë" }, quantity: 600, unit: "ml" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Sour cream", sq: "Ajkë" }, quantity: 250, unit: "g" },
            { name: { en: "Plain yogurt", sq: "Kos" }, quantity: 200, unit: "g" },
            { name: { en: "Butter, melted", sq: "Gjalpë, i shkrirë" }, quantity: 100, unit: "g" }
        ],

        steps: {
            en: [
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
            sq: [
                "Ngroh furrën në 220°C. Vendos brenda një tavë të rrumbullakët e të thellë që të nxehet.",
                "Rrih miellin, ujin dhe kripën derisa të bëhet një brumë i lëmuar dhe i hollë, si brumi i krepave.",
                "Në një tas tjetër, përziej ajkën, kosin dhe gjalpin e shkrirë derisa të bëhet një krem për lyerje.",
                "Nxirre me kujdes tavën e nxehtë dhe lyeje me gjalpë. Hidh një shtresë të hollë brumi, aq sa të mbulojë fundin.",
                "Piqe për 3-4 minuta derisa shtresa të forcohet dhe të marrë pak ngjyrë.",
                "Lyeje mirë shtresën e pjekur me kremin, pastaj hidh sipër një shtresë tjetër të hollë brumi.",
                "Vazhdo të pjekësh, të lyesh dhe të shtosh shtresa derisa të mbarojë brumi, rreth 8-10 shtresa.",
                "Përfundo me një shtresë kremi sipër dhe piqe edhe 5 minuta.",
                "Lëre flijën të pushojë 10 minuta, pastaj prije në feta dhe shërbeje të ngrohtë me kos ose djathë të freskët."
            ]
        },

        tags: ["albanian", "flija", "traditional", "layered", "vegetarian", "kosovo"]
    },

    {
        id: 7,
        title: { en: "Pite me Spinaq", sq: "Pite me spinaq" },
        description: {
            en: "A homemade Albanian pie with layers of thin pastry, fresh spinach and white cheese.",
            sq: "Pite shtëpie shqiptare me shtresa petësh të holla, spinaq të freskët dhe djathë të bardhë."
        },
        category: "lunch",
        image: "assets/images/recipe-pite.jpg",

        prepTime: 25,
        cookTime: 40,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Filo pastry sheets", sq: "Petë filo" }, quantity: 8, unit: "piece" },
            { name: { en: "Fresh spinach, chopped", sq: "Spinaq i freskët, i grirë" }, quantity: 500, unit: "g" },
            { name: { en: "Onion, finely chopped", sq: "Qepë, e grirë imët" }, quantity: 1, unit: "piece" },
            { name: { en: "White cheese (feta style), crumbled", sq: "Djathë i bardhë, i thërrmuar" }, quantity: 200, unit: "g" },
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 3, unit: "piece" },
            { name: { en: "Plain yogurt", sq: "Kos" }, quantity: 150, unit: "g" },
            { name: { en: "Sunflower oil", sq: "Vaj luledielli" }, quantity: 100, unit: "ml" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
                "Preheat the oven to 190°C and grease a rectangular baking tray.",
                "Heat a little oil in a pan, cook the onion for 3 minutes, then add the spinach and cook until it wilts. Let it cool and squeeze out any extra liquid.",
                "Mix the spinach with the crumbled cheese, 1 egg, salt and pepper.",
                "Whisk the remaining 2 eggs with the yogurt and the rest of the oil.",
                "Place 3 filo sheets in the tray, brushing each one with the egg and yogurt mixture.",
                "Spread the spinach filling evenly over the top.",
                "Cover with the remaining filo sheets, brushing each layer, and pour any leftover mixture over the top.",
                "Bake for 35-40 minutes until golden and crisp. Rest for 10 minutes, then cut into squares."
            ],
            sq: [
                "Ngroh furrën në 190°C dhe lyej me yndyrë një tepsi drejtkëndëshe.",
                "Ngroh pak vaj në një tigan, gatuaj qepën për 3 minuta, pastaj shto spinaqin dhe gatuaje derisa të vyshket. Lëre të ftohet dhe shtrydhe lëngun e tepërt.",
                "Përziej spinaqin me djathin e thërrmuar, 1 vezë, kripën dhe piperin.",
                "Rrih 2 vezët e mbetura me kosin dhe pjesën tjetër të vajit.",
                "Vendos 3 petë filo në tepsi, duke e lyer secilën me përzierjen e vezëve dhe kosit.",
                "Shpërndaje mbushjen me spinaq në mënyrë të barabartë sipër.",
                "Mbuloje me petët e mbetura, duke lyer çdo shtresë, dhe hidh sipër përzierjen që ka mbetur.",
                "Piqe për 35-40 minuta derisa të marrë ngjyrë të artë dhe të bëhet krokante. Lëre të pushojë 10 minuta, pastaj prije në katrorë."
            ]
        },

        tags: ["albanian", "pite", "spinach", "pie", "traditional", "vegetarian", "spring"]
    },

    {
        id: 8,
        title: { en: "Baklava", sq: "Bakllavë" },
        description: {
            en: "Crispy layers of filo pastry filled with finely chopped pistachios and soaked in a traditional sweet sugar syrup.",
            sq: "Shtresa krokante petësh filo të mbushura me fëstëkë të grirë imët dhe të njomura në sherbet tradicional."
        },
        category: "desserts",
        image: "assets/images/recipe-baklava.jpg",

        prepTime: 40,
        cookTime: 50,
        servings: 12,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Filo pastry sheets", sq: "Petë filo" }, quantity: 20, unit: "piece" },
            { name: { en: "Walnuts, finely chopped", sq: "Arra, të grira imët" }, quantity: 200, unit: "g" },
            { name: { en: "Pistachios, finely chopped", sq: "Fëstëkë, të grirë imët" }, quantity: 200, unit: "g" },
            { name: { en: "Butter, melted", sq: "Gjalpë, i shkrirë" }, quantity: 200, unit: "g" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 400, unit: "g" },
            { name: { en: "Water", sq: "Ujë" }, quantity: 300, unit: "ml" }
        ],

        steps: {
            en: [
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
            sq: [
                "Ngroh furrën në 175°C dhe lyej një tepsi drejtkëndëshe me gjalpë të shkrirë.",
                "Grij imët arrat dhe fëstëkët, pastaj përzieji bashkë.",
                "Vendos 8 petë filo në tepsi, duke e lyer secilën me gjalpë të shkrirë.",
                "Shpërndaj gjysmën e përzierjes me arra në mënyrë të barabartë mbi petët.",
                "Shto edhe 4 petë, duke e lyer secilën me gjalpë, pastaj shpërndaj pjesën tjetër të përzierjes.",
                "Përfundo me petët e mbetura, duke e lyer secilën me gjalpë të shkrirë, përfshirë edhe të sipërmen.",
                "Prije bakllavën në romba ose katrorë para se ta pjekësh.",
                "Piqe për 45-50 minuta derisa të marrë ngjyrë të artë të thellë dhe të bëhet krokante.",
                "Bashko sheqerin dhe ujin në një tenxhere dhe lëri të ziejnë për 10-12 minuta derisa sherbeti të trashet pak.",
                "Lëre sherbetin të ftohet plotësisht.",
                "Hidh sherbetin e ftohtë në mënyrë të barabartë mbi bakllavën e nxehtë dhe lëre të thithë të paktën 4 orë para se ta shërbesh."
            ]
        },

        tags: ["albanian", "baklava", "dessert", "pistachios", "traditional", "sweet"]
    },

    {
        id: 9,
        title: { en: "Creamy Pumpkin Soup", sq: "Supë kremoze me kungull" },
        description: {
            en: "A smooth, warming pumpkin soup with a hint of nutmeg and a swirl of cream.",
            sq: "Një supë e lëmuar dhe ngrohëse me kungull, me pak arrëmyshk dhe një spirale kremi."
        },
        category: "lunch",
        image: "assets/images/seasonal-autumn.jpg",

        prepTime: 15,
        cookTime: 30,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Pumpkin, peeled and cubed", sq: "Kungull, i qëruar dhe i prerë në kubikë" }, quantity: 800, unit: "g" },
            { name: { en: "Onion, chopped", sq: "Qepë, e grirë" }, quantity: 1, unit: "piece" },
            { name: { en: "Garlic", sq: "Hudhër" }, quantity: 2, unit: "clove" },
            { name: { en: "Potato, peeled and cubed", sq: "Patate, e qëruar dhe e prerë në kubikë" }, quantity: 1, unit: "piece" },
            { name: { en: "Olive oil", sq: "Vaj ulliri" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Vegetable stock", sq: "Lëng perimesh" }, quantity: 750, unit: "ml" },
            { name: { en: "Heavy cream", sq: "Pana gatimi" }, quantity: 100, unit: "ml" },
            { name: { en: "Ground nutmeg", sq: "Arrëmyshk i bluar" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
                "Heat the olive oil in a large pot over medium heat.",
                "Add the onion and cook for 4-5 minutes until soft, then add the garlic and cook for 30 seconds.",
                "Add the pumpkin and potato and stir for 2 minutes.",
                "Pour in the vegetable stock, add the salt and pepper, and bring to a boil.",
                "Lower the heat, cover, and simmer for 20 minutes until the pumpkin is very tender.",
                "Blend the soup until completely smooth using an immersion blender.",
                "Stir in the cream and nutmeg, and heat gently for 2 minutes.",
                "Serve hot with a swirl of cream and toasted bread."
            ],
            sq: [
                "Ngroh vajin e ullirit në një tenxhere të madhe në zjarr mesatar.",
                "Shto qepën dhe gatuaje për 4-5 minuta derisa të zbutet, pastaj shto hudhrën dhe gatuaje për 30 sekonda.",
                "Shto kungullin dhe patatet dhe përziej për 2 minuta.",
                "Hidh lëngun e perimeve, shto kripën dhe piperin dhe lëre të vlojë.",
                "Ule zjarrin, mbuloje dhe lëre të ziejë ngadalë për 20 minuta derisa kungulli të zbutet plotësisht.",
                "Bluaje supën me një blender dore derisa të bëhet plotësisht e lëmuar.",
                "Shto panën dhe arrëmyshkun dhe ngroh lehtë për 2 minuta.",
                "Shërbeje të nxehtë me një spirale kremi dhe bukë të thekur."
            ]
        },

        tags: ["soup", "pumpkin", "creamy", "vegetarian", "comfort food", "autumn"]
    },

    {
        id: 10,
        title: { en: "Cheesy Mushroom Omelette", sq: "Omëletë me djathë dhe kërpudha" },
        description: {
            en: "A fluffy, golden omelette filled with melted cheese and sautéed mushrooms.",
            sq: "Një omëletë e butë dhe e artë e mbushur me djathë të shkrirë dhe kërpudha të skuqura."
        },
        category: "breakfast",
        image: "assets/images/recipe-omelette.jpg",

        prepTime: 5,
        cookTime: 7,
        servings: 1,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 3, unit: "piece" },
            { name: { en: "Milk", sq: "Qumësht" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Mushrooms, sliced", sq: "Kërpudha, të prera në feta" }, quantity: 50, unit: "g" },
            { name: { en: "Cheddar cheese, grated", sq: "Djathë çedar, i grirë" }, quantity: 40, unit: "g" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.25, unit: "tsp" }
        ],

        steps: {
            en: [
                "Crack the eggs into a bowl, add the milk, salt and pepper, and whisk until fully combined.",
                "Melt half of the butter in a non-stick pan over medium heat and cook the mushrooms for 3 minutes until golden. Move them to a plate.",
                "Add the remaining butter to the pan and pour in the egg mixture.",
                "Let the eggs set for 1-2 minutes, gently pushing the edges toward the center so the liquid runs underneath.",
                "When the top is almost set, sprinkle the cheese and mushrooms over one half.",
                "Fold the other half over the filling and cook for 1 more minute.",
                "Slide onto a plate and serve right away, with chives or parsley on top."
            ],
            sq: [
                "Thyej vezët në një tas, shto qumështin, kripën dhe piperin dhe rrihi derisa të përzihen mirë.",
                "Shkri gjysmën e gjalpit në një tigan që nuk ngjit në zjarr mesatar dhe gatuaj kërpudhat për 3 minuta derisa të marrin ngjyrë. Kaloji në një pjatë.",
                "Shto gjalpin e mbetur në tigan dhe hidh përzierjen e vezëve.",
                "Lëri vezët të forcohen për 1-2 minuta, duke shtyrë lehtë anët drejt qendrës që lëngu të rrjedhë poshtë.",
                "Kur pjesa e sipërme të jetë pothuajse e forcuar, hidh djathin dhe kërpudhat në njërën gjysmë.",
                "Palose gjysmën tjetër mbi mbushjen dhe gatuaje edhe 1 minutë.",
                "Kaloje në një pjatë dhe shërbeje menjëherë, me qepujkë ose majdanoz sipër."
            ]
        },

        tags: ["omelette", "eggs", "breakfast", "cheese", "quick", "vegetarian"]
    },

    {
        id: 11,
        title: { en: "Chicken Curry", sq: "Curry me pulë" },
        description: {
            en: "Tender chicken simmered in a creamy curry sauce, served with fluffy rice.",
            sq: "Pulë e butë e zier në salcë kremoze curry, e shërbyer me oriz të shkrifët."
        },
        category: "dinner",
        image: "assets/images/recipe-curry.jpg",
        popular: true,

        prepTime: 15,
        cookTime: 30,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Chicken breast, cubed", sq: "Gjoks pule, i prerë në kubikë" }, quantity: 500, unit: "g" },
            { name: { en: "Onion, finely chopped", sq: "Qepë, e grirë imët" }, quantity: 1, unit: "piece" },
            { name: { en: "Garlic", sq: "Hudhër" }, quantity: 3, unit: "clove" },
            { name: { en: "Fresh ginger, grated", sq: "Xhenxhefil i freskët, i grirë" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Curry powder", sq: "Curry pluhur" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Coconut milk", sq: "Qumësht kokosi" }, quantity: 400, unit: "ml" },
            { name: { en: "Crushed tomatoes", sq: "Domate të shtypura" }, quantity: 200, unit: "g" },
            { name: { en: "Vegetable oil", sq: "Vaj" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Rice", sq: "Oriz" }, quantity: 200, unit: "g" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" }
        ],

        steps: {
            en: [
                "Cook the rice according to the package instructions and keep it warm.",
                "Heat the oil in a large pan over medium heat and cook the onion for 5 minutes until soft.",
                "Add the garlic, ginger and curry powder and stir for 1 minute until fragrant.",
                "Add the chicken and cook for 5 minutes, stirring, until it turns white on the outside.",
                "Pour in the crushed tomatoes and coconut milk, add the salt, and stir well.",
                "Simmer on low heat for 15-20 minutes until the chicken is cooked through and the sauce has thickened.",
                "Serve hot over the rice with fresh parsley."
            ],
            sq: [
                "Ziej orizin sipas udhëzimeve në paketim dhe mbaje të ngrohtë.",
                "Ngroh vajin në një tigan të madh në zjarr mesatar dhe gatuaj qepën për 5 minuta derisa të zbutet.",
                "Shto hudhrën, xhenxhefilin dhe curry-n dhe përziej për 1 minutë derisa të marrë aromë.",
                "Shto pulën dhe gatuaje për 5 minuta, duke e përzier, derisa të zbardhet nga jashtë.",
                "Hidh domatet e shtypura dhe qumështin e kokosit, shto kripën dhe përziej mirë.",
                "Lëre të ziejë në zjarr të ulët për 15-20 minuta derisa pula të piqet plotësisht dhe salca të trashet.",
                "Shërbeje të nxehtë mbi oriz me majdanoz të freskët."
            ]
        },

        tags: ["curry", "chicken", "coconut", "rice", "dinner", "comfort food", "winter"]
    },

    {
        id: 12,
        title: { en: "Chocolate Chip Cookies", sq: "Biskota me copëza çokollate" },
        description: {
            en: "Soft and chewy cookies with crisp golden edges and melty chocolate chips.",
            sq: "Biskota të buta me anë të arta krokante dhe copëza çokollate që shkrihen."
        },
        category: "desserts",
        image: "assets/images/recipe-cookies.jpeg",

        prepTime: 15,
        cookTime: 12,
        servings: 16,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Butter, softened", sq: "Gjalpë, i zbutur" }, quantity: 115, unit: "g" },
            { name: { en: "Brown sugar", sq: "Sheqer kaf" }, quantity: 100, unit: "g" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 50, unit: "g" },
            { name: { en: "Egg", sq: "Vezë" }, quantity: 1, unit: "piece" },
            { name: { en: "Vanilla extract", sq: "Ekstrakt vanilje" }, quantity: 1, unit: "tsp" },
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 190, unit: "g" },
            { name: { en: "Baking soda", sq: "Sodë buke" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Chocolate chips", sq: "Copëza çokollate" }, quantity: 150, unit: "g" }
        ],

        steps: {
            en: [
                "Preheat the oven to 175°C and line a baking tray with parchment paper.",
                "Beat the butter, brown sugar and sugar together until light and creamy.",
                "Add the egg and vanilla and mix until combined.",
                "In another bowl, mix the flour, baking soda and salt, then stir into the butter mixture.",
                "Fold in the chocolate chips.",
                "Scoop tablespoon-sized balls of dough onto the tray, leaving space between them.",
                "Bake for 10-12 minutes until the edges are golden but the centers are still soft.",
                "Let the cookies cool on the tray for 5 minutes before moving them to a rack."
            ],
            sq: [
                "Ngroh furrën në 175°C dhe shtro një tepsi me letër furre.",
                "Rrih gjalpin, sheqerin kaf dhe sheqerin derisa të bëhen të lehta dhe kremoze.",
                "Shto vezën dhe vaniljen dhe përziej derisa të bashkohen.",
                "Në një tas tjetër, përziej miellin, sodën e bukës dhe kripën, pastaj shtoji te përzierja me gjalpë.",
                "Shto copëzat e çokollatës duke i përzier lehtë.",
                "Vendos topa brumi sa një lugë gjelle në tepsi, duke lënë hapësirë mes tyre.",
                "Piqi për 10-12 minuta derisa anët të marrin ngjyrë të artë, por qendra të mbetet e butë.",
                "Lëri biskotat të ftohen në tepsi për 5 minuta para se t'i kalosh në një skarë."
            ]
        },

        tags: ["cookies", "chocolate", "dessert", "baking", "sweet", "classic"]
    },

    {
        id: 13,
        title: { en: "Cinnamon Rolls", sq: "Rolle me kanellë" },
        description: {
            en: "Soft, fluffy rolls swirled with cinnamon sugar and topped with a creamy cream cheese glaze.",
            sq: "Rolle të buta e të shkrifëta me sheqer e kanellë, të mbuluara me glazurë kremoze me krem djathi."
        },
        category: "desserts",
        image: "assets/images/recipe-cinnamon-rolls.jpg",
        popular: true,

        prepTime: 120,
        cookTime: 25,
        servings: 9,
        difficulty: "medium",

        ingredients: [
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 400, unit: "g" },
            { name: { en: "Warm milk", sq: "Qumësht i ngrohtë" }, quantity: 200, unit: "ml" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 50, unit: "g" },
            { name: { en: "Instant yeast", sq: "Maja e thatë" }, quantity: 7, unit: "g" },
            { name: { en: "Butter, melted", sq: "Gjalpë, i shkrirë" }, quantity: 60, unit: "g" },
            { name: { en: "Egg", sq: "Vezë" }, quantity: 1, unit: "piece" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Butter, softened (for filling)", sq: "Gjalpë, i zbutur (për mbushjen)" }, quantity: 60, unit: "g" },
            { name: { en: "Brown sugar", sq: "Sheqer kaf" }, quantity: 100, unit: "g" },
            { name: { en: "Ground cinnamon", sq: "Kanellë e bluar" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Cream cheese", sq: "Krem djathi" }, quantity: 100, unit: "g" },
            { name: { en: "Powdered sugar", sq: "Sheqer pluhur" }, quantity: 100, unit: "g" }
        ],

        steps: {
            en: [
                "Mix the warm milk, sugar and yeast in a bowl and let it sit for 10 minutes until foamy.",
                "Add the melted butter, egg, salt and flour, then knead for 8-10 minutes until the dough is soft and smooth.",
                "Cover the dough and let it rise in a warm place for about 1 hour, until doubled in size.",
                "Mix the brown sugar and cinnamon for the filling.",
                "Roll the dough into a large rectangle, spread it with the softened butter and sprinkle over the cinnamon sugar.",
                "Roll the dough up tightly from the long side and cut it into 9 equal rolls.",
                "Place the rolls in a greased baking dish, cover, and let them rise for 30 more minutes. Preheat the oven to 180°C.",
                "Bake for 22-25 minutes until golden brown.",
                "Beat the cream cheese with the powdered sugar until smooth, then spread it over the warm rolls."
            ],
            sq: [
                "Përziej qumështin e ngrohtë, sheqerin dhe majanë në një tas dhe lëri 10 minuta derisa të shkumojë.",
                "Shto gjalpin e shkrirë, vezën, kripën dhe miellin, pastaj gatuaje brumin për 8-10 minuta derisa të bëhet i butë dhe i lëmuar.",
                "Mbuloje brumin dhe lëre të vijë në një vend të ngrohtë për rreth 1 orë, derisa të dyfishohet.",
                "Përziej sheqerin kaf dhe kanellën për mbushjen.",
                "Hape brumin në një drejtkëndësh të madh, lyeje me gjalpin e zbutur dhe spërkat sipër sheqerin me kanellë.",
                "Mbështille brumin fort nga ana e gjatë dhe prije në 9 rolle të barabarta.",
                "Vendosi rollet në një tavë të lyer me yndyrë, mbuloji dhe lëri të vijnë edhe 30 minuta. Ngroh furrën në 180°C.",
                "Piqi për 22-25 minuta derisa të marrin ngjyrë kafe të artë.",
                "Rrih krem djathin me sheqerin pluhur derisa të bëhet i lëmuar, pastaj lyeji rollet e ngrohta."
            ]
        },

        tags: ["cinnamon rolls", "desserts", "baking", "sweet", "cream cheese", "comfort food", "winter"]
    },

    {
        id: 14,
        title: { en: "Breakfast Quesadillas", sq: "Quesadilla për mëngjes" },
        description: {
            en: "Crispy tortillas filled with fluffy scrambled eggs, melted cheese and peppers.",
            sq: "Tortilla krokante të mbushura me vezë të fërguara të buta, djathë të shkrirë dhe speca."
        },
        category: "breakfast",
        image: "assets/images/recipe-quesadillas.jpeg",

        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Large flour tortillas", sq: "Tortilla të mëdha" }, quantity: 2, unit: "piece" },
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 4, unit: "piece" },
            { name: { en: "Cheddar or mozzarella, grated", sq: "Çedar ose mocarela, e grirë" }, quantity: 100, unit: "g" },
            { name: { en: "Red bell pepper, diced", sq: "Spec i kuq, i prerë në kubikë" }, quantity: 0.5, unit: "piece" },
            { name: { en: "Spring onions, sliced", sq: "Qepë të njoma, të prera" }, quantity: 2, unit: "piece" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.25, unit: "tsp" }
        ],

        steps: {
            en: [
                "Whisk the eggs with the salt and pepper.",
                "Melt half of the butter in a pan over medium heat and cook the bell pepper for 2-3 minutes.",
                "Pour in the eggs and scramble gently until just set. Stir in the spring onions and move to a plate.",
                "Wipe the pan, then place one tortilla in it and sprinkle cheese over one half.",
                "Add half of the scrambled eggs on top of the cheese, then sprinkle with a little more cheese.",
                "Fold the tortilla in half and cook for 2 minutes on each side until golden and crispy.",
                "Repeat with the second tortilla, then cut into wedges and serve with salsa or sour cream."
            ],
            sq: [
                "Rrih vezët me kripën dhe piperin.",
                "Shkri gjysmën e gjalpit në një tigan në zjarr mesatar dhe gatuaj specin për 2-3 minuta.",
                "Hidh vezët dhe përziej lehtë derisa të forcohen. Shto qepët e njoma dhe kaloji në një pjatë.",
                "Fshije tiganin, pastaj vendos një tortilla në të dhe spërkat djathë në njërën gjysmë.",
                "Shto gjysmën e vezëve sipër djathit, pastaj spërkat edhe pak djathë.",
                "Palose tortillan përgjysmë dhe gatuaje për 2 minuta nga secila anë derisa të marrë ngjyrë dhe të bëhet krokante.",
                "Përsërite me tortillan e dytë, pastaj prije në feta dhe shërbeje me salsa ose ajkë."
            ]
        },

        tags: ["quesadilla", "eggs", "breakfast", "cheese", "quick", "tex-mex"]
    },

    {
        id: 15,
        title: { en: "Classic Lasagna", sq: "Lazanja klasike" },
        description: {
            en: "Layers of pasta, rich beef, creamy béchamel and melted mozzarella baked until bubbling.",
            sq: "Shtresa lazanje, mish viçi i pasur, beshamel kremoz dhe mocarela e shkrirë, të pjekura derisa të flluskojnë."
        },
        category: "dinner",
        image: "assets/images/category-dinner.jpg",
        popular: true,

        prepTime: 30,
        cookTime: 70,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Lasagna sheets", sq: "Fletë lazanje" }, quantity: 250, unit: "g" },
            { name: { en: "Ground beef", sq: "Mish viçi i grirë" }, quantity: 500, unit: "g" },
            { name: { en: "Onion, finely chopped", sq: "Qepë, e grirë imët" }, quantity: 1, unit: "piece" },
            { name: { en: "Carrot, grated", sq: "Karrotë, e grirë" }, quantity: 1, unit: "piece" },
            { name: { en: "Garlic", sq: "Hudhër" }, quantity: 3, unit: "clove" },
            { name: { en: "Olive oil", sq: "Vaj ulliri" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Tomato paste", sq: "Pastë domatesh" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Crushed tomatoes", sq: "Domate të shtypura" }, quantity: 400, unit: "g" },
            { name: { en: "Dried oregano", sq: "Rigon i thatë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 50, unit: "g" },
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 50, unit: "g" },
            { name: { en: "Milk", sq: "Qumësht" }, quantity: 600, unit: "ml" },
            { name: { en: "Ground nutmeg", sq: "Arrëmyshk i bluar" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Mozzarella, grated", sq: "Mocarela, e grirë" }, quantity: 200, unit: "g" },
            { name: { en: "Parmesan, grated", sq: "Parmixhan, i grirë" }, quantity: 50, unit: "g" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1.5, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
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
            sq: [
                "Ngroh vajin e ullirit në një tigan të madh dhe gatuaj qepën dhe karrotën për 5 minuta derisa të zbuten. Shto hudhrën dhe gatuaje për 30 sekonda.",
                "Shto mishin e grirë dhe gatuaje derisa të skuqet, duke e shpërbërë gjatë gatimit.",
                "Përziej pastën e domates, domatet e shtypura, rigonin, 1 lugë çaji kripë dhe piperin. Lëre të ziejë për 25 minuta derisa të trashet.",
                "Për beshamelin, shkri gjalpin në një tenxhere, shto miellin dhe gatuaje për 1 minutë.",
                "Shto qumështin gradualisht duke e përzier dhe gatuaje për 8-10 minuta derisa të trashet. Shto arrëmyshkun dhe kripën e mbetur.",
                "Ngroh furrën në 190°C. Shtro pak salcë mishi në një tavë, pastaj shto një shtresë me fletë lazanje.",
                "Shto një shtresë salcë mishi, një shtresë beshamel dhe pak mocarela. Përsërit shtresat 3 herë.",
                "Përfundo me beshamel, mocarelën e mbetur dhe parmixhanin.",
                "Piqe për 35-40 minuta derisa të marrë ngjyrë të artë dhe të flluskojë, pastaj lëre të pushojë 10 minuta para se ta presësh."
            ]
        },

        tags: ["lasagna", "pasta", "beef", "italian", "dinner", "comfort food", "winter"]
    },

    {
        id: 16,
        title: { en: "Homemade Plum Jam", sq: "Reçel shtëpie me kumbulla" },
        description: {
            en: "A thick plum jam with a sweet flavor, perfect on toast, pancakes or petulla.",
            sq: "Reçel kumbullash i trashë me shije të ëmbël, i përsosur mbi bukë të thekur, pancake ose petulla."
        },
        category: "breakfast",
        image: "assets/images/recipe-plum-jam.jpg",

        prepTime: 20,
        cookTime: 45,
        servings: 20,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Ripe plums, pitted and chopped", sq: "Kumbulla të pjekura, pa bërthamë dhe të prera" }, quantity: 1000, unit: "g" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 500, unit: "g" },
            { name: { en: "Lemon juice", sq: "Lëng limoni" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Water", sq: "Ujë" }, quantity: 50, unit: "ml" }
        ],

        steps: {
            en: [
                "Wash and sterilize 3 to 4 small jars and their lids in boiling water, then let them dry.",
                "Put the plums, sugar, lemon juice and water in a wide, heavy pot and stir. Let it sit for 30 minutes so the plums release their juice.",
                "Bring to a boil over medium heat, stirring until the sugar dissolves.",
                "Reduce the heat and simmer for 35-40 minutes, stirring often and skimming off any foam.",
                "To test, drop a little jam on a cold plate. If it wrinkles when pushed with your finger, it's ready.",
                "Mash the plums with a spoon or potato masher for a smoother texture.",
                "Pour the hot jam into the sterilized jars, close the lids tightly and let them cool.",
                "Store in the fridge once opened."
            ],
            sq: [
                "Laji dhe sterilizoji 3 deri në 4 kavanoza të vegjël dhe kapakët e tyre në ujë të vluar, pastaj lëri të thahen.",
                "Vendos kumbullat, sheqerin, lëngun e limonit dhe ujin në një tenxhere të gjerë e të rëndë dhe përziej. Lëri 30 minuta që kumbullat të lëshojnë lëngun.",
                "Lëri të vlojnë në zjarr mesatar, duke i përzier derisa të tretet sheqeri.",
                "Ule zjarrin dhe lëre të ziejë ngadalë për 35-40 minuta, duke e përzier shpesh dhe duke hequr shkumën.",
                "Për ta provuar, hidh pak reçel në një pjatë të ftohtë. Nëse rrudhoset kur e shtyn me gisht, është gati.",
                "Shtypi kumbullat me një lugë ose shtypëse patatesh për një strukturë më të lëmuar.",
                "Hidh reçelin e nxehtë në kavanozat e sterilizuar, mbylli fort kapakët dhe lëri të ftohen.",
                "Pasi ta hapësh, ruaje në frigorifer."
            ]
        },

        tags: ["jam", "plum", "homemade", "preserves", "autumn"]
    },

    {
        id: 17,
        title: { en: "Apple Crumble Pie", sq: "Pite me mollë" },
        description: {
            en: "A buttery pie crust filled with cinnamon apples and topped with a golden crumble.",
            sq: "Brumë i shkrifët me gjalpë, i mbushur me mollë me kanellë dhe i mbuluar me kokrriza."
        },
        category: "desserts",
        image: "assets/images/recipe-apple-crumble-pie.png",

        prepTime: 40,
        cookTime: 50,
        servings: 8,
        difficulty: "medium",

        ingredients: [
            { name: { en: "All-purpose flour (crust)", sq: "Miell i bardhë (për brumin)" }, quantity: 200, unit: "g" },
            { name: { en: "Cold butter, cubed (crust)", sq: "Gjalpë i ftohtë, në kubikë (për brumin)" }, quantity: 100, unit: "g" },
            { name: { en: "Sugar (crust)", sq: "Sheqer (për brumin)" }, quantity: 30, unit: "g" },
            { name: { en: "Cold water", sq: "Ujë i ftohtë" }, quantity: 3, unit: "tbsp" },
            { name: { en: "Apples, peeled and sliced", sq: "Mollë, të qëruara dhe të prera në feta" }, quantity: 800, unit: "g" },
            { name: { en: "Sugar (filling)", sq: "Sheqer (për mbushjen)" }, quantity: 80, unit: "g" },
            { name: { en: "Ground cinnamon", sq: "Kanellë e bluar" }, quantity: 1, unit: "tsp" },
            { name: { en: "Lemon juice", sq: "Lëng limoni" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Cornstarch", sq: "Niseshte misri" }, quantity: 1, unit: "tbsp" },
            { name: { en: "All-purpose flour (crumble)", sq: "Miell i bardhë (për kokrrizat)" }, quantity: 120, unit: "g" },
            { name: { en: "Cold butter, cubed (crumble)", sq: "Gjalpë i ftohtë, në kubikë (për kokrrizat)" }, quantity: 80, unit: "g" },
            { name: { en: "Brown sugar", sq: "Sheqer kaf" }, quantity: 80, unit: "g" }
        ],

        steps: {
            en: [
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
            sq: [
                "Fërko miellin, gjalpin dhe sheqerin e brumit derisa të duken si thërrime buke. Shto ujin e ftohtë dhe bashkoje në një brumë.",
                "Mbështille brumin dhe vendose në frigorifer për 30 minuta.",
                "Ngroh furrën në 180°C. Hape brumin dhe shtroje në një tavë pite 24 cm. Shpoje fundin me pirun.",
                "Përziej mollët me sheqerin e mbushjes, kanellën, lëngun e limonit dhe niseshtenë.",
                "Hidh mollët në brumë me lugë.",
                "Për kokrrizat, fërko miellin, gjalpin e ftohtë dhe sheqerin kaf derisa të krijohen kokrriza të mëdha.",
                "Shpërndaji kokrrizat në mënyrë të barabartë mbi mollët.",
                "Piqe për 45-50 minuta derisa pjesa e sipërme të marrë ngjyrë të artë dhe mollët të zbuten.",
                "Lëre pitën të ftohet të paktën 30 minuta para se ta presësh. Shërbeje me akullore vanilje."
            ]
        },

        tags: ["apple", "pie", "crumble", "dessert", "baking", "autumn"]
    },

    {
        id: 18,
        title: { en: "Creamy Mushroom Risotto", sq: "Rizoto kremoze me kërpudha" },
        description: {
            en: "A comforting and creamy mushroom risotto made with tender rice, fresh mushrooms and melted parmesan cheese.",
            sq: "Një rizoto e ngrohtë dhe kremoze me kërpudha, e bërë me oriz të butë, kërpudha të freskëta dhe parmixhan të shkrirë."
        },
        category: "dinner",
        image: "assets/images/recipe-risotto.jpg",

        prepTime: 10,
        cookTime: 35,
        servings: 4,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Rice", sq: "Oriz" }, quantity: 300, unit: "g" },
            { name: { en: "Mushrooms, sliced", sq: "Kërpudha, të prera në feta" }, quantity: 250, unit: "g" },
            { name: { en: "Onion, finely chopped", sq: "Qepë, e grirë imët" }, quantity: 1, unit: "piece" },
            { name: { en: "Garlic", sq: "Hudhër" }, quantity: 2, unit: "clove" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 40, unit: "g" },
            { name: { en: "Olive oil", sq: "Vaj ulliri" }, quantity: 1, unit: "tbsp" },
            { name: { en: "White wine (optional)", sq: "Verë e bardhë (opsionale)" }, quantity: 100, unit: "ml" },
            { name: { en: "Hot vegetable or chicken stock", sq: "Lëng i nxehtë perimesh ose pule" }, quantity: 1000, unit: "ml" },
            { name: { en: "Parmesan, grated", sq: "Parmixhan, i grirë" }, quantity: 60, unit: "g" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
                "Keep the stock hot in a saucepan over low heat.",
                "Heat the olive oil and half of the butter in a wide pan and cook the mushrooms for 5-6 minutes until golden. Move them to a plate.",
                "In the same pan, cook the onion for 4 minutes until soft, then add the garlic for 30 seconds.",
                "Add the rice and stir for 1-2 minutes until the grains look slightly translucent at the edges.",
                "Pour in the wine, if using, and stir until it is absorbed.",
                "Add the hot stock one ladle at a time, stirring often and waiting until each ladle is absorbed before adding the next. This takes about 20 minutes.",
                "When the rice is creamy and tender but still slightly firm in the center, stir in the mushrooms, the remaining butter, the parmesan, salt and pepper.",
                "Rest for 2 minutes, then serve immediately with extra parmesan."
            ],
            sq: [
                "Mbaje lëngun të nxehtë në një tenxhere në zjarr të ulët.",
                "Ngroh vajin e ullirit dhe gjysmën e gjalpit në një tigan të gjerë dhe gatuaj kërpudhat për 5-6 minuta derisa të marrin ngjyrë. Kaloji në një pjatë.",
                "Në të njëjtin tigan, gatuaj qepën për 4 minuta derisa të zbutet, pastaj shto hudhrën për 30 sekonda.",
                "Shto orizin dhe përziej për 1-2 minuta derisa kokrrat të duken pak të tejdukshme në anë.",
                "Hidh verën, nëse e përdor, dhe përziej derisa të thithet.",
                "Shto lëngun e nxehtë nga një garuzhdë, duke përzier shpesh dhe duke pritur që çdo garuzhdë të thithet para se të shtosh tjetrën. Kjo zgjat rreth 20 minuta.",
                "Kur orizi të jetë kremoz dhe i butë, por ende pak i fortë në mes, shto kërpudhat, gjalpin e mbetur, parmixhanin, kripën dhe piperin.",
                "Lëre të pushojë 2 minuta, pastaj shërbeje menjëherë me parmixhan shtesë."
            ]
        },

        tags: ["risotto", "mushroom", "rice", "italian", "creamy", "dinner", "vegetarian", "autumn"]
    },

    {
        id: 19,
        title: { en: "Petulla", sq: "Petulla" },
        description: {
            en: "Traditional Albanian fried dough, crisp outside and fluffy inside, served with feta, jam or honey.",
            sq: "Brumë tradicional shqiptar i skuqur, krokant nga jashtë dhe i butë nga brenda, i shërbyer me djathë, reçel ose mjaltë."
        },
        category: "breakfast",
        image: "assets/images/recipe-petulla.jpeg",

        prepTime: 75,
        cookTime: 15,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 500, unit: "g" },
            { name: { en: "Warm milk", sq: "Qumësht i ngrohtë" }, quantity: 150, unit: "ml" },
            { name: { en: "Warm water", sq: "Ujë i ngrohtë" }, quantity: 200, unit: "ml" },
            { name: { en: "Instant yeast", sq: "Maja e thatë" }, quantity: 7, unit: "g" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 1, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Sunflower oil (for frying)", sq: "Vaj luledielli (për skuqje)" }, quantity: 500, unit: "ml" }
        ],

        steps: {
            en: [
                "Mix the warm milk, warm water, yeast and sugar and let it sit for 10 minutes until foamy.",
                "Add the flour and salt and mix into a soft, sticky dough.",
                "Cover the bowl and let the dough rise in a warm place for about 1 hour, until doubled.",
                "Heat the oil in a deep pan over medium heat. It's ready when a small piece of dough sizzles and rises right away.",
                "Wet your hands or use two oiled spoons, take a piece of dough about the size of a small egg, and gently stretch it into an oval.",
                "Fry 3 to 4 pieces at a time for 2-3 minutes per side until puffed and deep golden.",
                "Drain on paper towels and serve warm with crumbled feta, plum jam, honey or powdered sugar."
            ],
            sq: [
                "Përziej qumështin e ngrohtë, ujin e ngrohtë, majanë dhe sheqerin dhe lëri 10 minuta derisa të shkumojë.",
                "Shto miellin dhe kripën dhe përzieji derisa të bëhet një brumë i butë dhe ngjitës.",
                "Mbuloje tasin dhe lëre brumin të vijë në një vend të ngrohtë për rreth 1 orë, derisa të dyfishohet.",
                "Ngroh vajin në një tigan të thellë në zjarr mesatar. Është gati kur një copë e vogël brumi cicëron dhe ngrihet menjëherë.",
                "Lagi duart ose përdor dy lugë të lyera me vaj, merr një copë brumi sa një vezë e vogël dhe tërhiqe lehtë në formë ovale.",
                "Skuq 3 deri në 4 copë njëherësh për 2-3 minuta nga secila anë derisa të fryhen dhe të marrin ngjyrë të artë të thellë.",
                "Kulloji në letër kuzhine dhe shërbeji të ngrohta me djathë të thërrmuar, reçel kumbulle, mjaltë ose sheqer pluhur."
            ]
        },

        tags: ["albanian", "petulla", "fried dough", "traditional", "breakfast", "vegetarian"]
    },

    {
        id: 20,
        title: { en: "Tiramisu", sq: "Tiramisu" },
        description: {
            en: "Layers of soft coffee-dipped biscuits and creamy mascarpone filling, finished with a dusting of cocoa powder.",
            sq: "Shtresa biskotash të buta të zhytura në kafe dhe krem mascarpone, të përfunduara me pak kakao pluhur."
        },
        category: "desserts",
        image: "assets/images/category-desserts.jpg",
        popular: true,

        prepTime: 25,
        cookTime: 0,
        servings: 6,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Ladyfinger biscuits", sq: "Biskota ladyfinger" }, quantity: 200, unit: "g" },
            { name: { en: "Mascarpone cheese", sq: "Djathë mascarpone" }, quantity: 250, unit: "g" },
            { name: { en: "Heavy whipping cream", sq: "Pana për rrahje" }, quantity: 200, unit: "ml" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 70, unit: "g" },
            { name: { en: "Strong brewed coffee, cooled", sq: "Kafe e fortë, e ftohur" }, quantity: 200, unit: "ml" },
            { name: { en: "Vanilla extract", sq: "Ekstrakt vanilje" }, quantity: 1, unit: "tsp" },
            { name: { en: "Cocoa powder", sq: "Kakao pluhur" }, quantity: 2, unit: "tbsp" }
        ],

        steps: {
            en: [
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
            sq: [
                "Përgatit kafen dhe lëre të ftohet plotësisht.",
                "Në një tas të madh, rrih panën me sheqerin dhe ekstraktin e vaniljes derisa të krijohen maja të buta.",
                "Në një tas tjetër, përziej lehtë mascarponen derisa të bëhet e lëmuar.",
                "Shto panën e rrahur te mascarponeja duke e përzier lehtë derisa të bëhet kremoze.",
                "Zhyt shpejt çdo biskotë në kafen e ftohur dhe renditi në një shtresë në fund të një tave.",
                "Shpërndaj gjysmën e kremit me mascarpone në mënyrë të barabartë mbi biskotat.",
                "Shto një shtresë tjetër biskotash të zhytura në kafe, pastaj pjesën tjetër të kremit.",
                "Lëmoje pjesën e sipërme dhe mbuloje tavën.",
                "Vendose në frigorifer për të paktën 6 orë, mundësisht gjithë natën.",
                "Spërkate me kakao pluhur pak para se ta shërbesh."
            ]
        },

        tags: ["tiramisu", "italian", "dessert", "coffee", "mascarpone", "no-bake", "sweet"]
    },

    {
        id: 21,
        title: { en: "Scrambled Eggs with Avocado Toast", sq: "Vezë të fërguara me bukë të thekur dhe avokado" },
        description: {
            en: "Soft and fluffy scrambled eggs served with toasted bread and avocado for a simple breakfast.",
            sq: "Vezë të fërguara e të buta, të shërbyera me bukë të thekur dhe avokado për një mëngjes të thjeshtë."
        },
        category: "breakfast",
        image: "assets/images/recipe-avocado-toast.jpeg",

        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 4, unit: "piece" },
            { name: { en: "Milk", sq: "Qumësht" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 15, unit: "g" },
            { name: { en: "Bread slices", sq: "Feta buke" }, quantity: 2, unit: "piece" },
            { name: { en: "Ripe avocado", sq: "Avokado e pjekur" }, quantity: 1, unit: "piece" },
            { name: { en: "Lemon juice", sq: "Lëng limoni" }, quantity: 1, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Chili flakes (optional)", sq: "Spec djegës i thatë (opsional)" }, quantity: 1, unit: "pinch" }
        ],

        steps: {
            en: [
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
            sq: [
                "Prije avokadon përgjysmë, hiq bërthamën dhe nxirre tulin në një tas të vogël.",
                "Shtype avokadon me lëng limoni, kripë dhe piper të zi derisa të bëhet kremoze.",
                "Në një tas, rrih vezët me qumësht, kripë dhe piper.",
                "Shkri gjalpin në një tigan që nuk ngjit në zjarr të ulët.",
                "Hidh përzierjen e vezëve dhe përziej lehtë me një shpatull derisa të bëhen të buta. Hiqi nga zjarri sa janë ende pak kremoze.",
                "Thek fetat e bukës derisa të marrin ngjyrë të artë dhe të bëhen krokante.",
                "Lyej avokadon e shtypur mbi secilën fetë buke.",
                "Shërbeji vezët sipër ose anash.",
                "Përfundo me pak spec djegës nëse dëshiron."
            ]
        },

        tags: ["breakfast", "eggs", "avocado", "toast", "quick", "easy", "vegetarian"]
    },

    {
        id: 22,
        title: { en: "Chicken Caesar Wrap", sq: "Wrap Cezar me pulë" },
        description: {
            en: "Tender chicken, crisp lettuce, parmesan cheese and creamy Caesar dressing wrapped in a soft tortilla for a quick and delicious meal.",
            sq: "Pulë e butë, sallatë jeshile krokante, parmixhan dhe salcë kremoze Cezar, të mbështjella në një tortilla të butë për një vakt të shpejtë dhe të shijshëm."
        },
        category: "lunch",
        image: "assets/images/recipe-caesar-wrap.jpg",
        popular: true,

        prepTime: 15,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Chicken breast", sq: "Gjoks pule" }, quantity: 250, unit: "g" },
            { name: { en: "Flour tortillas", sq: "Tortilla" }, quantity: 2, unit: "piece" },
            { name: { en: "Romaine lettuce, chopped", sq: "Sallatë jeshile romane, e grirë" }, quantity: 100, unit: "g" },
            { name: { en: "Parmesan cheese, grated", sq: "Parmixhan, i grirë" }, quantity: 40, unit: "g" },
            { name: { en: "Caesar dressing", sq: "Salcë Cezar" }, quantity: 4, unit: "tbsp" },
            { name: { en: "Olive oil", sq: "Vaj ulliri" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Garlic powder", sq: "Hudhër pluhur" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Paprika", sq: "Paprikë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.25, unit: "tsp" }
        ],

        steps: {
            en: [
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
            sq: [
                "Kaliti gjoksin e pulës me hudhër pluhur, paprikë, kripë dhe piper të zi.",
                "Ngroh vajin e ullirit në një tigan në zjarr mesatar.",
                "Gatuaje pulën për 5-6 minuta nga secila anë, derisa të piqet plotësisht. Lëre të pushojë pak, pastaj prije në rripa.",
                "Në një tas, bashko sallatën e grirë, parmixhanin dhe salcën Cezar.",
                "Ngroh tortillat në një tigan të thatë për disa sekonda derisa të zbuten dhe të përkulen lehtë.",
                "Ndaje përzierjen e sallatës mes tortillave dhe shto pulën e prerë.",
                "Palos anët e çdo tortille dhe mbështille fort.",
                "Vendosi wrap-et me anën e mbyllur poshtë në një tigan dhe thekji për 1-2 minuta nga secila anë derisa të marrin pak ngjyrë.",
                "Prije përgjysmë dhe shërbeje menjëherë."
            ]
        },

        tags: ["chicken", "caesar", "wrap", "lunch", "quick", "easy", "parmesan", "summer"]
    },

    {
        id: 23,
        title: { en: "Shortbread Lemon Tart", sq: "Tartë me limon" },
        description: {
            en: "A buttery almond shortbread crust filled with a bright lemon and orange filling.",
            sq: "Brumë i shkrifët me bajame dhe gjalpë, i mbushur me krem të freskët me limon dhe portokall."
        },
        category: "desserts",
        image: "assets/images/recipe-lemon-tart.jpg",

        prepTime: 20,
        cookTime: 30,
        servings: 10,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Eggs", sq: "Vezë" }, quantity: 3, unit: "piece" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 250, unit: "g" },
            { name: { en: "Lemon juice", sq: "Lëng limoni" }, quantity: 60, unit: "ml" },
            { name: { en: "Orange zest, grated (filling)", sq: "Lëkurë portokalli e grirë (për mbushjen)" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Butter, melted", sq: "Gjalpë, i shkrirë" }, quantity: 55, unit: "g" },
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 125, unit: "g" },
            { name: { en: "Powdered sugar (crust)", sq: "Sheqer pluhur (për brumin)" }, quantity: 40, unit: "g" },
            { name: { en: "Ground almonds", sq: "Bajame të bluara" }, quantity: 50, unit: "g" },
            { name: { en: "Lemon zest, grated", sq: "Lëkurë limoni e grirë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Orange zest, grated (crust)", sq: "Lëkurë portokalli e grirë (për brumin)" }, quantity: 1, unit: "tsp" },
            { name: { en: "Cold butter, cubed", sq: "Gjalpë i ftohtë, në kubikë" }, quantity: 115, unit: "g" },
            { name: { en: "Powdered sugar (for dusting)", sq: "Sheqer pluhur (për zbukurim)" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Fresh raspberries (optional)", sq: "Mjedra të freskëta (opsionale)" }, quantity: 100, unit: "g" }
        ],

        steps: {
            en: [
                "Take the eggs out of the fridge about 30 minutes before you start, so they come to room temperature.",
                "Preheat the oven to 175°C.",
                "For the filling, whisk the eggs, sugar, lemon juice and orange zest together, then stir in the melted butter until smooth.",
                "For the crust, pulse the flour, powdered sugar, ground almonds, lemon zest, orange zest and cold butter in a food processor until the dough comes together into a ball.",
                "Press the dough evenly over the base and up the sides of a 23 cm tart pan with a removable bottom.",
                "Pour the filling into the crust and bake for 25-30 minutes, until the center is almost set.",
                "Let the tart cool completely on a wire rack.",
                "Dust with powdered sugar just before serving and top with raspberries if you like."
            ],
            sq: [
                "Nxirri vezët nga frigoriferi rreth 30 minuta para se të fillosh, që të arrijnë temperaturën e dhomës.",
                "Ngroh furrën në 175°C.",
                "Për mbushjen, rrih vezët, sheqerin, lëngun e limonit dhe lëkurën e portokallit, pastaj shto gjalpin e shkrirë dhe përziej derisa të bëhet e lëmuar.",
                "Për brumin, bluaj në robot kuzhine miellin, sheqerin pluhur, bajamet, lëkurën e limonit, lëkurën e portokallit dhe gjalpin e ftohtë derisa brumi të bashkohet në një top.",
                "Shtype brumin në mënyrë të barabartë në fund dhe në anët e një tave tarte 23 cm me fund që hiqet.",
                "Hidh mbushjen në brumë dhe piqe për 25-30 minuta, derisa qendra të jetë pothuajse e forcuar.",
                "Lëre tartën të ftohet plotësisht mbi një skarë.",
                "Spërkate me sheqer pluhur pak para se ta shërbesh dhe shto mjedra sipër nëse dëshiron."
            ]
        },

        tags: ["lemon", "tart", "dessert", "baking", "sweet", "spring"]
    },

    {
        id: 24,
        title: { en: "Braised Chicken with Carrots and Lemon", sq: "Kofshë pule me karrota dhe limon" },
        description: {
            en: "Golden chicken thighs braised with sweet carrots, thyme and fresh lemon in a rich pan sauce.",
            sq: "Kofshë pule të arta, të ziera ngadalë me karrota të ëmbla, trumzë dhe limon të freskët në një salcë të pasur."
        },
        category: "dinner",
        image: "assets/images/recipe-braised-chicken.jpg", 

        prepTime: 10,
        cookTime: 35,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Bone-in, skin-on chicken thighs", sq: "Kofshë pule me kockë dhe lëkurë" }, quantity: 8, unit: "piece" },
            { name: { en: "Paprika", sq: "Paprikë" }, quantity: 2, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 1, unit: "tsp" },
            { name: { en: "Butter", sq: "Gjalpë" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Large carrots, cut into chunks", sq: "Karrota të mëdha, të prera në copa" }, quantity: 450, unit: "g" },
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 2.5, unit: "tbsp" },
            { name: { en: "Chicken stock", sq: "Lëng pule" }, quantity: 480, unit: "ml" },
            { name: { en: "Fresh thyme sprigs", sq: "Degë trumze të freskët" }, quantity: 4, unit: "piece" },
            { name: { en: "Lemon, sliced", sq: "Limon, i prerë në feta" }, quantity: 1, unit: "piece" },
            { name: { en: "Mashed potatoes, to serve (optional)", sq: "Pure patatesh, për ta shërbyer (opsionale)" }, quantity: 700, unit: "g" }
        ],

        steps: {
            en: [
                "Pat the chicken thighs dry and season them all over with the paprika and most of the salt and pepper (keep about a quarter of each for later).",
                "Melt the butter in a large heavy pan with a lid over medium-high heat. Brown the chicken skin side down in two batches, about 6 minutes per batch, until golden. Set it aside.",
                "Add the carrots to the same pan and cook for about 7 minutes, stirring now and then, until they start to brown.",
                "Sprinkle the flour over the carrots and stir for 1 minute, then pour in the stock, add the thyme and the rest of the salt and pepper, and bring to a boil.",
                "Put the chicken back on top of the carrots, skin side up. Partly cover the pan, lower the heat to medium-low and cook for about 20 minutes, until the chicken is cooked through.",
                "Remove the thyme sprigs, stir in the lemon slices and serve, over mashed potatoes if you like."
            ],
            sq: [
                "Thaji kofshët e pulës me letër kuzhine dhe kaliti nga të gjitha anët me paprikën dhe pjesën më të madhe të kripës dhe piperit (ruaj rreth një të katërtën për më vonë).",
                "Shkri gjalpin në një tenxhere të rëndë me kapak në zjarr mesatar-të lartë. Skuq pulën me lëkurën poshtë në dy tufa, rreth 6 minuta secila, derisa të marrë ngjyrë të artë. Lëre mënjanë.",
                "Shto karrotat në të njëjtën tenxhere dhe gatuaji për rreth 7 minuta, duke i përzier herë pas here, derisa të fillojnë të skuqen.",
                "Spërkat miellin mbi karrotat dhe përziej për 1 minutë, pastaj hidh lëngun e pulës, shto trumzën dhe pjesën tjetër të kripës dhe piperit dhe lëre të vlojë.",
                "Vendose pulën përsëri mbi karrotat, me lëkurën lart. Mbuloje pjesërisht tenxheren, ule zjarrin në mesatar-të ulët dhe gatuaje për rreth 20 minuta, derisa pula të piqet plotësisht.",
                "Hiq degët e trumzës, shto fetat e limonit dhe shërbeje, mbi pure patatesh nëse dëshiron."
            ]
        },

        tags: ["chicken", "lemon", "carrots", "dinner", "comfort food", "spring"]
    },

    {
        id: 25,
        title: { en: "Spring Vegetable Soup", sq: "Supë me perime pranverore" },
        description: {
            en: "A light, creamy soup of leeks, asparagus, carrots and potatoes, the best of spring vegetables.",
            sq: "Një supë e lehtë dhe kremoze me presh, asparagus, karrota dhe patate, më të mirat e perimeve të pranverës."
        },
        category: "lunch",
        image: "assets/images/recipe-spring-soup.jpg", 

        prepTime: 10,
        cookTime: 25,
        servings: 6,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Olive oil or butter", sq: "Vaj ulliri ose gjalpë" }, quantity: 60, unit: "ml" },
            { name: { en: "Leeks, thinly sliced", sq: "Presh, i prerë në feta të holla" }, quantity: 2, unit: "piece" },
            { name: { en: "Garlic, minced", sq: "Hudhër, e grimcuar" }, quantity: 2, unit: "tsp" },
            { name: { en: "Large potatoes, cubed", sq: "Patate të mëdha, të prera në kubikë" }, quantity: 2, unit: "piece" },
            { name: { en: "Large carrots, chopped", sq: "Karrota të mëdha, të prera" }, quantity: 2, unit: "piece" },
            { name: { en: "Asparagus, cut into pieces", sq: "Asparagus, i prerë në copa" }, quantity: 225, unit: "g" },
            { name: { en: "Vegetable or chicken stock", sq: "Lëng perimesh ose pule" }, quantity: 1500, unit: "ml" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 1, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" }
        ],

        steps: {
            en: [
                "Warm the olive oil (or melt the butter) in a large pot over medium heat.",
                "Turn the heat down, add the leeks and garlic and cook for about 5 minutes, until the leeks are soft.",
                "Add the potatoes, carrots, asparagus and most of the stock.",
                "Simmer uncovered for about 20 minutes, until all the vegetables are tender.",
                "Blend the soup with an immersion blender until smooth, adding the rest of the stock if you'd like it thinner.",
                "Season with salt and pepper and serve warm."
            ],
            sq: [
                "Ngroh vajin e ullirit (ose shkri gjalpin) në një tenxhere të madhe në zjarr mesatar.",
                "Ule zjarrin, shto preshin dhe hudhrën dhe gatuaji për rreth 5 minuta, derisa preshi të zbutet.",
                "Shto patatet, karrotat, asparagusin dhe pjesën më të madhe të lëngut.",
                "Lëre të ziejë pa kapak për rreth 20 minuta, derisa të gjitha perimet të zbuten.",
                "Bluaje supën me një blender dore derisa të bëhet e lëmuar, duke shtuar pjesën tjetër të lëngut nëse e dëshiron më të hollë.",
                "Shto kripë dhe piper dhe shërbeje të ngrohtë."
            ]
        },

        tags: ["soup", "vegetables", "asparagus", "leek", "vegetarian", "healthy", "spring"]
    },

    {
        id: 26,
        title: { en: "Tomato Tea Sandwiches", sq: "Sanduiçe të vogla me domate" },
        description: {
            en: "Crisp toasted sandwiches with herbed cream cheese, juicy tomato and red onion, perfect for a spring afternoon.",
            sq: "Sanduiçe të thekura me krem djathi me erëza, domate të lëngshme dhe qepë të kuqe, të përsosura për një pasdite pranvere."
        },
        category: "lunch",
        image: "assets/images/recipe-tomato-sandwiches.jpg", 

        prepTime: 25,
        cookTime: 0,
        servings: 6,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Cream cheese, softened", sq: "Krem djathi, i zbutur" }, quantity: 90, unit: "g" },
            { name: { en: "Fresh chives or dill, finely chopped", sq: "Qepujkë ose kopër, e grirë imët" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.75, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.75, unit: "tsp" },
            { name: { en: "Thin white bread slices", sq: "Feta të holla buke të bardhë" }, quantity: 12, unit: "piece" },
            { name: { en: "Large tomato", sq: "Domate e madhe" }, quantity: 1, unit: "piece" },
            { name: { en: "Red onion, thinly sliced", sq: "Qepë e kuqe, e prerë hollë" }, quantity: 1, unit: "piece" }
        ],

        steps: {
            en: [
                "Toast the bread slices lightly and let them cool.",
                "Mix the cream cheese, herbs, pepper and two-thirds of the salt in a small bowl until smooth.",
                "Spread a thin layer of the mixture on one side of every slice of toast.",
                "Cut the tomato into 6 slices. Lay one tomato slice and a small handful of onion on 6 of the toasts, then sprinkle with the remaining salt.",
                "Close the sandwiches with the other 6 slices, cut each one in half and serve right away."
            ],
            sq: [
                "Thek lehtë fetat e bukës dhe lëri të ftohen.",
                "Përziej kremin e djathit, erëzat, piperin dhe dy të tretat e kripës në një tas të vogël derisa të bëhet i lëmuar.",
                "Lyej një shtresë të hollë nga përzierja në njërën anë të çdo fete buke.",
                "Prije domaten në 6 feta. Vendos një fetë domate dhe pak qepë mbi 6 feta buke, pastaj spërkat kripën e mbetur.",
                "Mbyll sanduiçet me 6 fetat e tjera, prije secilin përgjysmë dhe shërbeji menjëherë."
            ]
        },

        tags: ["sandwich", "tomato", "lunch", "quick", "vegetarian", "spring"]
    },

    {
        id: 27,
        title: { en: "Salmon and Potato Salad", sq: "Salmon dhe sallatë me patate" },
        description: {
            en: "Grilled salmon with tender potatoes, green beans, asparagus and fresh greens in a light vinaigrette.",
            sq: "Salmon i pjekur në skarë me patate të buta, fasule të njoma, asparagus dhe zarzavate të freskëta me salcë të lehtë."
        },
        category: "lunch",
        image: "assets/images/recipe-salmon-salad.jpg", 

        prepTime: 15,
        cookTime: 15,
        servings: 4,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Small potatoes", sq: "Patate të vogla" }, quantity: 450, unit: "g" },
            { name: { en: "Green beans", sq: "Fasule të njoma" }, quantity: 225, unit: "g" },
            { name: { en: "Asparagus", sq: "Asparagus" }, quantity: 225, unit: "g" },
            { name: { en: "Salmon fillets", sq: "Fileto salmoni" }, quantity: 4, unit: "piece" },
            { name: { en: "Red wine vinaigrette", sq: "Salcë vinegrete me uthull vere" }, quantity: 95, unit: "ml" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Arugula or baby spinach", sq: "Rukola ose spinaq i ri" }, quantity: 120, unit: "g" },
            { name: { en: "Cherry tomatoes, halved", sq: "Domate qershi, të prera përgjysmë" }, quantity: 300, unit: "g" },
            { name: { en: "Fresh chives, chopped", sq: "Qepujkë e freskët, e grirë" }, quantity: 1, unit: "tbsp" }
        ],

        steps: {
            en: [
                "Halve the potatoes lengthwise. Trim the green beans and asparagus and cut them into 5 cm pieces.",
                "Put the potatoes in a large pot, cover with water and bring to a boil. Lower the heat and simmer for 10-15 minutes until tender, adding the green beans and asparagus for the last 4 minutes. Drain.",
                "Brush the salmon with 1 tablespoon of the vinaigrette and season with the salt and pepper.",
                "Grill or broil the salmon skin side down over medium-high heat for 6-8 minutes, until it just starts to flake with a fork.",
                "In a large bowl, toss the potatoes and vegetables with the arugula, tomatoes and chives, then drizzle with the rest of the vinaigrette.",
                "Serve the salad with the salmon on top or alongside."
            ],
            sq: [
                "Prij patatet përgjysmë për së gjati. Pastro fasulet dhe asparagusin dhe prij në copa 5 cm.",
                "Vendos patatet në një tenxhere të madhe, mbuloji me ujë dhe lëri të vlojnë. Ule zjarrin dhe ziej për 10-15 minuta derisa të zbuten, duke shtuar fasulet dhe asparagusin në 4 minutat e fundit. Kulloji.",
                "Lyej salmonin me 1 lugë gjelle nga salca dhe kalite me kripë dhe piper.",
                "Piqe salmonin në skarë ose në grilin e furrës, me lëkurën poshtë, në zjarr mesatar-të lartë për 6-8 minuta, derisa të fillojë të shpërbëhet me pirun.",
                "Në një tas të madh, përziej patatet dhe perimet me rukolën, domatet dhe qepujkën, pastaj hidh sipër pjesën tjetër të salcës.",
                "Shërbeje sallatën me salmonin sipër ose anash."
            ]
        },

        tags: ["salmon", "fish", "salad", "potatoes", "lunch", "healthy", "summer"]
    },

    {
        id: 28,
        title: { en: "Frozen Berry & Yogurt Swirls", sq: "Akullore me jogurt dhe fruta pylli" },
        description: {
            en: "Creamy frozen yogurt pops swirled with fresh berries, a cool and light summer treat.",
            sq: "Akullore kremoze me jogurt të ngrirë dhe fruta pylli të freskëta, një ëmbëlsirë e freskët dhe e lehtë për verën."
        },
        category: "desserts",
        image: "assets/images/recipe-yogurt-swirls.jpg", 

        prepTime: 15,
        cookTime: 0,
        servings: 10,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Honey Greek yogurt", sq: "Jogurt grek me mjaltë" }, quantity: 650, unit: "g" },
            { name: { en: "Mixed fresh berries", sq: "Fruta pylli të freskëta të përziera" }, quantity: 150, unit: "g" },
            { name: { en: "Water", sq: "Ujë" }, quantity: 60, unit: "ml" },
            { name: { en: "Sugar", sq: "Sheqer" }, quantity: 2, unit: "tbsp" }
        ],

        steps: {
            en: [
                "Set out 10 small paper or plastic cups (about 90 ml each) and fill each one with about 60 ml of yogurt.",
                "Pulse the berries, water and sugar in a food processor until the berries are finely chopped.",
                "Spoon about 1½ tablespoons of the berry mixture into each cup and swirl it gently into the yogurt with a wooden stick.",
                "Cover each cup with foil and push a wooden stick through the foil into the center.",
                "Freeze for at least 4 hours, until firm. Peel off the cups to serve."
            ],
            sq: [
                "Përgatit 10 gota të vogla letre ose plastike (rreth 90 ml secila) dhe mbush secilën me rreth 60 ml jogurt.",
                "Bluaj frutat e pyllit, ujin dhe sheqerin në robot kuzhine derisa frutat të griren imët.",
                "Hidh rreth 1½ lugë gjelle nga përzierja me fruta në çdo gotë dhe përzieje lehtë me jogurtin me një shkop druri.",
                "Mbuloje çdo gotë me letër alumini dhe fut një shkop druri në mes përmes letrës.",
                "Vendosi në ngrirje për të paktën 4 orë, derisa të forcohen. Hiq gotat para se t'i shërbesh."
            ]
        },

        tags: ["yogurt", "berries", "frozen", "dessert", "sweet", "no-bake", "vegetarian", "summer"]
    },

    {
        id: 29,
        title: { en: "Focaccia Sandwiches", sq: "Sanduiçe me focaccia" },
        description: {
            en: "A big focaccia loaded with salami, ham, turkey, provolone and fresh vegetables, cut into bites for sharing.",
            sq: "Një focaccia e madhe e mbushur me sallam, proshutë, gjeldeti, provolone dhe perime të freskëta, e prerë në copa për t'u ndarë."
        },
        category: "lunch",
        image: "assets/images/recipe-focaccia.jpg", 

        prepTime: 15,
        cookTime: 0,
        servings: 8,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Mayonnaise", sq: "Majonezë" }, quantity: 75, unit: "g" },
            { name: { en: "Black olives, chopped", sq: "Ullinj të zinj, të grirë" }, quantity: 120, unit: "g" },
            { name: { en: "Focaccia bread", sq: "Bukë focaccia" }, quantity: 1, unit: "piece" },
            { name: { en: "Hard salami, thinly sliced", sq: "Sallam i fortë, në feta të holla" }, quantity: 115, unit: "g" },
            { name: { en: "Deli ham, thinly sliced", sq: "Proshutë, në feta të holla" }, quantity: 115, unit: "g" },
            { name: { en: "Deli turkey, thinly sliced", sq: "Gjeldeti, në feta të holla" }, quantity: 115, unit: "g" },
            { name: { en: "Red bell pepper, sliced into rings", sq: "Spec i kuq, i prerë në rrathë" }, quantity: 1, unit: "piece" },
            { name: { en: "Roasted red peppers (jar), drained", sq: "Speca të kuq të pjekur (kavanoz), të kulluar" }, quantity: 200, unit: "g" },
            { name: { en: "Large tomato, thinly sliced", sq: "Domate e madhe, në feta të holla" }, quantity: 1, unit: "piece" },
            { name: { en: "Romaine lettuce leaves", sq: "Gjethe sallate romane" }, quantity: 4, unit: "piece" },
            { name: { en: "Provolone cheese slices", sq: "Feta djathi provolone" }, quantity: 5, unit: "piece" }
        ],

        steps: {
            en: [
                "Mix the mayonnaise and chopped olives in a small bowl.",
                "Cut the focaccia in half horizontally and spread the olive mayonnaise over the bottom half.",
                "Layer the salami, ham, turkey and provolone on top, followed by the lettuce, tomato, fresh pepper rings and roasted peppers.",
                "Cover with the top half of the focaccia and press down gently.",
                "Cut into 24 small pieces, hold each one together with a toothpick and arrange on a platter."
            ],
            sq: [
                "Përziej majonezën dhe ullinjtë e grirë në një tas të vogël.",
                "Prije focaccian përgjysmë horizontalisht dhe lyej majonezën me ullinj në gjysmën e poshtme.",
                "Shtro sipër sallamin, proshutën, gjeldetin dhe provolonen, pastaj sallatën, domaten, rrathët e specit të freskët dhe specat e pjekur.",
                "Mbuloje me gjysmën e sipërme të focaccias dhe shtype lehtë.",
                "Prije në 24 copa të vogla, mbaj secilën me një kruajtëse dhëmbësh dhe vendosi në një pjatë të madhe."
            ]
        },

        tags: ["sandwich", "focaccia", "ham", "party", "lunch", "quick", "summer"]
    },

    {
        id: 30,
        title: { en: "Slow-Cooker Beef Stew", sq: "Gjellë me mish viçi" },
        description: {
            en: "Tender beef slow-cooked with potatoes, carrots and celery in a rich tomato broth, comfort for cold days.",
            sq: "Mish viçi i butë, i zier ngadalë me patate, karrota dhe selino në një lëng të pasur domatesh, ngrohtësi për ditët e ftohta."
        },
        category: "dinner",
        image: "assets/images/recipe-beef-stew.jpg", 

        prepTime: 25,
        cookTime: 420,
        servings: 8,
        difficulty: "easy",

        ingredients: [
            { name: { en: "Potatoes, peeled and cubed", sq: "Patate, të qëruara dhe të prera në kubikë" }, quantity: 680, unit: "g" },
            { name: { en: "Carrots, cut into 2.5 cm pieces", sq: "Karrota, të prera në copa 2,5 cm" }, quantity: 6, unit: "piece" },
            { name: { en: "Onion, chopped", sq: "Qepë, e grirë" }, quantity: 1, unit: "piece" },
            { name: { en: "Celery stalks, chopped", sq: "Kërcej selinoje, të grirë" }, quantity: 3, unit: "piece" },
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 3, unit: "tbsp" },
            { name: { en: "Beef stew meat, cubed", sq: "Mish viçi për gjellë, në kubikë" }, quantity: 680, unit: "g" },
            { name: { en: "Vegetable oil", sq: "Vaj" }, quantity: 3, unit: "tbsp" },
            { name: { en: "Diced tomatoes (can)", sq: "Domate të prera (kanoçe)" }, quantity: 400, unit: "g" },
            { name: { en: "Beef stock", sq: "Lëng mishi viçi" }, quantity: 400, unit: "ml" },
            { name: { en: "Ground mustard", sq: "Mustardë pluhur" }, quantity: 1, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Dried thyme", sq: "Trumzë e thatë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Fresh thyme, chopped (optional)", sq: "Trumzë e freskët, e grirë (opsionale)" }, quantity: 1, unit: "tsp" }
        ],

        steps: {
            en: [
                "Put the potatoes, carrots, onion and celery in the bottom of a 5-liter slow cooker.",
                "Toss the beef cubes in the flour until coated.",
                "Heat the oil in a large pan and brown the beef on all sides, in batches so the pan isn't crowded. Place the beef on top of the vegetables.",
                "In a bowl, mix the tomatoes with their juice, the stock, mustard, salt, pepper and dried thyme, then pour it over the beef.",
                "Cover and cook on low for 7-8 hours, until the beef and vegetables are very tender.",
                "Sprinkle with fresh thyme before serving, if you like."
            ],
            sq: [
                "Vendos patatet, karrotat, qepën dhe selinon në fund të një tenxhereje me zierje të ngadaltë (slow cooker) 5 litra.",
                "Rrotullo kubikët e mishit në miell derisa të mbulohen.",
                "Ngroh vajin në një tigan të madh dhe skuq mishin nga të gjitha anët, në disa tufa që tigani të mos mbushet shumë. Vendose mishin sipër perimeve.",
                "Në një tas, përziej domatet me lëngun e tyre, lëngun e mishit, mustardën, kripën, piperin dhe trumzën e thatë, pastaj hidhe sipër mishit.",
                "Mbuloje dhe gatuaje në nivel të ulët për 7-8 orë, derisa mishi dhe perimet të zbuten plotësisht.",
                "Spërkate me trumzë të freskët para se ta shërbesh, nëse dëshiron."
            ]
        },

        tags: ["beef", "stew", "slow cooker", "potatoes", "dinner", "comfort food", "winter"]
    },

    {
        id: 31,
        title: { en: "Lamb and Potato Bake", sq: "Tavë qengji me patate" },
        description: {
            en: "Tender lamb with leeks and carrots in a savory sauce, baked under a golden layer of potatoes.",
            sq: "Mish qengji i butë me presh dhe karrota në një salcë të shijshme, i pjekur nën një shtresë të artë patatesh."
        },
        category: "dinner",
        image: "assets/images/recipe-lamb-bake.jpg", 

        prepTime: 25,
        cookTime: 90,
        servings: 8,
        difficulty: "medium",

        ingredients: [
            { name: { en: "Vegetable oil", sq: "Vaj" }, quantity: 1, unit: "tbsp" },
            { name: { en: "Boneless leg of lamb, cubed", sq: "Kofshë qengji pa kockë, në kubikë" }, quantity: 900, unit: "g" },
            { name: { en: "Large onion, chopped", sq: "Qepë e madhe, e grirë" }, quantity: 1, unit: "piece" },
            { name: { en: "All-purpose flour", sq: "Miell i bardhë" }, quantity: 30, unit: "g" },
            { name: { en: "Chicken stock", sq: "Lëng pule" }, quantity: 720, unit: "ml" },
            { name: { en: "Large carrots, sliced", sq: "Karrota të mëdha, në feta" }, quantity: 2, unit: "piece" },
            { name: { en: "Leeks (white part), sliced", sq: "Presh (pjesa e bardhë), në feta" }, quantity: 2, unit: "piece" },
            { name: { en: "Fresh parsley, chopped", sq: "Majdanoz i freskët, i grirë" }, quantity: 2, unit: "tbsp" },
            { name: { en: "Dried rosemary", sq: "Rozmarinë e thatë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Salt", sq: "Kripë" }, quantity: 0.5, unit: "tsp" },
            { name: { en: "Black pepper", sq: "Piper i zi" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Dried thyme", sq: "Trumzë e thatë" }, quantity: 0.25, unit: "tsp" },
            { name: { en: "Large potatoes, peeled and sliced", sq: "Patate të mëdha, të qëruara dhe në feta" }, quantity: 3, unit: "piece" },
            { name: { en: "Butter, melted", sq: "Gjalpë, i shkrirë" }, quantity: 3, unit: "tbsp" }
        ],

        steps: {
            en: [
                "Preheat the oven to 190°C and grease a large baking dish (about 23 x 33 cm).",
                "Heat the oil in a large heavy pot and brown the lamb with the onion until the meat is no longer pink.",
                "Stir in the flour, then slowly pour in the stock and bring to a boil, stirring, until it thickens.",
                "Add the carrots, leeks, half of the parsley, the rosemary, salt, pepper and thyme.",
                "Spoon the mixture into the baking dish, cover it with overlapping potato slices and brush them with 2 tablespoons of the melted butter.",
                "Bake for 1 hour, brush the potatoes with the rest of the butter, then bake for another 30-60 minutes, until the lamb is tender and the potatoes are golden.",
                "Let it rest for a few minutes and sprinkle with the remaining parsley before serving."
            ],
            sq: [
                "Ngroh furrën në 190°C dhe lyej me yndyrë një tavë të madhe (rreth 23 x 33 cm).",
                "Ngroh vajin në një tenxhere të rëndë dhe skuq mishin e qengjit me qepën derisa mishi të mos jetë më rozë.",
                "Shto miellin dhe përziej, pastaj hidh ngadalë lëngun e pulës dhe lëre të vlojë, duke e përzier, derisa të trashet.",
                "Shto karrotat, preshin, gjysmën e majdanozit, rozmarinën, kripën, piperin dhe trumzën.",
                "Hidhe përzierjen në tavë, mbuloje me feta patatesh njëra mbi tjetrën dhe lyeji me 2 lugë gjelle nga gjalpi i shkrirë.",
                "Piqe për 1 orë, lyej patatet me gjalpin e mbetur, pastaj piqe edhe 30-60 minuta, derisa qengji të zbutet dhe patatet të marrin ngjyrë të artë.",
                "Lëre të pushojë disa minuta dhe spërkate me majdanozin e mbetur para se ta shërbesh."
            ]
        },

        tags: ["lamb", "potatoes", "leek", "baked", "dinner", "comfort food", "winter"]
    }

];