import React from "react";
import axios from "axios"

const EventList = () => {

  return (
    <>
      <div id="event-list">
        <div id="event-title">Event Title</div>
        <div id="event-description">Event description</div>
      </div>
    </>
  )
}

export default EventList;

// state = {
//   events: [],
// };

// componentDidMount();
// axios.get("/events").then((response) => {
//   this.setState({
//     event_list: { events: response.data.events },
//   });
// });

//  render() {
//     let showEvents
//     showEvents = state.events.map((event) => {
//       return (
//         <div id="title" key={event.id}>
//           <h1>{event.title}</h1>
//         </div>
//       )
//     })
//   }

//   return;
//     <div>{showEvents}</div>;
//     <div id="event-list">
//       <h2 id="event-title">Event List</h2>
//       <h2 id="event-description">Event Description</h2>
//     </div>;
// }
