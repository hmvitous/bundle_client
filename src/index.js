<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.default.baseURL = "http://localhost:3000/events"

ReactDOM.render(<App />, document.getElementById('root'))
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.default.baseURL = "http://localhost3000/events";
>>>>>>> 13884a6432806d5fa9979bc5b884d3c10656fed0

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
