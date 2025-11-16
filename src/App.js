import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = async () => {
    if (!query) return;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    const res = await fetch(url);
    const data = await res.json();

    setRecipes(data.meals || []);
  };

  return (
    <div className="app">
      <h1 className="title">🍽️ Recipe Finder</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes... (example: chicken)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={searchRecipe} className="search-btn">Search</button>
      </div>

      <div className="recipes-grid">
        {recipes.map((item) => (
          <RecipeCard key={item.idMeal} recipe={item} />
        ))}
      </div>
    </div>
  );
}

export default App;

