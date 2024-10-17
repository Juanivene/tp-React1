import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import ViewsWebNoticias from "../views/ViewsWebNoticias";
import ViewsAltaPeliculas from "../views/ViewsAltaPeliculas";
import ViewColorsForm from "../views/ViewColorsForm";
import ViewEmpleadoList from "../views/ViewEmpleadoList";
import ViewFormularioSimple from "../views/ViewFormularioSimple";
import ViewFormVeterinaria from "../views/ViewFormVeterinaria";
import ViewWeatherApp from "../views/ViewWeatherApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "noticias",
        element: <ViewsWebNoticias />,
      },
      {
        path: "peliculas",
        element: <ViewsAltaPeliculas />,
      },
      {
        path: "colors",
        element: <ViewColorsForm />,
      },
      {
        path: "empleado",
        element: <ViewEmpleadoList />,
      },
      {
        path: "formulariosimple",
        element: <ViewFormularioSimple />,
      },
      {
        path: "veterinaria",
        element: <ViewFormVeterinaria />,
      },
      {
        path: "clima",
        element: <ViewWeatherApp />,
      },
    ],
  },
]);
