import React, { Component } from "react";
import EventsList from "./components/EventsList";
// import { Button, Icon } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <>
        {/* <div>
          <Button color="facebook">
            <Icon className="facebook" /> Facebook{" "}
          </Button>
        </div> */}

        <h1>BundleUp</h1>
        <EventsList />
      </>
    );
  }
}

export default App;
