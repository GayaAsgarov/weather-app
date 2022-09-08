import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/style.css";
import App from "./App";
import store from "./stores";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
