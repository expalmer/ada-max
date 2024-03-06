import "./styles/reset.css";
import "./styles/main.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Backstage } from "./modules/backstage";
import { CreateProfile } from "./modules/profile/create-profile";
import { DeleteProfile } from "./modules/profile/delete-profile";
import { EditProfile } from "./modules/profile/edit-profile";
import { Home } from "./modules/home";
import { Login } from "./modules/login";
import { Profile } from "./modules/profile/root";
import { ProtectedRoute } from "./components/ProtectedRoute";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./examples/example-context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role="user">
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute role="user">
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-profile",
    element: (
      <ProtectedRoute role="user">
        <CreateProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-profile/:id",
    element: (
      <ProtectedRoute role="user">
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/delete-profile/:id",
    element: (
      <ProtectedRoute role="user">
        <DeleteProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/backstage",
    element: (
      <ProtectedRoute role="admin">
        <Backstage />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
