import PropTypes from "prop-types";
import NoticiaCard from "./NoticiaCard";

const ListaNoticias = (props) => {
  const { noticias } = props;

  return (
    <article>
      <h2>Lista de noticias</h2>

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
    </article>
  );
};

export default ListaNoticias;
ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};
