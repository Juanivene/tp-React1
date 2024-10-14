import { useRef, useState } from "react";

const TareasLista = () => {
  const [tareas, setTareas] = useState([]);
  const $inputForm = useRef();
  const cargarTarea = (e) => {
    e.preventDefault();
    const tareaNueva = $inputForm.current.value;
    const nuevaListaTareas = [...tareas, tareaNueva];
    setTareas(nuevaListaTareas);
    $inputForm.current.value = "";
  };

  return (
    <>
      <form onSubmit={cargarTarea}>
        <h2>Bienvenido</h2>
        <label>Ingresa tus tareas</label>
        <input type="text" ref={$inputForm} />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {tareas.map((tarea, i) => {
          return <li key={i}>{tarea}</li>;
        })}
      </ul>
    </>
  );
};

export default TareasLista;
