import axios from "axios";

const apiURL = "http://localhost:3000/events";

const fetchEvents = () => {
  return async dispatch => {
    let response = await axios.get(apiURL);
    return dispatch(dispatchEventAction(response.data));
  };
};

const dispatchEventAction = json => {
  return { type: "EVENTS", payload: json };
};

export default { fetchEvents };
