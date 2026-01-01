const recipes = [
    {
        id: 1,
        name: "Classic Italian Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
        time: "45 minutes",
        servings: "4 servings",
        description: "Authentic Italian pizza with a crispy crust, rich tomato sauce, and melted mozzarella cheese.",
        ingredients: [
            "3 cups all-purpose flour",
            "1 packet active dry yeast",
            "1 cup warm water",
            "2 tablespoons olive oil",
            "1 teaspoon salt",
            "1 teaspoon sugar",
            "1 cup tomato sauce",
            "2 cups shredded mozzarella cheese",
            "Fresh basil leaves",
            "Oregano to taste",
            "Red pepper flakes (optional)"
        ],
        instructions: [
            "In a bowl, dissolve yeast and sugar in warm water. Let it sit for 5 minutes until foamy.",
            "Add flour, olive oil, and salt to the yeast mixture. Mix until a dough forms.",
            "Knead the dough on a floured surface for 8-10 minutes until smooth and elastic.",
            "Place dough in a greased bowl, cover, and let rise in a warm place for 1 hour until doubled in size.",
            "Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.",
            "Punch down the dough and divide into portions. Roll out on a floured surface to desired thickness.",
            "Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
            "Sprinkle mozzarella cheese generously over the sauce. Add oregano and red pepper flakes if desired.",
            "Bake for 12-15 minutes until the crust is golden and cheese is bubbly and slightly browned.",
            "Remove from oven, top with fresh basil leaves, slice, and serve hot."
        ]
    },
    {
        id: 2,
        name: "Jordanian Maqluba",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&h=600&fit=crop",
        time: "90 minutes",
        servings: "6 servings",
        description: "A traditional Jordanian upside-down rice dish with tender meat, vegetables, and aromatic spices.",
        ingredients: [
            "2 cups basmati rice",
            "500g chicken or lamb, cut into pieces",
            "1 large eggplant, sliced",
            "1 large cauliflower, cut into florets",
            "2 large potatoes, sliced",
            "3 tomatoes, sliced",
            "1 large onion, chopped",
            "4 cups chicken broth",
            "3 tablespoons vegetable oil",
            "2 teaspoons turmeric",
            "2 teaspoons cumin",
            "1 teaspoon cinnamon",
            "Salt and black pepper to taste",
            "Pine nuts and almonds for garnish"
        ],
        instructions: [
            "Soak the basmati rice in water for 30 minutes, then drain and set aside.",
            "Season the meat with salt, pepper, turmeric, and cumin. Set aside to marinate.",
            "Heat oil in a large pot and fry the eggplant, cauliflower, and potato slices until golden. Remove and set aside.",
            "In the same pot, brown the meat pieces on all sides. Add chopped onions and cook until softened.",
            "Add 2 cups of chicken broth to the meat, cover, and simmer for 30-40 minutes until meat is tender.",
            "In a separate large pot, arrange the fried vegetables in layers at the bottom, starting with tomatoes.",
            "Place the cooked meat over the vegetables, then spread the soaked rice evenly on top.",
            "Pour the remaining chicken broth and cooking liquid from the meat over the rice. Add cinnamon.",
            "Bring to a boil, then reduce heat to low, cover tightly, and cook for 30-35 minutes until rice is tender.",
            "Remove from heat and let rest for 10 minutes. Place a large serving platter over the pot and carefully flip to invert.",
            "Garnish with toasted pine nuts and almonds. Serve hot with yogurt and Arabic salad."
        ]
    },
    {
        id: 3,
        name: "Baked Pasta with Béchamel Sauce",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
        time: "60 minutes",
        servings: "6 servings",
        description: "Creamy baked pasta with layers of rich béchamel sauce, ground meat, and melted cheese.",
        ingredients: [
            "500g penne or rigatoni pasta",
            "500g ground beef",
            "1 onion, finely chopped",
            "3 cloves garlic, minced",
            "2 cups tomato sauce",
            "4 tablespoons butter",
            "4 tablespoons flour",
            "3 cups milk",
            "1 cup grated Parmesan cheese",
            "2 cups shredded mozzarella cheese",
            "1 teaspoon nutmeg",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Cook pasta according to package directions until al dente. Drain and set aside.",
            "In a large pan, heat olive oil and sauté onions until translucent. Add garlic and cook for 1 minute.",
            "Add ground beef and cook until browned, breaking it up with a spoon. Season with salt and pepper.",
            "Stir in tomato sauce and simmer for 10 minutes. Remove from heat.",
            "To make béchamel: melt butter in a saucepan over medium heat. Add flour and whisk for 2 minutes.",
            "Gradually add milk while whisking constantly to prevent lumps. Continue whisking until sauce thickens.",
            "Add nutmeg, salt, pepper, and half of the Parmesan cheese to the béchamel. Stir until smooth.",
            "Preheat oven to 180°C (350°F). Grease a large baking dish.",
            "Layer half the pasta in the dish, top with meat sauce, then add remaining pasta.",
            "Pour béchamel sauce over the pasta, spreading evenly. Top with mozzarella and remaining Parmesan.",
            "Bake for 30-35 minutes until golden and bubbly. Let cool for 5 minutes.",
            "Garnish with fresh parsley, slice, and serve hot."
        ]
    }
];

const homeView = document.getElementById('homeView');
const detailView = document.getElementById('detailView');
const recipeGrid = document.getElementById('recipeGrid');
const backButton = document.getElementById('backButton');

const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailTime = document.getElementById('detailTime');
const detailServings = document.getElementById('detailServings');
const detailIngredients = document.getElementById('detailIngredients');
const detailInstructions = document.getElementById('detailInstructions');

function renderRecipeCards() {
    recipeGrid.innerHTML = '';
    
    recipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeGrid.appendChild(card);
    });
}

/**
 * Creates a recipe card element
 * @param {Object} recipe - Recipe object containing all recipe data
 * @returns {HTMLElement} - Recipe card DOM element
 */
function createRecipeCard(recipe) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => showRecipeDetail(recipe.id);
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${recipe.name}</h3>
            <div class="card-meta">
                <div class="meta-item">
                    <span class="meta-icon">⏱️</span>
                    <span>${recipe.time}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-icon">🍽️</span>
                    <span>${recipe.servings}</span>
                </div>
            </div>
            <p class="card-description">${recipe.description}</p>
            <button class="view-recipe-btn">View Recipe</button>
        </div>
    `;
    
    return card;
}

/**
 * Shows the detail view for a specific recipe
 * @param {number} recipeId - ID of the recipe to display
 */
function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        console.error('Recipe not found');
        return;
    }
    
    detailImage.src = recipe.image;
    detailImage.alt = recipe.name;
    detailName.textContent = recipe.name;
    detailTime.textContent = recipe.time;
    detailServings.textContent = recipe.servings;
    
    detailIngredients.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        detailIngredients.appendChild(li);
    });
    
    detailInstructions.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        detailInstructions.appendChild(li);
    });
    
    homeView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHomeView() {
    detailView.classList.add('hidden');
    homeView.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

backButton.addEventListener('click', showHomeView);

document.addEventListener('DOMContentLoaded', () => {
    renderRecipeCards();
});