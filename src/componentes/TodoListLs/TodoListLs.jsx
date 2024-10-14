import { useEffect, useRef, useState } from "react";

const TodoListLs = () => {
  const tareasEnLs = JSON.parse(localStorage.getItem("tareas")) || [];
  const [tareas, setTareas] = useState(tareasEnLs);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  const $inputTarea = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const tarea = $inputTarea.current.value;

    const nuevoArrayTareas = [...tareas, tarea];
    setTareas(nuevoArrayTareas);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Binvenido</h1>
        <label htmlFor="tareaInput">Ingresa una tarea</label>
        <input type="text" ref={$inputTarea} />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => {
          return <li key={index}>{tarea}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoListLs;
