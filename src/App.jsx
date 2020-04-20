import React, { useState } from "react";
import EventsList from "./components/EventsList";
import { Button } from "semantic-ui-react";
import EventCreate from "./components/EventCreate";

const App = () => {
  const [createEvent, setCreateEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(true);
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
        {createEvent && <EventCreate />}
        {showEvent && <EventsList />}
      </div>
    </>
  );
};

export default App;
