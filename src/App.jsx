import React, { Component } from "react";
import EventsList from "./components/EventsList";
class App extends Component {
  render() {
    return (
      <>
        <h1>BundleUp</h1>
        <div>
          <EventsList />
        </div>
      </>
    );
  }
}
export default App;
