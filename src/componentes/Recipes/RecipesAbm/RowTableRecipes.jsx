import PropTypes from "prop-types";

const RowTableRecipes = (props) => {
  const { recipe, i, deleteRecipes, editRecipes } = props;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{recipe.title}</td>
      <td>
        <img
          src={recipe.imagen}
          alt={recipe.title}
          style={{ width: "100px" }}
        />
      </td>
      <td>{recipe.content}</td>
      <td>
        {" "}
        <button
          onClick={() => deleteRecipes(recipe, recipe.id)}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Eliminar
        </button>{" "}
        <button
          onClick={() => editRecipes()}
          type="button"
          className="btn  btn-primary btn-sm mt-2"
        >
          Editar
        </button>
      </td>
    </tr>
  );
};

export default RowTableRecipes;
RowTableRecipes.propTypes = {
  recipe: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  deleteRecipes: PropTypes.func.isRequired,
  editRecipes: PropTypes.func.isRequired,
};
