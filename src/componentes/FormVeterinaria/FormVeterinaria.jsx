import PropTypes from "prop-types";
import { useRef } from "react";
import { Paciente } from "./paciente";

const FormVeterinaria = (props) => {
  const { pacientes, setPacientes } = props;
  const $inputNombre = useRef();
  const $inputNombreDueño = useRef();
  const $inputFecha = useRef();
  const $inputHora = useRef();
  const $inputSintomas = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = $inputNombre.current.value;
    const nombreDueño = $inputNombreDueño.current.value;
    const fecha = $inputFecha.current.value;
    const hora = $inputHora.current.value;
    const sintomas = $inputSintomas.current.value;

    const paciente = new Paciente(nombre, nombreDueño, fecha, hora, sintomas);

    const nuevoArray = [...pacientes, paciente];
    console.log(nuevoArray);
    setPacientes(nuevoArray);
    e.target.reset();
  };
  return (
    <div
      className="row g-3 m-2 border border-dark rounded-4 w-50  "
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <form onSubmit={handleSubmit} className="row needs-validation ">
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label ">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            ref={$inputNombre}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Nombre del dueño
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            ref={$inputNombreDueño}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            id="validationCustom03"
            ref={$inputFecha}
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom05" className="form-label">
            Hora
          </label>
          <input
            type="time"
            className="form-control"
            id="validationCustom05"
            ref={$inputHora}
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom05" className="form-label">
            Sintomas
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            ref={$inputSintomas}
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>

        <div className="col-md-4 mt-5 mb-2">
          <button className="btn btn-danger ms-auto form-control" type="submit">
            Cargar cita
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormVeterinaria;

FormVeterinaria.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPacientes: PropTypes.func.isRequired,
};
