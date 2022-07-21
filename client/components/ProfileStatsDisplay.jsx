import React from 'react';

const ProfileStatsDisplay = props => {
    //TO DO CALCULATE APPROPRIATE STATS TO DISPLAY (DO WE NEED TO ACCESS STATE FROM HERE?)
const {userCurrentEvents, userPastEvents} = props;

    return (
        <div className = "ProfileStatsDisplay">
            Number of ongoing events: <p> {userCurrentEvents.length} </p>
            Number of past events: <p>{userPastEvents.length} </p>
        </div>
    )
}

export default ProfileStatsDisplay;