import React from 'react';
import ProfilePictureDisplay from './components/ProfilePictureDisplay'
import ProfileStatsDisplay from './components/ProfileStatsDisplay'
import ProfileCurrentEventsDisplay from './components/ProfileCurrentEventsDisplay'
import ProfilePastEventsDisplay from './components/ProfilePastEventsDisplay'

const ProfileContainer = () => {


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