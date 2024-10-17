import PropTypes from "prop-types";
import Swal from "sweetalert2";

const TableRecipes = (props) => {
  const { recipes, setRecipes } = props;

  const deleteRecipes = (recipe, idRecipe) => {
    Swal.fire({
      title: "Atencion",
      text: `Estas por eliminar la receta de ${recipe.title}.¿Estas seguro que deseas eliminarla?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "SI , eliminar",
      cancelButtonText: "NO",
      confirmButtonColor: "red",
    }).then((res) => {
      if (res.isConfirmed) {
        const NuevoArray = recipes.filter((recipe) => {
          return recipe.id !== idRecipe;
        });
        setRecipes(NuevoArray);
        Swal.fire({
          icon: "success",
          title: `${recipe.title} ha sio eliminada correctamente`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Imagen</th>
          <th scope="col">Contenido</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, i) => {
          return (
            <tr key={recipe.id}>
              <td>{i}</td>
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
                <button type="button" className="btn  btn-primary btn-sm">
                  Editar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableRecipes;

TableRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  setRecipes: PropTypes.func.isRequired,
};
