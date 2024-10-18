import PropTypes from "prop-types";

const CardRecipes = (props) => {
  const { recipe } = props;
  return (
    <div className="col-md-8 ">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
          <p className="card-text">{recipe.content}</p>
          <img
            src={recipe.imagen}
            alt={recipe.title}
            style={{ width: "20rem", borderRadius: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardRecipes;
CardRecipes.propTypes = {
  recipe: PropTypes.object.isRequired,
};
