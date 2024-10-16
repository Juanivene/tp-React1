import PropTypes from "prop-types";
import NoticiaCard from "./NoticiaCard";

const ListaNoticias = (props) => {
  const { noticias } = props;

  return (
    <div>
      <h1>Lista de noticias</h1>

      <hr />
      <div className="row g-2">
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <NoticiaCard key={index} noticia={noticia} />
          ))
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ListaNoticias;
ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};
