import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const EventDetails = () => {
  const event = useSelector(state => state.activeEvent)
  const authenticated = useSelector(state => state.authenticated)


  const joinEvent = async () => {
    try {
      let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))

      let response = await axios.put(`/events/${event.id}`,{}, { headers: headers })

      
    } catch (error) {

    }
  }
  return (
    <div>
      <h1>Event details</h1>
      <p>{event.title}</p>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Attendee limit: {event.attendee_limit}</p>
      {authenticated &&
        <button onClick={joinEvent}>
          Join event
        </button>
      }
    </div>
  )
}

export default EventDetails
