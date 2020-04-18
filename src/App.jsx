import React, { Component } from "react";
import EventsList from "./components/EventsList";

import { Button } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <h1>BundleUp</h1>
      <div>
        <EventsList />
        <Button type="submit">Create Event</Button>
        
      </div>
    </>
  );
};

export default App;
