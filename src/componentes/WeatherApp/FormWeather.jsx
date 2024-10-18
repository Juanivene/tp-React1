import { useForm } from "react-hook-form";
import CardList from "./CardList";
import { useState } from "react";
import { json } from "react-router-dom";

const FormWeather = () => {
  const [city, setCity] = useState(null);
  const API = import.meta.env.VITE_API_CLIMA
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = async (d) => {
    const { city } = d;

    const searchParams = new URLSearchParams();

    searchParams.set("q", city);
    searchParams.set("appid", API);
    searchParams.set("units", "metric");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${searchParams.toString()}`
      );
      const data = await res.json();

      setCity(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <fieldset className="mb-2">
          <label htmlFor="input-city" className="form-label">
            Nombre
          </label>
          <input
            required
            type="text"
            id="input-city"
            className={`form-control ${errors.city ? `is-invalid` : ``}`}
            {...register("city", {
              required: true,
              maxLength: {
                value: 30,
                message: "Tu ciudad no debe superar 30 caracteres",
              },
              minLength: {
                value: 2,
                message: "Tu ciudad debe tener al menos 2 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Ingrese una ciudad valida",
              },
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">{errors.city?.message}</span>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
      <hr />
      {city ? <CardList city={city} /> : <p>...</p>}
    </>
  );
};

export default FormWeather;
