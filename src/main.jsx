import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/root";
// import ViewsAltaPeliculas from "./views/ViewsAltaPeliculas";

// import ViewFormVeterinaria from "./views/ViewFormVeterinaria";
// import ViewFormularioSimple from "./views/ViewFormularioSimple";
// import ViewEmpleadoList from "./views/ViewEmpleadoList";
// import ViewColorsForm from "./views/ViewColorsForm";
// import TodoListLs from "./componentes/TodoListLs/TodoListLs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoListLs /> */}
    {/* <ViewColorsForm /> */}
    {/* <ViewEmpleadoList/> */}
    {/* <ViewFormularioSimple /> */}
    {/* <ViewFormVeterinaria /> */}
    {/* <ViewsAltaPeliculas /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
