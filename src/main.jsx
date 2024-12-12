import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobelContextProvider from "./Context/GobalContext/GlobelContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobelContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </GlobelContextProvider>
  </BrowserRouter>
);
