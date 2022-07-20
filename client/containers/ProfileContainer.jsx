import React, { useEffect } from 'react';
import axios from 'axios';
import ProfilePictureDisplay from '../components/ProfilePictureDisplay'
import ProfileStatsDisplay from '../components/ProfileStatsDisplay'
import ProfileCurrentEventsDisplay from '../components/ProfileCurrentEventsDisplay'
import ProfilePastEventsDisplay from '../components/ProfilePastEventsDisplay'

const ProfileContainer = props => {
  


  return (
    <div className = "ProfileContainer">
        <ProfilePictureDisplay/>
        <ProfileStatsDisplay/>
        <ProfileCurrentEventsDisplay/>
        <ProfilePastEventsDisplay/>
    </div>
  )
}

export default ProfileContainer;