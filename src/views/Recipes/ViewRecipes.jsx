import { useState } from "react";
import Recipes from "../../componentes/Recipes/ViewRecipes/recipes";

const ViewRecipes = () => {
  const recipesLs = JSON.parse(localStorage.getItem("recipes"));
  const [recipes, setRecipes] = useState(recipesLs);

  return <Recipes recipes={recipes} />;
};

export default ViewRecipes;
