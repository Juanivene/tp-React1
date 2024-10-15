import { useRef } from "react";
import Swal from "sweetalert2";

const FormSimple = () => {
  const $inputNombre = useRef();
  const $inputApellido = useRef();
  const $inputDni = useRef();
  const $inputEmail = useRef();
  const validateCampo = (campo) => {
    return campo.trim() !== "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let nombre = $inputNombre.current.value;
    let apellido = $inputApellido.current.value;
    let dni = $inputDni.current.value;
    let email = $inputEmail.current.value;
    if (
      (!validateCampo(nombre),
      !validateCampo(apellido),
      !validateCampo(dni),
      !validateCampo(email))
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Completa los campos",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else {
      e.target.reset();
    }
  };
  return (
    <form
      className="row g-3 m-5 border border-dark rounded-4"
      style={{ backgroundColor: "#f0f0f0" }}
      onSubmit={handleSubmit}
    >
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          ref={$inputNombre}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPassword4"
          ref={$inputApellido}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          dni
        </label>
        <input
          type="number"
          className="form-control"
          id="inputEmail4"
          ref={$inputDni}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          ref={$inputEmail}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary my-2">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormSimple;
