// src/main.jsx
import React from "react"; // Asegúrate de importar React si lo usas explícitamente
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Importa tu componente principal (App.jsx)

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
