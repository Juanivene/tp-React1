import Swal from "sweetalert2";
import { Pelicula } from "./Pelicula";
import PropTypes from "prop-types";
import { useRef } from "react";

const FormPeliculas = (props) => {
  const { peliculas, setPeliculas } = props;

  const $inputNombrePelicula = useRef();
  const $txtAreaDescripcion = useRef();
  const $selectGenero = useRef();

  const validateCampo = (campo) => {
    return campo && campo.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let nombrePelicula = $inputNombrePelicula.current.value;
    let descripcion = $txtAreaDescripcion.current.value;
    let genero = $selectGenero.current.value;

    if (
      !validateCampo(nombrePelicula) ||
      !validateCampo(descripcion) ||
      !validateCampo(genero)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Completa los campos",
      });
      return;
    } else {
      const pelicula = new Pelicula(nombrePelicula, descripcion, genero);
      const nuevoArray = [...peliculas, pelicula];
      setPeliculas(nuevoArray);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="row g-3 m-5 border border-dark rounded-4"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre pelicula
        </label>
        <input
          type="text"
          className="form-control"
          ref={$inputNombrePelicula}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Descripcion
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={$txtAreaDescripcion}
        ></textarea>
      </div>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          ref={$selectGenero}
          defaultValue=""
        >
          <option value="">Seleccione un genero</option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </select>
      </div>

      <div className="mb-2 text-end">
        <button type="submit" className="btn btn-primary ">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormPeliculas;
FormPeliculas.propTypes = {
  peliculas: PropTypes.array.isRequired,
  setPeliculas: PropTypes.func.isRequired,
};
