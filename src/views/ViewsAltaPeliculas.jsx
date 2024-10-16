import { useEffect, useState } from "react";
import ContainerCardsPeliculas from "../componentes/AltaPeliculas/ContainerCardsPeliculas";
import FormPeliculas from "../componentes/AltaPeliculas/FormPeliculas";

const ViewsAltaPeliculas = () => {
  const peliculasLs = JSON.parse(localStorage.getItem("peliculas")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLs);
  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);
  return (
    <>
      <FormPeliculas peliculas={peliculas} setPeliculas={setPeliculas}/>
      <ContainerCardsPeliculas peliculas={peliculas}/>
    </>
  );
};

export default ViewsAltaPeliculas;
