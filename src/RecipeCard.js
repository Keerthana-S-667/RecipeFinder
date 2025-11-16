import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-img" />

      <h3 className="recipe-title">{recipe.strMeal}</h3>

      <a
        href={recipe.strYoutube}
        target="_blank"
        rel="noreferrer"
        className="view-btn"
      >
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
