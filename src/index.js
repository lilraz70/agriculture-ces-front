import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Page1 from "./première_page";
import Connexion from "./page_admin/connexion_page";
import Actualites from "./page_admin/actualite_page";
import Informations from "./page_admin/information_page";
import Ajout from "./page_admin/ajout_element";
import Projects from "./page_admin/projet_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
  },
  {
    path: "connexion",
    element: <Connexion />,
  },
  {
    path: "news",
    element: <Actualites/>,
  },
  {
    path: "info",
    element: <Informations/>,
  },
  {
    path: "ajout",
    element: <Ajout/>,
  },
  {
    path: "projet",
    element: <Projects/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);