import React from 'react';
import Event from './Event'

const ProfileCurrentEventsDisplay = props => {
    // TO DO: RENDER CURRENT EVENTS FROM PASSED DOWN PROPS

    const {userCurrentEvents} = props;

    if (!userCurrentEvents.length) return (
        <div>Sorry, no events planned yet!</div>
    );

    return (
        <div className = "EventsDisplay">
            {
                userCurrentEvents.map((event) => (
                    <Event event = {event}/>
                ))
            }
        </div>
    )
}

export default ProfileCurrentEventsDisplay;