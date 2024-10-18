import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Recipe } from "./Recipe";

const FormRecipes = (props) => {
  const { recipes, setRecipes } = props;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    const { title, imagen, content } = data;
    const recipe = new Recipe(title, imagen, content);
    const nuevoArray = [...recipes, recipe];
    setRecipes(nuevoArray);
  };
  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <fieldset className="mb-3">
        <label htmlFor="title" className="form-label">
          Titulo receta
        </label>
        <input
          type="text"
          id="title"
          className={`form-control ${errors.title ? `is-invalid` : ``}`}
          {...register("title", {
            required: true,
            maxLength: {
              value: 30,
              message: "el titulo no puede superar los 30 caracteres",
            },
            minLength: {
              value: 2,
              message: "el titulo debe tener al menos 2 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Ingrese un titulo valido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.title?.message}</span>
        </div>
      </fieldset>

      <fieldset className="mb-3">
        <label htmlFor="imagen" className="form-label">
          Imagen
        </label>
        <input
          type="text"
          id="imagen"
          className={`form-control ${errors.imagen ? `is-invalid` : ``}`}
          {...register("imagen", {
            required: true,
            minLength: {
              value: 2,
              message: "Ingrese una url",
            },
            pattern: {
              value:
                /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}([\/\w\-\.]*)*\/?$/,
              message: "ingrese una url valida",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.imagen?.message}</span>
        </div>
      </fieldset>

      <fieldset className="mb-3">
        <label htmlFor="content" className="form-label">
          contenido
        </label>
        <input
          type="text"
          id="content"
          className={`form-control ${errors.content ? `is-invalid` : ``}`}
          {...register("content", {
            required: true,
            minLength: {
              value: 2,
              message: "el titulo debe tener al menos 2 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: " No se permiten caracteres especiales",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            {errors.content?.message}
          </span>
        </div>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Cargar
      </button>
    </form>
  );
};

export default FormRecipes;
FormRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  setRecipes: PropTypes.func.isRequired,
};
