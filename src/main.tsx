import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { configureAmplify } from "./config/amplify";
import App from "./App";
import "./styles/globals.css";

configureAmplify();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <App />
      <Toaster position="top-right" />
    </>
  </React.StrictMode>
);