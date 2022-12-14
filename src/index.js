import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
