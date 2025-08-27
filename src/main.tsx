import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <SettingsProvider>
      <App />
      </SettingsProvider>
    </BrowserRouter>
  </StrictMode>
);
