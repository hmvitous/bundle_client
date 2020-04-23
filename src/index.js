import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import axios from "axios";
import configureStore from "./state/store/configureStore";
import "./style.css";

axios.defaults.baseURL = "http://localhost:3000";
const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
