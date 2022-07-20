import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import EventsContainer from './containers/EventsContainer';
import ProfileContainer from './containers/ProfileContainer'
import EventMaker from './components/EventMaker';
import LoginSignup from "./components/LoginSignup"

const App = () => {
  // NOTE: Do we need to store anything else from userTable besides ID?
  const [userID, setUserID] = useState('');
  /*
    loggedIn: a state that is used to check what to render in app: The LoginSignup Component Or our main App?
    loggedIn state is passed to the LoginSignup Component. It sets loggedIn to true on sucessful
    login or sign up. 
    
    userEvents: a state that is used to store all the user's events. This state is created at the top level so 
    both ProfileContainer and EventsMaker will have access to it. 
      ProfileContainer needs the userEvents state so that it can render all the events that a 
      user has made. 
      EventsMaker needs the setUserEvents state-setter-method to be able to update the 
      userEvents state once a new event is created.
  */
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  
  // TO DO MOVE THIS TO LOGIN/SIGN UP AS WELL AS PASS DOWN RELEVANT STATE
  const getUserEvents = async () => {
    try {
      const { data } = await axios.get('/');
      setUserEvents(data);
    } catch(err) {
      console.log('Sorry there was an error retrieving your events.');
    }
  } 
 
  //If logged in render Navbar and router
  if(true){
    return ( 
      <div className = "App">
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/me" element = {<ProfileContainer userEvents = {userEvents}/>}/>
                <Route path = "/findEvents" element = {<EventsContainer/>}/>
                <Route path = "/hostEvents" element = {<EventMaker/>}/>
            </Routes>
          </BrowserRouter>
      </div> )
  } // If not logged in render the LoginSignup component
  else {
    return (
      <div className = "App">
        <LoginSignup loggedIn={loggedIn} setLoggedin={setLoggedIn} />
      </div>
    )
  }
}

export default App;


