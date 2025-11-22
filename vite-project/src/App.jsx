// src/App.jsx
import RecipeCard from './RecipeCard';
import RECIPES from './recipes';

function App() {
  return (
    <>
      <h1>🍽️ My Favorite Recipes</h1>
      <div className="recipe-cards-container">
        {/* Map over the recipe data to render 4-5 RecipeCard components */}
        {RECIPES.map(recipe => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            cookingTime={recipe.cookingTime}
            difficulty={recipe.difficulty}
            description={recipe.description}
            // Optional props are passed if they exist
            image={recipe.image} 
            ingredients={recipe.ingredients}
            dietaryTags={recipe.dietaryTags}
          />
        ))}
      </div>
    </>
  );
}

export default App;