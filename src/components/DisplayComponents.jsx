import React from "react";
import DisplayEvents from "./DisplayEvents";

const DisplayComponent = (props) => {
  props.fetchEvents();

  return <>{props.eventList && <DisplayEvents />}</>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: bindActionCreators(fetchEvents, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    eventList: state.eventList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
