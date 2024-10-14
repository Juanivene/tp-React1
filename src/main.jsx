import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ViewColorsForm from "./views/ViewColorsForm";

// import TodoListLs from "./componentes/TodoListLs/TodoListLs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoListLs /> */}
    <ViewColorsForm />
  </StrictMode>
);
