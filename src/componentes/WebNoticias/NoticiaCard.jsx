import PropTypes from "prop-types";

const NoticiaCard = (props) => {
  const { noticia } = props;
  return (

    <div
      className="card my-3 shadow-lg " 
      style={{ maxWidth: "500px", margin: "auto" }}
    >
      <img
        src={noticia.urlToImage || "https://via.placeholder.com/500x250"}
        className="card-img-top"
        alt="News Image"
      />
      <div className="card-body">
        <h5 className="card-title">{noticia.title}</h5>
        <p className="card-text">
          <small className="text-muted">By {noticia.author}</small>
        </p>
        <p className="card-text">{noticia.description}</p>
        <p className="card-text text-secondary">{noticia.content}</p>
      </div>
    </div>
  );
};

export default NoticiaCard;
NoticiaCard.propTypes = {
  noticia: PropTypes.object.isRequired,
};
