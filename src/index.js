import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "./style.css";
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.baseURL = "https://bundleup-api.herokuapp.com/"
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
