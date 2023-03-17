import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DialogProvider } from "./context/DialogContext";
import { DespesasProvider } from "./context/DespesasContext";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <DespesasProvider>
      <DialogProvider>
        <App />
      </DialogProvider>
    </DespesasProvider>
  </React.StrictMode>
);
