import React, { Component } from "react";
import EventsList from "./components/EventsList";
import EventCreate from "./components/EventCreate"

const App = () => {
  return (
    <>
      <h1>BundleUp</h1>
      <div>
        <EventsList />
        <EventCreate />
      </div>
    </>
  );
};

export default App;
