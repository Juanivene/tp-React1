import PropTypes from "prop-types";

const CardsPeliculas = (props) => {
  const { pelicula } = props;
  return (
    <div
      className="card m-3 shadow-lg border-0"
      style={{ maxWidth: "400px", borderRadius: "15px" }}
    >
      <div
        className="card-body"
        style={{
          backgroundColor: "#2e2e2e",
          color: "#f0f0f0",
          borderRadius: "15px",
        }}
      >
        <h5 className="card-title fw-bold" style={{ color: "#17a2b8" }}>
          {pelicula.nombrePelicula}
        </h5>
        <h6 className="card-subtitle mb-2 ">Género: {pelicula.genero}</h6>
        <p className="card-text">{pelicula.descripcion}</p>
        <a
          href="https://homers-webpage.vercel.app/"
          className="btn btn-outline-info mt-3"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

export default CardsPeliculas;
CardsPeliculas.propTypes = {
  pelicula: PropTypes.object.isRequired,
};
