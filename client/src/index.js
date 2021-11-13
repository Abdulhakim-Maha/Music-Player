import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MusicProvider from "./store/MusicProvider.js";

ReactDOM.render(
  <MusicProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MusicProvider>,
  document.getElementById("root")
);
