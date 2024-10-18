import PropTypes from "prop-types";
import CardRecipes from "./CardRecipes";

const Recipes = (props) => {
  const { recipes } = props;
  return (
    <article className="container">
      <div>
        <h1 className="text-center">Recetas Juani´s</h1>
      </div>
      <div className="row justify-content-center">
        {recipes.map((recipe) => {
          return <CardRecipes recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </article>
  );
};

export default Recipes;
Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};
