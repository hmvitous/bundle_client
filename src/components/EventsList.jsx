import React from "react";
import { Container, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";


const EventsList = (props) => {
  const dispatch = useDispatch()
  const showEvent = (event) => {
    dispatch({
      type: "SHOW_SPECIFIC_EVENT",
      payload: {
        activeEvent: event,
        showSpecificEvent: true
      }
    });

  }
  return (
    <>
      {props.events.map((event) => {
        return (
          <Container
            className="ui container"
            id={"event-" + event.id}
            key={event.id}
            onClick={() => showEvent(event)}
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
