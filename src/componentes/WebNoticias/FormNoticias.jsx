import { useRef, useState } from "react";
import ListaNoticias from "./ListaNoticias";

const FormNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const $selectNoticias = useRef();

  const selectUrl = () => {
    let url;
    switch ($selectNoticias.current.value) {
      case "1":
        url = ` https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=41a9625590cb4cae9698429cadca2408`;
        return url;

      case "2":
        url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=41a9625590cb4cae9698429cadca2408`;
        return url;
      case "3":
        url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=41a9625590cb4cae9698429cadca2408`;
        return url;
    }
  };

  const fetchNoticias = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setNoticias(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNoticias(selectUrl());
  };

  return (
    <article>
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded mx-auto"
        style={{ maxwidth: `300px` }}
      >
        <label htmlFor="categorySelect" className="form-label">
          Buscar por categorías:
        </label>
        <select
          className="form-select"
          id="categorySelect"
          aria-label="Default select example"
          ref={$selectNoticias}
        >
          <option>Articulos</option>
          <option value="1">Apple </option>
          <option value="2">Bitcoin </option>
          <option value="3">TechCrunch </option>
        </select>

        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>

      {noticias.length === 0 ? (
        <h1>...</h1>
      ) : (
        <ListaNoticias noticias={noticias} />
      )}
    </article>
  );
};

export default FormNoticias;
