import PropTypes from "prop-types";

const CardPaciente = (props) => {
  const { paciente,  deleteCard } = props;
  return (
    <div className="card mb-3 w-25 mx-3">
      <div className="card-header">
        <h5>Mascota: {paciente.nombreMascota}</h5>
        <p>Dueño: {paciente.nombreDueño}</p>
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            value={paciente.fecha}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            value={paciente.hora}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Síntomas</label>
          <textarea
            className="form-control"
            rows="3"
            value={paciente.sintomas}
            readOnly
          />
        </div>
      </div>

      <div className="card-footer text-end">
        <button
          className="btn btn-danger"
          onClick={() => deleteCard(paciente, paciente.id)}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default CardPaciente;
CardPaciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
