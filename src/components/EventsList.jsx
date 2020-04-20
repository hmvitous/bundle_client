import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Container, Header } from "semantic-ui-react";

const EventsList = (props) => {
  // const [events, setEvents] = useState([]);

  // const fetchEvents = async () => {
  //   try {
  //     const response = await axios.get("/api/events");
  //     setEvents(response.data.events);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  return (
    <>
      {props.events.map((event) => {
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
