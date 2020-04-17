import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EVENTS":
      return {
        ...state,
        eventList: action.payload.eventList
      };
      default:
        return state;
    }
  };
  export default rootReducer;
  