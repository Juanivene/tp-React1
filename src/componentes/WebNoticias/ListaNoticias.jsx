// import { useEffect, useState } from "react";
// import NoticiaCard from "./NoticiaCard";

import PropTypes from "prop-types";
import NoticiaCard from "./NoticiaCard";

const ListaNoticias = (props) => {
  const { noticias } = props;
  const oc = () => {
    return noticias.articles.map((noticia, i) => {
      console.log(i, noticia);
    });
  };
  return (
    <div>
      <h1>Lista de noticias</h1>
      <hr />
      <div className="row g-2">
        {noticias.articles.length > 0 ? (
          noticias.articles.map((noticia, index) => (
            <NoticiaCard key={index} noticia={noticia} />
          ))
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>
      <button onClick={oc}></button>
    </div>
  );
};

export default ListaNoticias;
ListaNoticias.propTypes = {
  noticias: PropTypes.object.isRequired,
};
