import React from "react";
import EventsList from "./components/EventsList";
import { Button } from "semantic-ui-react";
import EventCreate from "./components/EventCreate";

const App = () => {

  const [createEvent, setCreateEvent] = React.useState(false);
  const [showEvent, setShowEvent] = React.useState(true);
  return (
    <>
      <h1>BundleUp</h1>
      <div>
        <Button id="create-button" onClick={() =>{setCreateEvent(!createEvent)}}> Create Event </Button>
        {createEvent && <EventCreate />}
        {showEvent && <EventsList />}
      </div>
    </>
  );
};

export default App;
