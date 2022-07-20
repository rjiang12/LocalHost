import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from './components/Home';
import EventsContainer from './containers/EventsContainer';
import ProfileContainer from './containers/ProfileContainer'
import EventsMaker from './components/EventMaker';
import LoginSignup from "./components/LoginSignup"

const App = () => {
  // NOTE: Do we need to store anything from userTable?
  const [user, setUser] = useState('');
  // Store events in userEvents State
  const [userEvents, setUserEvents] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  
  //If logged in render Navbar and router
  if(loggedIn){
    return ( 
      <div className = "App">
          <Navbar/>
          <BrowserRouter>
            <Routes>
                <Route path = "/" component = {<Home/>}/>
                <Route path = "/events" component = {<EventsContainer/>}/>
                <Route path = "/profile" component = {<ProfileContainer/>}/>
                <Route path = "/makeevent" component = {<EventsMaker/>}/>
            </Routes>
          </BrowserRouter>
      </div> )
  } // If not logged in render the LoginSignup component
  else {
    return (
      <div className = "App">
        <LoginSignup />
      </div>
    )
  }
}

export default App;


