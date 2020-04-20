import React from "react";
import { Container, Header } from "semantic-ui-react";

const EventsList = (props) => {
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
