import React, { Component } from "react";
import axios from "axios";

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    axios.get("/events").then((response) => {
      this.setState({
        event_list: { events: response.data.events },
      });
    });
  }
  render() {
    let showEvents;
    showEvents = this.state.events.map((event) => {
      return (
        <div id="title" key={event.id}>
          <h1>{event.title}</h1>
        </div>
      );
    });

    return <div>{showArticles}</div>;
  }
}
export default EventList;
