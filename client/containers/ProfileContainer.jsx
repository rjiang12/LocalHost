import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProfilePictureDisplay from '../components/ProfilePictureDisplay'
import ProfileStatsDisplay from '../components/ProfileStatsDisplay'
import ProfileCurrentEventsDisplay from '../components/ProfileCurrentEventsDisplay'
import ProfilePastEventsDisplay from '../components/ProfilePastEventsDisplay'

const ProfileContainer = props => {
  const [userCurrentEvents, setUserCurrentEvents] = useState([]);
  const [userPastEvents, setUserPastEvents] = useState([]);

  const { userID, setUserID } = props;

  const getCurrentEvents = async () => {
    try {

      const { data } = await axios.post('/event/currentEvents', {user_id: document.cookie.slice(document.cookie.indexOf('=') + 1)});
      setUserCurrentEvents(data);
      console.log('currentevents:', data)
    } catch(err) {
      console.log('Sorry there was an error retrieving your current events.');
    }
  };

  const getPastEvents = async () => {
    try {

      const { data } = await axios.post('/event/pastEvents',  {user_id : document.cookie.slice(document.cookie.indexOf('=') + 1)});
      setUserPastEvents(data);
      console.log('pastevents: ', data);
    } catch(err) {
      console.log('Sorry there was an error retrieving your past events.');
    }
  }; 

  useEffect(() => {
    getCurrentEvents();
    getPastEvents();
  }, []);
  
  return (
    <div className = "ProfileContainer">
        <ProfilePictureDisplay/>
        <ProfileStatsDisplay userCurrentEvents={userCurrentEvents} userPastEvents={userPastEvents} setUserCurrentEvents={setUserCurrentEvents} setUserPastEvents={setUserPastEvents}/>
        <ProfileCurrentEventsDisplay userCurrentEvents={userCurrentEvents}/>
        <ProfilePastEventsDisplay userPastEvents={userPastEvents}/>
    </div>
  )
}

export default ProfileContainer;