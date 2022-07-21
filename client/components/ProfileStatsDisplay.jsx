import React from 'react';
import '../css/styles.css'

const ProfileStatsDisplay = props => {
    //TO DO CALCULATE APPROPRIATE STATS TO DISPLAY (DO WE NEED TO ACCESS STATE FROM HERE?)
const {userCurrentEvents, userPastEvents} = props;

    return (
        <div className = "ProfileStatsDisplay">
            <div className="top">
                Number of ongoing events: <p> {userCurrentEvents.length} </p>
            </div> 
            <div className="bottom">
                Number of past events: <p>{userPastEvents.length} </p>
            </div> 
        </div>
    )
}

export default ProfileStatsDisplay;