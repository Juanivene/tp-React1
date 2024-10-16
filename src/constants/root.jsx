import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import ViewsWebNoticias from "../views/ViewsWebNoticias";
import ViewsAltaPeliculas from "../views/ViewsAltaPeliculas";

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
    ],
  },
]);
