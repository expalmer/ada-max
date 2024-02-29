import "./styles/reset.css";
import "./styles/main.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./modules/home";
import { Login } from "./modules/login";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
