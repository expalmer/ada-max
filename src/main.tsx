import "./styles/reset.css";
import "./styles/main.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AvatarPicker } from "./modules/profile/components/avatar-picker";
import { Backstage } from "./modules/backstage";
import { CreateProfile } from "./modules/profile/create-profile";
import { EditProfile } from "./modules/profile/edit-profile";
import { Home } from "./modules/home";
import { Login } from "./modules/login";
import { Profile } from "./modules/profile/root";
import { ProtectedRoute } from "./components/ProtectedRoute";
import React from "react";
import ReactDOM from "react-dom/client";

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
    path: "/avatar-picker",
    element: (
      <ProtectedRoute role="user">
        <AvatarPicker />
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
