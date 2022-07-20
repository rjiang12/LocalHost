import React from 'react';

const Event = ({event}) => {


    return (
        <div className = "Event">
            Activity: <p>{event.activity}</p>
            Date: <p>{event.date}</p>
            Start Time: <p>{event.startTime}</p>
            End Time: <p>{event.endTime}</p>
            Description: <p>{event.description}</p>
        </div>
    )
}

export default Event;