import React, { Component } from "react";
import axios from "axios";
class EventsList extends Component {
  state = {
    eventsIndex: [],
  };

  componentDidMount() {
    const axiosclient = axios.create({ baseURL: "http://localhost:3000" });
    axiosclient.get("/events").then((response) => {
      console.log(response);
      this.setState({
        eventsIndex: response.data.events,
      });
    });
  }

  render() {
    const { eventsIndex } = this.state;
    const showEvents = eventsIndex.map((event) => {
      return (
        <div id={"event-" + event.id} key={event.id}>
          <h3 id="title">{event.title}</h3>
          <p id="description">{event.description}</p>
        </div>
      );
    });
    return <div>{showEvents}</div>;
  }
}

export default EventsList;
