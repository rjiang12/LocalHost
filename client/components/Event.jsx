import React from 'react';
import '../css/event.css';

const Event = ({event}) => {


    return (
        <div className = "Event">
            <p>Activity: {event.title}</p>
            <p>Date: {event.date.slice(0, 10)}</p>
            <p>Start Time: {event.starttime}</p>
            <p>End Time: {event.endtime}</p>
            <p>Description: {event.description}</p>
        </div>
    )
}

export default Event;