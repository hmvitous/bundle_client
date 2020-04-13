import React, { Component } from "react";
import axios from "axios";


class EventsList extends Component {
  state = {
    eventList: [],
  }

  componentDidMount() {
    axios.get("/events").then((response) => {
      this.setState({
        events: response.data.events,
        
      });

  render() 
  debugger; { 
    let showEvents
    showEvents = (this.state.events.map(event) => {
        return (
          <div id = "event-title" key={event.id}>
          <h1 >{event.title}</h1>
        </div>
      )
    }
    )
    return (
      <div>
   {showArticles}
      </div>	
    )	    
  }	  

}
export default EventsList;
