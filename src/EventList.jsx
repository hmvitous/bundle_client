import React , { Component} from "react";
import axios from "axios";

class EventList extends Component {
  state = {
    event: [],
  };

  componentDidMount() {
    axios.get("/events").then((response) => {
      this.setState({
        event: response.data.events,
      });
    });
  }

  render() {
    const eventsIndex = this.state.eventIndex;
    let showEvents;

    if (eventsIndex.length > 0) {
      showEvents = eventIndex.map((event) => {
        return (
          <>
            <div key={event.id} className="events">
              <div className=".event-title">{event.title}</div>
              <div className=".event-description">{event.description}</div>
            </div>
          </>
        );
      });
    }

    return (
      <div>
        <div id="title">{showEvent}</div>
      </div>
    );
  }
}

export default EventList
