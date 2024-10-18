import { useEffect, useState } from "react";

import TableRecipes from "../../componentes/Recipes/RecipesAbm/TableRecipes";
import FormRecipes from "../../componentes/Recipes/RecipesAbm/FormRecipes";

const ViewRecipesAbm = () => {
  const recipesLs = JSON.parse(localStorage.getItem("recipes")) || [];
  const [recipes, setRecipes] = useState(recipesLs);
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);
  return (
    <>
      <FormRecipes recipes={recipes} setRecipes={setRecipes} />
      <hr />
      <TableRecipes recipes={recipes} setRecipes={setRecipes} />
    </>
  );
};

export default ViewRecipesAbm;
