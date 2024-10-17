import PropTypes from "prop-types";

const CardList = (props) => {
  const { city } = props;

  if (!city) return null;

  return (
    <article
      className="card text-center"
      style={{ width: "18rem", margin: "20px auto" }}
    >
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <div className="weather-icon">
          <img
            src={city.weather[0].icon}
            alt={city.name}
            style={{ width: "50px" }}
          />
        </div>
        <p className="card-text">
          <strong>Estado:</strong> {city.weather[0].main}
        </p>
        <p className="card-text">
          <strong>Temp. Mínima:</strong> {city.main.temp_min}
          °C
        </p>
        <p className="card-text">
          <strong>Temp. Máxima:</strong> {city.main.temp_max}
          °C
        </p>
      </div>
    </article>
  );
};

export default CardList;
CardList.propTypes = {
  city: PropTypes.object.isRequired,
};
