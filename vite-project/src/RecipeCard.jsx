// src/RecipeCard.jsx
import React from 'react';

// Utility to map difficulty string to a CSS color/value
const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return '#4CAF50'; // Green
    case 'medium':
      return '#FF9800'; // Orange
    case 'hard':
      return '#F44336'; // Red
    default:
      return '#9E9E9E'; // Gray
  }
};

const RecipeCard = ({
  name,
  cookingTime,
  difficulty,
  description,
  image, // Optional
  ingredients, // Optional
  dietaryTags, // Optional
}) => {
  // Graceful fallback for missing image (Required)
  const imageUrl = image || 'https://via.placeholder.com/400x200?text=Image+Not+Available';
  
  // Color for the difficulty text
  const difficultyColor = getDifficultyColor(difficulty);

  return (
    <div className="recipe-card">
      {/* Recipe Image with Fallback */}
      <div className="recipe-image-container">
        <img 
          src={imageUrl} 
          alt={name} 
          className="recipe-image"
        />
      </div>

      <div className="recipe-content">
        {/* Name, Time, Difficulty */}
        <h2 className="recipe-name">{name}</h2>
        <div className="recipe-meta">
          <span className="recipe-time">🕒 {cookingTime}</span>
          <span 
            className="recipe-difficulty" 
            style={{ backgroundColor: difficultyColor }} // Color-coded
          >
            {difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="recipe-description">{description}</p>

        {/* Conditional Rendering for Optional Data: Dietary Tags */}
        {dietaryTags && dietaryTags.length > 0 && (
          <div className="recipe-tags">
            <h3>Dietary Tags</h3>
            {dietaryTags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Conditional Rendering for Optional Data: Ingredients List */}
        {ingredients && ingredients.length > 0 && (
          <div className="recipe-ingredients">
            <h3>Key Ingredients</h3>
            <ul className="ingredient-list">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;