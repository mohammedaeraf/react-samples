import React, { useState, useEffect } from "react";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch(() => setError("Failed to fetch recipes"));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🍽 Recipe List</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-danger">{recipe.name}</h3>
                <h4 className="card-title text-warning mt-3">Ingredients</h4>
                <ul className="list-group">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item text-secondary">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <h4 className="card-title text-warning mt-3">Instructions</h4>
                <ol className="list-group list-group-numbered">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="list-group-item text-secondary">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
