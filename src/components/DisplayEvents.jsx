import React from "react";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../state/action/eventsAction";

const DisplayEvents = (props) => {
    props.fetchSingleEvent(eventId);
  };
  let eventDisplay = events.map((event) => {
    return (
      <div id={`event-${event.id}`} key={event.id}>
        <div class="ui two cards">
          <div id="cards" class="ui card"></div>
          <div class="description">
            <div class="header" id="title">
              {article.title}
            </div>
            <div class="meta" id="description">
              {article.description}
            </div>
          </div>
        </div>
      </div>
    );
  });


return(
	<div id='event-list'>{eventDisplay} </div>
);
 
const mapStateToProps = (state) => {
	return {
		events: state.events,
	
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchSingleEvent: bindActionCreators(fetchSingleEvent, dispatch),

	};
};

export default connect (mapStateToProps, mapDispatchToProps)(DisplayEvents);