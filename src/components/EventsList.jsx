import React from "react";
import { Container, Header, Button } from "semantic-ui-react";

const userJoin = (user) => {
  if (user.authenticated = true) {
    
  }
}

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
            <Button onClick={userJoin} id="join">You are in!</Button>
          </Container>
          
        );
      })}
    </>
  );
};

export default EventsList;
