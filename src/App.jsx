import React, { useState, useEffect } from "react";
import EventsList from "./components/EventsList";
import { Button } from "semantic-ui-react";
import EventCreate from "./components/EventCreate";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import EventDetails from './components/EventDetails'
import { useSelector } from "react-redux";


const App = () => {
  const [createEvent, setCreateEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [login, setLoginForm] = useState(false);

  const authenticated = useSelector(state => state.authenticated)
  const showSpecificEvent = useSelector(state => state.showSpecificEvent)


  const fetchEvents = async () => {
    try {
      const response = await axios.get("/events");
      setEvents(response.data.events);
    } catch (error) { }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <h1>BundleUp</h1>
      <div>
        {authenticated ?
          <>
            <Button
              id="create-button"
              color="blue"
              onClick={() => {
                setCreateEvent(!createEvent);
              }}
            >
              Create Event
            </Button>

            {createEvent && <EventCreate fetchEvents={fetchEvents} />}
          </>
          :
          <>
            <Button
              id="login"
              onClick={() => {
                setLoginForm(!login);
              }}
            > Login </Button>
            {login && <LoginForm login={login} />}
          </>
        }
        {showSpecificEvent ? 
          <EventDetails />
        :
          <EventsList events={events} />
        }
      </div>
    </>
  );
};

export default App;
