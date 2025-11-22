// src/recipes.js

const RECIPES = [
  {
    id: 1,
    name: "Classic Spaghetti Carbonara",
    cookingTime: "25 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1579601569941-860f4c330f62?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A rich and creamy Italian pasta dish from Rome, made with egg, hard cheese, cured pork.",
    ingredients: ["Spaghetti", "Eggs", "Guanciale", "Pecorino Romano cheese"],
    dietaryTags: ["Meat"],
  },
  {
    id: 2,
    name: "Vegan Tofu Scramble",
    cookingTime: "15 min",
    difficulty: "Easy",
    // Image is intentionally left blank here to test the graceful fallback
    image: "", 
    description: "A healthy, quick, and satisfying breakfast substitute for scrambled eggs.",
    ingredients: ["Firm Tofu", "Nutritional Yeast", "Turmeric", "Spinach"],
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"],
  },
  {
    id: 3,
    name: "Beef Wellington",
    cookingTime: "90 min",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1546875508-b99797240366?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A preparation of fillet steak coated with pâté and duxelles, wrapped in puff pastry.",
    ingredients: ["Beef Fillet", "Puff Pastry", "Mushroom Duxelles"],
    dietaryTags: [],
  },
  {
    id: 4,
    name: "Simple Grilled Cheese",
    cookingTime: "10 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528735602780-2558ac9c3c13?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The ultimate comfort food.",
    ingredients: ["Bread", "Butter", "Cheddar Cheese"],
    dietaryTags: ["Vegetarian"],
  },
];

export default RECIPES;