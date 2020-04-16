import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/events");
        setEvents(response.data.events);
      } catch (error) {}
    };

    fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => {
        return (
          <Container
            className="ui container"
            id={"event-" + event.id}
            key={event.id}
          >
              <Header id="title">{event.title}</Header>
              <p id="description">{event.description}</p>
          </Container>
        );
      })}
    </>
  );
};

export default EventsList;
