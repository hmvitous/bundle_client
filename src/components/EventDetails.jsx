import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Button } from "semantic-ui-react";

const EventDetails = () => {
  const event = useSelector((state) => state.activeEvent);
  const authenticated = useSelector((state) => state.authenticated);

  const [joinMessage, setJoinMessage] = useState("");


  const dispatch = useDispatch();
  const showEventList = () => {
    dispatch({
      type: "SHOW_EVENT_LIST",
      payload: {
        activeEvent: null,
        showSpecificEvent: false,
      },
    });
  };

  const joinEvent = async () => {
    try {
      let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

      let response = await axios.put(
        `/events/${event.id}`,
        {},
        { headers: headers }
      );
      setJoinMessage(response.data.message);
    } catch (error) {}
  };
  return (
    <div>
      <Button onClick={() => showEventList(event)}>Go Back</Button>
      <h1>Event details</h1>
      <p>{event.title}</p>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Attendee limit: {event.attendee_limit}</p>
      {authenticated && <Button onClick={joinEvent}>Join event</Button>}
      <span id="join-message">{joinMessage}</span>

    </div>
  );
};

export default EventDetails;
