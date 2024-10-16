import PropTypes from "prop-types";
import CardsPeliculas from "./CardsPeliculas";

const ContainerCardsPeliculas = (props) => {
  const { peliculas } = props;
  return (
    <article className="row g-3 m-5 border border-dark rounded-4">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="d-flex">Peliculas</h1>
        
      </div>
      <hr />
      <div className="row">
        {peliculas.map((pelicula) => {
          return(<div className="col-md-4 col-sm-6 col-12" key={pelicula.id}> <CardsPeliculas pelicula={pelicula}  /></div>);
        })}
      </div>
    </article>
  );
};

export default ContainerCardsPeliculas;

ContainerCardsPeliculas.propTypes = {
  peliculas: PropTypes.array.isRequired,
};
