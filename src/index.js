import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./tailwind.css";
import { WaitProvider } from "./context/waitContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WaitProvider>
      <App />
    </WaitProvider>
  </React.StrictMode>
);
