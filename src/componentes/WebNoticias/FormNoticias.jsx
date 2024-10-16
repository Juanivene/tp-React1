import { useRef, useState } from "react";
import ListaNoticias from "./ListaNoticias";

const FormNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const $selectNews = useRef();
  const $inputTitle = useRef();

  const selectUrl = () => {
    let url;
    switch ($selectNews.current.value) {
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
      setNoticias(data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = async () => {
    await fetchNoticias(selectUrl());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tituloBusqueda = $inputTitle.current.value;
    await fetchNoticias(selectUrl());

    const filterNoticias = noticias.filter((noticia) => {
      return noticia.title.toLowerCase().includes(tituloBusqueda.toLowerCase());
    });

    setNoticias(filterNoticias);
  };

  return (
    <article>
      <form className="border p-4 rounded mx-auto">
        <label htmlFor="categorySelect" className="form-label">
          Buscar por categorías:
        </label>
        <select
          onChange={handleChange}
          className="form-select"
          id="categorySelect"
          aria-label="Default select example"
          ref={$selectNews}
        >
          <option>Articulos</option>
          <option value="1">Apple </option>
          <option value="2">Bitcoin </option>
          <option value="3">TechCrunch </option>
        </select>
        <div className="mb-3">
          <label htmlFor="SearchInput" className="form-label mt-2">
            Buscar por titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="SearchInput"
            aria-describedby="emailHelp"
            ref={$inputTitle}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
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
