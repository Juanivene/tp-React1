import FormRecipes from "../../componentes/Recipes/FormRecipes";
import TableRecipes from "../../componentes/Recipes/TableRecipes";
import { useEffect, useState } from "react";

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
