import React, { Component } from "react";
import axios from "axios";

class EventList extends Component {
    state = {
      eventList: []
    };

    componentDidMount() {
      axios.get("/events").then(response => {
        this.setState({
          eventList: response.data.events
        });
      });
    }

    render() {
      let eventDisplay;
      if (this.state.eventList !== []) {
        eventDisplay = this.state.eventList.map(events => {
          return(
            <>
            {events.title} {events.description}
            </>
          );
        })
      }
export default EventList;