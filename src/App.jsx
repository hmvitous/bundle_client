import React, { useState, useEffect } from "react";
import EventsList from "./components/EventsList";
import { Button } from "semantic-ui-react";
import EventCreate from "./components/EventCreate";
import axios from "axios"
const App = () => {
  const [createEvent, setCreateEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(true);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data.events);
    } catch (error) {}
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <h1>BundleUp</h1>
      <div>
        <Button
          id="create-button"
          color="blue"
          onClick={() => {
            setCreateEvent(!createEvent);
          }}
        >
          {" "}
          Create Event{" "}
        </Button>
        {createEvent && <EventCreate fetchEvents={fetchEvents} />}
        {showEvent && <EventsList events={events} />}
      </div>
    </>
  );
};

export default App;
