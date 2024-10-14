import PropTypes from "prop-types";

const EmpleadoRow = (props) => {
  const { empleado } = props;
  return (
    <div className="d-flex justify-content-center ">
      <article className="border border-info  mx-5 p-3 w-25 d-flex align-items-start">
        <img
          src={empleado.pic}
          alt={empleado.fullName}
          className="img-fluid me-3 rounded-circle"
          style={{ maxWidth: "40%" }}
        />
        <div style={{ maxWidth: "60%" }}>
          <h3>{empleado.fullName}</h3>
          <h6>{empleado.title}</h6>
          <span className="badge text-bg-secondary">{empleado.department}</span>
        </div>
      </article>
    </div>
  );
};

export default EmpleadoRow;
EmpleadoRow.propTypes = {
  empleado: PropTypes.object.isRequired,
};
