<<<<<<< HEAD
import React from "react";
import EventsList from "./components/EventsList";


const App = () => {
  return (
    <>
      <div>
        <EventsList />
      </div>
    </>
  )
}

export default App;
=======
import React, {Component} from "react";
import EventsList from './components/EventsList'


class App extends Component {
  render (){
    return(
      <>
        <h1>BundleUp</h1>
        <EventsList/>
      </>
    )
  }
}

export default App


>>>>>>> 13884a6432806d5fa9979bc5b884d3c10656fed0
