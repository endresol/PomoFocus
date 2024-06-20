import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import {
  Home,
  Timer,
  ClientsPage,
  ProjectsPage,
  SettingsPage,
  ClientAddEdit,
} from "./pages";

import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/timer",
        element: <Timer />,
      },
      {
        path: "/clients",
        element: <ClientsPage />,
      },
      {
        path: "/clients/add",
        element: <ClientAddEdit />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
